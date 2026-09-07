import styles from "./area-local.module.css";

type LocalMapProps = {
  areaName: string;
  embedUrl: string;
};

export function LocalMap({ areaName, embedUrl }: LocalMapProps) {
  return (
    <iframe
      className={styles.mapCanvas}
      src={embedUrl}
      title={`Interactive map of ${areaName}`}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
