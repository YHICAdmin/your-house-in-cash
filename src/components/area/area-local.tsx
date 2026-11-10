import Image from "next/image";
import {
  ArrowRight,
  BadgeDollarSign,
  CalendarDays,
  House,
  Info,
  MapPin,
  MessageCircle,
  Ruler,
  type LucideIcon,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { TextLink } from "@/components/ui/text-link";
import { ContentTable } from "@/components/ui/content-table";
import { IconContainer } from "@/components/ui/icon-container";
import {
  areas,
  getAreaPagePath,
  type AreaPageData,
} from "@/data/areas";
import {
  AnimatedStatisticValue,
  StatisticsAnimation,
} from "./animated-statistic-value";
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
  const activeAreaSlugs = new Set(areas.map((activeArea) => activeArea.slug));
  const nearbyCities = area.nearbyCities.filter((city) => activeAreaSlugs.has(city.slug));
  const statistics: readonly StatisticCard[] = area.statistics ? [
    {
      label: "Median Sale Price",
      value: area.statistics.medianSalePrice,
      icon: BadgeDollarSign,
      background: "purple",
      supportingCopy: area.statistics.supportingCopy.medianSalePrice,
    },
    {
      label: "Homes Sold",
      value: area.statistics.homesSold,
      icon: House,
      background: "navy",
      supportingCopy: area.statistics.supportingCopy.homesSold,
    },
    {
      label: "Median Price per Sq. Ft.",
      value: area.statistics.medianPricePerSquareFoot,
      icon: Ruler,
      background: "turquoise",
      supportingCopy: area.statistics.supportingCopy.medianPricePerSquareFoot,
    },
    {
      label: "Median Days on Market",
      value: area.statistics.medianDaysOnMarket,
      icon: CalendarDays,
      background: "blue",
      supportingCopy: area.statistics.supportingCopy.medianDaysOnMarket,
    },
  ] : [];

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
            {nearbyCities.map((city) => (
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

        {area.statistics && <div className={styles.statistics}>
          <h3 className={`${styles.statisticsHeading} text-heading-3`}>
            {area.city} at a Glance
          </h3>

          <StatisticsAnimation>
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
                          <AnimatedStatisticValue value={statistic.value} />
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
          </StatisticsAnimation>

          <p className={`${styles.dataSources} text-body-small`}>
            Data from{" "}
            <TextLink href={area.statistics.sourceUrl}>
              {area.statistics.sourceName}
            </TextLink>{" "}
            · Updated {area.statistics.dataPeriod}
          </p>
        </div>}

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
          {area.localPhoto.attributionRequired && (
            <figcaption className={`${styles.marketCredit} text-body-small`}>
              Photo by {area.localPhoto.photographer} via{" "}
              <a href={area.localPhoto.sourceUrl} target="_blank" rel="noreferrer">
                Wikimedia Commons
              </a>{" "}
              (
              <a href={area.localPhoto.licenseUrl} target="_blank" rel="noreferrer">
                {area.localPhoto.license}
              </a>
              )
            </figcaption>
          )}
        </figure>

        {area.posInspection && <section className={styles.posInspection} aria-labelledby="pos-inspection-heading">
          <h3 id="pos-inspection-heading" className={`${styles.posHeading} text-heading-3`}>
            Point-of-Sale Inspections in {area.city}
          </h3>
          <div className={styles.posAnswer}>
            <p className={`${styles.posAnswerHeading} text-body`}>The Short Answer</p>
            <p className="text-body">{area.posInspection.shortAnswer}</p>
          </div>
          {area.posInspection.status === "required" && area.posInspection.tableRows && (
            <ContentTable
              longText
              labelledBy="pos-inspection-heading"
              columns={["Seller question", `${area.city} requirements`]}
              rows={area.posInspection.tableRows.map((row) => [row.question, row.requirement])}
            />
          )}
          <p className={`${styles.posSources} text-body-small`}>
            Official sources: {area.posInspection.sources.map((source, index) => (
              <span key={source.url}>
                {index > 0 && " · "}
                <TextLink href={source.url}>{source.label}</TextLink>
              </span>
            ))} · Checked {area.posInspection.verifiedDate}
          </p>
          {area.posInspection.status === "required" && <div className={styles.posCta}>
            <IconContainer aria-hidden="true" icon={MessageCircle} />
            <div>
              <p className={`${styles.posCtaHeading} text-body`}>Questions about selling with POS requirements?</p>
              <p className="text-body">We’re happy to talk through your situation and help you understand your options.</p>
              <TextLink href="/get-cash-offer">Get My Cash Offer <ArrowRight aria-hidden="true" size={20} /></TextLink>
            </div>
          </div>}
        </section>}
      </div>
    </section>
  );
}
