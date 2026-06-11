import {
  BoiSequenceSchema,
  CoreSchema,
  NonCustomersSchema,
  SixPathsSchema,
  UtilityLevers,
  UtilityMapSchema,
  UtilityStages,
  type BoiSequence,
  type Core,
  type NonCustomers,
  type SixPaths,
  type UtilityLever,
  type UtilityMap,
  type UtilityStage,
} from "@/lib/schema";

/**
 * Hand-written, schema-valid fixtures for MOCK_AI mode.
 * Fictional company: "Tidal Coffee", a specialty coffee chain.
 * All fixtures are validated with zod at module load — schema drift throws.
 */

type CellStatus = "industry-focus" | "blocked" | "opportunity";

interface CellOverride {
  stage: UtilityStage;
  lever: UtilityLever;
  status: CellStatus;
  note: string;
}

/** Build all 36 utility cells: neutral by default, with explicit overrides. */
function buildUtilityCells(overrides: CellOverride[]): UtilityMap["cells"] {
  const byKey = new Map(overrides.map((o) => [`${o.stage}:${o.lever}`, o]));
  const cells: UtilityMap["cells"] = [];
  for (const stage of UtilityStages) {
    for (const lever of UtilityLevers) {
      const o = byKey.get(`${stage}:${lever}`);
      cells.push(
        o
          ? { stage, lever, status: o.status, note: o.note }
          : { stage, lever, status: "neutral", note: null }
      );
    }
  }
  return cells;
}

const rawCore = {
  summary: {
    headline: "Tidal Coffee: stop selling seats, start selling the roast",
    narrative:
      "Specialty coffee chains compete on the same four fronts: sprawling menus, prime-corner real estate, barista theater and loyalty punch cards. Margins erode as rent takes 18-25% of revenue and peak-hour queues cap throughput. Tidal Coffee escapes by shrinking the cafe and elevating the bean: a subscription-first roastery that treats the store as a tasting room, not a living room.",
    redOceanTraits: [
      "Menu sprawl: 40+ SKUs that slow the line and dilute quality",
      "Rent arms race for prime corners and seating square footage",
      "Discount-driven loyalty apps that train buyers to wait for deals",
      "Identical 'third place' interiors competing on couch count",
    ],
    blueOceanThesis:
      "Become the first subscription-first roastery chain: tiny tasting-room stores, radical bean transparency, and 48-hour roast-to-door delivery that converts commuters into members.",
  },
  canvas: {
    factors: [
      {
        name: "Menu breadth",
        rationale:
          "Buyers face 40+ drink options; choice slows service and masks bean quality.",
      },
      {
        name: "Wait time",
        rationale:
          "Peak-hour queues of 8-12 minutes are the norm buyers grudgingly accept.",
      },
      {
        name: "Price per cup",
        rationale:
          "The industry anchors on a premium 4-6 euro cup to cover rent and labor.",
      },
      {
        name: "Seating comfort",
        rationale:
          "Chains invest heavily in 'third place' interiors most commuters never use.",
      },
      {
        name: "Bean provenance",
        rationale:
          "Origin stories are marketing veneer; few buyers can trace farm, lot or roast date.",
      },
      {
        name: "Subscription delivery",
        rationale:
          "Almost no chain lets buyers receive their exact in-store roast at home, flexibly.",
      },
    ],
    industry: [4, 3, 4, 5, 3, 1],
    blueOcean: [1, 1, 2, 2, 5, 5],
  },
  errc: {
    eliminate: [
      {
        title: "Menu sprawl",
        detail:
          "Cut Menu breadth from 40+ SKUs to 6 rotating roasts served 3 ways. Faster line, sharper identity, 30% less waste.",
      },
      {
        title: "Peak-hour queuing",
        detail:
          "Eliminate Wait time as a buyer cost: order-ahead lockers and a members-first lane make the 8-minute queue obsolete.",
      },
    ],
    reduce: [
      {
        title: "Cup price anchor",
        detail:
          "Reduce Price per cup to 2.50-3 euro for members — the cup becomes a sampling channel, not the profit center.",
      },
      {
        title: "Seating footprint",
        detail:
          "Reduce Seating comfort investment: 35 m2 tasting rooms instead of 140 m2 lounges, cutting rent 50-60% per location.",
      },
    ],
    raise: [
      {
        title: "Radical provenance",
        detail:
          "Raise Bean provenance to market-leading: every bag QR-traced to farm, lot, importer margin and roast curve.",
      },
      {
        title: "Flexible membership",
        detail:
          "Raise Subscription delivery to the core offer: pause, swap or re-tier in two taps, no lock-in.",
      },
    ],
    create: [
      {
        title: "Tide-scheduled drops",
        detail:
          "Weekly 'tide' roast drops members vote on — scarcity and ritual no incumbent chain offers.",
      },
      {
        title: "Roast-to-door in 48h",
        detail:
          "Beans ship within 48 hours of roasting, nationally — fresher than any supermarket or cafe shelf.",
      },
      {
        title: "Open roastery data",
        detail:
          "Live public dashboard of green-bean costs and farmer payments — trust as a product feature, new to the category.",
      },
    ],
  },
  moves: [
    {
      title: "Convert the morning queue into members",
      body:
        "Months 1-6: pilot two tasting-room stores near transit hubs. Every cup sold includes a scan-to-subscribe offer: first home bag free, member price 2.75 euro per cup. Target 20-25% of weekly regulars converting within a quarter.",
    },
    {
      title: "Stand up the 48-hour roast-to-door engine",
      body:
        "Months 4-9: centralize roasting in one hub per region, ship within 48 hours of roast via parcel lockers. Subscription revenue at 60-70% gross margin de-risks store P&Ls and smooths demand for the roastery.",
    },
    {
      title: "Weaponize transparency",
      body:
        "Months 6-12: launch the open roastery dashboard showing green-bean cost, farmer payment and margin per bag. Pair with quarterly 'meet the lot' tastings. Goal: provenance-driven referral becomes the cheapest acquisition channel, under 10 euro per member.",
    },
  ],
} satisfies Core;

