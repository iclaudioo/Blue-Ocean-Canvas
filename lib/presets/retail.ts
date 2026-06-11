import type { Analysis } from "@/lib/schema";

export const retail: { en: Analysis; nl: Analysis } = {
  en: {
    v: 1,
    meta: {
      id: "preset-retail",
      company: "Retail & consumer",
      industry:
        "Physical retailers fighting e-commerce with declining foot traffic and thin margins",
      language: "en",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "From transaction point to discovery destination",
        narrative:
          "Traditional retailers compete on assortment breadth, store locations, and price — all factors where Amazon and online pure-players have structural advantages. The blue ocean lies in **curated experiences and community**: transforming stores from transaction points into discovery spaces, and building direct relationships that no algorithm can replicate.",
        redOceanTraits: [
          "Price wars against online players with structurally lower costs",
          "Assortment breadth as a proxy for relevance — a game algorithms win",
          "More locations chasing foot traffic that is permanently declining",
        ],
        blueOceanThesis:
          "Turn stores from transaction points into curated discovery spaces, and build community-anchored direct relationships that no algorithm can replicate.",
      },
      canvas: {
        factors: [
          {
            name: "Price competitiveness",
            rationale:
              "Buyers benchmark every shelf price against their phone; perceived overpaying destroys trust instantly.",
          },
          {
            name: "Assortment breadth",
            rationale:
              "Shoppers expect to find what they came for — but breadth is a proxy online players satisfy infinitely better.",
          },
          {
            name: "Store locations",
            rationale:
              "Proximity drives habitual visits, but only as long as there is a reason to walk in at all.",
          },
          {
            name: "Discovery experience",
            rationale:
              "Finding something you weren't looking for is the one shopping pleasure e-commerce still can't deliver.",
          },
          {
            name: "Personalization",
            rationale:
              "Advice from someone who knows your taste turns a purchase into a relationship, not a transaction.",
          },
          {
            name: "Community connection",
            rationale:
              "Belonging gives people a reason to visit that no price promotion can match.",
          },
        ],
        industry: [4, 5, 4, 2, 1, 1],
        blueOcean: [2, 2, 2, 5, 5, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Price-matching commodity products",
            detail:
              "Stop attempting to match online pricing on commodity products — it is a war you fund but cannot win.",
          },
          {
            title: "Deep slow-moving inventory",
            detail:
              "Stop stocking deep inventory of slow-moving categories that ties up capital without driving a single extra visit.",
          },
        ],
        reduce: [
          {
            title: "Fewer, larger, experiential stores",
            detail:
              "Reduce the number of store locations — fewer, larger, and more experiential beats many and forgettable.",
          },
          {
            title: "From 10,000 SKUs to 2,000",
            detail:
              "Cut assortment breadth from 10,000 SKUs to 2,000 curated products you can actually tell a story about.",
          },
        ],
        raise: [
          {
            title: "Browsing as an event",
            detail:
              "Raise the in-store discovery experience: make browsing feel like an event, not a chore.",
          },
          {
            title: "Human clienteling over algorithms",
            detail:
              "Raise personalization through staff expertise and clienteling, not just recommendation algorithms.",
          },
        ],
        create: [
          {
            title: "Community events program",
            detail:
              "Workshops, tastings, and launches that give people a recurring reason to visit.",
          },
          {
            title: "Paid membership model",
            detail:
              "A membership with early access, styling advice, and personal shopping.",
          },
          {
            title: "Content-driven commerce",
            detail:
              "In-store storytelling about makers, origins, and craft that gives products meaning.",
          },
        ],
      },
      moves: [
        {
          title: "Stop competing on what you can't win",
          body: "You will never beat Amazon on price or assortment. Stop trying. Instead, radically reduce your catalog to products you can tell a story about, and make every store visit feel like a discovery. Curation is the one thing algorithms can't do better than humans.",
        },
        {
          title: "Turn stores into membership clubs",
          body: "Introduce a paid membership (€10-15/month) that includes early access to new products, monthly styling sessions, and invitations to in-store events. The membership fee is not the revenue model — the 3x higher purchase frequency of members is.",
        },
        {
          title: "Build relationships, not transactions",
          body: "Train staff to be genuine advisors, not upsellers. Implement a simple CRM where every sales associate can see purchase history and preferences. The text message 'Hey Maria, the jacket you loved just arrived in navy' generates more revenue per impression than any digital ad.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Compete with brunch, not with Amazon",
          insight:
            "A Saturday store visit competes with cafés, cinemas, and museums for leisure time — not with a search bar for fulfilment. Retailers who benchmark themselves against e-commerce keep optimizing for a fight they already lost.",
          opportunity:
            "Program stores like venues: rotating exhibits, live demos, and events that make a visit worth 90 minutes of someone's weekend.",
        },
        {
          path: "strategic-groups",
          title: "The space between discount and boutique",
          insight:
            "Mass retail trades on price; luxury boutiques trade on exclusivity. Between them sits a buyer who wants curation and real service without the luxury markup — and is served by neither group.",
          opportunity:
            "Offer boutique-grade curation and clienteling at mid-market prices, funded by a catalog cut from 10,000 SKUs to 2,000.",
        },
        {
          path: "buyer-chain",
          title: "Sell to the gifter, not just the user",
          insight:
            "Retail obsesses over the end consumer, yet a large share of purchases are gifts bought under time pressure by people who don't know the category. Nobody helps them — online or offline.",
          opportunity:
            "Build a guided gifting service — selection, wrapping, delivery scheduling — and own the highest-margin, least price-sensitive purchase occasion in retail.",
        },
        {
          path: "complementary-offerings",
          title: "Own what happens around the product",
          insight:
            "Every purchase sits inside a larger job: styling it, learning it, repairing it, replacing it. The industry sells the item and abandons the rest of the journey to YouTube and landfill.",
          opportunity:
            "Bundle workshops, repair services, and styling sessions — each one a reason to return that pure-players cannot ship in a box.",
        },
        {
          path: "functional-emotional",
          title: "From fulfilment to belonging",
          insight:
            "Physical retail keeps competing functionally — price, stock, location — on terrain where logistics giants win. But buying is also identity: people pay for stories, makers, and a place where staff know their name.",
          opportunity:
            "Reposition the store as a clubhouse for taste: membership, maker stories, and staff relationships that turn customers into regulars.",
        },
        {
          path: "time-trends",
          title: "Ride the third-place economy",
          insight:
            "Remote work has emptied offices and thinned daily social contact; demand for 'third places' is rising as measurably as foot traffic is falling. Retail real estate already sits exactly where people live.",
          opportunity:
            "Convert dead retail square footage into community programming — and let members' 3x purchase frequency pay for it.",
        },
      ],
    },
    utilityMap: {
      cells: [
        {
          stage: "purchase",
          lever: "productivity",
          status: "industry-focus",
          note: "The industry pours its energy into promo cycles and price matching — a race online players win structurally.",
        },
        { stage: "purchase", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "convenience",
          status: "industry-focus",
          note: "Locations and opening hours are the classic battleground; convenience parity with e-commerce is unreachable.",
        },
        {
          stage: "purchase",
          lever: "risk",
          status: "blocked",
          note: "Shoppers fear buying wrong and get no expert guidance — staff are stockers, not advisors.",
        },
        {
          stage: "purchase",
          lever: "fun-image",
          status: "blocked",
          note: "Fluorescent aisles and chore-like browsing: the visit itself delivers zero pleasure.",
        },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "productivity",
          status: "industry-focus",
          note: "Checkout speed and on-shelf availability absorb most operational investment.",
        },
        { stage: "delivery", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "convenience",
          status: "industry-focus",
          note: "Click-and-collect and same-day delivery are now table stakes the whole industry copies from each other.",
        },
        { stage: "delivery", lever: "risk", status: "neutral", note: null },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        { stage: "use", lever: "productivity", status: "neutral", note: null },
        { stage: "use", lever: "simplicity", status: "neutral", note: null },
        { stage: "use", lever: "convenience", status: "neutral", note: null },
        { stage: "use", lever: "risk", status: "neutral", note: null },
        {
          stage: "use",
          lever: "fun-image",
          status: "opportunity",
          note: "Content-driven storytelling about makers and origins makes owning the product part of an identity — the core of content-driven commerce.",
        },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        { stage: "supplements", lever: "productivity", status: "neutral", note: null },
        { stage: "supplements", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "convenience",
          status: "blocked",
          note: "After the receipt the industry offers nothing — no services, no follow-up, no reason to come back.",
        },
        { stage: "supplements", lever: "risk", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "fun-image",
          status: "opportunity",
          note: "Workshops, tastings, and launch events turn the store into a venue and the customer into a member.",
        },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        { stage: "maintenance", lever: "productivity", status: "neutral", note: null },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "convenience",
          status: "opportunity",
          note: "Clienteling CRM — 'the jacket you loved just arrived in navy' — is relationship maintenance no algorithm replicates.",
        },
        { stage: "maintenance", lever: "risk", status: "neutral", note: null },
        { stage: "maintenance", lever: "fun-image", status: "neutral", note: null },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        { stage: "disposal", lever: "productivity", status: "neutral", note: null },
        { stage: "disposal", lever: "simplicity", status: "neutral", note: null },
        { stage: "disposal", lever: "convenience", status: "neutral", note: null },
        { stage: "disposal", lever: "risk", status: "neutral", note: null },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        {
          stage: "disposal",
          lever: "eco",
          status: "opportunity",
          note: "Trade-in and resale programs close the loop — and manufacture a high-intent return visit.",
        },
      ],
      keyInsight:
        "Everything after the receipt is blank space: the industry fights over the purchase moment while community, follow-up, and resale — the levers behind 3x member purchase frequency — sit completely untouched.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "Showroomers on the edge",
          whoTheyAre:
            "Shoppers who still browse in-store but increasingly complete the purchase online, visiting less each quarter.",
          whyTheyLeave:
            "The store offers them nothing the website doesn't — except travel time and a queue.",
          unlockStrategy:
            "Give the visit member-only value — early access, events, expert advice — so being there beats waiting for a parcel.",
          relativeSize: "medium",
        },
        {
          tier: "second",
          label: "Convenience converts",
          whoTheyAre:
            "Households that consciously moved their entire category spend online years ago and never looked back.",
          whyTheyLeave:
            "They refuse to trade an hour of travel for a smaller selection at a higher price.",
          unlockStrategy:
            "Stop selling errands and start selling outings: a curated, social experience that competes with how they spend a Saturday, not with their delivery app.",
          relativeSize: "large",
        },
        {
          tier: "third",
          label: "The never-leisure shoppers",
          whoTheyAre:
            "People who have never treated shopping as anything but a necessity — they buy essentials and leave.",
          whyTheyLeave:
            "No retailer has ever offered them a reason beyond the transaction; the category feels irrelevant to their interests.",
          unlockStrategy:
            "Lead with interest-based programming — cooking classes, repair cafés, maker talks — and let the retail follow the relationship.",
          relativeSize: "small",
        },
      ],
    },
    boiSequence: {
      steps: [
        {
          gate: "utility",
          question: "Is there exceptional buyer utility in your business idea?",
          verdict: "pass",
          assessment:
            "Curated discovery, human clienteling, and community programming attack the exact utility blocks — joyless browsing and a dead post-purchase relationship — that push shoppers online. Against a baseline of fluorescent-aisle sameness, the utility leap is visible on the first visit.",
          actions: [],
        },
        {
          gate: "price",
          question: "Is your price easily accessible to the mass of buyers?",
          verdict: "pass",
          assessment:
            "A €10-15/month membership costs less than two coffees and unlocks tangible perks, while products stay at fair — not Amazon-matched — prices. The fee filters for commitment, not for wealth, so the mass of target buyers can step in without hesitation.",
          actions: [],
        },
        {
          gate: "cost",
          question:
            "Can you attain your cost target to profit at your strategic price?",
          verdict: "risk",
          assessment:
            "Experiential stores, trained advisors, and an events calendar cost structurally more per square meter than shelf-stacking. The model only profits if the SKU cut (10,000 to 2,000), lower inventory carry, and closed marginal locations are executed before the experience investments — sequencing discipline most retailers lack.",
          actions: [
            "Cut the tail catalog and exit marginal locations first; bank the savings before funding experience capex",
            "Tie each store's events budget to measured member purchase frequency, not to foot traffic",
          ],
        },
        {
          gate: "adoption",
          question:
            "What are the adoption hurdles in actualizing the idea, and are you addressing them upfront?",
          verdict: "pass",
          assessment:
            "Staff move from cashiers to advisors — a retraining hurdle, but one that raises job quality and retention rather than threatening anyone. Customers need no behavior change beyond showing up, and landlords increasingly favor experiential tenants.",
          actions: [],
        },
      ],
      overallVerdict: "go",
      conclusion:
        "The move clears utility, price, and adoption cleanly; it lives or dies on cost sequencing — shrink the old model before you fund the new one.",
    },
  },
  nl: {
    v: 1,
    meta: {
      id: "preset-retail",
      company: "Retail & consument",
      industry:
        "Fysieke retailers die vechten tegen e-commerce, met dalende winkelbezoeken en flinterdunne marges",
      language: "nl",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "Van transactiepunt naar ontdekkingsbestemming",
        narrative:
          "Traditionele retailers concurreren op assortimentsbreedte, winkellocaties en prijs — stuk voor stuk factoren waarop Amazon en online pure players structureel in het voordeel zijn. De blauwe oceaan ligt in **gecureerde ervaringen en community**: winkels die transformeren van transactiepunten naar ontdekkingsplekken, met directe klantrelaties die geen algoritme kan kopiëren.",
        redOceanTraits: [
          "Prijsoorlogen tegen online spelers met structureel lagere kosten",
          "Assortimentsbreedte als maatstaf voor relevantie — een spel dat algoritmes winnen",
          "Meer vestigingen jagen op winkelbezoek dat blijvend daalt",
        ],
        blueOceanThesis:
          "Maak van winkels gecureerde ontdekkingsplekken in plaats van transactiepunten, en bouw community-gedreven directe relaties die geen algoritme kan kopiëren.",
      },
      canvas: {
        factors: [
          {
            name: "Prijsconcurrentie",
            rationale:
              "Kopers leggen elke schapprijs naast hun telefoon; het gevoel te veel te betalen sloopt het vertrouwen direct.",
          },
          {
            name: "Assortimentsbreedte",
            rationale:
              "Klanten verwachten te vinden waarvoor ze komen — maar breedte is een belofte die online spelers oneindig beter waarmaken.",
          },
          {
            name: "Winkellocaties",
            rationale:
              "Nabijheid drijft gewoontebezoek, maar alleen zolang er überhaupt een reden is om binnen te lopen.",
          },
          {
            name: "Ontdekkingservaring",
            rationale:
              "Iets vinden waar je niet naar zocht is het ene winkelplezier dat e-commerce nog steeds niet kan leveren.",
          },
          {
            name: "Personalisatie",
            rationale:
              "Advies van iemand die jouw smaak kent maakt van een aankoop een relatie in plaats van een transactie.",
          },
          {
            name: "Community-binding",
            rationale:
              "Ergens bij horen geeft mensen een reden om langs te komen die geen prijsactie kan evenaren.",
          },
        ],
        industry: [4, 5, 4, 2, 1, 1],
        blueOcean: [2, 2, 2, 5, 5, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Prijsmatchen van bulkproducten",
            detail:
              "Stop met het matchen van online prijzen op commodity-producten — een oorlog die je wel financiert maar nooit wint.",
          },
          {
            title: "Diepe voorraad traag lopers",
            detail:
              "Stop met diepe voorraden in traaglopende categorieën die kapitaal vastzetten zonder één extra bezoek op te leveren.",
          },
        ],
        reduce: [
          {
            title: "Minder, grotere, belevingswinkels",
            detail:
              "Verminder het aantal vestigingen — minder, groter en meer beleving verslaat veel en vergeetbaar.",
          },
          {
            title: "Van 10.000 SKU's naar 2.000",
            detail:
              "Snijd de assortimentsbreedte terug van 10.000 SKU's naar 2.000 gecureerde producten waarover je echt een verhaal kunt vertellen.",
          },
        ],
        raise: [
          {
            title: "Rondkijken als evenement",
            detail:
              "Versterk de ontdekkingservaring in de winkel: laat rondkijken voelen als een uitje, niet als een klus.",
          },
          {
            title: "Menselijke clienteling boven algoritmes",
            detail:
              "Versterk personalisatie via vakkennis van medewerkers en clienteling, niet alleen via aanbevelingsalgoritmes.",
          },
        ],
        create: [
          {
            title: "Programma met community-events",
            detail:
              "Workshops, proeverijen en lanceringen die mensen een terugkerende reden geven om langs te komen.",
          },
          {
            title: "Betaald lidmaatschapsmodel",
            detail:
              "Een lidmaatschap met vroege toegang, stylingadvies en personal shopping.",
          },
          {
            title: "Contentgedreven commerce",
            detail:
              "Verhalen in de winkel over makers, herkomst en vakmanschap die producten betekenis geven.",
          },
        ],
      },
      moves: [
        {
          title: "Stop met concurreren waar je niet kunt winnen",
          body: "Je verslaat Amazon nooit op prijs of assortiment. Stop daarmee. Reduceer in plaats daarvan je catalogus radicaal tot producten waarover je een verhaal kunt vertellen, en laat elk winkelbezoek voelen als een ontdekking. Curatie is het ene dat algoritmes niet beter kunnen dan mensen.",
        },
        {
          title: "Maak van winkels ledenclubs",
          body: "Introduceer een betaald lidmaatschap (€10-15 per maand) met vroege toegang tot nieuwe producten, maandelijkse stylingsessies en uitnodigingen voor events in de winkel. De contributie is niet het verdienmodel — de 3x hogere aankoopfrequentie van leden is dat wel.",
        },
        {
          title: "Bouw relaties, geen transacties",
          body: "Train medewerkers tot oprechte adviseurs, niet tot upsellers. Implementeer een eenvoudig CRM waarin elke verkoopmedewerker aankoopgeschiedenis en voorkeuren ziet. Het berichtje 'Hé Maria, het jasje waar je verliefd op was is net binnen in marineblauw' levert per impressie meer omzet op dan welke digitale advertentie ook.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Concurreer met de brunch, niet met Amazon",
          insight:
            "Een winkelbezoek op zaterdag concurreert met cafés, bioscopen en musea om vrije tijd — niet met een zoekbalk om de levering. Retailers die zich blijven meten met e-commerce optimaliseren voor een gevecht dat al verloren is.",
          opportunity:
            "Programmeer winkels als podia: wisselende exposities, live demo's en events die een bezoek 90 minuten weekend waard maken.",
        },
        {
          path: "strategic-groups",
          title: "De ruimte tussen discount en boetiek",
          insight:
            "Massaretail draait op prijs; luxeboetieks op exclusiviteit. Daartussen zit een koper die curatie en echte service wil zonder luxe-opslag — en door geen van beide groepen wordt bediend.",
          opportunity:
            "Bied curatie en clienteling op boetiekniveau tegen middensegmentprijzen, gefinancierd door een catalogus die van 10.000 naar 2.000 SKU's gaat.",
        },
        {
          path: "buyer-chain",
          title: "Verkoop aan de gever, niet alleen de gebruiker",
          insight:
            "Retail staart zich blind op de eindconsument, terwijl een groot deel van de aankopen cadeaus zijn — onder tijdsdruk gekocht door mensen die de categorie niet kennen. Niemand helpt ze, online noch offline.",
          opportunity:
            "Bouw een begeleide cadeauservice — selectie, inpakken, bezorgmoment — en claim het aankoopmoment met de hoogste marge en de laagste prijsgevoeligheid in retail.",
        },
        {
          path: "complementary-offerings",
          title: "Bezit alles rond het product",
          insight:
            "Elke aankoop zit in een grotere klus: stylen, leren gebruiken, repareren, vervangen. De sector verkoopt het artikel en laat de rest van de reis over aan YouTube en de vuilnisbak.",
          opportunity:
            "Bundel workshops, reparatieservice en stylingsessies — elk een reden om terug te komen die pure players niet in een doos kunnen verzenden.",
        },
        {
          path: "functional-emotional",
          title: "Van afhandeling naar verbondenheid",
          insight:
            "Fysieke retail blijft functioneel concurreren — prijs, voorraad, locatie — op terrein waar logistieke reuzen winnen. Maar kopen is ook identiteit: mensen betalen voor verhalen, makers en een plek waar het personeel hun naam kent.",
          opportunity:
            "Herpositioneer de winkel als clubhuis voor smaak: lidmaatschap, makersverhalen en persoonlijke relaties die klanten tot stamgasten maken.",
        },
        {
          path: "time-trends",
          title: "Surf mee op de third-place-economie",
          insight:
            "Thuiswerken heeft kantoren leeggetrokken en dagelijks sociaal contact uitgedund; de vraag naar 'derde plekken' stijgt even meetbaar als het winkelbezoek daalt. Retailvastgoed staat al precies waar mensen wonen.",
          opportunity:
            "Zet dode winkelmeters om in community-programmering — en laat de 3x hogere aankoopfrequentie van leden de rekening betalen.",
        },
      ],
    },
    utilityMap: {
      cells: [
        {
          stage: "purchase",
          lever: "productivity",
          status: "industry-focus",
          note: "De sector steekt al zijn energie in promocycli en prijsmatching — een race die online spelers structureel winnen.",
        },
        { stage: "purchase", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "convenience",
          status: "industry-focus",
          note: "Locaties en openingstijden zijn het klassieke strijdtoneel; gemakspariteit met e-commerce is onhaalbaar.",
        },
        {
          stage: "purchase",
          lever: "risk",
          status: "blocked",
          note: "Klanten zijn bang de verkeerde keuze te maken en krijgen geen deskundig advies — medewerkers vullen vakken, ze adviseren niet.",
        },
        {
          stage: "purchase",
          lever: "fun-image",
          status: "blocked",
          note: "Tl-verlichte gangpaden en winkelen als corvee: het bezoek zelf levert nul plezier op.",
        },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "productivity",
          status: "industry-focus",
          note: "Kassasnelheid en schapbeschikbaarheid slokken het grootste deel van de operationele investeringen op.",
        },
        { stage: "delivery", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "convenience",
          status: "industry-focus",
          note: "Click-and-collect en same-day delivery zijn inmiddels basisvoorwaarden die de hele sector van elkaar kopieert.",
        },
        { stage: "delivery", lever: "risk", status: "neutral", note: null },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        { stage: "use", lever: "productivity", status: "neutral", note: null },
        { stage: "use", lever: "simplicity", status: "neutral", note: null },
        { stage: "use", lever: "convenience", status: "neutral", note: null },
        { stage: "use", lever: "risk", status: "neutral", note: null },
        {
          stage: "use",
          lever: "fun-image",
          status: "opportunity",
          note: "Contentgedreven verhalen over makers en herkomst maken het bezit van een product onderdeel van een identiteit — de kern van contentgedreven commerce.",
        },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        { stage: "supplements", lever: "productivity", status: "neutral", note: null },
        { stage: "supplements", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "convenience",
          status: "blocked",
          note: "Na de kassabon biedt de sector niets — geen services, geen opvolging, geen reden om terug te komen.",
        },
        { stage: "supplements", lever: "risk", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "fun-image",
          status: "opportunity",
          note: "Workshops, proeverijen en lanceringen maken van de winkel een podium en van de klant een lid.",
        },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        { stage: "maintenance", lever: "productivity", status: "neutral", note: null },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "convenience",
          status: "opportunity",
          note: "Clienteling-CRM — 'het jasje waar je verliefd op was is net binnen in marineblauw' — is relatieonderhoud dat geen algoritme nadoet.",
        },
        { stage: "maintenance", lever: "risk", status: "neutral", note: null },
        { stage: "maintenance", lever: "fun-image", status: "neutral", note: null },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        { stage: "disposal", lever: "productivity", status: "neutral", note: null },
        { stage: "disposal", lever: "simplicity", status: "neutral", note: null },
        { stage: "disposal", lever: "convenience", status: "neutral", note: null },
        { stage: "disposal", lever: "risk", status: "neutral", note: null },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        {
          stage: "disposal",
          lever: "eco",
          status: "opportunity",
          note: "Inruil- en doorverkoopprogramma's sluiten de kringloop — en creëren een terugkeerbezoek met hoge koopintentie.",
        },
      ],
      keyInsight:
        "Alles na de kassabon is blanco ruimte: de sector vecht om het aankoopmoment, terwijl community, opvolging en hergebruik — de hefbomen achter 3x hogere ledenfrequentie — volledig onaangeroerd blijven.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "Showroomers op het randje",
          whoTheyAre:
            "Klanten die nog wel in de winkel rondkijken maar de aankoop steeds vaker online afronden, en elk kwartaal minder langskomen.",
          whyTheyLeave:
            "De winkel biedt ze niets wat de website niet biedt — behalve reistijd en een rij.",
          unlockStrategy:
            "Geef het bezoek exclusieve ledenwaarde — vroege toegang, events, deskundig advies — zodat er zijn wint van wachten op een pakketje.",
          relativeSize: "medium",
        },
        {
          tier: "second",
          label: "Gemaksoverlopers",
          whoTheyAre:
            "Huishoudens die hun volledige categorie-uitgaven jaren geleden bewust naar online verplaatsten en nooit meer omkeken.",
          whyTheyLeave:
            "Ze weigeren een uur reistijd te ruilen voor een kleiner aanbod tegen een hogere prijs.",
          unlockStrategy:
            "Stop met boodschappen verkopen en begin uitjes te verkopen: een gecureerde, sociale ervaring die concurreert met hun zaterdagbesteding, niet met hun bezorgapp.",
          relativeSize: "large",
        },
        {
          tier: "third",
          label: "De nooit-funshoppers",
          whoTheyAre:
            "Mensen voor wie winkelen nooit meer was dan noodzaak — ze kopen het hoognodige en vertrekken.",
          whyTheyLeave:
            "Geen retailer heeft ze ooit een reden gegeven voorbij de transactie; de categorie voelt irrelevant voor hun interesses.",
          unlockStrategy:
            "Begin bij interesses — kookworkshops, repair cafés, makerstalks — en laat de retail de relatie volgen.",
          relativeSize: "small",
        },
      ],
    },
    boiSequence: {
      steps: [
        {
          gate: "utility",
          question: "Zit er uitzonderlijke koperswaarde in dit businessidee?",
          verdict: "pass",
          assessment:
            "Gecureerde ontdekking, menselijke clienteling en community-programmering pakken precies de waardeblokkades aan — vreugdeloos rondlopen en een dode relatie na aankoop — die klanten naar online jagen. Tegen een achtergrond van tl-verlichte eenheidsworst is de waardesprong bij het eerste bezoek zichtbaar.",
          actions: [],
        },
        {
          gate: "price",
          question: "Is de prijs goed toegankelijk voor de massa van kopers?",
          verdict: "pass",
          assessment:
            "Een lidmaatschap van €10-15 per maand kost minder dan twee koffie en ontsluit tastbare voordelen, terwijl producten een eerlijke — geen Amazon-gematchte — prijs houden. De contributie filtert op betrokkenheid, niet op vermogen, dus de massa van de doelgroep stapt zonder aarzeling in.",
          actions: [],
        },
        {
          gate: "cost",
          question:
            "Haal je het kostendoel om winstgevend te zijn tegen je strategische prijs?",
          verdict: "risk",
          assessment:
            "Belevingswinkels, getrainde adviseurs en een eventkalender kosten per vierkante meter structureel meer dan vakkenvullen. Het model is alleen winstgevend als de SKU-reductie (van 10.000 naar 2.000), lagere voorraadkosten en het sluiten van marginale vestigingen vóór de belevingsinvesteringen worden uitgevoerd — een volgorde-discipline die de meeste retailers missen.",
          actions: [
            "Snijd eerst de staartcatalogus weg en sluit marginale vestigingen; zet de besparing vast voordat je belevingsinvesteringen doet",
            "Koppel het eventbudget per winkel aan gemeten aankoopfrequentie van leden, niet aan passantenaantallen",
          ],
        },
        {
          gate: "adoption",
          question: "Wat zijn de adoptiehordes en pak je ze vooraf aan?",
          verdict: "pass",
          assessment:
            "Medewerkers groeien van caissière naar adviseur — een opleidingshorde, maar één die werkkwaliteit en personeelsbehoud verhoogt in plaats van iemand te bedreigen. Klanten hoeven hun gedrag niet te veranderen behalve langskomen, en verhuurders geven steeds vaker de voorkeur aan belevingshuurders.",
          actions: [],
        },
      ],
      overallVerdict: "go",
      conclusion:
        "De zet komt vlot door waarde, prijs en adoptie; hij staat of valt met de kostenvolgorde — krimp eerst het oude model voordat je het nieuwe financiert.",
    },
  },
};
