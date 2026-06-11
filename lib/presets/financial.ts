import type { Analysis } from "@/lib/schema";

export const financial: { en: Analysis; nl: Analysis } = {
  en: {
    v: 1,
    meta: {
      id: "preset-financial",
      company: "Financial services",
      industry: "Banks and insurers squeezed between fintech speed and legacy trust",
      language: "en",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "Trust is built in three minutes",
        narrative:
          "Traditional banks compete by piling on products, branch networks, and compliance layers — creating complexity that nobody values. Fintechs win on speed but lack depth. The blue ocean lies in **radical simplification combined with genuine financial guidance**: fewer products, faster access, and proactive advisory that actually improves financial outcomes.",
        redOceanTraits: [
          "Competes by stacking products nobody asked for",
          "Fees buried in 40-page PDFs that customers never read",
          "Branch networks defended as moats while customers go mobile",
        ],
        blueOceanThesis:
          "Radical simplification plus genuine guidance: eight products instead of forty, an account live in three minutes, and proactive advice that measurably improves financial outcomes.",
      },
      canvas: {
        factors: [
          {
            name: "Fee transparency",
            rationale:
              "Customers can't compare what they can't see; opacity breeds the distrust that fintechs feed on.",
          },
          {
            name: "Branch network",
            rationale:
              "Legacy reassurance valued by a shrinking minority but paid for by every customer.",
          },
          {
            name: "Product variety",
            rationale:
              "Choice is meant to signal capability, but 40+ overlapping products mostly produce confusion and bad decisions.",
          },
          {
            name: "Digital speed",
            rationale:
              "Money decisions happen in moments; a slow app loses both the transaction and the relationship.",
          },
          {
            name: "Advisory depth",
            rationale:
              "Real guidance changes financial outcomes; an annual review meeting does not.",
          },
          {
            name: "Onboarding friction",
            rationale:
              "The first experience decides whether the next generation ever opens an account — and most banks lose them there.",
          },
        ],
        industry: [2, 4, 5, 2, 2, 1],
        blueOcean: [5, 1, 2, 5, 4, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Close the routine branch",
            detail: "Physical branch network for routine transactions.",
          },
          {
            title: "Scrap confusing product tiers",
            detail: "Complex product tiers that confuse more than they serve.",
          },
        ],
        reduce: [
          {
            title: "From 40 products to 8",
            detail: "Product catalog — from 40+ products down to 8 essentials.",
          },
          {
            title: "Hide the compliance machinery",
            detail: "Internal compliance layers visible to the customer.",
          },
        ],
        raise: [
          {
            title: "Radical fee openness",
            detail:
              "Fee transparency to radical openness: show exactly what every service costs.",
          },
          {
            title: "Proactive AI-assisted advisory",
            detail:
              "Advisory from annual reviews to proactive, AI-assisted financial health alerts.",
          },
        ],
        create: [
          {
            title: "Three-minute onboarding",
            detail:
              "One-tap onboarding with live identity verification — account active in under 3 minutes.",
          },
          {
            title: "Real-time financial health score",
            detail:
              "A personal dashboard that tracks spending, saving, and risk in real time.",
          },
          {
            title: "Life-event triggers",
            detail:
              "Automatic recommendations when salary changes, children arrive, or retirement nears.",
          },
        ],
      },
      moves: [
        {
          title: "Make the invisible visible",
          body: "Most banks hide their fee structures in 40-page PDFs. Build a real-time fee dashboard showing exactly what the customer pays, for what, and how it compares to alternatives. The counterintuitive truth: radical transparency increases retention, it doesn't decrease it.",
        },
        {
          title: "Replace product selling with outcome tracking",
          body: "Stop pushing products. Instead, give every customer a financial health score they can check daily. When the score dips, offer targeted guidance. You shift from a vendor they avoid to a partner they check in with.",
        },
        {
          title: "Win the first 3 minutes",
          body: "Onboarding is where most banks lose the next generation. Build a flow where someone goes from zero to active account in under 3 minutes, with no branch visit. That single experience will generate more word-of-mouth than any ad campaign.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Your rival is a spreadsheet, not a bank",
          insight:
            "Customers solve financial jobs with budgeting spreadsheets, buy-now-pay-later checkouts, investing apps, and advice from Reddit — not with bank products. Each alternative wins on one thing the bank makes hard: clarity, instant credit, or plain language.",
          opportunity:
            "Absorb the jobs customers do outside banking — budgeting, comparing, planning — into the core account, so the spreadsheet becomes redundant.",
        },
        {
          path: "strategic-groups",
          title: "Fintech speed with balance-sheet depth",
          insight:
            "The industry splits into incumbents with depth, trust, and deposit guarantees but glacial UX, and fintechs with delightful apps but shallow product capability. Customers currently choose one flaw or the other.",
          opportunity:
            "Combine the two: a regulated balance sheet behind a 3-minute onboarding and a daily-use app. Nobody credibly owns that intersection yet.",
        },
        {
          path: "buyer-chain",
          title: "The household CFO nobody serves",
          insight:
            "Banks sell to the individual account holder, but money decisions are made by households: partners with separate accounts, parents managing kids' money, adult children handling aging parents' finances. The actual decision unit is invisible to the product.",
          opportunity:
            "Build shared dashboards, delegated access, and family financial planning as first-class features — own the household, not the account.",
        },
        {
          path: "complementary-offerings",
          title: "Money never travels alone",
          insight:
            "Every financial decision is wrapped in a non-financial event: a job change, a house, a child, a divorce. Banks see the transaction weeks after the event and respond with a generic mailer, if at all.",
          opportunity:
            "Life-event triggers that detect the salary change or the new dependent and respond within days with one concrete, relevant recommendation.",
        },
        {
          path: "functional-emotional",
          title: "From statements to peace of mind",
          insight:
            "Banking is sold functionally — rates, fees, features — while money is the number-one source of personal stress. The industry processes transactions for people who lie awake about them.",
          opportunity:
            "A financial health score turns anxiety into a daily habit: one number that says you're okay, and tells you what to do when you're not.",
        },
        {
          path: "time-trends",
          title: "Open banking ends the data moat",
          insight:
            "PSD2 and open banking mean transaction data is no longer the incumbent's exclusive asset, while AI drives the marginal cost of personalized advice toward zero. The moat is shifting from holding the data to acting on it best.",
          opportunity:
            "Become the aggregation layer for the customer's entire financial life — including accounts held elsewhere — and monetize guidance, not custody.",
        },
      ],
    },
    utilityMap: {
      cells: [
        { stage: "purchase", lever: "productivity", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "simplicity",
          status: "blocked",
          note: "Forty-plus overlapping products in opaque tiers make choosing the right account a research project.",
        },
        { stage: "purchase", lever: "convenience", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "risk",
          status: "industry-focus",
          note: "Stability, heritage, and deposit guarantees dominate marketing at the point of sale — safety messaging is fully saturated.",
        },
        { stage: "purchase", lever: "fun-image", status: "neutral", note: null },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "productivity",
          status: "opportunity",
          note: "Three-minute onboarding with live identity verification — the account is active before the coffee is cold.",
        },
        {
          stage: "delivery",
          lever: "simplicity",
          status: "blocked",
          note: "Onboarding still demands branch visits, wet signatures, and days of waiting — the single biggest leak of next-generation customers.",
        },
        { stage: "delivery", lever: "convenience", status: "neutral", note: null },
        { stage: "delivery", lever: "risk", status: "neutral", note: null },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "industry-focus",
          note: "Transaction processing is fast, cheap, and reliable — a solved problem the industry keeps polishing anyway.",
        },
        {
          stage: "use",
          lever: "simplicity",
          status: "opportunity",
          note: "A real-time financial health score collapses 40 products into one number the customer actually checks daily.",
        },
        { stage: "use", lever: "convenience", status: "neutral", note: null },
        {
          stage: "use",
          lever: "risk",
          status: "industry-focus",
          note: "Fraud protection, security, and compliance absorb the bulk of technology investment — necessary, but invisible as differentiation.",
        },
        { stage: "use", lever: "fun-image", status: "neutral", note: null },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "productivity",
          status: "industry-focus",
          note: "Cross-selling machinery is finely tuned to maximize products per customer — not outcomes per customer.",
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
          note: "Life-event triggers deliver advice at the exact moment it matters — salary change, new child, approaching retirement.",
        },
        {
          stage: "maintenance",
          lever: "simplicity",
          status: "opportunity",
          note: "A radical fee dashboard shows in real time what every service costs and how it compares — transparency as a retention engine.",
        },
        {
          stage: "maintenance",
          lever: "convenience",
          status: "blocked",
          note: "Changing an address, a limit, or a beneficiary still requires calls, forms, or a branch visit at most banks.",
        },
        { stage: "maintenance", lever: "risk", status: "neutral", note: null },
        { stage: "maintenance", lever: "fun-image", status: "neutral", note: null },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        { stage: "disposal", lever: "productivity", status: "neutral", note: null },
        { stage: "disposal", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "disposal",
          lever: "convenience",
          status: "blocked",
          note: "Switching banks is deliberately painful — closing accounts, migrating direct debits, and losing history are the real lock-in.",
        },
        { stage: "disposal", lever: "risk", status: "neutral", note: null },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        { stage: "disposal", lever: "eco", status: "neutral", note: null },
      ],
      keyInsight:
        "Delivery and maintenance are wide open: the industry has perfected the transaction but abandoned the moments around it — getting started, getting advice, and getting through life changes.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "The disengaged account holders",
          whoTheyAre:
            "Customers who keep a salary account out of inertia, hold their savings and investments elsewhere, and interact with the bank only when forced to.",
          whyTheyLeave:
            "They feel like a product target, not a client: opaque fees, irrelevant cross-sell, and zero guidance — the first decent neobank prompt and they're gone.",
          unlockStrategy:
            "A financial health score plus a transparent fee dashboard gives them a daily reason to engage and a concrete reason to consolidate.",
          relativeSize: "large",
        },
        {
          tier: "second",
          label: "The fintech-only generation",
          whoTheyAre:
            "Younger customers who have consciously refused traditional banks: their financial life runs on neobanks, investing apps, and payment wallets.",
          whyTheyLeave:
            "Branch-era onboarding, paper forms, and a tone that assumes loyalty it never earned. They equate the incumbent brand with friction.",
          unlockStrategy:
            "Meet them entirely on their terms: 3-minute onboarding, app-first everything, and fintech speed backed by a deposit guarantee the apps can't match.",
          relativeSize: "medium",
        },
        {
          tier: "third",
          label: "The advice-deprived mass",
          whoTheyAre:
            "Households and micro-businesses who have never considered a bank a source of guidance — they make financial decisions on instinct, family advice, or not at all.",
          whyTheyLeave:
            "Personal advisory was always priced and packaged for the wealthy; for everyone else the bank is a utility pipe, so they never looked for more.",
          unlockStrategy:
            "AI-assisted advisory at near-zero marginal cost makes proactive guidance a free, default feature — turning the utility pipe into a financial partner for the mass market.",
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
            "Yes — the move removes the three biggest pains at once: choosing (8 products instead of 40), starting (3 minutes instead of days), and understanding (one health score instead of 40-page PDFs). Each is utility the customer feels weekly.",
          actions: [],
        },
        {
          gate: "price",
          question:
            "Is the price easily accessible to the mass of buyers?",
          verdict: "pass",
          assessment:
            "Yes — radical simplification lowers cost-to-serve, which funds transparent fees at or below incumbent averages, and the health score and advisory layer ship as free defaults. The proposition is priced for the mass market by construction.",
          actions: [],
        },
        {
          gate: "cost",
          question:
            "Can the cost target be met to profit at the strategic price?",
          verdict: "fail",
          assessment:
            "Not in the current structure. A legacy core, a branch estate, and decades of product sprawl mean the savings from simplification arrive years after the price cuts do — double-running costs would crush margins long before the new model pays for itself.",
          actions: [
            "Launch as a greenfield digital brand on a modern core and migrate customers in, instead of transforming the legacy estate in place.",
            "Tie branch wind-down to measured digital adoption milestones, capping double-running costs at a 24-month horizon.",
            "Cut the catalog to 8 products in the new brand from day one — never port the long tail.",
          ],
        },
        {
          gate: "adoption",
          question:
            "What are the adoption hurdles, and are they addressed upfront?",
          verdict: "risk",
          assessment:
            "Regulators will scrutinize a fast-onboarding flow for KYC robustness, and the internal advisory force will read proactive AI guidance as its own obituary. Both can stall the move if discovered late.",
          actions: [
            "Pre-engage the regulator on the simplified product set and the live identity-verification flow before launch.",
            "Retrain branch advisors into the proactive advisory team — make them the product's engine, not its casualty.",
          ],
        },
      ],
      overallVerdict: "rework",
      conclusion:
        "The strategy clears utility and price convincingly, but the vehicle is wrong: as a legacy transformation the cost gate fails. Rework the move as a greenfield build with a managed migration — then every gate clears.",
    },
  },
  nl: {
    v: 1,
    meta: {
      id: "preset-financial",
      company: "Financiële diensten",
      industry:
        "Banken en verzekeraars geklemd tussen fintech-snelheid en gevestigd vertrouwen",
      language: "nl",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "Vertrouwen bouw je in drie minuten",
        narrative:
          "Traditionele banken concurreren door producten, kantorennetwerken en compliance-lagen op te stapelen — complexiteit die niemand waardeert. Fintechs winnen op snelheid maar missen diepgang. De blauwe oceaan ligt in **radicale vereenvoudiging gecombineerd met écht financieel advies**: minder producten, snellere toegang en proactieve begeleiding die financiële uitkomsten aantoonbaar verbetert.",
        redOceanTraits: [
          "Concurreert door producten te stapelen waar niemand om vroeg",
          "Tarieven verstopt in pdf's van 40 pagina's die niemand leest",
          "Kantorennetwerken verdedigd als slotgracht terwijl de klant mobiel gaat",
        ],
        blueOceanThesis:
          "Radicale vereenvoudiging plus écht advies: acht producten in plaats van veertig, een rekening actief in drie minuten, en proactief advies dat financiële uitkomsten meetbaar verbetert.",
      },
      canvas: {
        factors: [
          {
            name: "Tarieftransparantie",
            rationale:
              "Klanten kunnen niet vergelijken wat ze niet zien; ondoorzichtigheid voedt het wantrouwen waar fintechs op teren.",
          },
          {
            name: "Kantorennetwerk",
            rationale:
              "Geruststelling uit een vorig tijdperk, gewaardeerd door een krimpende minderheid maar betaald door elke klant.",
          },
          {
            name: "Productaanbod",
            rationale:
              "Keuze moet capaciteit uitstralen, maar 40+ overlappende producten leveren vooral verwarring en slechte beslissingen op.",
          },
          {
            name: "Digitale snelheid",
            rationale:
              "Geldbeslissingen vallen in momenten; een trage app verliest zowel de transactie als de relatie.",
          },
          {
            name: "Adviesdiepgang",
            rationale:
              "Echt advies verandert financiële uitkomsten; een jaarlijks reviewgesprek niet.",
          },
          {
            name: "Onboardingfrictie",
            rationale:
              "De eerste ervaring bepaalt of de volgende generatie ooit een rekening opent — en daar verliezen de meeste banken haar.",
          },
        ],
        industry: [2, 4, 5, 2, 2, 1],
        blueOcean: [5, 1, 2, 5, 4, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Sluit het routinekantoor",
            detail: "Het fysieke kantorennetwerk voor routinetransacties.",
          },
          {
            title: "Schrap verwarrende productlagen",
            detail: "Complexe producttiers die meer verwarren dan dienen.",
          },
        ],
        reduce: [
          {
            title: "Van 40 producten naar 8",
            detail: "De productcatalogus — van 40+ producten terug naar 8 essentiële.",
          },
          {
            title: "Verberg de compliance-machine",
            detail: "Interne compliance-lagen die zichtbaar zijn voor de klant.",
          },
        ],
        raise: [
          {
            title: "Radicale tariefopenheid",
            detail:
              "Tarieftransparantie naar radicale openheid: laat exact zien wat elke dienst kost.",
          },
          {
            title: "Proactief AI-ondersteund advies",
            detail:
              "Advies van jaarlijkse reviews naar proactieve, AI-ondersteunde signalen over financiële gezondheid.",
          },
        ],
        create: [
          {
            title: "Onboarding in drie minuten",
            detail:
              "One-tap onboarding met live identiteitsverificatie — rekening actief in minder dan 3 minuten.",
          },
          {
            title: "Realtime financiële gezondheidsscore",
            detail:
              "Een persoonlijk dashboard dat uitgaven, sparen en risico in realtime volgt.",
          },
          {
            title: "Levensgebeurtenis-triggers",
            detail:
              "Automatische aanbevelingen bij salarisveranderingen, gezinsuitbreiding of naderend pensioen.",
          },
        ],
      },
      moves: [
        {
          title: "Maak het onzichtbare zichtbaar",
          body: "De meeste banken verstoppen hun tariefstructuur in pdf's van 40 pagina's. Bouw een realtime tariefdashboard dat exact toont wat de klant betaalt, waarvoor, en hoe dat zich verhoudt tot alternatieven. De contra-intuïtieve waarheid: radicale transparantie verhoogt retentie, ze verlaagt die niet.",
        },
        {
          title: "Vervang productverkoop door uitkomsten volgen",
          body: "Stop met producten pushen. Geef elke klant een financiële gezondheidsscore die hij dagelijks kan checken. Zakt de score, bied dan gerichte begeleiding. Je verschuift van een verkoper die ze mijden naar een partner waar ze zelf bij aankloppen.",
        },
        {
          title: "Win de eerste 3 minuten",
          body: "Bij de onboarding verliezen de meeste banken de volgende generatie. Bouw een flow waarin iemand van nul naar een actieve rekening gaat in minder dan 3 minuten, zonder kantoorbezoek. Die ene ervaring genereert meer mond-tot-mondreclame dan welke campagne ook.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Je rivaal is een spreadsheet, geen bank",
          insight:
            "Klanten lossen financiële klussen op met budgetspreadsheets, buy-now-pay-later bij de kassa, beleggingsapps en advies van Reddit — niet met bankproducten. Elk alternatief wint op één ding dat de bank moeilijk maakt: overzicht, direct krediet of gewone-mensentaal.",
          opportunity:
            "Trek de klussen die klanten buiten de bank doen — budgetteren, vergelijken, plannen — de kernrekening in, zodat de spreadsheet overbodig wordt.",
        },
        {
          path: "strategic-groups",
          title: "Fintech-snelheid met balansdiepte",
          insight:
            "De sector splitst in gevestigde banken met diepgang, vertrouwen en depositogarantie maar stroperige UX, en fintechs met heerlijke apps maar ondiepe productcapaciteit. Klanten kiezen nu noodgedwongen het ene gebrek of het andere.",
          opportunity:
            "Combineer beide: een gereguleerde balans achter een onboarding van 3 minuten en een app voor dagelijks gebruik. Niemand claimt dat snijvlak nog geloofwaardig.",
        },
        {
          path: "buyer-chain",
          title: "De CFO van het huishouden die niemand bedient",
          insight:
            "Banken verkopen aan de individuele rekeninghouder, maar geldbeslissingen worden door huishoudens genomen: partners met aparte rekeningen, ouders die kindergeld beheren, volwassen kinderen die de financiën van hun ouders regelen. De echte beslissingseenheid is onzichtbaar voor het product.",
          opportunity:
            "Bouw gedeelde dashboards, gedelegeerde toegang en financiële gezinsplanning als volwaardige functies — claim het huishouden, niet de rekening.",
        },
        {
          path: "complementary-offerings",
          title: "Geld reist nooit alleen",
          insight:
            "Elke financiële beslissing zit verpakt in een niet-financiële gebeurtenis: een nieuwe baan, een huis, een kind, een scheiding. Banken zien de transactie weken na de gebeurtenis en reageren met een generieke mailing, als ze al reageren.",
          opportunity:
            "Levensgebeurtenis-triggers die de salariswijziging of het nieuwe gezinslid signaleren en binnen dagen reageren met één concrete, relevante aanbeveling.",
        },
        {
          path: "functional-emotional",
          title: "Van afschriften naar gemoedsrust",
          insight:
            "Bankieren wordt functioneel verkocht — rentes, tarieven, features — terwijl geld de grootste bron van persoonlijke stress is. De sector verwerkt transacties voor mensen die er wakker van liggen.",
          opportunity:
            "Een financiële gezondheidsscore maakt van angst een dagelijkse gewoonte: één getal dat zegt dat het goed zit, en vertelt wat te doen als dat niet zo is.",
        },
        {
          path: "time-trends",
          title: "Open banking sloopt de datamuur",
          insight:
            "Door PSD2 en open banking is transactiedata niet langer het exclusieve bezit van de gevestigde bank, terwijl AI de marginale kosten van persoonlijk advies richting nul duwt. De slotgracht verschuift van data bezitten naar er het beste op handelen.",
          opportunity:
            "Word de aggregatielaag voor het hele financiële leven van de klant — inclusief rekeningen elders — en verdien aan begeleiding, niet aan bewaring.",
        },
      ],
    },
    utilityMap: {
      cells: [
        { stage: "purchase", lever: "productivity", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "simplicity",
          status: "blocked",
          note: "Ruim veertig overlappende producten in ondoorzichtige tiers maken het kiezen van de juiste rekening een onderzoeksproject.",
        },
        { stage: "purchase", lever: "convenience", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "risk",
          status: "industry-focus",
          note: "Stabiliteit, historie en depositogarantie domineren de marketing op het koopmoment — de veiligheidsboodschap is volledig verzadigd.",
        },
        { stage: "purchase", lever: "fun-image", status: "neutral", note: null },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "productivity",
          status: "opportunity",
          note: "Onboarding in drie minuten met live identiteitsverificatie — de rekening is actief voordat de koffie koud is.",
        },
        {
          stage: "delivery",
          lever: "simplicity",
          status: "blocked",
          note: "Onboarding vereist nog altijd kantoorbezoeken, natte handtekeningen en dagen wachten — het grootste lek van de volgende generatie klanten.",
        },
        { stage: "delivery", lever: "convenience", status: "neutral", note: null },
        { stage: "delivery", lever: "risk", status: "neutral", note: null },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "industry-focus",
          note: "Transactieverwerking is snel, goedkoop en betrouwbaar — een opgelost probleem dat de sector toch blijft oppoetsen.",
        },
        {
          stage: "use",
          lever: "simplicity",
          status: "opportunity",
          note: "Een realtime financiële gezondheidsscore vouwt 40 producten samen tot één getal dat de klant daadwerkelijk dagelijks checkt.",
        },
        { stage: "use", lever: "convenience", status: "neutral", note: null },
        {
          stage: "use",
          lever: "risk",
          status: "industry-focus",
          note: "Fraudepreventie, beveiliging en compliance slokken het gros van de technologie-investeringen op — noodzakelijk, maar onzichtbaar als onderscheid.",
        },
        { stage: "use", lever: "fun-image", status: "neutral", note: null },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "productivity",
          status: "industry-focus",
          note: "De cross-sell-machine is fijn afgesteld op maximale producten per klant — niet op maximale uitkomsten per klant.",
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
          note: "Levensgebeurtenis-triggers leveren advies op precies het moment dat het ertoe doet — salariswijziging, gezinsuitbreiding, naderend pensioen.",
        },
        {
          stage: "maintenance",
          lever: "simplicity",
          status: "opportunity",
          note: "Een radicaal tariefdashboard toont in realtime wat elke dienst kost en hoe dat zich verhoudt — transparantie als retentiemotor.",
        },
        {
          stage: "maintenance",
          lever: "convenience",
          status: "blocked",
          note: "Een adres, limiet of begunstigde wijzigen vraagt bij de meeste banken nog steeds telefoontjes, formulieren of een kantoorbezoek.",
        },
        { stage: "maintenance", lever: "risk", status: "neutral", note: null },
        { stage: "maintenance", lever: "fun-image", status: "neutral", note: null },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        { stage: "disposal", lever: "productivity", status: "neutral", note: null },
        { stage: "disposal", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "disposal",
          lever: "convenience",
          status: "blocked",
          note: "Overstappen is bewust pijnlijk gemaakt — rekeningen sluiten, incasso's migreren en historie verliezen vormen de echte lock-in.",
        },
        { stage: "disposal", lever: "risk", status: "neutral", note: null },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        { stage: "disposal", lever: "eco", status: "neutral", note: null },
      ],
      keyInsight:
        "Levering en onderhoud liggen wagenwijd open: de sector heeft de transactie geperfectioneerd maar de momenten eromheen verwaarloosd — starten, advies krijgen en door levensveranderingen heen komen.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "De afgehaakte rekeninghouders",
          whoTheyAre:
            "Klanten die uit gewoonte een salarisrekening aanhouden, hun spaargeld en beleggingen elders parkeren en de bank alleen spreken als het moet.",
          whyTheyLeave:
            "Ze voelen zich een verkoopdoelwit, geen klant: ondoorzichtige tarieven, irrelevante cross-sell en nul begeleiding — bij de eerste goede neobank-prompt zijn ze weg.",
          unlockStrategy:
            "Een financiële gezondheidsscore plus een transparant tariefdashboard geeft ze een dagelijkse reden om in te loggen en een concrete reden om alles bij één bank onder te brengen.",
          relativeSize: "large",
        },
        {
          tier: "second",
          label: "De fintech-only generatie",
          whoTheyAre:
            "Jongere klanten die traditionele banken bewust hebben afgewezen: hun financiële leven draait op neobanken, beleggingsapps en betaalwallets.",
          whyTheyLeave:
            "Onboarding uit het kantoortijdperk, papieren formulieren en een toon die loyaliteit veronderstelt die nooit is verdiend. Voor hen staat het gevestigde merk gelijk aan frictie.",
          unlockStrategy:
            "Ontmoet ze volledig op hun voorwaarden: onboarding in 3 minuten, alles app-first, en fintech-snelheid met een depositogarantie die de apps niet kunnen evenaren.",
          relativeSize: "medium",
        },
        {
          tier: "third",
          label: "De adviesloze massa",
          whoTheyAre:
            "Huishoudens en microbedrijven die de bank nooit als adviesbron hebben gezien — zij nemen financiële beslissingen op gevoel, op familieadvies, of helemaal niet.",
          whyTheyLeave:
            "Persoonlijk advies was altijd geprijsd en verpakt voor vermogenden; voor de rest is de bank een nutsleiding, dus zochten ze nooit meer.",
          unlockStrategy:
            "AI-ondersteund advies tegen vrijwel nul marginale kosten maakt proactieve begeleiding een gratis standaardfunctie — en verandert de nutsleiding in een financiële partner voor de massamarkt.",
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
            "Ja — de zet neemt de drie grootste pijnen tegelijk weg: kiezen (8 producten in plaats van 40), starten (3 minuten in plaats van dagen) en begrijpen (één gezondheidsscore in plaats van pdf's van 40 pagina's). Stuk voor stuk utiliteit die de klant wekelijks voelt.",
          actions: [],
        },
        {
          gate: "price",
          question:
            "Is de prijs goed toegankelijk voor de massa van de kopers?",
          verdict: "pass",
          assessment:
            "Ja — radicale vereenvoudiging verlaagt de servicekosten, wat transparante tarieven op of onder het marktgemiddelde financiert, en de gezondheidsscore en advieslaag zijn gratis standaardfuncties. De propositie is per ontwerp geprijsd voor de massamarkt.",
          actions: [],
        },
        {
          gate: "cost",
          question:
            "Is het kostendoel haalbaar om winstgevend te zijn tegen de strategische prijs?",
          verdict: "fail",
          assessment:
            "Niet in de huidige structuur. Een legacy-core, een kantorenpark en decennia productwildgroei betekenen dat de besparingen van vereenvoudiging jaren na de prijsverlagingen arriveren — dubbele kosten zouden de marges verpletteren lang voordat het nieuwe model zich terugbetaalt.",
          actions: [
            "Lanceer als greenfield digitaal merk op een moderne core en migreer klanten ernaartoe, in plaats van het legacy-landschap ter plekke te transformeren.",
            "Koppel de afbouw van kantoren aan gemeten digitale-adoptiemijlpalen en begrens dubbele kosten op een horizon van 24 maanden.",
            "Beperk de catalogus in het nieuwe merk vanaf dag één tot 8 producten — porteer de lange staart nooit.",
          ],
        },
        {
          gate: "adoption",
          question:
            "Wat zijn de adoptiehordes, en worden ze vooraf aangepakt?",
          verdict: "risk",
          assessment:
            "Toezichthouders zullen een snelle onboardingflow toetsen op KYC-degelijkheid, en het interne adviesapparaat zal proactief AI-advies lezen als zijn eigen overlijdensbericht. Beide kunnen de zet lamleggen als ze te laat worden ontdekt.",
          actions: [
            "Stem het vereenvoudigde productaanbod en de live identiteitsverificatie vóór lancering af met de toezichthouder.",
            "Schoolt kantooradviseurs om tot het proactieve adviesteam — maak ze de motor van het product, niet het slachtoffer.",
          ],
        },
      ],
      overallVerdict: "rework",
      conclusion:
        "De strategie haalt utiliteit en prijs overtuigend, maar het vehikel deugt niet: als legacy-transformatie strandt de kostenpoort. Herwerk de zet als greenfield-bouw met beheerste migratie — dan klaart elke poort.",
    },
  },
};