const rawSixPaths = {
  paths: [
    {
      path: "alternative-industries",
      title: "Look across alternative industries",
      insight:
        "Commuters trade off cafes against home espresso machines and energy drinks; the 700-euro machine buyer wants ritual and freshness, not seating.",
      opportunity:
        "Position the membership as 'better than your machine': roast-fresh beans plus tasting-room access beats both the cafe queue and the kitchen counter.",
    },
    {
      path: "strategic-groups",
      title: "Look across strategic groups",
      insight:
        "The market splits into premium slow-bar cafes and grab-and-go chains; nobody combines specialty quality with sub-2-minute service.",
      opportunity:
        "A six-SKU menu and order-ahead lockers deliver slow-bar quality at kiosk speed — straddling both groups without their cost structures.",
    },
    {
      path: "buyer-chain",
      title: "Redefine the buyer group",
      insight:
        "Chains target the individual drinker, ignoring office managers who buy beans and equipment for 20-200 staff.",
      opportunity:
        "A team tier of the subscription (rotating drops, brew gear leasing, tasting events) turns one decision-maker into 50 recurring drinkers.",
    },
    {
      path: "complementary-offerings",
      title: "Look at complementary offerings",
      insight:
        "The total coffee experience includes grinding, water quality and brewing skill at home — pain the industry leaves to YouTube.",
      opportunity:
        "Bundle a calibrated grinder rental and 10-minute brew clinics into the top tier; better home cups increase bag consumption 20-30%.",
    },
    {
      path: "functional-emotional",
      title: "Rethink functional-emotional appeal",
      insight:
        "Specialty coffee sells emotional theater (latte art, interiors) while the functional core — freshness and traceability — stays opaque.",
      opportunity:
        "Flip the appeal: make freshness dates, roast curves and farmer payments the brand surface; the emotion becomes trust, not decor.",
    },
    {
      path: "time-trends",
      title: "Shape external trends over time",
      insight:
        "EU deforestation rules and climate-driven arabica price spikes (up 60-80% in recent cycles) will force traceability and direct sourcing on everyone.",
      opportunity:
        "Lock multi-year direct contracts with 15-20 farms now; when compliance hits laggards, Tidal's open data is already the category benchmark.",
    },
  ],
} satisfies SixPaths;

