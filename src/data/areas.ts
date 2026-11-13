export type NearbyCity = {
  name: string;
  slug: string;
};

export type AreaStatistics = {
  dataPeriod: string;
  medianDaysOnMarket: string;
  medianPricePerSquareFoot: string;
  medianSalePrice: string;
  homesSold: string;
  sourceName: string;
  sourceUrl: string;
  supportingCopy: {
    medianSalePrice: string;
    homesSold: string;
    medianPricePerSquareFoot: string;
    medianDaysOnMarket: string;
  };
};

export type AreaPageData = {
  city: string;
  dealStory?: LocalDealStory;
  googleMapsEmbedUrl: string;
  intro: {
    headline: string;
    supportingCopy: string;
    link?: {
      href: string;
      matchText?: string;
      text: string;
    };
  };
  nearbyCities: readonly NearbyCity[];
  localPhoto: LocalPhoto;
  posInspection?: PosInspection;
  slug: string;
  statistics?: AreaStatistics;
};

export type LocalDealStory = {
  address: string;
  image: {
    alt: string;
    src: string;
  };
  summary: string;
  terms: readonly string[];
  title: string;
};

export type PosInspection = {
  shortAnswer: string;
  sources: readonly {
    label: string;
    url: string;
  }[];
  status: "not-required" | "required";
  tableRows?: readonly {
    question: string;
    requirement: string;
  }[];
  verifiedDate: string;
};

export type LocalPhoto = {
  alt: string;
  attributionRequired: boolean;
  license: string;
  licenseUrl?: string;
  photographer: string;
  sourceUrl: string;
  src: string;
  title: string;
};

export function getAreaPagePath(citySlug: string) {
  if (citySlug === "cleveland") return "/";
  return `/sell-your-house-fast-as-is-${citySlug}`;
}

