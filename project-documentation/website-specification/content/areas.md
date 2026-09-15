# Area Data

This document defines the approved city-specific content for the [shared Area Page specification](../area-page.md). The running site reads the corresponding values from `src/data/areas.ts`; this Markdown file is documentation, not a runtime data source.

Shared content templates, the trust card, and the shared local photograph remain in [area-page.md](../area-page.md).

## City List

| City | Canonical slug | Route | Status |
|---|---|---|---|
| [Cleveland](#cleveland) | `cleveland` | `/sell-your-house-fast-as-is-cleveland` | Implemented |
| [Euclid](#euclid) | `euclid` | `/sell-your-house-fast-as-is-euclid` | Implemented |

The existing `/` page also displays Cleveland. Nearby-city entries below define link destinations; they do not approve or create additional Area Pages.

## Cleveland

### Local Section Introduction

**Primary Headline:** We Know Cleveland

**Supporting Copy:** Every local market has its own character. We understand the communities, housing landscape, and local factors that can shape a home sale in Cleveland.

### Map

**Location:** Cleveland, Ohio

**Google Maps embed URL:**

```text
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191251.91240052145!2d-81.70586405!3d41.497532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ef2ee3686b2d%3A0xed04cb55f7621842!2sCleveland%2C%20OH%2C%20USA!5e0!3m2!1sen!2sil!4v1788783140965!5m2!1sen!2sil
```

### Market Statistics

**Data period:** July 2026

**Source:** [Redfin](https://www.redfin.com/city/4145/OH/Cleveland/housing-market)

| Statistic | Value | Supporting Copy |
|---|---|---|
| Median Sale Price | $149,925 | See what homes are selling for across Cleveland and get a quick sense of the local market. |
| Homes Sold | 1,202 | Recent sales activity across Cleveland. |
| Median Price per Sq. Ft. | $100/sq ft | Compare Cleveland home values by square foot. |
| Median Days on Market | 33 days | See how long Cleveland homes typically stay on the market before selling. |

### Nearby Cities

| Order | City | Canonical slug |
|---|---|---|
| 1 | Lakewood | `lakewood` |
| 2 | Cleveland Heights | `cleveland-heights` |
| 3 | Euclid | `euclid` |
| 4 | Parma | `parma` |
| 5 | Shaker Heights | `shaker-heights` |
| 6 | Garfield Heights | `garfield-heights` |

## Euclid

### Local Section Introduction

**Primary Headline:** We Know Euclid

**Supporting Copy:** Whether you’re selling a home you live in or a rental property, we look at its condition, your situation, and the local Euclid market to prepare a straightforward as-is cash offer.

### Map

**Location:** Euclid, Ohio

**Google Maps embed URL:**

```text
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47744.50783599262!2d-81.56199711803099!3d41.59019609607561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830fe5dbe9c8b3b%3A0x57cade33d51809cd!2sEuclid%2C%20OH%2C%20USA!5e0!3m2!1sen!2sca!4v1748013566014!5m2!1sen!2sca
```

**Embed source:** [IIP Management — Euclid](https://www.iip-management.com/euclid-property-management/)

### Market Statistics

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/6612/OH/Euclid/housing-market)

| Statistic | Value | Supporting Copy |
|---|---|---|
| Median Sale Price | $167,889 | See what homes are selling for across Euclid. |
| Homes Sold | 171 | Recent sales activity across Euclid. |
| Median Price per Sq. Ft. | $113/sq ft | Compare Euclid home values by square foot. |
| Median Days on Market | 30 days | See how long Euclid homes typically stay on the market before selling. |

**Period interpretation:** Redfin labels the snapshot August 2026 and describes three-month figures. Its methodology specifies rolling three-month windows for city data: https://www.redfin.com/news/data-center/methodology/. The explicit period is June–August 2026; do not describe the sales count as August-only.

### Nearby Cities

| Order | City | Canonical slug |
|---|---|---|
| 1 | Cleveland | `cleveland` |
| 2 | South Euclid | `south-euclid` |
| 3 | Richmond Heights | `richmond-heights` |
| 4 | Willoughby Hills | `willoughby-hills` |
| 5 | Wickliffe | `wickliffe` |
| 6 | Willowick | `willowick` |

These six cities border Euclid. Geographic source: [City of Euclid planning materials](https://s3.countyplanning.us/wp-content/uploads/2018/06/Euc_Survey_Results-Report.pdf).