const rawUtilityMap = {
  cells: buildUtilityCells([
    // Industry focus (5)
    {
      stage: "purchase",
      lever: "fun-image",
      status: "industry-focus",
      note: "Chains compete on interior theater and brand merch at the counter.",
    },
    {
      stage: "purchase",
      lever: "convenience",
      status: "industry-focus",
      note: "Apps and loyalty cards optimize ordering, but only inside the store visit.",
    },
    {
      stage: "use",
      lever: "fun-image",
      status: "industry-focus",
      note: "Latte art and cup branding are the industry's signature investment.",
    },
    {
      stage: "use",
      lever: "simplicity",
      status: "industry-focus",
      note: "Baristas remove all preparation effort for the in-store cup.",
    },
    {
      stage: "delivery",
      lever: "productivity",
      status: "industry-focus",
      note: "Drive-through and pickup shelves speed the handoff of the made drink.",
    },
    // Blocked (4)
    {
      stage: "purchase",
      lever: "productivity",
      status: "blocked",
      note: "8-12 minute peak queues tax every commuter's morning; throughput is capped by menu sprawl.",
    },
    {
      stage: "delivery",
      lever: "convenience",
      status: "blocked",
      note: "You cannot get the cafe's actual roast delivered home; supermarket bags are months stale.",
    },
    {
      stage: "use",
      lever: "risk",
      status: "blocked",
      note: "Home brewers gamble on stale beans and wrong grind — inconsistent cups erode trust.",
    },
    {
      stage: "supplements",
      lever: "simplicity",
      status: "blocked",
      note: "Grinders, scales and recipes are a fragmented DIY maze the industry ignores.",
    },
    // Opportunity (4)
    {
      stage: "delivery",
      lever: "risk",
      status: "opportunity",
      note: "48-hour roast-to-door with printed roast dates removes freshness risk entirely — aligned with the 'Roast-to-door in 48h' create action.",
    },
    {
      stage: "purchase",
      lever: "risk",
      status: "opportunity",
      note: "Open roastery data (costs, farmer payments) de-risks the premium price decision — no incumbent offers it.",
    },
    {
      stage: "supplements",
      lever: "convenience",
      status: "opportunity",
      note: "Bundled grinder rental and brew clinics make great home cups effortless, raising bag consumption.",
    },
    {
      stage: "disposal",
      lever: "eco",
      status: "opportunity",
      note: "Compostable bags with deposit-return tins close the loop — visible sustainability the category lacks.",
    },
  ]),
  keyInsight:
    "The industry over-serves the in-store moment and abandons buyers everywhere else; the open space is the home cup — freshness, trust and effortless brewing delivered, not poured.",
} satisfies UtilityMap;