const localPhotos: Record<string, LocalPhoto> = {
  bedford: { src: "/images/local-area/bedford.jpg", alt: "Bedford Historic District in Bedford, Ohio", title: "Bedford Historic District, Bedford, Ohio", photographer: "Bennett-ne", sourceUrl: "https://commons.wikimedia.org/wiki/File:Bedford_Historic_District,_Bedford,_Ohio.JPG", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "bedford-heights": { src: "/images/local-area/bedford-heights.jpg", alt: "Cleveland Holocaust Memorial in Bedford Heights, Ohio", title: "Holocaust Memorial Cleveland Ohio", photographer: "Arnold H Berger", sourceUrl: "https://commons.wikimedia.org/wiki/File:Holmem-scene-large.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  cleveland: { src: "/images/local-area/cleveland.jpg", alt: "Cleveland skyline viewed from Lakewood Park", title: "Cleveland skyline from Lakewood Park, January 2026", photographer: "Erik Drost", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cleveland_skyline_from_Lakewood_Park,_January_2026.jpg", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", attributionRequired: true },
  "cleveland-heights": { src: "/images/local-area/cleveland-heights.jpg", alt: "Taylor Tudors building in Cleveland Heights, Ohio", title: "North building - Taylor Tudors", photographer: "Tim Evanson", sourceUrl: "https://commons.wikimedia.org/wiki/File:North_building_-_Taylor_Tudors.jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", attributionRequired: true },
  euclid: { src: "/images/local-area/euclid.jpg", alt: "Old City Hall in Euclid, Ohio", title: "Euclid (Ohio) - Old City Hall", photographer: "stu_spivack", sourceUrl: "https://commons.wikimedia.org/wiki/File:Euclid_(Ohio)_-_Old_City_Hall.jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", attributionRequired: true },
  "garfield-heights": { src: "/images/local-area/garfield-heights.jpg", alt: "Garfield Heights City Hall and Civic Center", title: "Garfield Heights city hall", photographer: "AJHalliwell", sourceUrl: "https://commons.wikimedia.org/wiki/File:Garfield_Heights_city_hall.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  independence: { src: "/images/local-area/independence.jpg", alt: "Independence Presbyterian Church in Independence, Ohio", title: "Independence Presbyterian Church", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Independence_Presbyterian_Church.jpg", license: "Public domain", attributionRequired: false },
  lyndhurst: { src: "/images/local-area/lyndhurst.jpg", alt: "Old Euclid District 4 Schoolhouse in Lyndhurst, Ohio", title: "Old Euclid District 4 Schoolhouse in Lyndhurst", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Old_Euclid_District_4_Schoolhouse_in_Lyndhurst.jpg", license: "Public domain", attributionRequired: false },
  "maple-heights": { src: "/images/local-area/maple-heights.jpg", alt: "Homes on Vine Street in Maple Heights, Ohio", title: "Southern end of Vine Street, Maple Heights", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Southern_end_of_Vine_Street,_Maple_Heights.jpg", license: "Public domain", attributionRequired: false },
  "mayfield-heights": { src: "/images/local-area/mayfield-heights.jpg", alt: "Mayfield Heights City Hall", title: "Mayfield City Hall - panoramio", photographer: "mil199", sourceUrl: "https://commons.wikimedia.org/wiki/File:Mayfield_City_Hall_-_panoramio.jpg", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", attributionRequired: true },
  "mayfield-village": { src: "/images/local-area/mayfield-village.jpg", alt: "Old Center School in Mayfield, Ohio", title: "Old Center School in Mayfield", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Old_Center_School_in_Mayfield.jpg", license: "Public domain", attributionRequired: false },
  "middleburg-heights": { src: "/images/local-area/middleburg-heights.jpg", alt: "Municipal Center flower displays and City Hall in Middleburg Heights", title: "Middleburg Heights 9-14-24 combined IMG 7312", photographer: "SilentMatt Psychedelic", sourceUrl: "https://commons.wikimedia.org/wiki/File:Middleburg_Heights_9-14-24_combined_IMG_7312.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", attributionRequired: true },
  parma: { src: "/images/local-area/parma.png", alt: "Cleveland skyline viewed from State Road in Parma, Ohio", title: "Parma, OH - Cleveland Skyline from State Rd", photographer: "JSmetana", sourceUrl: "https://commons.wikimedia.org/wiki/File:Parma,_OH_-_Cleveland_Skyline_from_State_Rd.png", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "parma-heights": { src: "/images/local-area/parma-heights.jpg", alt: "Robert W. Henry House in Parma Heights, Ohio", title: "Robert W. Henry House, Parma Heights", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Robert_W._Henry_House,_Parma_Heights.jpg", license: "Public domain", attributionRequired: false },
  "richmond-heights": { src: "/images/local-area/richmond-heights.jpg", alt: "Main house at Greenwood Farm in Richmond Heights, Ohio", title: "The main house at Greenwood Farm", photographer: "RHOhio", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_main_house_at_Greenwood_Farm.JPG", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "seven-hills": { src: "/images/local-area/seven-hills.jpg", alt: "John Froelich House in Seven Hills, Ohio", title: "John Froelich House", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Froelich_House.jpg", license: "Public domain", attributionRequired: false },
  solon: { src: "/images/local-area/solon.jpg", alt: "Solon City Hall in Solon, Ohio", title: "SolonCityHall", photographer: "Mayor Pez", sourceUrl: "https://commons.wikimedia.org/wiki/File:SolonCityHall.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "south-euclid": { src: "/images/local-area/south-euclid.jpg", alt: "South Euclid War Memorial", title: "South Euclid War Memorial 2", photographer: "User:THD3", sourceUrl: "https://commons.wikimedia.org/wiki/File:South_Euclid_War_Memorial_2.jpg", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", attributionRequired: true },
  "university-heights": { src: "/images/local-area/university-heights.jpg", alt: "Saint Ignatius Hall at John Carroll University in University Heights", title: "Administration Building (Saint Ignatius Hall), John Carroll University, University Heights, OH", photographer: "w_lemay", sourceUrl: "https://commons.wikimedia.org/wiki/File:Administration_Building_(Saint_Ignatius_Hall),_John_Carroll_University,_University_Heights,_OH.jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", attributionRequired: true },
};

Object.assign(localPhotos, {
  "bay-village": { src: "/images/local-area/bay-village.jpg", alt: "Huntington Beach in Bay Village with Cleveland in the distance", title: "Huntington Beach With Downtown Cleveland In Background", photographer: "Heather McLaughlin", sourceUrl: "https://commons.wikimedia.org/wiki/File:Huntington_Beach_With_Downtown_Cleveland_In_Background.jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", attributionRequired: true },
  beachwood: { src: "/images/local-area/beachwood.jpg", alt: "Beachwood water tower", title: "Beachwood water tower", photographer: "Nick22aku", sourceUrl: "https://commons.wikimedia.org/wiki/File:Beachwood_water_tower.jpg", license: "Public domain", attributionRequired: false },
  berea: { src: "/images/local-area/berea.jpg", alt: "Downtown Berea, Ohio", title: "Berea OH", photographer: "Geoffrey.landis", sourceUrl: "https://commons.wikimedia.org/wiki/File:Berea_OH.jpg", license: "CC BY-SA 1.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/1.0", attributionRequired: true },
  "broadview-heights": { src: "/images/local-area/broadview-heights.jpg", alt: "View across Broadview Heights", title: "City of Broadview Heights, Ohio", photographer: "Highvolt", sourceUrl: "https://commons.wikimedia.org/wiki/File:City_of_Broadview_Heights,_Ohio_from_Broadview_Commons_Shopping_Center,_June_2014.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "brook-park": { src: "/images/local-area/brook-park.jpg", alt: "Homes along Richard Drive in Brook Park, Ohio", title: "Richard from Smith, Brook Park", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Richard_from_Smith,_Brook_Park.jpg", license: "Public domain", attributionRequired: false },
  brooklyn: { src: "/images/local-area/brooklyn.jpg", alt: "Welcome sign in Brooklyn, Ohio", title: "Brooklyn Welcome Sign", photographer: "Vaultguy999", sourceUrl: "https://commons.wikimedia.org/wiki/File:BrooklynWelcomeSign.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", attributionRequired: true },
  "brooklyn-heights": { src: "/images/local-area/brooklyn-heights.jpg", alt: "Brooklyn Heights, Ohio", title: "Brooklyn Heights", photographer: "SilentMatt Psychedelic", sourceUrl: "https://commons.wikimedia.org/wiki/File:Brooklyn_Heights(8)9-15-24_thumbnail_IMG_7510.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", attributionRequired: true },
  "chagrin-falls": { src: "/images/local-area/chagrin-falls.jpg", alt: "Chagrin Falls waterfall and bridge", title: "Chagrin Falls, Ohio", photographer: "Paul Sableman", sourceUrl: "https://commons.wikimedia.org/wiki/File:Chagrin_Falls,_Ohio.jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", attributionRequired: true },
  "east-cleveland": { src: "/images/local-area/east-cleveland.jpg", alt: "East Cleveland City Hall", title: "East Cleveland City Hall", photographer: "Greg", sourceUrl: "https://commons.wikimedia.org/wiki/File:East_Cleveland_City_Hall.jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", attributionRequired: true },
  "fairview-park": { src: "/images/local-area/fairview-park.jpg", alt: "Bain Cabin in Fairview Park", title: "Fairview Park Bain Cabin", photographer: "Vinceye", sourceUrl: "https://commons.wikimedia.org/wiki/File:Fairview_Park_Bain_Cabin.jpg", license: "CC0", attributionRequired: false },
  lakewood: { src: "/images/local-area/lakewood.jpg", alt: "Lakewood Downtown Historic District", title: "Lakewood Downtown Historic District", photographer: "Catsmeowmeow", sourceUrl: "https://commons.wikimedia.org/wiki/File:OH_Cuyahoga_Lakewood_Downtown_Historic_District_016.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", attributionRequired: true },
  "north-olmsted": { src: "/images/local-area/north-olmsted.jpg", alt: "North Olmsted Old Town Hall", title: "North Olmsted Old Town Hall", photographer: "Ameike", sourceUrl: "https://commons.wikimedia.org/wiki/File:North_Olmsted_Old_Town_Hall.JPG", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "north-royalton": { src: "/images/local-area/north-royalton.jpg", alt: "John M. Annis House in North Royalton", title: "John M. Annis House", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:John_M._Annis_House.jpg", license: "Public domain", attributionRequired: false },
  "olmsted-falls": { src: "/images/local-area/olmsted-falls.jpg", alt: "Grand Pacific Hotel in Olmsted Falls", title: "Grand Pacific Hotel in Olmsted Falls", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Grand_Pacific_Hotel_in_Olmsted_Falls.jpg", license: "Public domain", attributionRequired: false },
  "orange-village": { src: "/images/local-area/orange-village.jpg", alt: "Orange Village, Ohio", title: "Orange Village", photographer: "SilentMatt Psychedelic", sourceUrl: "https://commons.wikimedia.org/wiki/File:Orange_8-3-25_thumbnail_IMG_1.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", attributionRequired: true },
  "pepper-pike": { src: "/images/local-area/pepper-pike.jpg", alt: "Horses in Pepper Pike", title: "Pepper Pike Horses", photographer: "Hannah Wolfe", sourceUrl: "https://commons.wikimedia.org/wiki/File:Pepper_Pike_Horses.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "rocky-river": { src: "/images/local-area/rocky-river.jpg", alt: "Aerial view of Rocky River, Ohio", title: "Rocky River Ohio aerial view", photographer: "Ken Winters, U.S. Army Corps of Engineers", sourceUrl: "https://commons.wikimedia.org/wiki/File:Rocky_River_Ohio_aerial_view.jpg", license: "Public domain", attributionRequired: false },
  "shaker-heights": { src: "/images/local-area/shaker-heights.jpg", alt: "Homes in Shaker Heights", title: "Shaker Heights Houses", photographer: "Spencer", sourceUrl: "https://commons.wikimedia.org/wiki/File:Shaker_Heights_Houses.jpg", license: "CC BY-SA 2.5", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5", attributionRequired: true },
  strongsville: { src: "/images/local-area/strongsville.jpg", alt: "Strong House in Strongsville", title: "Strong House", photographer: "Chris Light", sourceUrl: "https://commons.wikimedia.org/wiki/File:Strong_House_2.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "valley-view": { src: "/images/local-area/valley-view.jpg", alt: "Wilson's Mill near Valley View", title: "Wilson's Mill", photographer: "Frank John Aleksandrowicz", sourceUrl: "https://commons.wikimedia.org/wiki/File:WILSON%27S_MILL,_FORMERLY_KNOWN_AS_ALEXANDER%27S_MILL,_ON_THE_OHIO-ERIE_CANAL_SOUTH_OF_ALEXANDER_ROAD_NEAR_VALLEY_VIEW..._-_NARA_-_558001.jpg", license: "Public domain", attributionRequired: false },
  "warrensville-heights": { src: "/images/local-area/warrensville-heights.jpg", alt: "Warrensville Heights Town Center", title: "Warrensville Heights Town Center Project", photographer: "Ohio Redevelopment Projects - ODSA", sourceUrl: "https://commons.wikimedia.org/wiki/File:Warrensville_Heights-Town_Center_Project_(CORF).jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", attributionRequired: true },
  westlake: { src: "/images/local-area/westlake.jpg", alt: "Westlake Porter Public Library", title: "Westlake Porter Public Library", photographer: "Kulshrax", sourceUrl: "https://commons.wikimedia.org/wiki/File:Westlake_Porter_Public_Library.jpg", license: "Public domain", attributionRequired: false },
} satisfies Record<string, LocalPhoto>);

export const defaultLocalPhoto = localPhotos.cleveland;

type AreaRecord = Pick<AreaPageData, "city" | "slug" | "nearbyCities" | "posInspection"> & {
  dealStory?: LocalDealStory;
  statistics?: Omit<AreaStatistics, "supportingCopy">;
  googleMapsEmbedUrl?: string;
  introLink?: AreaPageData["intro"]["link"];
  introSupportingCopy?: string;
};

const approvedIntroSupportingCopy: Record<string, string> = {
  bedford: "Forty-six homes sold in Bedford between July and September 2026, and the median time on market was 34 days. That means a traditional listing can still require patience, especially if the house needs repairs or preparation before it is ready to show. We can evaluate the home as it stands and give you a clear cash offer to compare with listing it.",
  "bedford-heights": "Selling a home in Bedford Heights involves both a Point-of-Sale inspection and an occupancy permit before title can transfer. If the inspection identifies work, the City’s escrow process may affect your timeline and closing plans. We can help you compare the cost and effort of handling those requirements with an as-is cash offer.",
  lyndhurst: "Seventy-eight homes sold in Lyndhurst between July and September 2026, with a median time on market of 22 days. Local averages are a useful starting point, but a home’s condition and the updates it needs can make a meaningful difference in the result. We can give you a clear cash offer for the property as it stands, so you can compare your options.",
  "mayfield-heights": "Mayfield Heights requires a Point-of-Sale inspection before selling a house, although condominiums and cluster homes may be exempt when the owner is not responsible for exterior maintenance. Knowing which rules apply to your property can affect the work and timing involved before closing. We can evaluate the house as it is and give you a cash offer to compare with preparing it for a traditional sale.",
  "mayfield-village": "Mayfield Village does not have a general Point-of-Sale inspection for a home sale, but properties with septic systems need a County Certificate of Inspection before transfer. If your property has septic, that requirement is worth understanding before you set a closing timeline. We can give you a clear as-is offer and help you compare a direct sale with your other options.",
  "middleburg-heights": "Homes in Middleburg Heights sold in a median of 13 days between July and September 2026. A faster local market can make listing attractive, but it does not remove the cost and work of repairs, cleaning, showings, and uncertainty around the final offer. We can give you a straightforward cash offer so you can compare both paths.",
  "richmond-heights": "Richmond Heights does not call its transfer review a Point-of-Sale inspection, but the City requires a no-cost exterior home inspection before a transfer. That gives sellers a local step to account for before closing, even when no interior inspection is required. We can evaluate the property as it stands and provide a cash offer to compare with a traditional sale.",
  "seven-hills": "In Seven Hills, a home with a septic system needs a current County septic-system evaluation before it can be transferred. If the property uses septic, that requirement can affect your sale timeline and the work you may need to plan for. We can give you an as-is cash offer to compare with repairing, listing, and selling the home traditionally.",
  solon: "Solon does not require a Point-of-Sale inspection for a typical home sale. That can simplify the City side of a transaction, but sellers still need to decide whether preparing the house for the market is worth the time and expense. We can evaluate the home in its current condition and give you a clear cash offer to compare.",
  "south-euclid": "South Euclid does not require a general Point-of-Sale inspection for an occupied home sale, but a vacant property must be registered and inspected before title can transfer. If the house is empty, that requirement can add another step before closing. We can give you an as-is offer and help you compare a direct sale with preparing the home for the market.",
  "university-heights": "University Heights requires a Point-of-Sale inspection before title can transfer. A buyer may assume unresolved violations through the City’s required paperwork, which can change whether you repair the house before selling or sell it as-is. We understand that decision and can give you a clear cash offer to compare with your other sale options.",
  "bay-village": "Bay Village does not publish a general Point-of-Sale inspection requirement, but a vacant building must be inspected by the City before a sale agreement is signed. If the inspection identifies violations, repairs or escrow can affect the timing of the sale. We can evaluate the home as it stands and give you a cash offer to compare.",
  berea: "Berea does not require a Point-of-Sale inspection for this type of home sale, and homes sold in a median of nine days in the latest local snapshot. A quick market may make a traditional listing appealing, but it is still worth comparing that route with the work needed to get the house ready. We can provide a clear as-is cash offer for that comparison.",
  beachwood: "Only 34 homes sold in Beachwood between July and September 2026, and the median time on market was 48 days. With fewer sales and a longer selling period, the best plan can depend heavily on the specific house, its condition, and the buyer it attracts. We can evaluate your home as it stands and give you a cash offer to compare with listing.",
  "broadview-heights": "Broadview Heights does not have a general Point-of-Sale inspection requirement, but homes with septic systems are subject to the City’s septic inspection ordinance. If your property uses septic, that is a local requirement to factor into your timing and repair decisions. We can give you a clear cash offer to compare with the traditional-sale process.",
  "brook-park": "Brook Park requires a Point-of-Sale inspection when you sell a home, and the City advises scheduling early because the inspection is valid for six months. Planning the inspection early can help avoid making it a last-minute closing issue. We can evaluate the house as it is and give you a cash offer to compare with repairing and listing it.",
  brooklyn: "Brooklyn homes sold in a median of 14 days between July and September 2026. That suggests active buyer interest, but the condition of your house still affects how much time and money you may need to spend before it is ready to list. We can give you a straightforward cash offer, so you can compare a direct sale with a traditional listing.",
  "brooklyn-heights": "Brooklyn Heights requires a Certificate of Inspection before an owner sells or transfers improved residential property. The buyer must receive a current certificate before the sale or transfer, so it is a process worth starting early. We can evaluate the property as it stands and give you a clear cash offer to compare.",
  "chagrin-falls": "Only 24 homes sold in Chagrin Falls between July and September 2026, with a median sale price of $542,742. In a smaller market, broad averages may not say much about a particular home’s value or the time it will take to sell. We can give you a clear as-is offer to compare with the uncertainty of listing.",
  "east-cleveland": "East Cleveland requires a Certificate of Use, Occupancy, and Inspection before a property can be transferred. If violations remain, a buyer can accept responsibility through the City’s affidavit and must complete the corrections within six months after the sale. We can evaluate the house as it stands and give you an as-is cash offer to compare with a traditional sale.",
  "fairview-park": "Fifty-five homes sold in Fairview Park between July and September 2026, with a median time on market of 12 days. A faster market can make listing worthwhile, but it does not eliminate the time and expense of getting a house ready for buyers. We can give you a clear cash offer so you can compare both paths.",
  lakewood: "Lakewood requires a Point-of-Sale inspection before selling a non-owner-occupied residential rental property, while owner-occupied homes are treated differently. For rental owners, that inspection can affect whether another lease term, repairs, or a sale makes the most sense. We can evaluate the property as it is and provide a clear cash offer to compare.",
  "north-olmsted": "North Olmsted does not require a Point-of-Sale inspection for this type of sale, but the City encourages buyers to review a property’s permit, citation, and inspection history. Being prepared for those questions can matter when deciding whether to repair, list, or sell as-is. We can evaluate the home in its current condition and give you a cash offer to compare.",
  "north-royalton": "One hundred twenty-one homes sold in North Royalton between July and September 2026, with a median time on market of 19 days. The market data provides useful context, but the condition of your house and the work needed before listing can still shape the best path forward. We can give you a cash offer to compare with preparing the home for sale.",
  "olmsted-falls": "Fifty-three homes sold in Olmsted Falls between July and September 2026, with a median time on market of 27 days. That gives sellers a local benchmark, but it does not answer whether repairs and listing preparation are worthwhile for a particular home. We can evaluate your house as it stands and give you a clear cash offer to compare.",
  "orange-village": "Orange Village requires a Point-of-Sale inspection before a home is sold. The process includes checking smoke and carbon-monoxide detectors and, when applicable, septic or well systems. We can evaluate the property as it is and give you an as-is cash offer to compare with the work and timing involved in a traditional sale.",
  "pepper-pike": "Thirty-seven homes sold in Pepper Pike between June and August 2026, with a median sale price of $847,000. That local figure is useful context, but it does not determine what any individual home will sell for or how long a listing will take. We can evaluate the house as it stands and provide a clear cash offer to compare.",
  "rocky-river": "Eighty-nine homes sold in Rocky River between July and September 2026, with a median time on market of 18 days. Those numbers show an active local market, but sellers still need to weigh the potential upside of listing against the cost and work of getting a house ready. We can give you a straightforward cash offer for that comparison.",
  "shaker-heights": "Shaker Heights requires a Point-of-Sale inspection before a seller enters into a residential sale contract. When violations remain, the City can require an escrow equal to 150% of an approved repair estimate. That makes the cost and timing of repairs a meaningful part of the selling decision. We can give you an as-is cash offer to compare with a traditional sale.",
  strongsville: "One hundred ninety homes sold in Strongsville between July and September 2026, with a median time on market of 17 days. A market with steady activity may make listing appealing, but preparing a home for buyers still has costs and tradeoffs. We can evaluate the property as it stands and give you a clear cash offer to compare.",
  "valley-view": "Valley View’s latest market snapshot included only two recorded home sales. With such a small number of recent sales, citywide averages are limited guidance for what a particular house may bring. We can look at the property itself and provide a clear cash offer to compare with listing it.",
  "warrensville-heights": "Warrensville Heights requires a Point-of-Sale Certificate of Inspection before an owner agrees to sell or transfer property. When violations remain, the City’s escrow and buyer-acknowledgement requirements need to be completed before closing. We can give you an as-is cash offer to compare with the repairs, paperwork, and time involved in a traditional sale.",
  westlake: "One hundred forty homes sold in Westlake between July and September 2026, with a median time on market of 17 days. Those figures offer useful local context, but they do not tell you whether investing in repairs before listing will pay off for your particular house. We can evaluate the property as it stands and give you a clear cash offer to compare.",
};

function createArea(record: AreaRecord): AreaPageData {
  const { city } = record;
  return {
    ...record,
    localPhoto: localPhotos[record.slug] ?? defaultLocalPhoto,
    googleMapsEmbedUrl: record.googleMapsEmbedUrl ??
      `https://www.google.com/maps?q=${encodeURIComponent(`${city}, Ohio, USA`)}&output=embed`,
    intro: {
      headline: `We Know ${city}`,
      supportingCopy: record.introSupportingCopy ?? approvedIntroSupportingCopy[record.slug] ?? (city === "Cleveland"
        ? "Every local market has its own character. We understand the communities, housing landscape, and local factors that can shape a home sale in Cleveland."
        : `Whether you’re selling a home you live in or a rental property, we look at its condition, your situation, and the local ${city} market to prepare a straightforward as-is cash offer.`),
      link: record.introLink,
    },
    statistics: record.statistics && {
      ...record.statistics,
      supportingCopy: {
        medianSalePrice: city === "Cleveland"
          ? "See what homes are selling for across Cleveland and get a quick sense of the local market."
          : `See what homes are selling for across ${city}.`,
        homesSold: `Recent sales activity across ${city}.`,
        medianPricePerSquareFoot: `Compare ${city} home values by square foot.`,
        medianDaysOnMarket: `See how long ${city} homes typically stay on the market before selling.`,
      },
    },
  };
}

// Verified Redfin snapshots and the approved recommendation mapping are documented
// in project-documentation/website-specification/content/areas.md.
const bedfordArea = createArea({
  city: "Bedford",
  slug: "bedford",
  statistics: {
    medianSalePrice: "$164,921",
    homesSold: "46",
    medianPricePerSquareFoot: "$159/sq ft",
    medianDaysOnMarket: "34 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/1289/OH/Bedford/housing-market"
  },
  nearbyCities: [
    {
      "name": "Maple Heights",
      "slug": "maple-heights"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Bedford Heights",
      "slug": "bedford-heights"
    },
    {
      "name": "Solon",
      "slug": "solon"
    },
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    }
  ]
});

const bedfordHeightsArea = createArea({
  "city": "Bedford Heights",
  "slug": "bedford-heights",
  posInspection: {
    status: "required",
    shortAnswer: "A Point-of-Sale inspection and occupancy permit are required before a home can be occupied or title transferred. A sale can close with violations still outstanding only after the City accepts the required escrow.",
    tableRows: [
      { question: "When is it required?", requirement: "Before entering an agreement to sell or transfer. The seller must give the buyer a Certificate of Inspection or Compliance issued within the previous 90 days." },
      { question: "What does it cost?", requirement: "$150, including the sewer dye test. The application offers exterior-only or interior-and-exterior inspection with owner consent." },
      { question: "What does the City inspect?", requirement: "A visual interior and exterior inspection, or exterior only if selected. The dye test confirms proper sewer connections." },
      { question: "Can the sale close with violations?", requirement: "Yes. The seller must submit written repair estimates for City approval and deposit at least $100 and 100% of the approved estimate with a bank or title company." },
      { question: "How do I apply?", requirement: "Submit the City’s Point-of-Sale Inspection application to the Building Department and select the inspection type." },
    ],
    sources: [
      { label: "City of Bedford Heights: Point of Sale Inspections and Application (PDF)", url: "https://cms5.revize.com/revize/bedfordheightsoh/PDF%20Files/Fillable%20Forms/ResidentialPropertyInspections-POS-2021.pdf" },
      { label: "City of Bedford Heights Code: Pre-Sale Inspections", url: "https://codelibrary.amlegal.com/codes/bedfordhts/latest/bedfordhts_oh/0-0-0-59754" },
    ],
    verifiedDate: "November 12, 2026",
  },
  "statistics": {
    "medianSalePrice": "$199,905",
    "homesSold": "23",
    "medianPricePerSquareFoot": "$171/sq ft",
    "medianDaysOnMarket": "33 days",
    "dataPeriod": "July–September 2026",
    "sourceName": "Redfin",
    "sourceUrl": "https://www.redfin.com/city/1304/OH/Bedford-Heights/housing-market"
  },
  "nearbyCities": [
    {
      "name": "Bedford",
      "slug": "bedford"
    },
    {
      "name": "Solon",
      "slug": "solon"
    },
    {
      "name": "Maple Heights",
      "slug": "maple-heights"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    }
  ]
});

export const clevelandArea = createArea({
  city: "Cleveland",
  slug: "cleveland",
  introSupportingCopy: "Cleveland is a big city, and selling a home in Old Brooklyn can be very different from selling one in Tremont, Collinwood, or West Park. Home values, property conditions, and buyer demand can vary from neighborhood to neighborhood—and sometimes from one block to the next. We take those local differences into account when we evaluate a house, helping you understand what an as-is sale could look like and decide what makes sense for your situation.",
  posInspection: {
    status: "not-required",
    shortAnswer: "Cleveland does not require a general point-of-sale inspection for a residential home sale. A $60 Certificate of Disclosure is required before a voluntary transfer of one- to four-unit residential property; it reports City records and is not a POS inspection. Vacant one- to three-unit homes no longer need a City pre-sale inspection, but all vacant structures must still be registered with the City.",
    sources: [
      {
        label: "City of Cleveland: Certificates of Disclosure",
        url: "https://www.clevelandohio.gov/city-hall/departments/building-housing/divisions/records-administration/certificates-disclosure",
      },
      {
        label: "City of Cleveland: Vacant Properties",
        url: "https://www.clevelandohio.gov/residents/codes-ordinances/residents-first/vacant-properties",
      },
    ],
    verifiedDate: "November 12, 2026",
  },
  statistics: {
    medianSalePrice: "$149,929",
    homesSold: "1,116",
    medianPricePerSquareFoot: "$92/sq ft",
    medianDaysOnMarket: "32 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/4145/OH/Cleveland/housing-market"
  },
  nearbyCities: [
    {
      "name": "Cleveland Heights",
      "slug": "cleveland-heights"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    },
    {
      "name": "Parma",
      "slug": "parma"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    }
  ],
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191251.91240052145!2d-81.70586405!3d41.497532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ef2ee3686b2d%3A0xed04cb55f7621842!2sCleveland%2C%20OH%2C%20USA!5e0!3m2!1sen!2sil!4v1788783140965!5m2!1sen!2sil"
});

const clevelandHeightsArea = createArea({
  city: "Cleveland Heights",
  slug: "cleveland-heights",
  introSupportingCopy: "In Cleveland Heights, sellers need a Point-of-Sale Certificate of Inspection before entering into a sale agreement. If the report includes unresolved Class A violations, the City may require at least 125% of its estimated repair cost to be held in escrow before the sale can close. That can make the cost of fixing the house before listing an important part of the decision. We can give you an as-is cash offer to compare with the repairs, escrow, and time involved in a traditional sale.",
  posInspection: {
    status: "required",
    shortAnswer: "The seller must obtain a Point-of-Sale Certificate of Inspection before entering into a sale agreement. A sale can close with unresolved Class A violations when the required escrow and purchaser acknowledgement are in place.",
    tableRows: [
      { question: "When is it required?", requirement: "Before entering into an agreement to sell any residential or commercial property. The Certificate of Inspection is valid for one year from issuance." },
      { question: "What does it cost?", requirement: "$200 for the first unit and $50 for each additional unit." },
      { question: "What happens if there are violations?", requirement: "The buyer may assume violations. Uncorrected Class A violations require escrow of at least $1,000 and 125% of the City’s estimated repair cost before title transfer." },
      { question: "What paperwork is required?", requirement: "The seller must give the buyer the Certificate of Inspection and Certificate of Compliance, if available. A purchaser-signed Acknowledgement Form must be provided to Housing Inspections before title transfer." },
      { question: "How do I apply?", requirement: "Apply and schedule through the City’s online portal, or submit an application through Housing Inspections." },
    ],
    sources: [
      { label: "City of Cleveland Heights: Point-of-Sale Inspections", url: "https://www.clevelandheights.gov/205/Point-of-Sale-Inspections" },
      { label: "City of Cleveland Heights: Escrow Requirements", url: "https://www.clevelandheights.gov/209/Escrow-Requirements" },
    ],
    verifiedDate: "November 10, 2026",
  },
  statistics: {
    medianSalePrice: "$243,661",
    homesSold: "183",
    medianPricePerSquareFoot: "$133/sq ft",
    medianDaysOnMarket: "28 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/4153/OH/Cleveland-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    },
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    }
  ]
});

export const euclidArea = createArea({
  city: "Euclid",
  slug: "euclid",
  introSupportingCopy: "In Euclid, a Point-of-Sale Certificate of Code Compliance is required before a seller enters into an agreement to sell a home. If the inspection finds violations, a buyer can assume them, but the repairs must be completed within six months. That can affect whether you put money into the house before listing or look for a buyer prepared to take it as-is. We understand Euclid’s process and can give you a clear cash offer to compare with your other options.",
  posInspection: {
    status: "required",
    shortAnswer: "Euclid requires a Point-of-Sale application and Certificate of Code Compliance before a seller enters into an agreement to sell a dwelling. A purchaser may assume cited violations through the City’s process and must correct them within six months.",
    tableRows: [
      { question: "When is it required?", requirement: "Before entering into an agreement to sell or otherwise convey a dwelling. The Certificate of Code Compliance is valid for six months." },
      { question: "What does it cost?", requirement: "$225 for the Point-of-Sale application. For a dwelling structure with more than three units, there is an additional $35 fee per dwelling unit. Qualifying senior homeowners receiving the Cuyahoga County homestead exemption pay $100." },
      { question: "What happens if there are violations?", requirement: "A purchaser may assume the cited violations by submitting the City’s Assumption Application. The responsible party must correct all assumed violations within six months and the City schedules a reinspection." },
      { question: "What does the assumption process cost?", requirement: "The City’s Assumption Application has a $150 non-refundable fee." },
      { question: "How do I apply?", requirement: "Submit the Point-of-Sale Inspection Application and, when applicable, the Assumption Application to the City Building and Housing Department." },
    ],
    sources: [
      { label: "Euclid Code: Sales of Dwellings; Certificate Required", url: "https://codelibrary.amlegal.com/codes/euclid/latest/euclid_oh/0-0-0-20339" },
      { label: "Euclid Code: Point-of-Sale Fees", url: "https://codelibrary.amlegal.com/codes/euclid/latest/euclid_oh/0-0-0-20352" },
      { label: "City of Euclid: All Forms and Permits", url: "https://www.cityofeuclid.gov/allformsandpermits" },
      { label: "City of Euclid: Assumption Application (PDF)", url: "https://irp.cdn-website.com/83d949c5/files/uploaded/Assumption-Application-fillable.pdf" },
    ],
    verifiedDate: "November 13, 2026",
  },
  statistics: {
    medianSalePrice: "$172,168",
    homesSold: "150",
    medianPricePerSquareFoot: "$119/sq ft",
    medianDaysOnMarket: "34 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/6612/OH/Euclid/housing-market"
  },
  nearbyCities: [
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Cleveland Heights",
      "slug": "cleveland-heights"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    }
  ],
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47744.50783599262!2d-81.56199711803099!3d41.59019609607561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830fe5dbe9c8b3b%3A0x57cade33d51809cd!2sEuclid%2C%20OH%2C%20USA!5e0!3m2!1sen!2sca!4v1748013566014!5m2!1sen!2sca"
});

const garfieldHeightsArea = createArea({
  city: "Garfield Heights",
  slug: "garfield-heights",
  dealStory: {
    title: "A flexible sale for a dated Garfield Heights home",
    address: "Wadsworth Ave, Garfield Heights",
    image: {
      src: "/images/deal-stories/wadsworth-avenue-garfield-heights.jpg",
      alt: "Dated house on Wadsworth Avenue in Garfield Heights",
    },
    summary: "This dated Garfield Heights home sold for $87K on the seller’s timeline. With a house full of belongings to sort through, the seller needed a 60-day closing—and we were able to make it happen.",
    terms: [
      "Sale price: $87K",
      "60-day closing timeline",
      "Dated house",
      "The seller didn’t have to handle the POS violations",
    ],
  },
  introSupportingCopy: "If you’re selling a house in Garfield Heights, the Point-of-Sale inspection is one of the first things to plan for. The City requires a current certificate before you enter into a sale agreement, and unresolved violations may require escrow before title transfers. We buy Garfield Heights houses as-is, so you can compare a cash offer with the cost, time, and uncertainty of preparing the property for a traditional sale.",
  posInspection: {
    status: "required",
    shortAnswer: "A Point-of-Sale inspection and a current Certificate of Inspection or Compliance are required before entering into an agreement to sell. A buyer can assume outstanding violations through the City’s required forms, but the current code requires escrow for uncorrected violations before title transfers.",
    tableRows: [
      { question: "When is it required?", requirement: "For all structures being sold, transferred, or otherwise conveyed. Before entering into a sale agreement, present the buyer with a Certificate of Inspection or Compliance issued within the previous year." },
      { question: "What does the City inspect?", requirement: "The City inspects the exterior. An interior inspection requires the City’s consent form." },
      { question: "Can the sale close with violations?", requirement: "Yes, if the buyer assumes the violations through the City’s notarized Affidavit and the required escrow is established. The current code requires at least $100 and 110% of the estimated repair cost in escrow for all remaining violations before title transfer." },
      { question: "What paperwork is required?", requirement: "The buyer must submit a notarized Buyer’s Acknowledgement Form. If violations are assumed, a notarized Affidavit is also required before the Compliance Certificate is issued." },
      { question: "How do I apply?", requirement: "Use the City’s current Point-of-Sale application and submit the required forms to the Building Department." },
    ],
    sources: [
      { label: "City of Garfield Heights: Point-of-Sale Inspections", url: "https://garfieldhts.org/168/Point-of-Sale-Inspections" },
      { label: "City of Garfield Heights: Buyer Affidavit (PDF)", url: "https://garfieldhts.org/DocumentCenter/View/2867/Affidavit-PDF-updated-8-12-2024" },
      { label: "Garfield Heights Code: Certificate of Inspection Required", url: "https://codelibrary.amlegal.com/codes/garfieldhts/latest/garfieldhts_oh/0-0-0-34739" },
      { label: "Garfield Heights Code: Required Use of Certificate of Inspection", url: "https://codelibrary.amlegal.com/codes/garfieldhts/latest/garfieldhts_oh/0-0-0-34809" },
    ],
    verifiedDate: "November 13, 2026",
  },
  statistics: {
    medianSalePrice: "$151,028",
    homesSold: "87",
    medianPricePerSquareFoot: "$115/sq ft",
    medianDaysOnMarket: "22 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/7498/OH/Garfield-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "Maple Heights",
      "slug": "maple-heights"
    },
    {
      "name": "Bedford",
      "slug": "bedford"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    },
    {
      "name": "Parma",
      "slug": "parma"
    }
  ]
});

const independenceArea = createArea({
  city: "Independence",
  slug: "independence",
  introSupportingCopy: "Only 12 homes sold in Independence between July and September 2026, with a median sale price of $432,244. When relatively few homes sell, a citywide average can tell you only so much about what a particular house may bring; its condition, location, and buyer interest matter more. We can evaluate your home as it is and give you a clear cash offer to compare with the time and uncertainty of listing it.",
  statistics: {
    medianSalePrice: "$432,244",
    homesSold: "12",
    medianPricePerSquareFoot: "$196/sq ft",
    medianDaysOnMarket: "32 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/9463/OH/Independence/housing-market"
  },
  nearbyCities: [
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "Parma",
      "slug": "parma"
    },
    {
      "name": "Bedford",
      "slug": "bedford"
    },
    {
      "name": "Maple Heights",
      "slug": "maple-heights"
    },
    {
      "name": "Parma Heights",
      "slug": "parma-heights"
    }
  ]
});

const lyndhurstArea = createArea({
  city: "Lyndhurst",
  slug: "lyndhurst",
  statistics: {
    medianSalePrice: "$259,876",
    homesSold: "78",
    medianPricePerSquareFoot: "$165/sq ft",
    medianDaysOnMarket: "22 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/11615/OH/Lyndhurst/housing-market"
  },
  nearbyCities: [
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    },
    {
      "name": "Cleveland Heights",
      "slug": "cleveland-heights"
    },
    {
      "name": "Mayfield Heights",
      "slug": "mayfield-heights"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    }
  ]
});

const mapleHeightsArea = createArea({
  city: "Maple Heights",
  slug: "maple-heights",
  dealStory: {
    title: "A Maple Heights deal that worked for everyone",
    address: "Reddington Ave, Maple Heights",
    image: {
      src: "/images/deal-stories/reddington-avenue-maple-heights.jpg",
      alt: "White house with blue awnings on Reddington Avenue in Maple Heights",
    },
    summary: "This tenant-occupied Maple Heights property sold as-is. Coordinating the walkthrough while the tenant was home took some extra planning, but the process went smoothly. The seller was happy with how it went, and we’ve done more deals together since.",
    terms: [
      "Sale price: $97K",
      "The seller didn’t have to handle the POS violations",
      "The seller didn’t pay any closing costs",
      "Sold as-is with the tenant in place",
    ],
  },
  introSupportingCopy: "Maple Heights has an active rental market: in September 2026, advertised rents averaged $1,641 for three-bedroom houses and $1,790 for four-bedroom houses. If you own a rental, that gives you a real choice between keeping the property for income or selling it now. We can give you a clear cash offer, so you can compare both paths and decide what makes the most sense for you.",
  posInspection: {
    status: "required",
    shortAnswer: "The owner must obtain a Point of Sale/Property Maintenance inspection before selling or transferring improved residential or commercial property. A sale can proceed with violations still outstanding only when the City’s approved escrow and buyer paperwork requirements are completed.",
    tableRows: [
      {
        question: "When is it required?",
        requirement: "Before selling, transferring, conveying, or entering into an agreement to transfer improved residential or commercial property. The initial inspection is valid for six months, subject to the City’s conditions.",
      },
      {
        question: "What does it cost?",
        requirement: "Single-family: $100 plus a $10 administrative fee. Two-family: $150 plus $10. Three-family: $210 plus $10.",
      },
      {
        question: "What does the City inspect?",
        requirement: "The City performs an exterior inspection. An interior inspection is performed only if the owner gives written consent; the owner must be present and provide yard access.",
      },
      {
        question: "Can the sale close with violations?",
        requirement: "Yes, if a City-registered contractor’s written estimate is approved by the Building Official and 100% of that estimate is escrowed. Before title transfer, the Building Department also requires proof of escrow, a Buyer’s Affidavit, and an Assumption of Violations Form.",
      },
      {
        question: "How do I apply?",
        requirement: "Submit the City’s Point of Sale Application to the Maple Heights Building Department. The application requires the owner’s information and a copy of a driver’s license or state-issued ID.",
      },
    ],
    sources: [
      {
        label: "Maple Heights Code: Point-of-Sale/Property Maintenance Inspection",
        url: "https://codelibrary.amlegal.com/codes/mapleheights/latest/mapleheights_oh/0-0-0-45458",
      },
      {
        label: "Maple Heights Code: Required Use of Certificate of Inspection",
        url: "https://codelibrary.amlegal.com/codes/mapleheights/latest/mapleheights_oh/0-0-0-45474",
      },
      {
        label: "City of Maple Heights: Point of Sale Inspection",
        url: "https://mapleheightsohio.gov/businesses/permits-and-registrations/point-of-sale-inspection/",
      },
      {
        label: "City of Maple Heights: Point of Sale Application (PDF)",
        url: "https://mapleheightsohio.gov/wp-content/uploads/2025/06/Point-of-Sale-Application_2.pdf",
      },
    ],
    verifiedDate: "November 13, 2026",
  },
  statistics: {
    medianSalePrice: "$144,931",
    homesSold: "70",
    medianPricePerSquareFoot: "$120/sq ft",
    medianDaysOnMarket: "25 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/12086/OH/Maple-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "Bedford",
      "slug": "bedford"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "Parma",
      "slug": "parma"
    },
    {
      "name": "Parma Heights",
      "slug": "parma-heights"
    }
  ]
});

const mayfieldHeightsArea = createArea({
  "city": "Mayfield Heights",
  "slug": "mayfield-heights",
  posInspection: {
    status: "required",
    shortAnswer: "Mayfield Heights requires an exterior Point-of-Sale inspection before an owner enters an agreement to sell or convey a house. Condominiums and cluster homes where the owner is not responsible for exterior maintenance are exempt.",
    tableRows: [
      { question: "When is it required?", requirement: "Before entering into an agreement to sell or otherwise conveying a dwelling structure. Condominiums and cluster homes where the owner is not responsible for exterior maintenance do not require a POS inspection. The certificate is valid for 12 months from the inspection date." },
      { question: "What does it cost?", requirement: "$100 for the residential Point-of-Sale inspection." },
      { question: "What does the City inspect?", requirement: "The exterior of the dwelling structure and premises." },
      { question: "What happens if there are violations?", requirement: "Violations must be corrected before a certificate is issued unless the purchaser submits the City’s notarized Statement of Assumption of Housing Violations and agrees to correct them within six months of the certificate’s issuance. The seller and buyer must identify who is responsible for the work, and the Building Department may require sufficient funds to be held in independent escrow." },
      { question: "How do I apply?", requirement: "Submit the City’s residential Point-of-Sale Inspection application and authorize the exterior inspection." },
    ],
    sources: [
      { label: "City of Mayfield Heights: Residential Point-of-Sale Inspection Application (PDF)", url: "https://www.mayfieldheightsohio.gov/DocumentCenter/View/3259/Point-of-Sale-Inspection-Application-PDF" },
      { label: "City of Mayfield Heights: Statement of Assumption of Housing Violations (PDF)", url: "https://www.mayfieldheightsohio.gov/DocumentCenter/View/105/Point-of-Sale-InspectionBuyers-Assumption-Form-PDF" },
      { label: "City Code: Certificates of Inspection, Chapter 1339", url: "https://codelibrary.amlegal.com/codes/mayfieldhts/latest/mayfieldhts_oh/0-0-0-100690" },
      { label: "City Code: Certificate of Inspection Fee, § 1335.06", url: "https://codelibrary.amlegal.com/codes/mayfieldhts/latest/mayfieldhts_oh/0-0-0-100523" },
    ],
    verifiedDate: "November 13, 2026",
  },
  "statistics": {
    "medianSalePrice": "$271,871",
    "homesSold": "69",
    "medianPricePerSquareFoot": "$167/sq ft",
    "medianDaysOnMarket": "31 days",
    "dataPeriod": "July–September 2026",
    "sourceName": "Redfin",
    "sourceUrl": "https://www.redfin.com/city/12397/OH/Mayfield-Heights/housing-market"
  },
  "nearbyCities": [
    {
      "name": "Mayfield Village",
      "slug": "mayfield-village"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    },
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    }
  ]
});

const mayfieldVillageArea = createArea({
  "city": "Mayfield Village",
  "slug": "mayfield-village",
  posInspection: {
    status: "not-required",
    shortAnswer: "Mayfield Village does not require a general point-of-sale inspection for a home sale. A property with a septic system does require a Certificate of Inspection from the Cuyahoga County Board of Health.",
    tableRows: [
      { question: "When is it required?", requirement: "Only when a residential property has a private sewage (septic) system. Before entering into an agreement to sell or convey the property, the owner must obtain the County Certificate of Inspection and provide it to the prospective buyer." },
      { question: "What does it cost?", requirement: "The Village lists the Cuyahoga County Board of Health inspection fee as $225, with the required application." },
      { question: "What does the buyer receive?", requirement: "The owner must give the prospective buyer a copy of the septic Certificate of Inspection and obtain the buyer’s signed acknowledgment of receipt." },
      { question: "How do I apply?", requirement: "Apply through the Cuyahoga County Board of Health for the private sewage-system inspection." },
    ],
    sources: [
      { label: "Mayfield Village: Point-of-Sale FAQ", url: "https://mayfieldvillage.com/mayfield-village-faq/" },
      { label: "Mayfield Village Code: Septic Certificate of Inspection at Time of Sale, § 1365.01", url: "https://codelibrary.amlegal.com/codes/mayfieldvillage/latest/mayfieldvillage_oh/0-0-0-20397" },
    ],
    verifiedDate: "November 13, 2026",
  },
  "statistics": {
    "medianSalePrice": "$447,287",
    "homesSold": "16",
    "medianPricePerSquareFoot": "$154/sq ft",
    "medianDaysOnMarket": "38 days",
    "dataPeriod": "July–September 2026",
    "sourceName": "Redfin",
    "sourceUrl": "https://www.redfin.com/city/12388/OH/Mayfield/housing-market"
  },
  "nearbyCities": [
    {
      "name": "University Heights",
      "slug": "university-heights"
    },
    {
      "name": "Mayfield Heights",
      "slug": "mayfield-heights"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    }
  ]
});

const middleburgHeightsArea = createArea({
  city: "Middleburg Heights",
  slug: "middleburg-heights",
  posInspection: {
    status: "not-required",
    shortAnswer: "Middleburg Heights does not require a general point-of-sale inspection for a home sale. A property with a septic system must obtain a Certificate of Septic System Evaluation from the Cuyahoga County Board of Health.",
    tableRows: [
      { question: "When is it required?", requirement: "Only when the property has a septic system. The City requires a Certificate of Septic System Evaluation from the Cuyahoga County Board of Health." },
      { question: "What does it cost?", requirement: "The Cuyahoga County Board of Health lists a $350 nonrefundable fee for the point-of-sale sewage-system evaluation, including sampling costs for discharging systems." },
      { question: "What if the house is vacant?", requirement: "The County cannot conduct the sewage-system evaluation until the home has been continuously occupied for at least 30 days. A vacant home must be reoccupied for that period before the evaluation can proceed." },
      { question: "How do I apply?", requirement: "Submit the Cuyahoga County Board of Health’s Sewage Treatment System Point-of-Sale Evaluation Application. The system must be prepared for the evaluation, including access to the listed components." },
    ],
    sources: [
      { label: "City of Middleburg Heights: Building Division FAQ", url: "https://middleburgheights.com/building/div-of-building-faq/" },
      { label: "Cuyahoga County Board of Health: Sewage Treatment System Point-of-Sale Evaluation Application (PDF)", url: "https://www.ccbh.net/wp-content/uploads/2021/08/SEWAGE-TREATMENT-SYSTEM-POINT-OF-SALE-EVALUATION-APPLICATION-3-3-2020.pdf" },
    ],
    verifiedDate: "November 13, 2026",
  },
  statistics: {
    medianSalePrice: "$339,838",
    homesSold: "47",
    medianPricePerSquareFoot: "$178/sq ft",
    medianDaysOnMarket: "13 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/12733/OH/Middleburg-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "Parma Heights",
      "slug": "parma-heights"
    },
    {
      "name": "Parma",
      "slug": "parma"
    },
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    }
  ]
});

const parmaArea = createArea({
  city: "Parma",
  slug: "parma",
  introSupportingCopy: "Parma is a large city, and selling a house near Ukrainian Village can feel different from selling one closer to Ridge Road or West Creek. We know the area and understand that a house needing repairs, an inherited property, or a rental may not fit the usual listing route. We will look at the property as it is and give you a clear cash offer, so you can compare your options without committing to repairs, showings, or a long sale process.",
  statistics: {
    medianSalePrice: "$229,891",
    homesSold: "309",
    medianPricePerSquareFoot: "$181/sq ft",
    medianDaysOnMarket: "13 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/15701/OH/Parma/housing-market"
  },
  nearbyCities: [
    {
      "name": "Parma Heights",
      "slug": "parma-heights"
    },
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Middleburg Heights",
      "slug": "middleburg-heights"
    },
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    }
  ]
});

const parmaHeightsArea = createArea({
  city: "Parma Heights",
  slug: "parma-heights",
  introSupportingCopy: "Recent sales in Parma Heights have been higher than in neighboring Parma, with a median sale price of $243,884 compared with $229,891. That does not determine what any individual house will sell for, but it is a good reason to look carefully at your options before making a decision. We can give you a clear cash offer for the house as it stands, so you can weigh a faster, simpler sale against the potential time and cost of listing it.",
  introLink: { text: "Parma", matchText: "neighboring Parma", href: "/sell-your-house-fast-as-is-parma" },
  statistics: {
    medianSalePrice: "$243,884",
    homesSold: "66",
    medianPricePerSquareFoot: "$168/sq ft",
    medianDaysOnMarket: "15 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/15711/OH/Parma-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "Parma",
      "slug": "parma"
    },
    {
      "name": "Middleburg Heights",
      "slug": "middleburg-heights"
    },
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    }
  ]
});

const richmondHeightsArea = createArea({
  city: "Richmond Heights",
  slug: "richmond-heights",
  posInspection: {
    status: "not-required",
    shortAnswer: "Richmond Heights does not call its required transfer review a point-of-sale inspection. Before a home transfer, the City requires a no-cost exterior home inspection; it does not include an interior inspection.",
    sources: [
      { label: "City of Richmond Heights: Exterior Maintenance Inspection Program (PDF)", url: "https://www.richmondheightsohio.org/DocumentCenter/View/165/Exterior-Maintenance-Inspection-Rules-Revised-7-28-2017-PDF?bidId=" },
    ],
    verifiedDate: "November 10, 2026",
  },
  statistics: {
    medianSalePrice: "$270,871",
    homesSold: "24",
    medianPricePerSquareFoot: "$155/sq ft",
    medianDaysOnMarket: "38 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/17125/OH/Richmond-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    },
    {
      "name": "Cleveland Heights",
      "slug": "cleveland-heights"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    },
    {
      "name": "Mayfield Heights",
      "slug": "mayfield-heights"
    }
  ]
});

const sevenHillsArea = createArea({
  city: "Seven Hills",
  slug: "seven-hills",
  statistics: {
    medianSalePrice: "$327,844",
    homesSold: "50",
    medianPricePerSquareFoot: "$182/sq ft",
    medianDaysOnMarket: "10 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/18238/OH/Seven-Hills/housing-market"
  },
  nearbyCities: [
    {
      "name": "Parma",
      "slug": "parma"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "Parma Heights",
      "slug": "parma-heights"
    },
    {
      "name": "Middleburg Heights",
      "slug": "middleburg-heights"
    },
    {
      "name": "Cleveland",
      "slug": "cleveland"
    }
  ]
});

const solonArea = createArea({
  "city": "Solon",
  "slug": "solon",
  "statistics": {
    "medianSalePrice": "$452,285",
    "homesSold": "83",
    "medianPricePerSquareFoot": "$193/sq ft",
    "medianDaysOnMarket": "31 days",
    "dataPeriod": "July–September 2026",
    "sourceName": "Redfin",
    "sourceUrl": "https://www.redfin.com/city/18593/OH/Solon/housing-market"
  },
  "nearbyCities": [
    {
      "name": "Bedford Heights",
      "slug": "bedford-heights"
    },
    {
      "name": "Bedford",
      "slug": "bedford"
    },
    {
      "name": "Maple Heights",
      "slug": "maple-heights"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    },
    {
      "name": "Mayfield Heights",
      "slug": "mayfield-heights"
    }
  ]
});

const southEuclidArea = createArea({
  city: "South Euclid",
  slug: "south-euclid",
  posInspection: {
    status: "not-required",
    shortAnswer: "South Euclid does not require a general point-of-sale inspection for an occupied home sale. A vacant property must be registered and inspected before title transfer.",
    sources: [
      { label: "City of South Euclid: Housing", url: "https://southeuclid.gov/housing/" },
    ],
    verifiedDate: "November 10, 2026",
  },
  statistics: {
    medianSalePrice: "$200,904",
    homesSold: "94",
    medianPricePerSquareFoot: "$134/sq ft",
    medianDaysOnMarket: "21 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/18673/OH/South-Euclid/housing-market"
  },
  nearbyCities: [
    {
      "name": "Cleveland Heights",
      "slug": "cleveland-heights"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    },
    {
      "name": "Mayfield Heights",
      "slug": "mayfield-heights"
    }
  ]
});

const universityHeightsArea = createArea({
  city: "University Heights",
  slug: "university-heights",
  posInspection: {
    status: "required",
    shortAnswer: "The seller must obtain a Point-of-Sale inspection before title transfer. A buyer may assume unresolved violations when the City’s Statement of Assumption of Violations is submitted before transfer.",
    tableRows: [
      { question: "When is it required?", requirement: "Before title transfer. The inspection is valid for one year from the initial inspection date." },
      { question: "What does it cost?", requirement: "$250 for a single-family home and $300 for a two-family home." },
      { question: "What happens if there are violations?", requirement: "The seller may correct all violations, correct some while the buyer assumes the rest, or have the buyer assume all violations. The City requires the buyer’s Statement of Assumption of Violations before transfer when violations remain." },
      { question: "How do I apply?", requirement: "Submit the Point-of-Sale application through CitizenServe or in person with the Housing Department, then schedule the inspection." },
    ],
    sources: [
      { label: "City of University Heights: Point-of-Sale Application (PDF)", url: "https://www.universityheights.com/wp-content/uploads/2022/01/POINT-OF-SALE-APPLICATION-2022.pdf" },
      { label: "City of University Heights: Point-of-Sale Transfer Process (PDF)", url: "https://www.universityheights.com/wp-content/uploads/2024/06/Point-of-Sale-Before-Sale-Is-Completed-REV-1.pdf" },
    ],
    verifiedDate: "November 10, 2026",
  },
  statistics: {
    medianSalePrice: "$289,612",
    homesSold: "59",
    medianPricePerSquareFoot: "$173/sq ft",
    medianDaysOnMarket: "26 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/19865/OH/University-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "Cleveland Heights",
      "slug": "cleveland-heights"
    },
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Mayfield Heights",
      "slug": "mayfield-heights"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    }
  ]
});

