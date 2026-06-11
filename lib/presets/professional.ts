import type { Analysis } from "@/lib/schema";

export const professional: { en: Analysis; nl: Analysis } = {
  en: {
    v: 1,
    meta: {
      id: "preset-professional",
      company: "Professional services",
      industry:
        "Consulting and advisory firms competing on prestige, headcount, and hourly rates",
      language: "en",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "Answers in days, not decks in months",
        narrative:
          "The consulting industry competes on team size, methodology jargon, and brand prestige — a red ocean where every pitch deck looks identical. The blue ocean lies in **speed-to-insight and radical transparency**: delivering answers in days instead of months, showing exactly how conclusions are reached, and embedding AI to do the heavy analysis while humans focus on judgment.",
        redOceanTraits: [
          "Sells prestige and headcount, bills by the hour",
          "Methodology jargon engineered to create dependency",
          "Every pitch deck and every proposal looks identical",
        ],
        blueOceanThesis:
          "Speed-to-insight with radical transparency: first findings in five days, fixed fees, and an open analysis the client can see, question, and keep.",
      },
      canvas: {
        factors: [
          {
            name: "Brand prestige",
            rationale:
              "Buyers use the logo as insurance for the board — it de-risks the decision, not the answer.",
          },
          {
            name: "Team size",
            rationale:
              "Headcount signals seriousness but mostly inflates the invoice and slows the work.",
          },
          {
            name: "Methodology depth",
            rationale:
              "Rigor genuinely matters, but proprietary jargon often dresses up standard analysis as secret science.",
          },
          {
            name: "Speed to insight",
            rationale:
              "Decisions have windows; an answer that arrives in month four serves the consultant's revenue, not the client's choice.",
          },
          {
            name: "Pricing transparency",
            rationale:
              "Fixed, visible fees let clients buy outcomes instead of auditing hours.",
          },
          {
            name: "Tech integration",
            rationale:
              "AI now does the heavy analysis; firms that don't embed it are selling artisanal data-crunching at machine-age prices.",
          },
        ],
        industry: [4, 4, 4, 1, 1, 1],
        blueOcean: [2, 1, 3, 5, 5, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Disband the billable armies",
            detail: "Large on-site teams billing hours for data gathering.",
          },
          {
            title: "Retire proprietary jargon",
            detail:
              "Proprietary methodology jargon designed to create dependency.",
          },
        ],
        reduce: [
          {
            title: "Two people plus AI",
            detail:
              "Team size per engagement — from 6-person teams to 2-person + AI.",
          },
          {
            title: "De-emphasize the logo",
            detail: "Emphasis on brand prestige as a selling point.",
          },
        ],
        raise: [
          {
            title: "First findings in five days",
            detail:
              "Speed to insight: first findings within 5 business days, not 5 weeks.",
          },
          {
            title: "Fixed fees, clear milestones",
            detail:
              "Pricing transparency: fixed-fee engagements with clear deliverable milestones.",
          },
        ],
        create: [
          {
            title: "Open AI analysis layer",
            detail:
              "Clients see the data, the model, and the reasoning in real time.",
          },
          {
            title: "Two-week strategy sprints",
            detail:
              "Micro-engagements: 2-week strategic sprints instead of 6-month transformations.",
          },
          {
            title: "Open-source deliverables",
            detail:
              "Everything the client pays for, they own and understand completely.",
          },
        ],
      },
      moves: [
        {
          title: "Compress the timeline by 10x",
          body: "The average consulting engagement takes 3-6 months. Commit to first actionable insights in 5 business days. Use AI for data analysis, pattern recognition, and benchmarking — then add human judgment on top. Most clients would pay a premium for speed, not a discount.",
        },
        {
          title: "Open the black box",
          body: "Give clients real-time access to your analysis environment. Let them see how you reached your conclusions. This terrifies traditional consultants because it removes mystique — but it builds the kind of trust that generates referrals and repeat business.",
        },
        {
          title: "Replace retainers with sprints",
          body: "Offer 2-week strategic sprints with fixed deliverables and fixed pricing. No scope creep, no hourly billing surprises. Each sprint ends with a decision: continue, pivot, or stop. This gives clients control and reduces their perceived risk to near zero.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Your client just hired ChatGPT",
          insight:
            "Clients no longer compare you to rival firms — they compare you to doing it themselves with AI tools, market-data platforms, and a freelance expert on retainer. Those alternatives deliver 70% of the analysis at 5% of the price, instantly.",
          opportunity:
            "Stop selling analysis the client's own tools can produce. Sell the judgment layer on top of them — calibration, contrarian challenge, and accountability for the recommendation.",
        },
        {
          path: "strategic-groups",
          title: "Between McKinsey and a freelancer marketplace",
          insight:
            "The industry splits into prestige strategy houses selling assurance at €500k+, boutiques selling depth in a niche, and freelance platforms selling capacity by the day. Each group polishes its own trade-off; none combines senior judgment with platform-grade speed and price.",
          opportunity:
            "Occupy the unclaimed middle: partner-level judgment delivered in productized two-week sprints at a tenth of the strategy-house price.",
        },
        {
          path: "buyer-chain",
          title: "Sell to the operator, not just the board",
          insight:
            "The CEO signs, procurement negotiates, but the operating teams must live with the recommendations — and they're the ones who quietly shelve 60-70% of consulting decks. The industry optimizes for the signer, not the user.",
          opportunity:
            "Design deliverables the operating team can run without you — open models, documented reasoning, working tools — and the operators become your internal sales force.",
        },
        {
          path: "complementary-offerings",
          title: "The answer is 10% of the job",
          insight:
            "Around every strategy sits the unglamorous rest: implementation, change management, tooling, and the quarterly check that anyone actually did anything. Traditional firms hand over a deck precisely where the client's real problem begins.",
          opportunity:
            "Sell sprint-based follow-through: short implementation sprints, embedded dashboards in the client's own tools, and a standing 90-day review priced as a product.",
        },
        {
          path: "functional-emotional",
          title: "From insurance policy to instrument",
          insight:
            "Consulting is bought emotionally — the brand is cover for the executive if things go wrong — and the industry charges heavily for that comfort blanket. Functionally, much of the work is replicable analysis.",
          opportunity:
            "Flip to functional proof: open the analysis, show the reasoning, publish the track record. Clients who buy verifiable instruments instead of reassurance pay for results, not robes.",
        },
        {
          path: "time-trends",
          title: "AI eats the analyst pyramid",
          insight:
            "The leverage model — partners selling armies of juniors — collapses when AI does junior-grade research and modeling in minutes. Firms still billing for analysis hours are selling melting ice; the trend is irreversible and accelerating.",
          opportunity:
            "Be the first to price for the post-pyramid world: 2 people + AI per engagement, with the savings shared between margin and a price that opens the mid-market.",
        },
      ],
    },
    utilityMap: {
      cells: [
        { stage: "purchase", lever: "productivity", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "simplicity",
          status: "opportunity",
          note: "Fixed-fee sprints with clear milestones make buying strategy as simple as buying software — no day-rate spreadsheets to decode.",
        },
        { stage: "purchase", lever: "convenience", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "risk",
          status: "industry-focus",
          note: "Brand prestige exists to de-risk the buying decision — the industry's single deepest investment, and fully saturated.",
        },
        {
          stage: "purchase",
          lever: "fun-image",
          status: "industry-focus",
          note: "Logos, league tables, and alumni networks — image at the point of purchase is the industry's true product.",
        },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "productivity",
          status: "opportunity",
          note: "First findings within 5 business days — speed-to-insight as the headline promise instead of the kickoff workshop.",
        },
        { stage: "delivery", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "convenience",
          status: "blocked",
          note: "Engagements start when the partner's calendar allows and arrive staffed in 6-person blocks, on-site, on the firm's rhythm.",
        },
        { stage: "delivery", lever: "risk", status: "neutral", note: null },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "blocked",
          note: "Months of billable data gathering before the first insight — the clock runs on the client's budget while the client waits.",
        },
        {
          stage: "use",
          lever: "simplicity",
          status: "blocked",
          note: "Jargon-wrapped deliverables require the firm to interpret its own work — complexity as a retention strategy.",
        },
        {
          stage: "use",
          lever: "convenience",
          status: "opportunity",
          note: "Clients watch the analysis live in a shared environment — data, model, and reasoning in real time. The black box becomes a glass box.",
        },
        {
          stage: "use",
          lever: "risk",
          status: "industry-focus",
          note: "Methodology depth and QA layers exist to protect against being wrong — rigor priced into every billable hour.",
        },
        { stage: "use", lever: "fun-image", status: "neutral", note: null },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "productivity",
          status: "industry-focus",
          note: "Land-and-expand machinery: additional workstreams are where engagements are engineered to grow.",
        },
        { stage: "supplements", lever: "simplicity", status: "neutral", note: null },
        { stage: "supplements", lever: "convenience", status: "neutral", note: null },
        { stage: "supplements", lever: "risk", status: "neutral", note: null },
        { stage: "supplements", lever: "fun-image", status: "neutral", note: null },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        { stage: "maintenance", lever: "productivity", status: "neutral", note: null },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        { stage: "maintenance", lever: "convenience", status: "neutral", note: null },
        { stage: "maintenance", lever: "risk", status: "neutral", note: null },
        { stage: "maintenance", lever: "fun-image", status: "neutral", note: null },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        {
          stage: "disposal",
          lever: "productivity",
          status: "opportunity",
          note: "Open-source deliverables: everything the client paid for, they own, understand, and can rerun after the team leaves.",
        },
        {
          stage: "disposal",
          lever: "simplicity",
          status: "blocked",
          note: "Knowledge leaves with the team — clients can't run the models they paid for, by design.",
        },
        { stage: "disposal", lever: "convenience", status: "neutral", note: null },
        { stage: "disposal", lever: "risk", status: "neutral", note: null },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        { stage: "disposal", lever: "eco", status: "neutral", note: null },
      ],
      keyInsight:
        "The open space is time and ownership: nobody in the industry competes on how fast insight arrives or how completely the client keeps it when the engagement ends.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "The reluctant retainer clients",
          whoTheyAre:
            "Corporates who keep buying engagements because the board expects it, while privately doubting the pace, the price, and how much of the deck was templated.",
          whyTheyLeave:
            "Six months and seven figures for conclusions their own teams half-suspected — they're building in-house strategy teams to defect to.",
          unlockStrategy:
            "Two-week sprints with a built-in stop decision give them the judgment they value without the engagement they resent.",
          relativeSize: "medium",
        },
        {
          tier: "second",
          label: "The DIY mid-market",
          whoTheyAre:
            "Mid-sized companies who have looked at consulting and refused it — they run strategy with internal staff, AI tools, and the occasional freelancer.",
          whyTheyLeave:
            "Entry prices start where their entire annual strategy budget ends, and the model assumes a client organization big enough to absorb a 6-person team.",
          unlockStrategy:
            "A fixed-price two-week sprint at a fraction of traditional fees turns a refused category into an affordable product they can trial without board approval.",
          relativeSize: "large",
        },
        {
          tier: "third",
          label: "The never-considered SMBs",
          whoTheyAre:
            "Small businesses making pivotal decisions — pricing, expansion, succession — on instinct, because hiring a consultant has never crossed their mind as realistic.",
          whyTheyLeave:
            "The industry has never built an offer for them; consulting is structurally invisible below a certain revenue line.",
          unlockStrategy:
            "Productized diagnostics and subscription advisory — AI-driven analysis with periodic senior review at a monthly price comparable to their accounting software.",
          relativeSize: "large",
        },
      ],
    },
    boiSequence: {
      steps: [
        {
          gate: "utility",
          question:
            "Is there exceptional buyer utility in this business idea?",
          verdict: "pass",
          assessment:
            "Yes — compressing time-to-insight from months to 5 days attacks the deepest frustration buyers have with the category, and open deliverables remove the dependency they resent most. Both are felt immediately and are easy to verify.",
          actions: [],
        },
        {
          gate: "price",
          question:
            "Is the price easily accessible to the mass of buyers?",
          verdict: "pass",
          assessment:
            "Yes — a fixed-fee two-week sprint priced at a fraction of a traditional engagement opens the mid-market that current fee levels lock out, while the speed premium keeps margins healthy with existing corporate buyers.",
          actions: [],
        },
        {
          gate: "cost",
          question:
            "Can the cost target be met to profit at the strategic price?",
          verdict: "pass",
          assessment:
            "Yes — the cost side is the engine of the move: 2 people + AI replaces a 6-person team, cutting delivery cost by 60-70% while the sprint price drops less. Margins per engagement can exceed the traditional model.",
          actions: [],
        },
        {
          gate: "adoption",
          question:
            "What are the adoption hurdles, and are they addressed upfront?",
          verdict: "risk",
          assessment:
            "The hurdles are internal and procedural: partner compensation is wired to leverage and billable hours, so the firm's own incentives fight the model, and client procurement systems are built to compare day rates, not sprint outcomes.",
          actions: [
            "Restructure partner economics around sprint margin and client repeat-rate before launching, not after.",
            "Publish a standard sprint contract and milestone schema that procurement can approve as a fixed-price purchase.",
            "Run the sprint offer as a separate P&L so the legacy leverage business can't quietly starve it.",
          ],
        },
      ],
      overallVerdict: "go",
      conclusion:
        "Utility, price, and cost all clear decisively — the economics of 2-people-plus-AI are compelling. The only real hurdle is the firm's own incentive structure; fix partner economics upfront and this is a go.",
    },
  },
  nl: {
    v: 1,
    meta: {
      id: "preset-professional",
      company: "Professionele dienstverlening",
      industry:
        "Consultancy- en adviesbureaus die concurreren op prestige, headcount en uurtarieven",
      language: "nl",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "Antwoorden in dagen, geen decks in maanden",
        narrative:
          "De consultancysector concurreert op teamomvang, methodologisch jargon en merkprestige — een rode oceaan waarin elke pitchdeck er identiek uitziet. De blauwe oceaan ligt in **snelheid-naar-inzicht en radicale transparantie**: antwoorden leveren in dagen in plaats van maanden, exact laten zien hoe conclusies tot stand komen, en AI het zware analysewerk laten doen terwijl mensen zich richten op oordeelsvorming.",
        redOceanTraits: [
          "Verkoopt prestige en headcount, factureert per uur",
          "Methodologisch jargon ontworpen om afhankelijkheid te kweken",
          "Elke pitchdeck en elke offerte ziet er identiek uit",
        ],
        blueOceanThesis:
          "Snelheid-naar-inzicht met radicale transparantie: eerste bevindingen in vijf dagen, vaste prijzen, en een open analyse die de klant kan zien, bevragen en houden.",
      },
      canvas: {
        factors: [
          {
            name: "Merkprestige",
            rationale:
              "Kopers gebruiken het logo als verzekering richting de board — het de-risict de beslissing, niet het antwoord.",
          },
          {
            name: "Teamomvang",
            rationale:
              "Headcount straalt ernst uit, maar blaast vooral de factuur op en vertraagt het werk.",
          },
          {
            name: "Methodologie",
            rationale:
              "Degelijkheid doet er echt toe, maar eigen jargon verpakt standaardanalyse vaak als geheime wetenschap.",
          },
          {
            name: "Snelheid tot inzicht",
            rationale:
              "Beslissingen hebben een venster; een antwoord in maand vier dient de omzet van de consultant, niet de keuze van de klant.",
          },
          {
            name: "Prijstransparantie",
            rationale:
              "Vaste, zichtbare prijzen laten klanten uitkomsten kopen in plaats van uren controleren.",
          },
          {
            name: "Tech-integratie",
            rationale:
              "AI doet inmiddels het zware analysewerk; bureaus die het niet inbouwen verkopen ambachtelijk rekenwerk tegen machinetijdperk-prijzen.",
          },
        ],
        industry: [4, 4, 4, 1, 1, 1],
        blueOcean: [2, 1, 3, 5, 5, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Ontbind de declarabele legers",
            detail:
              "Grote teams op locatie die uren schrijven voor dataverzameling.",
          },
          {
            title: "Pensioneer het eigen jargon",
            detail:
              "Eigen methodologisch jargon, ontworpen om afhankelijkheid te creëren.",
          },
        ],
        reduce: [
          {
            title: "Twee mensen plus AI",
            detail:
              "Teamomvang per opdracht — van teams van 6 naar 2 personen + AI.",
          },
          {
            title: "Minder leunen op het logo",
            detail: "De nadruk op merkprestige als verkoopargument.",
          },
        ],
        raise: [
          {
            title: "Eerste bevindingen in vijf dagen",
            detail:
              "Snelheid tot inzicht: eerste bevindingen binnen 5 werkdagen, niet 5 weken.",
          },
          {
            title: "Vaste prijzen, heldere mijlpalen",
            detail:
              "Prijstransparantie: opdrachten tegen vaste prijs met duidelijke opleveringsmijlpalen.",
          },
        ],
        create: [
          {
            title: "Open AI-analyselaag",
            detail:
              "Klanten zien de data, het model en de redenering in realtime.",
          },
          {
            title: "Strategiesprints van twee weken",
            detail:
              "Micro-opdrachten: strategische sprints van 2 weken in plaats van transformaties van 6 maanden.",
          },
          {
            title: "Open-source opleveringen",
            detail:
              "Alles waarvoor de klant betaalt, bezit en begrijpt hij volledig.",
          },
        ],
      },
      moves: [
        {
          title: "Comprimeer de doorlooptijd met factor 10",
          body: "De gemiddelde consultancyopdracht duurt 3-6 maanden. Committeer je aan eerste bruikbare inzichten binnen 5 werkdagen. Zet AI in voor data-analyse, patroonherkenning en benchmarking — en voeg daar menselijke oordeelsvorming aan toe. De meeste klanten betalen graag een premie voor snelheid, geen korting.",
        },
        {
          title: "Open de black box",
          body: "Geef klanten realtime toegang tot je analyseomgeving. Laat ze zien hoe je tot je conclusies kwam. Traditionele consultants gruwen hiervan omdat het de mystiek wegneemt — maar het bouwt het soort vertrouwen dat doorverwijzingen en vervolgopdrachten oplevert.",
        },
        {
          title: "Vervang retainers door sprints",
          body: "Bied strategische sprints van 2 weken met vaste opleveringen en vaste prijzen. Geen scope creep, geen verrassingen op de urenfactuur. Elke sprint eindigt met een beslissing: doorgaan, bijsturen of stoppen. Dat geeft klanten regie en reduceert hun gevoelde risico tot vrijwel nul.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Je klant heeft net ChatGPT ingehuurd",
          insight:
            "Klanten vergelijken je niet langer met concurrerende bureaus — ze vergelijken je met het zelf doen, met AI-tools, marktdataplatformen en een freelance expert op afroep. Die alternatieven leveren 70% van de analyse tegen 5% van de prijs, en wel meteen.",
          opportunity:
            "Stop met analyse verkopen die de tools van de klant zelf kunnen produceren. Verkoop de oordeelslaag erbovenop — kalibratie, tegendraadse toetsing en verantwoordelijkheid voor de aanbeveling.",
        },
        {
          path: "strategic-groups",
          title: "Tussen McKinsey en een freelancemarktplaats",
          insight:
            "De sector splitst in prestigieuze strategiehuizen die zekerheid verkopen vanaf €500k+, boutiques die diepgang in een niche verkopen, en freelanceplatformen die capaciteit per dag verkopen. Elke groep poetst zijn eigen afruil op; niemand combineert senior oordeel met platform-snelheid en -prijs.",
          opportunity:
            "Bezet het onopgeëiste midden: oordeel op partnerniveau, geleverd in geproductiseerde sprints van twee weken tegen een tiende van de strategiehuis-prijs.",
        },
        {
          path: "buyer-chain",
          title: "Verkoop aan de uitvoerder, niet alleen de board",
          insight:
            "De CEO tekent, inkoop onderhandelt, maar de operationele teams moeten met de aanbevelingen leven — en zij zijn het die 60-70% van de consultancydecks stilletjes in de la leggen. De sector optimaliseert voor de ondertekenaar, niet voor de gebruiker.",
          opportunity:
            "Ontwerp opleveringen die het operationele team zonder jou kan draaien — open modellen, gedocumenteerde redeneringen, werkende tools — en de uitvoerders worden je interne verkoopapparaat.",
        },
        {
          path: "complementary-offerings",
          title: "Het antwoord is 10% van de klus",
          insight:
            "Rond elke strategie hangt de onglamoureuze rest: implementatie, verandermanagement, tooling, en de kwartaalcheck of er überhaupt iets is gedaan. Traditionele bureaus overhandigen een deck precies waar het echte probleem van de klant begint.",
          opportunity:
            "Verkoop sprintgebaseerde opvolging: korte implementatiesprints, dashboards ingebed in de eigen tools van de klant, en een vaste 90-dagenreview geprijsd als product.",
        },
        {
          path: "functional-emotional",
          title: "Van verzekeringspolis naar instrument",
          insight:
            "Consultancy wordt emotioneel gekocht — het merk is rugdekking voor de bestuurder als het misgaat — en de sector rekent fors voor die deken van comfort. Functioneel is veel van het werk reproduceerbare analyse.",
          opportunity:
            "Kantel naar functioneel bewijs: open de analyse, toon de redenering, publiceer het trackrecord. Klanten die verifieerbare instrumenten kopen in plaats van geruststelling, betalen voor resultaat, niet voor toga's.",
        },
        {
          path: "time-trends",
          title: "AI vreet de analistenpiramide op",
          insight:
            "Het hefboommodel — partners die legers junioren verkopen — stort in zodra AI junior-onderzoek en modellering in minuten doet. Bureaus die nog analyse-uren factureren verkopen smeltend ijs; de trend is onomkeerbaar en versnelt.",
          opportunity:
            "Wees de eerste die prijst voor de wereld ná de piramide: 2 mensen + AI per opdracht, met de besparing verdeeld tussen marge en een prijs die de mid-market opent.",
        },
      ],
    },
    utilityMap: {
      cells: [
        { stage: "purchase", lever: "productivity", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "simplicity",
          status: "opportunity",
          note: "Sprints tegen vaste prijs met heldere mijlpalen maken strategie kopen zo simpel als software kopen — geen dagtarief-spreadsheets om te ontcijferen.",
        },
        { stage: "purchase", lever: "convenience", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "risk",
          status: "industry-focus",
          note: "Merkprestige bestaat om de koopbeslissing te de-risken — de diepste investering van de sector, en volledig verzadigd.",
        },
        {
          stage: "purchase",
          lever: "fun-image",
          status: "industry-focus",
          note: "Logo's, ranglijsten en alumninetwerken — imago op het koopmoment is het werkelijke product van de sector.",
        },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "productivity",
          status: "opportunity",
          note: "Eerste bevindingen binnen 5 werkdagen — snelheid-naar-inzicht als de hoofdbelofte in plaats van de kickoff-workshop.",
        },
        { stage: "delivery", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "convenience",
          status: "blocked",
          note: "Opdrachten starten wanneer de agenda van de partner het toelaat en arriveren bemand in blokken van 6, op locatie, op het ritme van het bureau.",
        },
        { stage: "delivery", lever: "risk", status: "neutral", note: null },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "blocked",
          note: "Maanden declarabele dataverzameling vóór het eerste inzicht — de klok loopt op het budget van de klant terwijl de klant wacht.",
        },
        {
          stage: "use",
          lever: "simplicity",
          status: "blocked",
          note: "In jargon verpakte opleveringen vereisen dat het bureau zijn eigen werk komt uitleggen — complexiteit als retentiestrategie.",
        },
        {
          stage: "use",
          lever: "convenience",
          status: "opportunity",
          note: "Klanten kijken live mee in een gedeelde analyseomgeving — data, model en redenering in realtime. De black box wordt een glazen doos.",
        },
        {
          stage: "use",
          lever: "risk",
          status: "industry-focus",
          note: "Methodologische diepgang en QA-lagen bestaan om ongelijk te voorkomen — degelijkheid ingeprijsd in elk declarabel uur.",
        },
        { stage: "use", lever: "fun-image", status: "neutral", note: null },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "productivity",
          status: "industry-focus",
          note: "Land-and-expand-machinerie: extra werkstromen zijn waar opdrachten ontworpen zijn om te groeien.",
        },
        { stage: "supplements", lever: "simplicity", status: "neutral", note: null },
        { stage: "supplements", lever: "convenience", status: "neutral", note: null },
        { stage: "supplements", lever: "risk", status: "neutral", note: null },
        { stage: "supplements", lever: "fun-image", status: "neutral", note: null },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        { stage: "maintenance", lever: "productivity", status: "neutral", note: null },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        { stage: "maintenance", lever: "convenience", status: "neutral", note: null },
        { stage: "maintenance", lever: "risk", status: "neutral", note: null },
        { stage: "maintenance", lever: "fun-image", status: "neutral", note: null },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        {
          stage: "disposal",
          lever: "productivity",
          status: "opportunity",
          note: "Open-source opleveringen: alles waarvoor de klant betaalde, bezit, begrijpt en kan hij opnieuw draaien nadat het team vertrekt.",
        },
        {
          stage: "disposal",
          lever: "simplicity",
          status: "blocked",
          note: "Kennis vertrekt met het team — klanten kunnen de modellen waarvoor ze betaalden niet zelf draaien, en dat is bewust zo.",
        },
        { stage: "disposal", lever: "convenience", status: "neutral", note: null },
        { stage: "disposal", lever: "risk", status: "neutral", note: null },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        { stage: "disposal", lever: "eco", status: "neutral", note: null },
      ],
      keyInsight:
        "De open ruimte is tijd en eigenaarschap: niemand in de sector concurreert op hoe snel inzicht arriveert of hoe volledig de klant het houdt wanneer de opdracht eindigt.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "De aarzelende retainerklanten",
          whoTheyAre:
            "Corporates die opdrachten blijven kopen omdat de board het verwacht, terwijl ze in stilte twijfelen aan het tempo, de prijs en hoeveel van de deck uit een sjabloon kwam.",
          whyTheyLeave:
            "Zes maanden en zeven cijfers voor conclusies die hun eigen teams al half vermoedden — ze bouwen interne strategieteams om naartoe te deserteren.",
          unlockStrategy:
            "Sprints van twee weken met een ingebouwd stopmoment geven ze het oordeel dat ze waarderen, zonder de opdracht waar ze zich aan ergeren.",
          relativeSize: "medium",
        },
        {
          tier: "second",
          label: "De doe-het-zelf mid-market",
          whoTheyAre:
            "Middelgrote bedrijven die consultancy hebben bekeken en afgewezen — zij doen strategie met intern personeel, AI-tools en af en toe een freelancer.",
          whyTheyLeave:
            "Instapprijzen beginnen waar hun volledige jaarlijkse strategiebudget eindigt, en het model veronderstelt een klantorganisatie die groot genoeg is om een team van 6 te absorberen.",
          unlockStrategy:
            "Een sprint van twee weken tegen vaste prijs, voor een fractie van de traditionele tarieven, maakt van een afgewezen categorie een betaalbaar product dat ze zonder board-goedkeuring kunnen uitproberen.",
          relativeSize: "large",
        },
        {
          tier: "third",
          label: "De nooit-overwogen mkb'ers",
          whoTheyAre:
            "Kleine bedrijven die cruciale beslissingen — prijsstelling, expansie, opvolging — op gevoel nemen, omdat een consultant inhuren nooit als realistisch in ze is opgekomen.",
          whyTheyLeave:
            "De sector heeft nooit een aanbod voor ze gebouwd; onder een bepaalde omzetgrens is consultancy structureel onzichtbaar.",
          unlockStrategy:
            "Geproductiseerde diagnostiek en abonnementsadvies — AI-gedreven analyse met periodieke senior review tegen een maandprijs vergelijkbaar met hun boekhoudsoftware.",
          relativeSize: "large",
        },
      ],
    },
    boiSequence: {
      steps: [
        {
          gate: "utility",
          question:
            "Biedt dit businessidee uitzonderlijke waarde voor de koper?",
          verdict: "pass",
          assessment:
            "Ja — de tijd-naar-inzicht comprimeren van maanden naar 5 dagen raakt de diepste frustratie van kopers met de categorie, en open opleveringen nemen de afhankelijkheid weg waar ze zich het meest aan storen. Beide zijn direct voelbaar en eenvoudig te verifiëren.",
          actions: [],
        },
        {
          gate: "price",
          question:
            "Is de prijs goed toegankelijk voor de massa van de kopers?",
          verdict: "pass",
          assessment:
            "Ja — een sprint van twee weken tegen vaste prijs, voor een fractie van een traditionele opdracht, opent de mid-market die de huidige tarieven buitensluit, terwijl de snelheidspremie de marges bij bestaande corporate klanten gezond houdt.",
          actions: [],
        },
        {
          gate: "cost",
          question:
            "Is het kostendoel haalbaar om winstgevend te zijn tegen de strategische prijs?",
          verdict: "pass",
          assessment:
            "Ja — de kostenkant is de motor van de zet: 2 mensen + AI vervangt een team van 6 en verlaagt de leverkosten met 60-70%, terwijl de sprintprijs minder hard daalt. De marge per opdracht kan het traditionele model overtreffen.",
          actions: [],
        },
        {
          gate: "adoption",
          question:
            "Wat zijn de adoptiehordes, en worden ze vooraf aangepakt?",
          verdict: "risk",
          assessment:
            "De hordes zijn intern en procedureel: partnerbeloning hangt aan hefboom en declarabele uren, dus de eigen prikkels van het bureau vechten tegen het model, en de inkoopsystemen van klanten zijn gebouwd om dagtarieven te vergelijken, geen sprintuitkomsten.",
          actions: [
            "Herstructureer de partnereconomie rond sprintmarge en herhaalaankopen van klanten vóór de lancering, niet erna.",
            "Publiceer een standaard sprintcontract en mijlpalenschema dat inkoop als vaste-prijsaankoop kan goedkeuren.",
            "Draai het sprintaanbod als aparte P&L zodat het legacy-hefboombedrijf het niet stilletjes kan uithongeren.",
          ],
        },
      ],
      overallVerdict: "go",
      conclusion:
        "Utiliteit, prijs en kosten klaren alle drie overtuigend — de economie van 2-mensen-plus-AI is dwingend. De enige echte horde is de eigen prikkelstructuur van het bureau; repareer de partnereconomie vooraf en dit is een go.",
    },
  },
};