const rawNonCustomers = {
  tiers: [
    {
      tier: "first",
      label: "Queue-weary commuters",
      whoTheyAre:
        "Daily regulars who already cut back to 2-3 visits a week, defaulting to office machine coffee on busy days.",
      whyTheyLeave:
        "Peak-hour queues and a 4.50-euro habit that feels indefensible; the product is fine, the friction is not.",
      unlockStrategy:
        "Members-first lane plus the 2.75-euro member cup makes staying loyal cheaper and faster than defecting; the home subscription covers the days they skip.",
      relativeSize: "large",
    },
    {
      tier: "second",
      label: "Home-machine refuseniks",
      whoTheyAre:
        "Enthusiasts who invested 300-800 euro in espresso or filter gear and consciously stopped paying cafe prices.",
      whyTheyLeave:
        "They reject the cafe value equation — they want bean quality and control, and see cafes as paying for rent and theater.",
      unlockStrategy:
        "Sell them exactly what they value: 48-hour fresh roasts, lot-level data and roast-curve transparency that no supermarket bag offers — the cafe becomes optional, the membership essential.",
      relativeSize: "medium",
    },
    {
      tier: "third",
      label: "Tea-first office buyers",
      whoTheyAre:
        "Office managers and teams in tea-dominant or budget-canteen workplaces who have never bought specialty coffee.",
      whyTheyLeave:
        "Specialty coffee was never offered as a workplace utility — it reads as an individual luxury, complicated to provision for 50 people.",
      unlockStrategy:
        "A turnkey team tier (beans, leased brewers, quarterly tastings) sold per seat per month turns an unexplored channel into recurring B2B volume.",
      relativeSize: "medium",
    },
  ],
} satisfies NonCustomers;

const rawBoiSequence = {
  steps: [
    {
      gate: "utility",
      question: "Is there exceptional buyer utility in your business idea?",
      verdict: "pass",
      assessment:
        "The move clears the two biggest utility blocks in the category: freshness risk at home and queue time in store. 48-hour roast-to-door and a six-SKU members lane are step-change improvements, not increments.",
      actions: [],
    },
    {
      gate: "price",
      question: "Is your price easily accessible to the mass of buyers?",
      verdict: "risk",
      assessment:
        "A 2.75-euro member cup undercuts the category, but the 18-24 euro monthly subscription must beat supermarket beans on perceived value, not just freshness. Price sensitivity outside urban cores is unproven.",
      actions: [
        "Run a 3-month price ladder test (15/19/24 euro tiers) in the pilot stores",
        "Anchor against the buyer's current monthly cafe spend, not against bag prices",
      ],
    },
    {
      gate: "cost",
      question:
        "Can you attain your cost target to profit at your strategic price?",
      verdict: "pass",
      assessment:
        "Tasting-room footprints cut rent 50-60% and centralized roasting lifts gross margin on subscription bags to 60-70%. The cost structure beats incumbents at the strategic price as long as parcel costs stay under 12% of bag revenue.",
      actions: [
        "Negotiate regional parcel-locker rates before scaling past two cities",
      ],
    },
    {
      gate: "adoption",
      question:
        "What are the adoption hurdles, and are you addressing them up front?",
      verdict: "risk",
      assessment:
        "Staff must shift from barista theater to membership selling, and landlords may resist small-format leases. Farmer-payment transparency could provoke pushback from importers used to opaque margins.",
      actions: [
        "Retrain pilot staff on a scan-to-subscribe script with conversion bonuses",
        "Pre-sign two locker partners and one importer willing to publish margins",
      ],
    },
  ],
  overallVerdict: "go",
  conclusion:
    "Utility and cost clear convincingly; price and adoption carry real but testable risks. Proceed with the two-store pilot, treating the price ladder and staff conversion rate as the kill-switch metrics before regional rollout.",
} satisfies BoiSequence;

/** Validated at module load — throws if fixtures drift from the schemas. */
export const MOCK_CORE: Core = CoreSchema.parse(rawCore);

export const MOCK_FRAMEWORKS: {
  sixPaths: SixPaths;
  utilityMap: UtilityMap;
  nonCustomers: NonCustomers;
  boiSequence: BoiSequence;
} = {
  sixPaths: SixPathsSchema.parse(rawSixPaths),
  utilityMap: UtilityMapSchema.parse(rawUtilityMap),
  nonCustomers: NonCustomersSchema.parse(rawNonCustomers),
  boiSequence: BoiSequenceSchema.parse(rawBoiSequence),
};