const additionalAreaStatistics: Partial<Record<string, Omit<AreaStatistics, "supportingCopy">>> = {
  "bay-village": {
    medianSalePrice: "$449,786",
    homesSold: "71",
    medianPricePerSquareFoot: "$259/sq ft",
    medianDaysOnMarket: "18 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/1171/OH/Bay-Village/housing-market",
  },
  berea: {
    medianSalePrice: "$255,210", homesSold: "74", medianPricePerSquareFoot: "$179/sq ft", medianDaysOnMarket: "9 days",
    dataPeriod: "June–August 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/1516/OH/Berea/housing-market",
  },
  beachwood: {
    medianSalePrice: "$549,738",
    homesSold: "34",
    medianPricePerSquareFoot: "$201/sq ft",
    medianDaysOnMarket: "48 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/1191/OH/Beachwood/housing-market",
  },
  "broadview-heights": {
    medianSalePrice: "$413,750", homesSold: "74", medianPricePerSquareFoot: "$188/sq ft", medianDaysOnMarket: "24 days",
    dataPeriod: "June–August 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/2349/OH/Broadview-Heights/housing-market",
  },
  "brook-park": {
    medianSalePrice: "$243,384", homesSold: "45", medianPricePerSquareFoot: "$178/sq ft", medianDaysOnMarket: "14 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/2402/OH/Brook-Park/housing-market",
  },
  "brooklyn-heights": {
    medianSalePrice: "$315,000", homesSold: "2", medianPricePerSquareFoot: "$206/sq ft", medianDaysOnMarket: "24 days",
    dataPeriod: "Redfin snapshot checked November 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/2396/OH/Brooklyn-Heights",
  },
  brooklyn: {
    medianSalePrice: "$216,897",
    homesSold: "38",
    medianPricePerSquareFoot: "$169/sq ft",
    medianDaysOnMarket: "14 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/2390/OH/Brooklyn/housing-market",
  },
  "chagrin-falls": {
    medianSalePrice: "$542,742", homesSold: "24", medianPricePerSquareFoot: "$329/sq ft", medianDaysOnMarket: "27 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/3481/OH/Chagrin-Falls/housing-market",
  },
  "east-cleveland": {
    medianSalePrice: "$143,432", homesSold: "14", medianPricePerSquareFoot: "$46/sq ft", medianDaysOnMarket: "78 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/6038/OH/East-Cleveland/housing-market",
  },
  "fairview-park": {
    medianSalePrice: "$289,362", homesSold: "55", medianPricePerSquareFoot: "$191/sq ft", medianDaysOnMarket: "12 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/6780/OH/Fairview-Park/housing-market",
  },
  lakewood: {
    medianSalePrice: "$342,837", homesSold: "198", medianPricePerSquareFoot: "$196/sq ft", medianDaysOnMarket: "21 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/10611/OH/Lakewood/housing-market",
  },
  "north-olmsted": {
    medianSalePrice: "$288,862", homesSold: "149", medianPricePerSquareFoot: "$172/sq ft", medianDaysOnMarket: "12 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/14718/OH/North-Olmsted/housing-market",
  },
  "north-royalton": {
    medianSalePrice: "$357,830", homesSold: "121", medianPricePerSquareFoot: "$183/sq ft", medianDaysOnMarket: "19 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/14764/OH/North-Royalton/housing-market",
  },
  "orange-village": {
    medianSalePrice: "$623,453", homesSold: "24", medianPricePerSquareFoot: "$255/sq ft", medianDaysOnMarket: "62 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/15175/OH/Orange/housing-market",
  },
  "olmsted-falls": {
    medianSalePrice: "$259,876", homesSold: "53", medianPricePerSquareFoot: "$158/sq ft", medianDaysOnMarket: "27 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/15128/OH/Olmsted-Falls/housing-market",
  },
  "pepper-pike": {
    medianSalePrice: "$847,000", homesSold: "37", medianPricePerSquareFoot: "$258/sq ft", medianDaysOnMarket: "35 days",
    dataPeriod: "June–August 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/15864/OH/Pepper-Pike/housing-market",
  },
  "rocky-river": {
    medianSalePrice: "$396,011", homesSold: "89", medianPricePerSquareFoot: "$237/sq ft", medianDaysOnMarket: "18 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/17437/OH/Rocky-River/housing-market",
  },
  "shaker-heights": {
    medianSalePrice: "$363,577", homesSold: "118", medianPricePerSquareFoot: "$165/sq ft", medianDaysOnMarket: "37 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/18309/OH/Shaker-Heights/housing-market",
  },
  strongsville: {
    medianSalePrice: "$379,819", homesSold: "190", medianPricePerSquareFoot: "$190/sq ft", medianDaysOnMarket: "17 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/19034/OH/Strongsville/housing-market",
  },
  "valley-view": {
    medianSalePrice: "$343,000", homesSold: "2", medianPricePerSquareFoot: "$170/sq ft", medianDaysOnMarket: "6 days",
    dataPeriod: "May–July 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/19939/OH/Valley-View/housing-market",
  },
  westlake: {
    medianSalePrice: "$449,786", homesSold: "140", medianPricePerSquareFoot: "$173/sq ft", medianDaysOnMarket: "17 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/20680/OH/Westlake/housing-market",
  },
  "warrensville-heights": {
    medianSalePrice: "$173,118", homesSold: "20", medianPricePerSquareFoot: "$173/sq ft", medianDaysOnMarket: "30 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/20280/OH/Warrensville-Heights/housing-market",
  },
};

