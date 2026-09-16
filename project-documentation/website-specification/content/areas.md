# Area Data

This document defines the approved city-specific content for the [shared Area Page specification](../area-page.md). The running site reads corresponding values from `src/data/areas.ts`.

Shared design, the trust card, and the local photograph remain defined in [area-page.md](../area-page.md).

## City List

These are the 20 approved City Pages. Every page uses the shared Area Page template. The homepage `/` also displays Cleveland.

| City | Canonical slug | Route |
|---|---|---|
| [Bedford](#bedford) | `bedford` | `/sell-your-house-fast-as-is-bedford` |
| [Bedford Heights](#bedford-heights) | `bedford-heights` | `/sell-your-house-fast-as-is-bedford-heights` |
| [Cleveland](#cleveland) | `cleveland` | `/sell-your-house-fast-as-is-cleveland` |
| [Cleveland Heights](#cleveland-heights) | `cleveland-heights` | `/sell-your-house-fast-as-is-cleveland-heights` |
| [Euclid](#euclid) | `euclid` | `/sell-your-house-fast-as-is-euclid` |
| [Garfield Heights](#garfield-heights) | `garfield-heights` | `/sell-your-house-fast-as-is-garfield-heights` |
| [Highland Heights](#highland-heights) | `highland-heights` | `/sell-your-house-fast-as-is-highland-heights` |
| [Independence](#independence) | `independence` | `/sell-your-house-fast-as-is-independence` |
| [Lyndhurst](#lyndhurst) | `lyndhurst` | `/sell-your-house-fast-as-is-lyndhurst` |
| [Maple Heights](#maple-heights) | `maple-heights` | `/sell-your-house-fast-as-is-maple-heights` |
| [Mayfield Heights](#mayfield-heights) | `mayfield-heights` | `/sell-your-house-fast-as-is-mayfield-heights` |
| [Mayfield Village](#mayfield-village) | `mayfield-village` | `/sell-your-house-fast-as-is-mayfield-village` |
| [Middleburg Heights](#middleburg-heights) | `middleburg-heights` | `/sell-your-house-fast-as-is-middleburg-heights` |
| [Parma](#parma) | `parma` | `/sell-your-house-fast-as-is-parma` |
| [Parma Heights](#parma-heights) | `parma-heights` | `/sell-your-house-fast-as-is-parma-heights` |
| [Richmond Heights](#richmond-heights) | `richmond-heights` | `/sell-your-house-fast-as-is-richmond-heights` |
| [Seven Hills](#seven-hills) | `seven-hills` | `/sell-your-house-fast-as-is-seven-hills` |
| [Solon](#solon) | `solon` | `/sell-your-house-fast-as-is-solon` |
| [South Euclid](#south-euclid) | `south-euclid` | `/sell-your-house-fast-as-is-south-euclid` |
| [University Heights](#university-heights) | `university-heights` | `/sell-your-house-fast-as-is-university-heights` |

## Shared City Content

* Local headline: `We Know {City}`.
* Local supporting copy for all cities except Cleveland: `Whether you’re selling a home you live in or a rental property, we look at its condition, your situation, and the local {City} market to prepare a straightforward as-is cash offer.`
* Cleveland retains: `Every local market has its own character. We understand the communities, housing landscape, and local factors that can shape a home sale in Cleveland.`
* Statistic supporting copy:
  * Median Sale Price: `See what homes are selling for across {City}.` Cleveland retains `See what homes are selling for across Cleveland and get a quick sense of the local market.`
  * Homes Sold: `Recent sales activity across {City}.`
  * Median Price per Sq. Ft.: `Compare {City} home values by square foot.`
  * Median Days on Market: `See how long {City} homes typically stay on the market before selling.`

## Maps

All cities except Cleveland and Euclid use `https://www.google.com/maps?q={encoded location}&output=embed`, with `encodeURIComponent` applied to `{City}, Ohio, USA`. Google determines the displayed location and zoom. Cleveland and Euclid retain their existing Share/embed URLs listed below. All maps use the existing iframe component and accessibility behavior.

## Statistics Methodology

Existing statistics use Redfin’s All Home Types city data researched on 15 September 2026. Bedford Heights, Highland Heights, Mayfield Heights, Mayfield Village, and Solon were verified on 16 September 2026. Read the precise median sale price, homes sold, and median days on market from the labeled trend statistics; read median price per square foot from the market overview. Do not substitute the Compete Score’s time-to-pending metric.

[Redfin’s methodology](https://www.redfin.com/news/data-center/methodology/) specifies rolling three-month windows for cities. The August snapshot therefore uses June–August 2026; Independence’s current trend/chart snapshot ends in July and uses May–July 2026. The generic page title must not override the period shown for the actual statistics. Values, source, and reporting period are updated together. The narrative’s monthly homes-sold wording is interpreted using this city methodology, consistent with the existing Euclid approach; these values have not been independently recalculated from raw sales records.

## Recommended Cities

Each city list below is the approved display order for the existing Nearby Areas section. Every entry must link to one of these 20 approved City Pages through its canonical slug. Each list must contain six unique cities and exclude itself. These are approved recommendations, not a claim that all six cities share a boundary. Retained recommendations preserve their relative order; replacements are selected by geographic proximity within the approved City List.

## Bedford

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/1289/OH/Bedford/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $144,904 |
| Homes Sold | 46 |
| Median Price per Sq. Ft. | $141/sq ft |
| Median Days on Market | 39 days |

**Map:** [Bedford, Ohio](https://www.google.com/maps?q=Bedford%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Maple Heights](#maple-heights) — `maple-heights`
2. [Garfield Heights](#garfield-heights) — `garfield-heights`
3. [Independence](#independence) — `independence`
4. [Bedford Heights](#bedford-heights) — `bedford-heights`
5. [Solon](#solon) — `solon`
6. [Seven Hills](#seven-hills) — `seven-hills`

## Bedford Heights

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/1304/OH/Bedford-Heights/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $196,870 |
| Homes Sold | 23 |
| Median Price per Sq. Ft. | $182/sq ft |
| Median Days on Market | 33 days |

**Map:** [Bedford Heights, Ohio](https://www.google.com/maps?q=Bedford%20Heights%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Bedford](#bedford) — `bedford`
2. [Solon](#solon) — `solon`
3. [Maple Heights](#maple-heights) — `maple-heights`
4. [Garfield Heights](#garfield-heights) — `garfield-heights`
5. [Independence](#independence) — `independence`
6. [University Heights](#university-heights) — `university-heights`

## Cleveland

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/4145/OH/Cleveland/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $149,901 |
| Homes Sold | 1,179 |
| Median Price per Sq. Ft. | $100/sq ft |
| Median Days on Market | 32 days |

**Map:** [Cleveland, Ohio](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191251.91240052145!2d-81.70586405!3d41.497532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ef2ee3686b2d%3A0xed04cb55f7621842!2sCleveland%2C%20OH%2C%20USA!5e0!3m2!1sen!2sil!4v1788783140965!5m2!1sen!2sil)

**Recommended cities, in order:**

1. [Cleveland Heights](#cleveland-heights) — `cleveland-heights`
2. [Euclid](#euclid) — `euclid`
3. [Parma](#parma) — `parma`
4. [Garfield Heights](#garfield-heights) — `garfield-heights`
5. [Independence](#independence) — `independence`
6. [Seven Hills](#seven-hills) — `seven-hills`

## Cleveland Heights

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/4153/OH/Cleveland-Heights/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $256,081 |
| Homes Sold | 205 |
| Median Price per Sq. Ft. | $130/sq ft |
| Median Days on Market | 27 days |

**Map:** [Cleveland Heights, Ohio](https://www.google.com/maps?q=Cleveland%20Heights%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Cleveland](#cleveland) — `cleveland`
2. [University Heights](#university-heights) — `university-heights`
3. [South Euclid](#south-euclid) — `south-euclid`
4. [Lyndhurst](#lyndhurst) — `lyndhurst`
5. [Richmond Heights](#richmond-heights) — `richmond-heights`
6. [Euclid](#euclid) — `euclid`

## Euclid

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/6612/OH/Euclid/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $167,889 |
| Homes Sold | 171 |
| Median Price per Sq. Ft. | $113/sq ft |
| Median Days on Market | 30 days |

**Map:** [Euclid, Ohio](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47744.50783599262!2d-81.56199711803099!3d41.59019609607561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830fe5dbe9c8b3b%3A0x57cade33d51809cd!2sEuclid%2C%20OH%2C%20USA!5e0!3m2!1sen!2sca!4v1748013566014!5m2!1sen!2sca)

**Embed source:** [IIP Management — Euclid](https://www.iip-management.com/euclid-property-management/)

**Recommended cities, in order:**

1. [Cleveland](#cleveland) — `cleveland`
2. [South Euclid](#south-euclid) — `south-euclid`
3. [Richmond Heights](#richmond-heights) — `richmond-heights`
4. [Lyndhurst](#lyndhurst) — `lyndhurst`
5. [Cleveland Heights](#cleveland-heights) — `cleveland-heights`
6. [Highland Heights](#highland-heights) — `highland-heights`

## Garfield Heights

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/7498/OH/Garfield-Heights/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $153,898 |
| Homes Sold | 91 |
| Median Price per Sq. Ft. | $127/sq ft |
| Median Days on Market | 26 days |

**Map:** [Garfield Heights, Ohio](https://www.google.com/maps?q=Garfield%20Heights%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Cleveland](#cleveland) — `cleveland`
2. [Maple Heights](#maple-heights) — `maple-heights`
3. [Bedford](#bedford) — `bedford`
4. [Independence](#independence) — `independence`
5. [Seven Hills](#seven-hills) — `seven-hills`
6. [Parma](#parma) — `parma`

## Highland Heights

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/8967/OH/Highland-Heights/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $543,141 |
| Homes Sold | 37 |
| Median Price per Sq. Ft. | $201/sq ft |
| Median Days on Market | 16 days |

**Map:** [Highland Heights, Ohio](https://www.google.com/maps?q=Highland%20Heights%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Mayfield Village](#mayfield-village) — `mayfield-village`
2. [Richmond Heights](#richmond-heights) — `richmond-heights`
3. [Mayfield Heights](#mayfield-heights) — `mayfield-heights`
4. [Lyndhurst](#lyndhurst) — `lyndhurst`
5. [South Euclid](#south-euclid) — `south-euclid`
6. [Euclid](#euclid) — `euclid`

## Independence

**Data period:** May–July 2026

**Source:** [Redfin](https://www.redfin.com/city/9463/OH/Independence/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $459,720 |
| Homes Sold | 12 |
| Median Price per Sq. Ft. | $258/sq ft |
| Median Days on Market | 29 days |

**Map:** [Independence, Ohio](https://www.google.com/maps?q=Independence%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Seven Hills](#seven-hills) — `seven-hills`
2. [Garfield Heights](#garfield-heights) — `garfield-heights`
3. [Parma](#parma) — `parma`
4. [Bedford](#bedford) — `bedford`
5. [Maple Heights](#maple-heights) — `maple-heights`
6. [Parma Heights](#parma-heights) — `parma-heights`

## Lyndhurst

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/11615/OH/Lyndhurst/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $259,828 |
| Homes Sold | 81 |
| Median Price per Sq. Ft. | $153/sq ft |
| Median Days on Market | 21 days |

**Map:** [Lyndhurst, Ohio](https://www.google.com/maps?q=Lyndhurst%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [South Euclid](#south-euclid) — `south-euclid`
2. [Richmond Heights](#richmond-heights) — `richmond-heights`
3. [University Heights](#university-heights) — `university-heights`
4. [Cleveland Heights](#cleveland-heights) — `cleveland-heights`
5. [Mayfield Heights](#mayfield-heights) — `mayfield-heights`
6. [Highland Heights](#highland-heights) — `highland-heights`

## Maple Heights

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/12086/OH/Maple-Heights/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $153,898 |
| Homes Sold | 77 |
| Median Price per Sq. Ft. | $107/sq ft |
| Median Days on Market | 32 days |

**Map:** [Maple Heights, Ohio](https://www.google.com/maps?q=Maple%20Heights%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Garfield Heights](#garfield-heights) — `garfield-heights`
2. [Bedford](#bedford) — `bedford`
3. [Independence](#independence) — `independence`
4. [Cleveland](#cleveland) — `cleveland`
5. [Parma](#parma) — `parma`
6. [Parma Heights](#parma-heights) — `parma-heights`

## Mayfield Heights

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/12397/OH/Mayfield-Heights/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $274,818 |
| Homes Sold | 75 |
| Median Price per Sq. Ft. | $163/sq ft |
| Median Days on Market | 22 days |

**Map:** [Mayfield Heights, Ohio](https://www.google.com/maps?q=Mayfield%20Heights%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Mayfield Village](#mayfield-village) — `mayfield-village`
2. [Lyndhurst](#lyndhurst) — `lyndhurst`
3. [Highland Heights](#highland-heights) — `highland-heights`
4. [South Euclid](#south-euclid) — `south-euclid`
5. [Richmond Heights](#richmond-heights) — `richmond-heights`
6. [University Heights](#university-heights) — `university-heights`

## Mayfield Village

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/12388/OH/Mayfield/housing-market) (listed by Redfin as Mayfield, OH)

| Statistic | Value |
|---|---|
| Median Sale Price | $414,726 |
| Homes Sold | 14 |
| Median Price per Sq. Ft. | $242/sq ft |
| Median Days on Market | 37 days |

**Map:** [Mayfield Village, Ohio](https://www.google.com/maps?q=Mayfield%20Village%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Highland Heights](#highland-heights) — `highland-heights`
2. [Mayfield Heights](#mayfield-heights) — `mayfield-heights`
3. [Lyndhurst](#lyndhurst) — `lyndhurst`
4. [Richmond Heights](#richmond-heights) — `richmond-heights`
5. [South Euclid](#south-euclid) — `south-euclid`
6. [Euclid](#euclid) — `euclid`

## Middleburg Heights

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/12733/OH/Middleburg-Heights/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $312,693 |
| Homes Sold | 55 |
| Median Price per Sq. Ft. | $177/sq ft |
| Median Days on Market | 8 days |

**Map:** [Middleburg Heights, Ohio](https://www.google.com/maps?q=Middleburg%20Heights%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Parma Heights](#parma-heights) — `parma-heights`
2. [Parma](#parma) — `parma`
3. [Seven Hills](#seven-hills) — `seven-hills`
4. [Independence](#independence) — `independence`
5. [Cleveland](#cleveland) — `cleveland`
6. [Garfield Heights](#garfield-heights) — `garfield-heights`

## Parma

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/15701/OH/Parma/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $231,847 |
| Homes Sold | 294 |
| Median Price per Sq. Ft. | $173/sq ft |
| Median Days on Market | 10 days |

**Map:** [Parma, Ohio](https://www.google.com/maps?q=Parma%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Parma Heights](#parma-heights) — `parma-heights`
2. [Seven Hills](#seven-hills) — `seven-hills`
3. [Independence](#independence) — `independence`
4. [Middleburg Heights](#middleburg-heights) — `middleburg-heights`
5. [Cleveland](#cleveland) — `cleveland`
6. [Garfield Heights](#garfield-heights) — `garfield-heights`

## Parma Heights

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/15711/OH/Parma-Heights/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $247,336 |
| Homes Sold | 64 |
| Median Price per Sq. Ft. | $199/sq ft |
| Median Days on Market | 9 days |

**Map:** [Parma Heights, Ohio](https://www.google.com/maps?q=Parma%20Heights%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Parma](#parma) — `parma`
2. [Middleburg Heights](#middleburg-heights) — `middleburg-heights`
3. [Seven Hills](#seven-hills) — `seven-hills`
4. [Independence](#independence) — `independence`
5. [Cleveland](#cleveland) — `cleveland`
6. [Garfield Heights](#garfield-heights) — `garfield-heights`

## Richmond Heights

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/17125/OH/Richmond-Heights/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $277,816 |
| Homes Sold | 31 |
| Median Price per Sq. Ft. | $135/sq ft |
| Median Days on Market | 30 days |

**Map:** [Richmond Heights, Ohio](https://www.google.com/maps?q=Richmond%20Heights%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [South Euclid](#south-euclid) — `south-euclid`
2. [Lyndhurst](#lyndhurst) — `lyndhurst`
3. [Euclid](#euclid) — `euclid`
4. [Cleveland Heights](#cleveland-heights) — `cleveland-heights`
5. [University Heights](#university-heights) — `university-heights`
6. [Highland Heights](#highland-heights) — `highland-heights`

## Seven Hills

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/18238/OH/Seven-Hills/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $336,277 |
| Homes Sold | 49 |
| Median Price per Sq. Ft. | $190/sq ft |
| Median Days on Market | 9 days |

**Map:** [Seven Hills, Ohio](https://www.google.com/maps?q=Seven%20Hills%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Parma](#parma) — `parma`
2. [Independence](#independence) — `independence`
3. [Garfield Heights](#garfield-heights) — `garfield-heights`
4. [Parma Heights](#parma-heights) — `parma-heights`
5. [Middleburg Heights](#middleburg-heights) — `middleburg-heights`
6. [Cleveland](#cleveland) — `cleveland`

## Solon

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/18593/OH/Solon/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $509,663 |
| Homes Sold | 80 |
| Median Price per Sq. Ft. | $208/sq ft |
| Median Days on Market | 29 days |

**Map:** [Solon, Ohio](https://www.google.com/maps?q=Solon%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Bedford Heights](#bedford-heights) — `bedford-heights`
2. [Bedford](#bedford) — `bedford`
3. [Maple Heights](#maple-heights) — `maple-heights`
4. [Garfield Heights](#garfield-heights) — `garfield-heights`
5. [University Heights](#university-heights) — `university-heights`
6. [Mayfield Heights](#mayfield-heights) — `mayfield-heights`

## South Euclid

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/18673/OH/South-Euclid/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $199,868 |
| Homes Sold | 101 |
| Median Price per Sq. Ft. | $125/sq ft |
| Median Days on Market | 22 days |

**Map:** [South Euclid, Ohio](https://www.google.com/maps?q=South%20Euclid%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Cleveland Heights](#cleveland-heights) — `cleveland-heights`
2. [University Heights](#university-heights) — `university-heights`
3. [Lyndhurst](#lyndhurst) — `lyndhurst`
4. [Richmond Heights](#richmond-heights) — `richmond-heights`
5. [Euclid](#euclid) — `euclid`
6. [Mayfield Heights](#mayfield-heights) — `mayfield-heights`

## University Heights

**Data period:** June–August 2026

**Source:** [Redfin](https://www.redfin.com/city/19865/OH/University-Heights/housing-market)

| Statistic | Value |
|---|---|
| Median Sale Price | $308,546 |
| Homes Sold | 74 |
| Median Price per Sq. Ft. | $191/sq ft |
| Median Days on Market | 18 days |

**Map:** [University Heights, Ohio](https://www.google.com/maps?q=University%20Heights%2C%20Ohio%2C%20USA&output=embed)

**Recommended cities, in order:**

1. [Cleveland Heights](#cleveland-heights) — `cleveland-heights`
2. [South Euclid](#south-euclid) — `south-euclid`
3. [Lyndhurst](#lyndhurst) — `lyndhurst`
4. [Mayfield Heights](#mayfield-heights) — `mayfield-heights`
5. [Richmond Heights](#richmond-heights) — `richmond-heights`
6. [Highland Heights](#highland-heights) — `highland-heights`
