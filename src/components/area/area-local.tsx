import {
  ArrowRight,
  BadgeDollarSign,
  CalendarDays,
  House,
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
  size: "short" | "tall";
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
      size: "tall",
    },
    {
      label: "Homes Sold",
      value: area.statistics.homesSold,
      icon: House,
      background: "navy",
      size: "short",
    },
    {
      label: "Median Price per Sq. Ft.",
      value: area.statistics.medianPricePerSquareFoot,
      icon: Ruler,
      background: "turquoise",
      size: "short",
    },
    {
      label: "Median Days on Market",
      value: area.statistics.medianDaysOnMarket,
      icon: CalendarDays,
      background: "blue",
      size: "tall",
    },
  ];

  const statisticColumns = [statistics.slice(0, 2), statistics.slice(2)];

  return (
    <section
      className={`${styles.section} section-spacing system-lines-bg`}
      aria-labelledby={headingId}
    >
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.leftFlow}>
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
            <LocalMap
              areaName={area.city}
              embedUrl={area.googleMapsEmbedUrl}
            />
          </div>

          <div className={styles.statistics}>
            <div className={styles.statisticColumns}>
              {statisticColumns.map((column, columnIndex) => (
                <ul key={columnIndex} className={styles.statisticColumn}>
                  {column.map((statistic) => {
                    const Icon = statistic.icon;

                    return (
                      <li
                        key={statistic.label}
                        className={`${styles.statisticCard} ${styles[statistic.background]} ${styles[statistic.size]}`}
                      >
                        <Icon aria-hidden="true" size={20} />
                        <span className={`${styles.statisticValue} text-heading-3`}>
                          {statistic.value}
                        </span>
                        <span className={`${styles.statisticLabel} text-body-small`}>
                          {statistic.label}
                        </span>
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
        </div>

        <div className={styles.rightFlow}>
          <div className={styles.nearbyAreas}>
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

          <div className={styles.localMarket}>
            <h3 className={`${styles.marketHeading} text-heading-3`}>
              {area.localMarket.headline}
            </h3>
            <p className={`${styles.marketCopy} text-body`}>
              {area.localMarket.supportingCopy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