const additionalPosInspections: Partial<Record<string, PosInspection>> = {
  berea: {
    status: "not-required",
    shortAnswer: "Berea repealed its Exterior Point-of-Sale Inspection chapter in 2019 and does not require a point-of-sale inspection for this type of home sale.",
    sources: [
      { label: "City of Berea: Repeal of Exterior Point-of-Sale Inspection Chapter (PDF)", url: "https://www.cityofberea.org/DocumentCenter/View/1903/2019-29-CO-Repeal-of-Chapter-1360-Exterior-POS" },
    ],
    verifiedDate: "November 10, 2026",
  },
  "bay-village": {
    status: "not-required",
    shortAnswer: "Bay Village has a point-of-sale process for vacant houses. A vacant building must receive a City vacant-building inspection before the owner enters into an agreement to sell or transfer it. Bay Village does not require a general point-of-sale inspection for other home sales.",
    tableRows: [
      { question: "When does it apply?", requirement: "Before entering into an agreement to sell or transfer a vacant building." },
      { question: "What does the City inspect?", requirement: "The City performs a general exterior and interior inspection and provides a report listing known code violations. The prospective buyer must receive a copy before title is conveyed." },
      { question: "What if violations remain?", requirement: "The parties must establish escrow for uncorrected violations: at least $1,000 and 100% of the estimated repair cost. A buyer who assumes qualifying violations generally has six months after title transfer to correct them." },
    ],
    sources: [
      { label: "City of Bay Village: Does Bay Village have a Point of Sale inspection?", url: "https://www.cityofbayvillage.gov/m/faq?cat=0" },
      { label: "City of Bay Village: Vacant Buildings Ordinance (PDF)", url: "https://www.cityofbayvillage.gov/DocumentCenter/View/806/19-64--Vacant-Buildings-PDF" },
    ],
    verifiedDate: "November 12, 2026",
  },
  beachwood: {
    status: "not-required",
    shortAnswer: "Beachwood does not require a general point-of-sale inspection before a home sale. The City requires an occupancy inspection when someone moves into a single-family home. Single-family rentals must also maintain an annual Certificate of Rental Occupancy and undergo City inspections.",
    sources: [
      { label: "City of Beachwood: Building Department FAQ", url: "https://www.beachwoodohio.com/m/FAQ" },
      { label: "City of Beachwood: Certificate of Rental Occupancy Ordinance (PDF)", url: "https://www.beachwoodohio.com/DocumentCenter/View/8112/CH-1391-Ord-2022-109-Single-Famly-Short-Term-Rental-Occupancy-Certificate?bidId=" },
      { label: "City of Beachwood: Rental Inspection Ordinance (PDF)", url: "https://www.beachwoodohio.com/DocumentCenter/View/51/CH1393-Interior-Inspection-Rental-Properties?bidId=" },
    ],
    verifiedDate: "November 12, 2026",
  },
  bedford: {
    status: "not-required",
    shortAnswer: "Bedford’s point-of-sale inspection program has been on freeze since 2016. The City’s code still includes older POS provisions, so confirm the current Certificate of Transfer and any property-specific requirements with the Bedford Building Department before listing or signing a purchase agreement.",
    sources: [
      { label: "City of Bedford Code: Certificate to Be Furnished by Seller", url: "https://codelibrary.amlegal.com/codes/bedford/latest/bedford_oh/0-0-0-84642" },
      { label: "Akron Cleveland REALTORS®: Bedford Local Government Information", url: "https://akronclevelandrealtors.com/advocacy-outreach/local-government-info/" },
    ],
    verifiedDate: "November 12, 2026",
  },
  "brooklyn-heights": {
    status: "required",
    shortAnswer: "The seller must obtain a Certificate of Inspection before selling or transferring improved residential property. The seller must give the prospective buyer a current Certificate of Inspection or Certificate of Compliance.",
    tableRows: [
      { question: "When is it required?", requirement: "Before selling, transferring, or conveying an interest in improved residential property. Give the buyer a Certificate of Inspection or Certificate of Compliance issued within the prior year." },
      { question: "What does it cost?", requirement: "$50 for the first dwelling unit, plus $20 for each additional unit. A $25 reinspection fee applies after the first two reinspections." },
      { question: "How do I apply?", requirement: "Submit the Village Point-of-Sale Application to the Building Department." },
    ],
    sources: [
      { label: "Village of Brooklyn Heights Code: Certificate of Inspection at Time of Sale", url: "https://codelibrary.amlegal.com/codes/brooklynheights/latest/brookhts_oh/0-0-0-13877" },
      { label: "Village of Brooklyn Heights: Point-of-Sale Application (PDF)", url: "https://www.brooklynhts.org/DocumentCenter/View/141/Point-of-Sale-Application-PDF" },
    ],
    verifiedDate: "November 12, 2026",
  },
  "chagrin-falls": {
    status: "not-required",
    shortAnswer: "Chagrin Falls does not require a general point-of-sale inspection for a normal residential home sale. If the property has a Village notice of violation or order to make corrections, the owner must inform prospective buyers of that notice.",
    sources: [
      { label: "Village of Chagrin Falls Code: Notice of Violation", url: "https://codelibrary.amlegal.com/codes/chagrinfalls/latest/chagrinfalls_oh/0-0-0-16714" },
      { label: "Akron Cleveland REALTORS®: Chagrin Falls Local Government Information", url: "https://akronclevelandrealtors.com/advocacy-outreach/local-government-info/" },
    ],
    verifiedDate: "November 12, 2026",
  },
  "broadview-heights": {
    status: "not-required",
    shortAnswer: "Broadview Heights does not publish a general point-of-sale inspection requirement for a home sale. A property with a septic system is subject to the City’s point-of-sale septic inspection ordinance.",
    sources: [
      { label: "City of Broadview Heights Code: Point-of-Sale Inspections of Septic Systems", url: "https://codelibrary.amlegal.com/codes/broadviewhts/latest/broadview_oh/0-0-0-13398" },
    ],
    verifiedDate: "November 12, 2026",
  },
  "north-olmsted": {
    status: "not-required",
    shortAnswer: "North Olmsted does not require a point-of-sale inspection for this type of home sale. The City encourages buyers to review the property's permit, citation, and inspection history with its Building Department.",
    sources: [
      { label: "City of North Olmsted: Assistance to Homebuyers (PDF)", url: "https://cms3.revize.com/revize/northolmsted/Documents/Departments/Public%20Safety/Building%20Division/Resources%20%26%20Regulations/Homebuyer%20Assistance.pdf" },
    ],
    verifiedDate: "November 10, 2026",
  },
  "north-royalton": {
    status: "not-required",
    shortAnswer: "North Royalton does not require a general point-of-sale inspection for a typical home sale. Residential rental properties have separate City registration and inspection requirements.",
    sources: [
      { label: "Akron Cleveland REALTORS®: North Royalton Local Government Information (PDF)", url: "https://akronclevelandrealtors.com/wp-content/uploads/2025/04/point-of-Sale-04.18.2025.pdf" },
      { label: "North Royalton Code: Residential Rental Registration and Inspection, Chapter 1485", url: "https://codelibrary.amlegal.com/codes/northroyalton/latest/noroyal_oh/0-0-0-64304" },
    ],
    verifiedDate: "November 13, 2026",
  },
  "olmsted-falls": {
    status: "not-required",
    shortAnswer: "Olmsted Falls does not require a general point-of-sale inspection for a typical home sale. The City’s Certificate of Occupancy and Zoning Compliance process applies to opening or relocating a business, not a normal residential resale.",
    sources: [
      { label: "Akron Cleveland REALTORS®: Olmsted Falls Local Government Information", url: "https://akronclevelandrealtors.com/advocacy-outreach/local-government-info/" },
      { label: "City of Olmsted Falls: Occupancy and Zoning Compliance", url: "https://www.olmstedfalls.org/permits/occupancy" },
    ],
    verifiedDate: "November 13, 2026",
  },
  "east-cleveland": {
    status: "required",
    shortAnswer: "East Cleveland requires a Certificate of Use, Occupancy, and Inspection before a property is sold or transferred. A buyer may accept responsibility for listed violations by completing the City’s notarized affidavit.",
    tableRows: [
      { question: "When is it required?", requirement: "Before selling or otherwise transferring real estate in East Cleveland. The owner must obtain the City’s Certificate of Use, Occupancy, and Inspection and show it to the prospective buyer." },
      { question: "Can a buyer assume violations?", requirement: "Yes. The buyer may accept the property as-is by signing the City’s notarized affidavit acknowledging the Notice of Violation." },
      { question: "What happens after a buyer assumes violations?", requirement: "The buyer must correct all listed violations within six months of the sale, obtain required permits before beginning work, and cannot transfer the property again until the Building Department approves the corrections." },
      { question: "How do I apply?", requirement: "Contact the City of East Cleveland Department of Building and Housing to request the inspection and Certificate of Use, Occupancy, and Inspection process." },
    ],
    sources: [
      { label: "East Cleveland Code: Certificate of Use, Occupancy and Inspection", url: "https://codelibrary.amlegal.com/codes/eastcleveland/latest/eastcleveland_oh/0-0-0-15471" },
      { label: "City of East Cleveland: POS Buyer Assumption Affidavit (PDF)", url: "https://www4.citizenserve.com/Documents/385/POSduediligencechecklist%28revised%29.pdf" },
    ],
    verifiedDate: "November 12, 2026",
  },
  "fairview-park": {
    status: "not-required",
    shortAnswer: "Fairview Park does not require a general point-of-sale inspection for a normal home sale. The City’s annual exterior property-maintenance inspections are conducted by neighborhood rotation and are not triggered by a sale. Rental properties and certain occupancy changes have separate City requirements.",
    sources: [
      { label: "City of Fairview Park: Property Maintenance", url: "https://fairviewparkohio.gov/172/Property-Maintenance" },
      { label: "City of Fairview Park: Building Department", url: "https://www.fairviewparkohio.gov/165/Building-Department" },
      { label: "Akron Cleveland REALTORS®: Fairview Park Local Government Information", url: "https://akronclevelandrealtors.com/advocacy-outreach/local-government-info/" },
    ],
    verifiedDate: "November 13, 2026",
  },
  independence: {
    status: "not-required",
    shortAnswer: "Independence does not require a general point-of-sale inspection for a normal residential home sale when there is no change of use. Commercial changes of use or occupancy require an occupancy permit and inspection. If a rental property is sold, the new owner must submit a rental registration within seven days after the deed is recorded.",
    sources: [
      { label: "Independence Code: Occupancy Permit for Change of Use", url: "https://codelibrary.amlegal.com/codes/independence/latest/independence_oh/0-0-0-22741" },
      { label: "Independence Code: Lease/Rental Occupancy Registration", url: "https://codelibrary.amlegal.com/codes/independence/latest/independence_oh/0-0-0-39660" },
    ],
    verifiedDate: "November 13, 2026",
  },
  lyndhurst: {
    status: "not-required",
    shortAnswer: "Lyndhurst does not require a POS inspection for a single-family home sale. Before entering into an agreement to sell a double house or two-family dwelling, however, the owner must hold a current Certificate of Authorized Occupancy and show it to the prospective buyer. Rental properties have separate registration and recurring exterior-inspection requirements.",
    sources: [
      { label: "Lyndhurst Code: Certificate of Authorized Occupancy", url: "https://codelibrary.amlegal.com/codes/lyndhurst/latest/lyndhurst_oh/0-0-0-33365" },
      { label: "City of Lyndhurst: Rental and Non-Owner-Occupied Property Guidance", url: "https://files-backend.assets.thrillshare.com/documents/asset/uploaded_file/3516/Lyndhurst/820af718-9021-4c2d-9d8b-92b2c5c5c864/COVER_LETTER__LLC-CORPORATE_with_TENANT_fillab.pdf?disposition=inline" },
    ],
    verifiedDate: "November 13, 2026",
  },
  "seven-hills": {
    status: "required",
    shortAnswer: "Seven Hills requires a point-of-sale septic-system inspection when the property has a septic system. The seller must obtain a current County septic-system evaluation before transfer.",
    tableRows: [
      { question: "When is it required?", requirement: "Before selling, conveying, or transferring a property with a septic system." },
      { question: "What is required?", requirement: "Obtain a current Certificate of Septic System Evaluation from the Cuyahoga County Board of Health and present it to the buyer." },
      { question: "What about escrow?", requirement: "If escrow is established, the buyer's acknowledgement of receipt of the certificate must be deposited in escrow before possession or title transfer." },
    ],
    sources: [
      { label: "City of Seven Hills Code: Point of Sale Inspection of Septic Systems", url: "https://codelibrary.amlegal.com/codes/sevenhills/latest/sevenhills_oh/0-0-0-16271" },
    ],
    verifiedDate: "November 10, 2026",
  },
  solon: {
    status: "not-required",
    shortAnswer: "Solon does not require a point-of-sale inspection for this type of home sale. The City’s Building Department states that it does not perform Point-of-Sale inspections.",
    sources: [
      { label: "City of Solon: Certificate of Occupancy Procedure (PDF)", url: "https://www.solonohio.gov/DocumentCenter/View/857/COO-ProdedureSolon-Comm--4Res?bidId=" },
      { label: "City of Solon Council Minutes, February 19, 2019", url: "https://www.solonohio.gov/ArchiveCenter/ViewFile/Item/2230" },
    ],
    verifiedDate: "November 10, 2026",
  },
  lakewood: {
    status: "required",
    shortAnswer: "Lakewood requires a point-of-sale inspection before the sale of a non-owner-occupied residential rental property. The City’s published requirement does not apply to an owner-occupied home sale.",
    tableRows: [
      { question: "When is it required?", requirement: "Before selling a non-owner-occupied residential rental property. A Certificate of Code Compliance is required before that sale." },
      { question: "What does the City inspect?", requirement: "The interior, exterior, and yard areas of residential rental properties." },
      { question: "How do I apply?", requirement: "Contact Lakewood’s Division of Housing and Building to submit the request and schedule an inspection." },
    ],
    sources: [
      { label: "City of Lakewood: Inspections and Code Compliance", url: "https://lakewoodoh.gov/housing-and-building/inspections-code-compliance/" },
    ],
    verifiedDate: "November 10, 2026",
  },
  "orange-village": {
    status: "required",
    shortAnswer: "Orange Village requires a Point-of-Sale Certificate of Compliance or Certificate of Conditional Transfer before title to a home can transfer. The process includes smoke and carbon-monoxide detector verification, plus septic or well inspection when applicable.",
    tableRows: [
      { question: "When is it required?", requirement: "Before title transfers for a dwelling or dwelling unit. Transfers by inheritance or gift without a bona fide sale, and new dwellings subject to a Certificate of Occupancy, are excluded. A Certificate of Compliance is valid for one year." },
      { question: "What does it cost?", requirement: "$50, paid with the Point-of-Sale application. Cuyahoga County Board of Health fees apply separately to septic and well work when applicable." },
      { question: "What does the City inspect?", requirement: "The Fire Department verifies working smoke and carbon-monoxide detectors in the required locations. Septic and well inspections are scheduled with the Cuyahoga County Board of Health when applicable." },
      { question: "What if the house is vacant and has septic?", requirement: "If a sewage-system evaluation cannot be performed because the home has not been continuously occupied for at least 30 days, the seller receives a Certificate of Conditional Transfer. The buyer receives and signs it, then the septic test must occur after the home has been continuously occupied for 30 to 90 days." },
      { question: "What happens if the property is not yet compliant?", requirement: "The Building Department may issue a Certificate of Conditional Transfer. The seller must give it to the buyer, and the buyer must sign and date it; when an escrow is used, the signed certificate must be deposited before possession or title transfers." },
      { question: "How do I apply?", requirement: "Complete the two-page application, submit it to the Building Department with payment, then schedule the detector inspection through the Building Department." },
    ],
    sources: [
      { label: "Orange Village: Point-of-Sale Inspection", url: "https://www.orangevillage.com/building-department-2/" },
      { label: "Orange Village Code: Certificate of Compliance Required, § 1337.02", url: "https://codelibrary.amlegal.com/codes/orange/latest/orange_oh/0-0-0-97503" },
      { label: "Orange Village Code: POS Inspection and One-Year Effective Period, § 1337.03", url: "https://codelibrary.amlegal.com/codes/orange/latest/orange_oh/0-0-0-97509" },
      { label: "Orange Village Code: Vacant Septic-Property Procedure, § 1337.09", url: "https://codelibrary.amlegal.com/codes/orange/latest/orange_oh/0-0-0-97537" },
    ],
    verifiedDate: "November 13, 2026",
  },
  "brook-park": {
    status: "required",
    shortAnswer: "Brook Park requires a Re-Occupancy Inspection for any title transfer or change in occupant. For a home sale, it is an exterior, plain-view inspection valid for six months.",
    tableRows: [
      { question: "When is it required?", requirement: "For any transfer in title or change in occupant. The inspection is valid for six months from the initial inspection date." },
      { question: "What does it cost?", requirement: "$60 for a one-, two-, or three-family home; $30 for a condominium unit; and $100 for commercial property." },
      { question: "What does the City inspect?", requirement: "The Building Department completes an exterior, plain-view inspection. After the completed form and fee are received, the City allows three to five business days for processing." },
      { question: "What if violations are found?", requirement: "The current owner may correct the violations, or the buyer may assume them by submitting a Certificate of Title Transfer before closing. If no violations are found, the buyer submits a Re-Occupancy Permit before closing." },
      { question: "How do I apply?", requirement: "Complete and return the current-year Re-Occupancy Inspection form with the appropriate fee to the Building Department." },
    ],
    sources: [
      { label: "City of Brook Park: 2026 Re-Occupancy Inspection Form (PDF)", url: "https://www.cityofbrookpark.com/building_dept/2026/2026%20Re-Occupancy%20Inspection.pdf" },
      { label: "City of Brook Park: Building Department", url: "https://www.cityofbrookpark.com/building-department/" },
    ],
    verifiedDate: "November 12, 2026",
  },
  brooklyn: {
    status: "not-required",
    shortAnswer: "Brooklyn does not require a general point-of-sale inspection before a home sale. Rental residences must be inspected and licensed before being rented, and again whenever a new resident moves in.",
    sources: [
      { label: "City of Brooklyn: Rental Inspection Guidance (PDF)", url: "https://www.brooklynohio.gov/DocumentCenter/View/225/Good-Neighbor-Guide-PDF" },
      { label: "City of Brooklyn: Building Department", url: "https://brooklynohio.gov/158/Building-Department" },
    ],
    verifiedDate: "November 12, 2026",
  },
  "shaker-heights": {
    status: "required",
    shortAnswer: "The seller must apply for a Point-of-Sale inspection before entering into a contract to sell a residential property. A sale can close with violations still outstanding only when the City approves the required escrow arrangement.",
    tableRows: [
      { question: "When is it required?", requirement: "Before entering into an agreement to sell a residential property with a structure. The inspection is valid for transfer for 24 months from the original inspection date." },
      { question: "What does it cost?", requirement: "Single-family: $200. Two-family: $300. Condominium: $150. Apartment building: $200 for the first unit and $50 for each additional unit." },
      { question: "What does the City inspect?", requirement: "A visual inspection of the interior and exterior. Apartment-building common areas and fire-code violations are also included." },
      { question: "Can the sale close with violations?", requirement: "Yes. The buyer or seller must submit an itemized estimate from a registered contractor; after City approval, the buyer establishes City-held escrow equal to 150% of the estimated repairs." },
      { question: "How do I apply?", requirement: "Apply and pay online through the City’s CitizenServe Point-of-Sale process, then schedule the inspection with the City." },
    ],
    sources: [
      { label: "City of Shaker Heights: Point of Sale Procedure", url: "https://www.shakerheightsoh.gov/477/Point-of-Sale-Procedure" },
      { label: "City of Shaker Heights: POS Inspection and Escrow Requirements (PDF)", url: "https://www.shakerheightsoh.gov/DocumentCenter/View/124/Point-of-Sale-Escrow-Requirements-PDF" },
    ],
    verifiedDate: "November 10, 2026",
  },
  "warrensville-heights": {
    status: "required",
    shortAnswer: "The seller must obtain a Point-of-Sale Certificate of Inspection before agreeing to sell or transfer property. A sale can close with unresolved violations only when the City’s escrow and buyer-acknowledgement requirements are completed.",
    tableRows: [
      { question: "When is it required?", requirement: "Before entering an agreement to sell or convey residential or commercial property. The certificate provided to the buyer must have been issued within one year before the agreement." },
      { question: "What does it cost?", requirement: "Residential: $100. Condominiums and apartments: $30 per unit. Commercial: $200 for the first unit and $90 for each additional unit." },
      { question: "What paperwork is required?", requirement: "The seller must give the buyer a Certificate of Inspection or Compliance. A buyer-signed Acknowledgement Form must be deposited in escrow and copied to the Building Department before title transfer." },
      { question: "Can the sale close with violations?", requirement: "Yes. Escrow of at least $100 and 150% of an itemized, current-market repair estimate from a City-registered company is required for remaining violations." },
      { question: "How do I apply?", requirement: "Submit the City’s residential or commercial Point-of-Sale application to the Building Department." },
    ],
    sources: [
      { label: "City of Warrensville Heights: Residential POS Application and Checklist (PDF)", url: "https://www.cityofwarrensville.com/DocumentCenter/View/88/Residential-Point-of-Sale-Inspection-Application-and-Checklist--PDF" },
      { label: "City of Warrensville Heights: Inspections", url: "https://www.cityofwarrensville.com/151/Inspections" },
    ],
    verifiedDate: "November 10, 2026",
  },
};

