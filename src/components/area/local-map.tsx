"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import styles from "./area-local.module.css";

type FeatureStyleOptions = {
  fillColor: string;
  fillOpacity: number;
  strokeColor: string;
  strokeOpacity: number;
  strokeWeight: number;
};

type FeatureLayer = {
  isAvailable: boolean;
  style:
    | ((options: { feature: { placeId?: string } }) =>
        | FeatureStyleOptions
        | null)
    | null;
};

type GoogleMap = {
  fitBounds: (bounds: unknown, padding: number) => void;
  getFeatureLayer: (featureType: unknown) => FeatureLayer;
};

type MapsLibrary = {
  Map: new (
    element: HTMLElement,
    options: Record<string, unknown>,
  ) => GoogleMap;
};

type GeocoderResult = {
  geometry: {
    viewport?: unknown;
  };
};

type GeocodingLibrary = {
  Geocoder: new () => {
    geocode: (request: { placeId: string }) => Promise<{
      results: GeocoderResult[];
    }>;
  };
};

type GoogleMapsApi = {
  maps: {
    FeatureType: {
      LOCALITY: unknown;
    };
    importLibrary: (library: string) => Promise<unknown>;
  };
};

declare global {
  interface Window {
    google?: GoogleMapsApi;
  }
}

type LocalMapProps = {
  areaName: string;
  placeId: string;
};

const scriptId = "google-maps-javascript-api";

export function LocalMap({ areaName, placeId }: LocalMapProps) {
  const mapElementRef = useRef<HTMLDivElement>(null);
  const [isScriptReady, setIsScriptReady] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

  useEffect(() => {
    if (!apiKey || !mapId) {
      return;
    }

    if (!isScriptReady || !mapElementRef.current) {
      return;
    }

    let isCancelled = false;

    async function initializeMap() {
      const mapsApi = window.google?.maps;

      if (!mapsApi || !mapElementRef.current) {
        throw new Error("Google Maps failed to initialize.");
      }

      const [mapsLibrary, geocodingLibrary] = await Promise.all([
        mapsApi.importLibrary("maps") as Promise<MapsLibrary>,
        mapsApi.importLibrary("geocoding") as Promise<GeocodingLibrary>,
      ]);
      const geocoder = new geocodingLibrary.Geocoder();
      const { results } = await geocoder.geocode({ placeId });
      const viewport = results[0]?.geometry.viewport;

      if (!viewport || isCancelled || !mapElementRef.current) {
        throw new Error("The locality viewport is unavailable.");
      }

      const map = new mapsLibrary.Map(mapElementRef.current, {
        clickableIcons: false,
        fullscreenControl: false,
        gestureHandling: "cooperative",
        keyboardShortcuts: true,
        mapId,
        mapTypeControl: false,
        rotateControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: true,
      });
      const localityLayer = map.getFeatureLayer(
        mapsApi.FeatureType.LOCALITY,
      );

      if (!localityLayer.isAvailable) {
        throw new Error("The locality boundary layer is unavailable.");
      }

      localityLayer.style = ({ feature }) =>
        feature.placeId === placeId
          ? {
              fillColor: "#eaf3ec",
              fillOpacity: 0.35,
              strokeColor: "#4a8755",
              strokeOpacity: 1,
              strokeWeight: 2,
            }
          : null;

      const viewportPadding = window.matchMedia("(min-width: 768px)")
        .matches
        ? 24
        : 16;
      map.fitBounds(viewport, viewportPadding);
    }

    void initializeMap().catch(() => {
      if (!isCancelled) {
        setIsUnavailable(true);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [apiKey, isScriptReady, mapId, placeId]);

  if (isUnavailable || !apiKey || !mapId) {
    return (
      <div className={styles.mapUnavailable}>
        <p className="text-body">
          Map of {areaName} is temporarily unavailable.
        </p>
      </div>
    );
  }

  return (
    <>
      <Script
        id={scriptId}
        src={`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly`}
        onError={() => setIsUnavailable(true)}
        onLoad={() => setIsScriptReady(true)}
        onReady={() => setIsScriptReady(true)}
      />
      <div
        ref={mapElementRef}
        className={styles.mapCanvas}
        aria-label={`Interactive map of ${areaName}`}
      />
    </>
  );
}
