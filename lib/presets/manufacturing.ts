import type { Analysis } from "@/lib/schema";

export const manufacturing: { en: Analysis; nl: Analysis } = {
  en: {
    v: 1,
    meta: {
      id: "preset-manufacturing",
      company: "Manufacturing & industrial",
      industry:
        "B2B manufacturers competing on unit cost while customers demand flexibility",
      language: "en",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "The catalog is dead, long live the configurator",
        narrative:
          "Industrial manufacturers are locked in a red ocean of unit cost optimization, MOQs, and long lead times. Buyers tolerate this because alternatives seem equally rigid. The blue ocean lies in **mass customization with digital-first ordering**: giving buyers the configurability of a bespoke shop with the reliability and pricing of a scaled manufacturer.",
        redOceanTraits: [
          "Races to the bottom on unit cost while buyers beg for flexibility",
          "MOQs and 6-8 week lead windows treated as laws of physics",
          "Quotes arrive by PDF, five days after the request",
        ],
        blueOceanThesis:
          "Mass customization with digital-first ordering: the configurability of a bespoke shop, delivered with the reliability and pricing of a scaled manufacturer.",
      },
      canvas: {
        factors: [
          {
            name: "Unit cost",
            rationale:
              "The default battleground — buyers care, but past parity it stops deciding deals.",
          },
          {
            name: "Minimum order qty",
            rationale:
              "High MOQs shut out the mid-market buyers who would pay the best margins.",
          },
          {
            name: "Lead time",
            rationale:
              "Buyers plan entire supply chains around delivery; predictability beats raw speed.",
          },
          {
            name: "Customization depth",
            rationale:
              "Buyers increasingly need fit-for-purpose parts, not catalog-adjacent compromises.",
          },
          {
            name: "After-sales support",
            rationale:
              "Downtime costs the buyer far more than the part; support quality decides the repeat order.",
          },
          {
            name: "Digital ordering",
            rationale:
              "B2B buyers live in consumer e-commerce after hours; a 5-day quote loses to an instant one.",
          },
        ],
        industry: [4, 2, 2, 2, 2, 1],
        blueOcean: [3, 4, 4, 5, 4, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Drop the mid-market-killing MOQs",
            detail:
              "High minimum order quantities that shut out mid-market buyers.",
          },
          {
            title: "Scrap the 5-day PDF quote",
            detail:
              "Paper-based quoting processes with 5-10 day response times.",
          },
        ],
        reduce: [
          {
            title: "Stop worshipping unit cost",
            detail:
              "Obsessive unit cost optimization at the expense of flexibility.",
          },
          {
            title: "Loosen the fixed catalog",
            detail:
              "The standard catalog that forces buyers into predefined configurations.",
          },
        ],
        raise: [
          {
            title: "Guaranteed delivery dates",
            detail:
              "Lead time predictability: from estimated windows to guaranteed delivery dates.",
          },
          {
            title: "Proactive maintenance alerts",
            detail:
              "After-sales support from reactive ticket systems to proactive maintenance alerts.",
          },
        ],
        create: [
          {
            title: "Real-time 3D configurator",
            detail:
              "An online product configurator with real-time pricing and 3D preview.",
          },
          {
            title: "Low-MOQ flexible cells",
            detail:
              "Low-MOQ production runs enabled by flexible manufacturing cells.",
          },
          {
            title: "Digital twin order tracking",
            detail:
              "Digital twin integration: customers track their order through production in real time.",
          },
        ],
      },
      moves: [
        {
          title: "Make ordering feel like e-commerce",
          body: "Build a product configurator where buyers select specs, see pricing instantly, and place orders without speaking to a sales rep. The manufacturing industry is 15 years behind consumer e-commerce. Close that gap and you eliminate your biggest source of friction.",
        },
        {
          title: "Turn MOQ from barrier to advantage",
          body: "Use flexible manufacturing cells to offer MOQs of 1-10 units at viable margins. The mid-market segment — too large for bespoke, too small for traditional MOQs — is massively underserved. Own it.",
        },
        {
          title: "Guarantee the date, not just the product",
          body: "Shift from quoting delivery windows to guaranteeing specific dates with penalties for delays. In an industry where everyone says 6-8 weeks, the manufacturer who says March 14 — and means it — wins every deal.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Buyers benchmark you against Amazon, not rivals",
          insight:
            "Your buyer configures a laptop online at lunch and waits 5 days for your PDF quote in the afternoon. The real alternatives aren't competing plants — they're 3D-print services, local job shops, and the buyer redesigning the part around a standard component to avoid you entirely.",
          opportunity:
            "Import the e-commerce standard wholesale: configure, price, and order in one session — the first manufacturer to feel like a webshop owns the comparison.",
        },
        {
          path: "strategic-groups",
          title: "Between the job shop and the giant",
          insight:
            "The industry splits into bespoke job shops — flexible, expensive, unscalable — and volume manufacturers — cheap, rigid, gated by MOQs. Each group competes harder within its own logic while the space between them stays empty.",
          opportunity:
            "Own the gap with flexible cells: bespoke-level configurability at volume-level reliability and a price between the two — the trade-off both groups treat as impossible.",
        },
        {
          path: "buyer-chain",
          title: "Design for the engineer, not procurement",
          insight:
            "Procurement signs the PO on price, but the design engineer specs the part months earlier, and operations lives with the lead times. The industry sells to procurement and ignores the two people who actually decide and suffer.",
          opportunity:
            "A configurator with CAD export and instant pricing wins the engineer at spec-in time — by the time the RFQ exists, the decision is already made in your favor.",
        },
        {
          path: "complementary-offerings",
          title: "The part is 40% of the buyer's problem",
          insight:
            "Around every order sits the buyer's real job: production planning, logistics, installation, spares, and the downtime that follows a failure. The industry ships a crate and considers the transaction complete.",
          opportunity:
            "Digital twin tracking plus proactive maintenance alerts turn a parts supplier into an uptime partner — and uptime is priced very differently than steel.",
        },
        {
          path: "functional-emotional",
          title: "Sell certainty, not steel",
          insight:
            "B2B manufacturing presents itself as purely functional — specs, tolerances, unit prices — but every buyer carries the emotional load of a production line that must not stop. Nobody in the industry sells to that anxiety.",
          opportunity:
            "Guaranteed delivery dates with penalty clauses convert the buyer's anxiety into preference: in a market of estimates, the one who commits wins the deal and the loyalty.",
        },
        {
          path: "time-trends",
          title: "Reshoring rewards the flexible factory",
          insight:
            "Supply-chain shocks and reshoring are pushing buyers from far-shore volume contracts toward nearby, responsive suppliers, while flexible automation keeps cutting the cost of small runs. The economics of rigidity are expiring on a visible schedule.",
          opportunity:
            "Position flexible cells and low MOQs as the de-risking play: capture the buyers re-sourcing from distant volume suppliers before competitors retool.",
        },
      ],
    },
    utilityMap: {
      cells: [
        {
          stage: "purchase",
          lever: "productivity",
          status: "opportunity",
          note: "An online configurator with real-time pricing and 3D preview collapses a 5-day RFQ cycle into a 5-minute order.",
        },
        {
          stage: "purchase",
          lever: "simplicity",
          status: "blocked",
          note: "Fixed catalogs force buyers to redesign their need around your SKU list instead of the other way around.",
        },
        {
          stage: "purchase",
          lever: "convenience",
          status: "blocked",
          note: "Quoting takes 5-10 days by PDF and phone, and ordering requires a sales rep during office hours.",
        },
        {
          stage: "purchase",
          lever: "risk",
          status: "industry-focus",
          note: "Certifications, audits, and references dominate supplier qualification — saturated territory where everyone scores the same.",
        },
        { stage: "purchase", lever: "fun-image", status: "neutral", note: null },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "productivity",
          status: "blocked",
          note: "6-8 week lead times force buyers to hold inventory and plan around your factory instead of their demand.",
        },
        { stage: "delivery", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "convenience",
          status: "opportunity",
          note: "Digital twin tracking: customers watch their order move through production in real time instead of calling for status.",
        },
        {
          stage: "delivery",
          lever: "risk",
          status: "opportunity",
          note: "Guaranteed delivery dates with penalty clauses — in a market of estimated windows, certainty wins every deal.",
        },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "industry-focus",
          note: "Output per machine-hour and cost per unit — the industry's core obsession, optimized to the decimal.",
        },
        { stage: "use", lever: "simplicity", status: "neutral", note: null },
        { stage: "use", lever: "convenience", status: "neutral", note: null },
        {
          stage: "use",
          lever: "risk",
          status: "industry-focus",
          note: "Quality systems, tolerances, and traceability are table stakes the whole industry already competes on.",
        },
        { stage: "use", lever: "fun-image", status: "neutral", note: null },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "productivity",
          status: "industry-focus",
          note: "Spare parts and consumables are run as a captive profit center, not as buyer utility.",
        },
        { stage: "supplements", lever: "simplicity", status: "neutral", note: null },
        { stage: "supplements", lever: "convenience", status: "neutral", note: null },
        { stage: "supplements", lever: "risk", status: "neutral", note: null },
        { stage: "supplements", lever: "fun-image", status: "neutral", note: null },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "productivity",
          status: "opportunity",
          note: "Proactive maintenance alerts prevent the downtime instead of billing for the repair — uptime as the product.",
        },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "convenience",
          status: "blocked",
          note: "Reactive ticket systems mean support starts only after the line has already stopped.",
        },
        { stage: "maintenance", lever: "risk", status: "neutral", note: null },
        { stage: "maintenance", lever: "fun-image", status: "neutral", note: null },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        { stage: "disposal", lever: "productivity", status: "neutral", note: null },
        { stage: "disposal", lever: "simplicity", status: "neutral", note: null },
        { stage: "disposal", lever: "convenience", status: "neutral", note: null },
        { stage: "disposal", lever: "risk", status: "neutral", note: null },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        { stage: "disposal", lever: "eco", status: "neutral", note: null },
      ],
      keyInsight:
        "Purchase and delivery are the wide-open flank: the industry perfects the factory floor while the buyer's experience before and after it is still stuck in the fax era.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "The frustrated mid-market buyers",
          whoTheyAre:
            "Companies that painfully scrape together MOQ-sized orders and absorb 6-8 week windows because every supplier looks equally rigid.",
          whyTheyLeave:
            "Excess inventory, dead capital, and planning built around the supplier's factory — they'll jump to the first credibly flexible alternative.",
          unlockStrategy:
            "Low-MOQ runs plus the instant configurator remove both pains at once; guaranteed dates make the switch feel safe.",
          relativeSize: "medium",
        },
        {
          tier: "second",
          label: "The job-shop refugees",
          whoTheyAre:
            "Buyers who have refused scaled manufacturers altogether and pay local job shops or 3D-print services a premium for flexibility.",
          whyTheyLeave:
            "They concluded that scale and flexibility are mutually exclusive — MOQs and fixed catalogs told them they weren't welcome.",
          unlockStrategy:
            "Bespoke-level configurability at scaled-manufacturer pricing dissolves the trade-off that pushed them away; let the configurator quote what the job shop can't.",
          relativeSize: "medium",
        },
        {
          tier: "third",
          label: "The over-builders in-house",
          whoTheyAre:
            "Companies machining parts internally or designing products around standard components because custom sourcing never seemed realistic at their volumes.",
          whyTheyLeave:
            "Custom manufacturing was never offered to them as an option — at MOQ 500 and a 5-day quote, the category is invisible below a certain order size.",
          unlockStrategy:
            "A 5-minute configurator quote with an MOQ of 1 makes outsourcing thinkable for the first time — convert their make-vs-buy math with one instant price.",
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
            "Yes — instant configure-and-order, MOQs of 1-10, and guaranteed dates each remove a pain buyers have stopped even complaining about. Together they redefine what buying industrial parts feels like.",
          actions: [],
        },
        {
          gate: "price",
          question:
            "Is the price easily accessible to the mass of buyers?",
          verdict: "pass",
          assessment:
            "Yes — configurator pricing at a modest premium over catalog rates sits far below bespoke job-shop quotes, exactly where the underserved mid-market budgets. Buyers happily trade a few percent of unit cost for flexibility and certainty.",
          actions: [],
        },
        {
          gate: "cost",
          question:
            "Can the cost target be met to profit at the strategic price?",
          verdict: "risk",
          assessment:
            "This is the hard gate. Flexible cells and a real CPQ configurator demand serious capex, and low-MOQ economics live or die on changeover times. If setup minutes don't fall as planned, small runs erode margin instead of building it.",
          actions: [
            "Start with one flexible cell on the 20% of SKUs with the highest small-order demand; expand only on proven cell-level margins.",
            "License an existing CPQ/configurator platform instead of building one — buy the front end, invest the capex in the cells.",
            "Set a hard changeover-time target per cell and gate further rollout on hitting it.",
          ],
        },
        {
          gate: "adoption",
          question:
            "What are the adoption hurdles, and are they addressed upfront?",
          verdict: "risk",
          assessment:
            "The sales force will read the configurator as its own replacement, and distribution partners will read direct digital ordering as disintermediation. Both can quietly sabotage the rollout if their economics aren't settled first.",
          actions: [
            "Pay sales commission on configurator orders in their territory — make the machine their best junior, not their rival.",
            "Give channel partners a branded configurator instance with their own pricing, keeping them in the flow instead of around it.",
          ],
        },
      ],
      overallVerdict: "go",
      conclusion:
        "Utility and price clear convincingly; cost and adoption are real risks but both are sequencing problems, not structural ones. Go — staged cell by cell, with sales and channel economics fixed before the configurator ships.",
    },
  },
  nl: {
    v: 1,
    meta: {
      id: "preset-manufacturing",
      company: "Maakindustrie & industrie",
      industry:
        "B2B-fabrikanten die concurreren op stukkosten terwijl klanten flexibiliteit eisen",
      language: "nl",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "De catalogus is dood, leve de configurator",
        narrative:
          "Industriële fabrikanten zitten gevangen in een rode oceaan van stukkostenoptimalisatie, minimale orderomvang en lange levertijden. Kopers tolereren dit omdat alternatieven even star lijken. De blauwe oceaan ligt in **massamaatwerk met digital-first bestellen**: kopers de configureerbaarheid van een maatwerkatelier geven, met de betrouwbaarheid en prijsstelling van een fabrikant op schaal.",
        redOceanTraits: [
          "Race naar de bodem op stukkosten terwijl kopers om flexibiliteit smeken",
          "MOQ's en levervensters van 6-8 weken gelden als natuurwetten",
          "Offertes komen per pdf, vijf dagen na de aanvraag",
        ],
        blueOceanThesis:
          "Massamaatwerk met digital-first bestellen: de configureerbaarheid van een maatwerkatelier, geleverd met de betrouwbaarheid en prijsstelling van een fabrikant op schaal.",
      },
      canvas: {
        factors: [
          {
            name: "Stukkosten",
            rationale:
              "Het standaard strijdtoneel — kopers letten erop, maar voorbij pariteit beslist het geen deals meer.",
          },
          {
            name: "Minimale orderomvang",
            rationale:
              "Hoge MOQ's sluiten de mid-market kopers buiten die juist de beste marges zouden betalen.",
          },
          {
            name: "Levertijd",
            rationale:
              "Kopers plannen complete supply chains rond de levering; voorspelbaarheid verslaat pure snelheid.",
          },
          {
            name: "Maatwerkdiepte",
            rationale:
              "Kopers hebben steeds vaker fit-for-purpose onderdelen nodig, geen compromissen die op de catalogus lijken.",
          },
          {
            name: "After-sales support",
            rationale:
              "Stilstand kost de koper veel meer dan het onderdeel; supportkwaliteit beslist over de vervolgorder.",
          },
          {
            name: "Digitaal bestellen",
            rationale:
              "B2B-kopers leven 's avonds in consumenten-e-commerce; een offerte van 5 dagen verliest van een directe.",
          },
        ],
        industry: [4, 2, 2, 2, 2, 1],
        blueOcean: [3, 4, 4, 5, 4, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Schrap de mid-market-dodende MOQ's",
            detail:
              "Hoge minimale orderhoeveelheden die mid-market kopers buitensluiten.",
          },
          {
            title: "Weg met de 5-dagen-pdf-offerte",
            detail:
              "Papieren offerteprocessen met reactietijden van 5-10 dagen.",
          },
        ],
        reduce: [
          {
            title: "Stop de stukkostenverering",
            detail:
              "Obsessieve stukkostenoptimalisatie ten koste van flexibiliteit.",
          },
          {
            title: "Maak de vaste catalogus losser",
            detail:
              "De standaardcatalogus die kopers in voorgedefinieerde configuraties dwingt.",
          },
        ],
        raise: [
          {
            title: "Gegarandeerde leverdata",
            detail:
              "Voorspelbaarheid van levertijd: van geschatte vensters naar gegarandeerde leverdata.",
          },
          {
            title: "Proactieve onderhoudssignalen",
            detail:
              "After-sales support van reactieve ticketsystemen naar proactieve onderhoudsmeldingen.",
          },
        ],
        create: [
          {
            title: "Realtime 3D-configurator",
            detail:
              "Een online productconfigurator met realtime prijzen en 3D-preview.",
          },
          {
            title: "Lage-MOQ flexibele cellen",
            detail:
              "Productieruns met lage MOQ, mogelijk gemaakt door flexibele productiecellen.",
          },
          {
            title: "Digital twin ordertracking",
            detail:
              "Digital twin-integratie: klanten volgen hun order in realtime door de productie.",
          },
        ],
      },
      moves: [
        {
          title: "Laat bestellen voelen als e-commerce",
          body: "Bouw een productconfigurator waarin kopers specificaties kiezen, direct de prijs zien en bestellen zonder een verkoper te spreken. De maakindustrie loopt 15 jaar achter op consumenten-e-commerce. Dicht die kloof en je elimineert je grootste bron van frictie.",
        },
        {
          title: "Maak van MOQ een voordeel in plaats van een barrière",
          body: "Gebruik flexibele productiecellen om MOQ's van 1-10 stuks aan te bieden tegen rendabele marges. Het mid-market segment — te groot voor maatwerk, te klein voor traditionele MOQ's — wordt massaal onderbediend. Claim het.",
        },
        {
          title: "Garandeer de datum, niet alleen het product",
          body: "Verschuif van levervensters offreren naar specifieke data garanderen, met boetes bij vertraging. In een sector waar iedereen 6-8 weken zegt, wint de fabrikant die 14 maart zegt — en het meent — elke deal.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Kopers benchmarken je tegen Amazon, niet tegen rivalen",
          insight:
            "Je koper configureert tijdens de lunch online een laptop en wacht 's middags 5 dagen op jouw pdf-offerte. De echte alternatieven zijn geen concurrerende fabrieken — het zijn 3D-printdiensten, lokale ateliers, en de koper die het onderdeel herontwerpt rond een standaardcomponent om jou volledig te omzeilen.",
          opportunity:
            "Importeer de e-commercestandaard integraal: configureren, prijzen en bestellen in één sessie — de eerste fabrikant die aanvoelt als een webshop wint de vergelijking.",
        },
        {
          path: "strategic-groups",
          title: "Tussen het atelier en de gigant",
          insight:
            "De sector splitst in maatwerkateliers — flexibel, duur, niet schaalbaar — en volumefabrikanten — goedkoop, star, afgegrendeld met MOQ's. Elke groep concurreert harder binnen zijn eigen logica terwijl de ruimte ertussen leeg blijft.",
          opportunity:
            "Claim het gat met flexibele cellen: maatwerk-configureerbaarheid met volume-betrouwbaarheid en een prijs daartussenin — de afruil die beide groepen onmogelijk noemen.",
        },
        {
          path: "buyer-chain",
          title: "Ontwerp voor de engineer, niet voor inkoop",
          insight:
            "Inkoop tekent de order op prijs, maar de design engineer specificeert het onderdeel maanden eerder, en operations leeft met de levertijden. De sector verkoopt aan inkoop en negeert de twee mensen die werkelijk beslissen en lijden.",
          opportunity:
            "Een configurator met CAD-export en directe prijzen wint de engineer op het spec-in-moment — tegen de tijd dat de RFQ bestaat, is de beslissing al in jouw voordeel gevallen.",
        },
        {
          path: "complementary-offerings",
          title: "Het onderdeel is 40% van het probleem van de koper",
          insight:
            "Rond elke order zit de echte klus van de koper: productieplanning, logistiek, installatie, reserveonderdelen en de stilstand na een storing. De sector verstuurt een krat en beschouwt de transactie als afgerond.",
          opportunity:
            "Digital twin-tracking plus proactieve onderhoudsmeldingen maken van een onderdelenleverancier een uptime-partner — en uptime wordt heel anders geprijsd dan staal.",
        },
        {
          path: "functional-emotional",
          title: "Verkoop zekerheid, geen staal",
          insight:
            "B2B-productie presenteert zich als puur functioneel — specs, toleranties, stukprijzen — maar elke koper draagt de emotionele last van een productielijn die niet stil mag vallen. Niemand in de sector verkoopt aan die angst.",
          opportunity:
            "Gegarandeerde leverdata met boeteclausules zetten de angst van de koper om in voorkeur: in een markt van schattingen wint degene die zich vastlegt de deal én de loyaliteit.",
        },
        {
          path: "time-trends",
          title: "Reshoring beloont de flexibele fabriek",
          insight:
            "Supply-chain-schokken en reshoring duwen kopers van far-shore volumecontracten naar nabije, responsieve leveranciers, terwijl flexibele automatisering de kosten van kleine series blijft drukken. De economie van starheid verloopt volgens een zichtbaar schema.",
          opportunity:
            "Positioneer flexibele cellen en lage MOQ's als de de-riskingzet: vang de kopers die zich terugtrekken bij verre volumeleveranciers vóórdat concurrenten zijn omgebouwd.",
        },
      ],
    },
    utilityMap: {
      cells: [
        {
          stage: "purchase",
          lever: "productivity",
          status: "opportunity",
          note: "Een online configurator met realtime prijzen en 3D-preview vouwt een RFQ-cyclus van 5 dagen samen tot een order van 5 minuten.",
        },
        {
          stage: "purchase",
          lever: "simplicity",
          status: "blocked",
          note: "Vaste catalogi dwingen kopers hun behoefte te herontwerpen rond jouw SKU-lijst in plaats van andersom.",
        },
        {
          stage: "purchase",
          lever: "convenience",
          status: "blocked",
          note: "Offreren duurt 5-10 dagen per pdf en telefoon, en bestellen vereist een verkoper tijdens kantooruren.",
        },
        {
          stage: "purchase",
          lever: "risk",
          status: "industry-focus",
          note: "Certificeringen, audits en referenties domineren de leverancierskwalificatie — verzadigd terrein waar iedereen gelijk scoort.",
        },
        { stage: "purchase", lever: "fun-image", status: "neutral", note: null },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "productivity",
          status: "blocked",
          note: "Levertijden van 6-8 weken dwingen kopers voorraad aan te houden en te plannen rond jouw fabriek in plaats van hun vraag.",
        },
        { stage: "delivery", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "convenience",
          status: "opportunity",
          note: "Digital twin-tracking: klanten zien hun order in realtime door de productie bewegen in plaats van te bellen voor een status.",
        },
        {
          stage: "delivery",
          lever: "risk",
          status: "opportunity",
          note: "Gegarandeerde leverdata met boeteclausules — in een markt van geschatte vensters wint zekerheid elke deal.",
        },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "industry-focus",
          note: "Output per machine-uur en kosten per stuk — de kernobsessie van de sector, geoptimaliseerd tot achter de komma.",
        },
        { stage: "use", lever: "simplicity", status: "neutral", note: null },
        { stage: "use", lever: "convenience", status: "neutral", note: null },
        {
          stage: "use",
          lever: "risk",
          status: "industry-focus",
          note: "Kwaliteitssystemen, toleranties en traceerbaarheid zijn basisvereisten waarop de hele sector al concurreert.",
        },
        { stage: "use", lever: "fun-image", status: "neutral", note: null },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "productivity",
          status: "industry-focus",
          note: "Reserveonderdelen en verbruiksartikelen worden gerund als gevangen winstcentrum, niet als waarde voor de koper.",
        },
        { stage: "supplements", lever: "simplicity", status: "neutral", note: null },
        { stage: "supplements", lever: "convenience", status: "neutral", note: null },
        { stage: "supplements", lever: "risk", status: "neutral", note: null },
        { stage: "supplements", lever: "fun-image", status: "neutral", note: null },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "productivity",
          status: "opportunity",
          note: "Proactieve onderhoudsmeldingen voorkomen de stilstand in plaats van de reparatie te factureren — uptime als het product.",
        },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "convenience",
          status: "blocked",
          note: "Reactieve ticketsystemen betekenen dat support pas begint als de lijn al stilstaat.",
        },
        { stage: "maintenance", lever: "risk", status: "neutral", note: null },
        { stage: "maintenance", lever: "fun-image", status: "neutral", note: null },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        { stage: "disposal", lever: "productivity", status: "neutral", note: null },
        { stage: "disposal", lever: "simplicity", status: "neutral", note: null },
        { stage: "disposal", lever: "convenience", status: "neutral", note: null },
        { stage: "disposal", lever: "risk", status: "neutral", note: null },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        { stage: "disposal", lever: "eco", status: "neutral", note: null },
      ],
      keyInsight:
        "Aankoop en levering vormen de wagenwijd open flank: de sector perfectioneert de fabrieksvloer terwijl de ervaring van de koper ervóór en erná nog in het faxtijdperk vastzit.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "De gefrustreerde mid-market kopers",
          whoTheyAre:
            "Bedrijven die met pijn en moeite orders van MOQ-formaat bij elkaar schrapen en vensters van 6-8 weken slikken omdat elke leverancier even star oogt.",
          whyTheyLeave:
            "Overtollige voorraad, dood kapitaal en planning gebouwd rond de fabriek van de leverancier — ze springen naar het eerste geloofwaardig flexibele alternatief.",
          unlockStrategy:
            "Lage-MOQ-runs plus de directe configurator nemen beide pijnen tegelijk weg; gegarandeerde data maken de overstap veilig.",
          relativeSize: "medium",
        },
        {
          tier: "second",
          label: "De atelier-vluchtelingen",
          whoTheyAre:
            "Kopers die fabrikanten op schaal volledig hebben afgewezen en lokale ateliers of 3D-printdiensten een premie betalen voor flexibiliteit.",
          whyTheyLeave:
            "Zij concludeerden dat schaal en flexibiliteit elkaar uitsluiten — MOQ's en vaste catalogi vertelden ze dat ze niet welkom waren.",
          unlockStrategy:
            "Maatwerk-configureerbaarheid tegen schaalfabrikant-prijzen lost de afruil op die ze wegjoeg; laat de configurator offreren wat het atelier niet kan.",
          relativeSize: "medium",
        },
        {
          tier: "third",
          label: "De interne zelfbouwers",
          whoTheyAre:
            "Bedrijven die onderdelen intern verspanen of producten ontwerpen rond standaardcomponenten omdat maatwerk inkopen op hun volumes nooit realistisch leek.",
          whyTheyLeave:
            "Maatwerkproductie is ze nooit als optie aangeboden — bij MOQ 500 en een offerte van 5 dagen is de categorie onzichtbaar onder een bepaalde ordergrootte.",
          unlockStrategy:
            "Een configurator-offerte van 5 minuten met een MOQ van 1 maakt uitbesteden voor het eerst denkbaar — kantel hun make-or-buy-som met één directe prijs.",
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
            "Ja — direct configureren en bestellen, MOQ's van 1-10 en gegarandeerde data nemen elk een pijn weg waar kopers zelfs niet meer over klagen. Samen herdefiniëren ze hoe industriële onderdelen kopen voelt.",
          actions: [],
        },
        {
          gate: "price",
          question:
            "Is de prijs goed toegankelijk voor de massa van de kopers?",
          verdict: "pass",
          assessment:
            "Ja — configuratorprijzen met een bescheiden premie boven catalogustarieven liggen ver onder maatwerkoffertes van ateliers, precies waar de onderbediende mid-market budgetteert. Kopers ruilen graag een paar procent stukkosten voor flexibiliteit en zekerheid.",
          actions: [],
        },
        {
          gate: "cost",
          question:
            "Is het kostendoel haalbaar om winstgevend te zijn tegen de strategische prijs?",
          verdict: "risk",
          assessment:
            "Dit is de zware poort. Flexibele cellen en een echte CPQ-configurator vergen serieuze capex, en de economie van lage MOQ's staat of valt met omsteltijden. Dalen de insteltijden niet zoals gepland, dan vreten kleine series de marge op in plaats van haar op te bouwen.",
          actions: [
            "Start met één flexibele cel op de 20% van de SKU's met de hoogste vraag naar kleine orders; breid alleen uit op bewezen marges per cel.",
            "Licenseer een bestaand CPQ/configurator-platform in plaats van zelf te bouwen — koop de voorkant, investeer de capex in de cellen.",
            "Stel een harde omsteltijddoelstelling per cel en maak verdere uitrol daarvan afhankelijk.",
          ],
        },
        {
          gate: "adoption",
          question:
            "Wat zijn de adoptiehordes, en worden ze vooraf aangepakt?",
          verdict: "risk",
          assessment:
            "Het verkoopapparaat zal de configurator lezen als zijn eigen vervanging, en distributiepartners zullen direct digitaal bestellen lezen als disintermediatie. Beide kunnen de uitrol stilletjes saboteren als hun verdienmodel niet eerst is geregeld.",
          actions: [
            "Betaal verkoopcommissie over configurator-orders in hun regio — maak de machine hun beste junior, niet hun rivaal.",
            "Geef kanaalpartners een eigen configurator-omgeving met eigen prijzen, zodat ze in de stroom blijven in plaats van eromheen.",
          ],
        },
      ],
      overallVerdict: "go",
      conclusion:
        "Utiliteit en prijs klaren overtuigend; kosten en adoptie zijn reële risico's maar beide zijn volgorde-problemen, geen structurele. Go — cel voor cel gefaseerd, met de verkoop- en kanaaleconomie geregeld vóórdat de configurator live gaat.",
    },
  },
};
