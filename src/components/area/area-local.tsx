import Image from "next/image";
import {
  ArrowRight,
  BadgeDollarSign,
  CalendarDays,
  House,
  Info,
  MapPin,
  Ruler,
  type LucideIcon,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { TextLink } from "@/components/ui/text-link";
import {
  getAreaPagePath,
  type AreaPageData,
} from "@/data/areas";
import { LocalMap } from "./local-map";
import styles from "./area-local.module.css";

type AreaLocalProps = {
  area: AreaPageData;
};

type StatisticCard = {
  background: "blue" | "navy" | "purple" | "turquoise";
  icon: LucideIcon;
  label: string;
  supportingCopy: string;
  value: string;
};

const headingId = "local-area-heading";

export function AreaLocal({ area }: AreaLocalProps) {
  const statistics: readonly StatisticCard[] = [
    {
      label: "Median Sale Price",
      value: area.statistics.medianSalePrice,
      icon: BadgeDollarSign,
      background: "purple",
      supportingCopy:
        "See what homes are selling for across Cleveland and get a quick sense of the local market.",
    },
    {
      label: "Homes Sold",
      value: area.statistics.homesSold,
      icon: House,
      background: "navy",
      supportingCopy: "Recent sales activity across Cleveland.",
    },
    {
      label: "Median Price per Sq. Ft.",
      value: area.statistics.medianPricePerSquareFoot,
      icon: Ruler,
      background: "turquoise",
      supportingCopy: "Compare Cleveland home values by square foot.",
    },
    {
      label: "Median Days on Market",
      value: area.statistics.medianDaysOnMarket,
      icon: CalendarDays,
      background: "blue",
      supportingCopy:
        "See how long Cleveland homes typically stay on the market before selling.",
    },
  ];

  const statisticColumns = [statistics.slice(0, 2), statistics.slice(2)];

  return (
    <section
      className={`${styles.section} section-spacing system-lines-bg`}
      aria-labelledby={headingId}
    >
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.intro}>
          <SectionLabel icon={MapPin}>LOCAL EXPERTISE</SectionLabel>
          <h2 id={headingId} className={`${styles.heading} text-heading-2`}>
            {area.intro.headline}
          </h2>
          <p className={`${styles.introCopy} text-body-large`}>
            {area.intro.supportingCopy}
          </p>
        </div>

        <div className={styles.map}>
          <div className={styles.mapFrame}>
            <LocalMap
              areaName={area.city}
              embedUrl={area.googleMapsEmbedUrl}
            />
          </div>
          <p className={`${styles.mapNote} text-body-small`}>
            <Info aria-hidden="true" size={16} />
            <span>
              We buy houses throughout {area.city} and nearby cities.
            </span>
          </p>
        </div>

        <div className={styles.nearbyAreas}>
          <h3 className={`${styles.nearbyHeading} text-heading-3`}>
            CITIES WE KNOW.
            <br />
            MARKET WE BUY IN.
          </h3>

          <ul className={styles.nearbyGrid}>
            {area.nearbyCities.map((city) => (
              <li key={city.slug}>
                <a
                  className={`${styles.nearbyLink} text-body`}
                  href={getAreaPagePath(city.slug)}
                >
                  <MapPin aria-hidden="true" size={20} />
                  <span>{city.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <TextLink href="/areas-we-buy-in">
            See all areas we buy in
            <ArrowRight aria-hidden="true" size={20} />
          </TextLink>
        </div>

        <div className={styles.statistics}>
          <h3 className={`${styles.statisticsHeading} text-heading-3`}>
            {area.city} at a Glance
          </h3>

          <div className={styles.statisticColumns}>
            {statisticColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className={styles.statisticColumn}>
                {column.map((statistic) => {
                  const Icon = statistic.icon;

                  return (
                    <li
                      key={statistic.label}
                      className={`${styles.statisticCard} ${styles[statistic.background]}`}
                    >
                      <div className={styles.statisticTopRow}>
                        <Icon aria-hidden="true" size={20} />
                        <span
                          className={`${styles.statisticValue} text-heading-3`}
                        >
                          {statistic.value}
                        </span>
                      </div>
                      <span className={`${styles.statisticLabel} text-body`}>
                        {statistic.label}
                      </span>
                      <p
                        className={`${styles.statisticSupportingCopy} text-body-small`}
                      >
                        {statistic.supportingCopy}
                      </p>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>

          <p className={`${styles.dataSources} text-body-small`}>
            Data from{" "}
            <TextLink href={area.statistics.sourceUrl}>
              {area.statistics.sourceName}
            </TextLink>{" "}
            · Updated {area.statistics.dataPeriod}
          </p>
        </div>

        <figure className={styles.localMarket}>
          <div className={styles.marketPhotoFrame}>
            <Image
              className={styles.marketPhoto}
              src={area.localPhoto.src}
              alt={area.localPhoto.alt}
              fill
              sizes="(min-width: 1200px) 600px, (min-width: 768px) 50vw, 100vw"
            />
            <h3 className={`${styles.marketHeading} text-body`}>
              Local Knowledge.
              <br />
              Straightforward Offers.
            </h3>
          </div>
        </figure>
      </div>
    </section>
  );
}