bedfordArea.posInspection = additionalPosInspections.bedford;
independenceArea.posInspection = additionalPosInspections.independence;
lyndhurstArea.posInspection = additionalPosInspections.lyndhurst;

const additionalAreas = [
  ["Bay Village", "bay-village", ["Westlake", "Rocky River", "Fairview Park", "North Olmsted", "Berea", "Lakewood"]],
  ["Berea", "berea", ["Olmsted Falls", "North Olmsted", "Strongsville", "Brook Park", "Middleburg Heights", "Fairview Park"]],
  ["Broadview Heights", "broadview-heights", ["Parma Heights", "North Royalton", "Seven Hills", "Parma", "Independence", "Middleburg Heights"]],
  ["Brook Park", "brook-park", ["Cleveland", "Berea", "Middleburg Heights", "Fairview Park", "Parma", "Parma Heights"]],
  ["Brooklyn", "brooklyn", ["Cleveland", "Parma", "Parma Heights", "Seven Hills", "Brooklyn Heights", "Lakewood"]],
  ["Brooklyn Heights", "brooklyn-heights", ["Brooklyn", "Cleveland", "Independence", "Seven Hills", "Parma", "Garfield Heights"]],
  ["Chagrin Falls", "chagrin-falls", ["Solon", "Lyndhurst", "Orange Village", "Mayfield Village", "Mayfield Heights", "Richmond Heights"]],
  ["East Cleveland", "east-cleveland", ["Cleveland", "Cleveland Heights", "Euclid", "Garfield Heights", "Shaker Heights", "University Heights"]],
  ["Beachwood", "beachwood", ["Shaker Heights", "University Heights", "Cleveland Heights", "Warrensville Heights", "Orange Village", "Pepper Pike"]],
  ["Fairview Park", "fairview-park", ["Rocky River", "North Olmsted", "Westlake", "Lakewood", "Brook Park", "Berea"]],
  ["Lakewood", "lakewood", ["Rocky River", "Fairview Park", "Brooklyn", "Cleveland", "Westlake", "Bay Village"]],
  ["North Olmsted", "north-olmsted", ["Westlake", "Fairview Park", "Olmsted Falls", "Berea", "North Royalton", "Bay Village"]],
  ["North Royalton", "north-royalton", ["Broadview Heights", "Middleburg Heights", "Strongsville", "Parma", "Seven Hills", "Olmsted Falls"]],
  ["Olmsted Falls", "olmsted-falls", ["North Olmsted", "Berea", "Strongsville", "Westlake", "Fairview Park", "Bay Village"]],
  ["Orange Village", "orange-village", ["Chagrin Falls", "Pepper Pike", "Mayfield Village", "Mayfield Heights", "Lyndhurst", "Solon"]],
  ["Pepper Pike", "pepper-pike", ["Orange Village", "Shaker Heights", "Mayfield Heights", "Lyndhurst", "Beachwood", "University Heights"]],
  ["Rocky River", "rocky-river", ["Lakewood", "Fairview Park", "Westlake", "Bay Village", "North Olmsted", "Cleveland"]],
  ["Shaker Heights", "shaker-heights", ["Cleveland Heights", "University Heights", "Garfield Heights", "Maple Heights", "Cleveland", "East Cleveland"]],
  ["Strongsville", "strongsville", ["North Royalton", "Olmsted Falls", "Berea", "Middleburg Heights", "Parma Heights", "Broadview Heights"]],
  ["Valley View", "valley-view", ["Independence", "Garfield Heights", "Bedford", "Bedford Heights", "Seven Hills"]],
  ["Warrensville Heights", "warrensville-heights", ["Beachwood", "Bedford Heights", "Shaker Heights", "University Heights", "Maple Heights"]],
  ["Westlake", "westlake", ["Bay Village", "Rocky River", "Fairview Park", "North Olmsted", "Olmsted Falls", "Strongsville"]],
] as const satisfies readonly (readonly [string, string, readonly string[]])[];

const additionalAreaPages = additionalAreas.map(([city, slug, nearbyCities]) => createArea({
  city,
  slug,
  posInspection: additionalPosInspections[slug],
  statistics: additionalAreaStatistics[slug],
  nearbyCities: nearbyCities.map(name => ({
    name,
    slug: name.toLowerCase().replaceAll(" ", "-"),
  })) as unknown as AreaRecord["nearbyCities"],
}));

export const areas: readonly AreaPageData[] = [
  bedfordArea,
  bedfordHeightsArea,
  clevelandArea,
  clevelandHeightsArea,
  euclidArea,
  garfieldHeightsArea,
  independenceArea,
  lyndhurstArea,
  mapleHeightsArea,
  mayfieldHeightsArea,
  mayfieldVillageArea,
  middleburgHeightsArea,
  parmaArea,
  parmaHeightsArea,
  richmondHeightsArea,
  sevenHillsArea,
  solonArea,
  southEuclidArea,
  universityHeightsArea,
  ...additionalAreaPages,
];
