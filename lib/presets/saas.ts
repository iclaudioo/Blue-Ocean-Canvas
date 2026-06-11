import type { Analysis } from "@/lib/schema";

export const saas: { en: Analysis; nl: Analysis } = {
  en: {
    v: 1,
    meta: {
      id: "preset-saas",
      company: "Software & SaaS",
      industry:
        "SaaS vendors stacking features and seats while customers struggle to see any outcome",
      language: "en",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "Charge for the outcome, not the login",
        narrative:
          "SaaS companies compete on feature checklists, seat-based pricing, and contractual lock-in — a red ocean where every product demo looks the same and 70% of purchased features go unused. The blue ocean lies in **outcome-based simplicity with radical time-to-value**: charging for results instead of seats, getting customers live in hours instead of quarters, and making leaving easy enough that nobody wants to.",
        redOceanTraits: [
          "Feature-checklist demos indistinguishable from every competitor",
          "Per-seat pricing that taxes the customer's own adoption success",
          "Contract lock-in doing the retention work the product should do",
        ],
        blueOceanThesis:
          "Compete on outcome-based simplicity and radical time-to-value: price results instead of seats, go live in hours instead of quarters, and make leaving so easy nobody wants to.",
      },
      canvas: {
        factors: [
          {
            name: "Feature breadth",
            rationale:
              "Buyers use checklists to compare vendors, even though 70% of what they buy never gets used.",
          },
          {
            name: "Seat pricing",
            rationale:
              "Per-seat models decide what rollout costs — and quietly punish the customers who adopt most.",
          },
          {
            name: "Contract lock-in",
            rationale:
              "Multi-year terms and cancellation windows determine how trapped a buyer feels before signing.",
          },
          {
            name: "Time to value",
            rationale:
              "The gap between signature and first measurable result is where most churn is silently decided.",
          },
          {
            name: "Outcome pricing",
            rationale:
              "Paying for results a customer already tracks aligns the invoice with the value received.",
          },
          {
            name: "Ease of exit",
            rationale:
              "A visible open door lowers buying risk — and forces the product to earn every renewal.",
          },
        ],
        industry: [5, 5, 4, 1, 1, 1],
        blueOcean: [2, 1, 1, 5, 5, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Auto-renewal contract traps",
            detail:
              "Kill annual contracts with auto-renewal traps and 90-day cancellation windows.",
          },
          {
            title: "Competitor-parity roadmaps",
            detail:
              "Stop feature-checklist roadmaps driven by competitor parity instead of customer outcomes.",
          },
        ],
        reduce: [
          {
            title: "Adoption-punishing seat pricing",
            detail:
              "Reduce reliance on per-seat pricing that punishes customers for rolling the product out widely.",
          },
          {
            title: "Quarter-long implementations",
            detail:
              "Cut implementation timelines from 3-6 month onboarding projects to same-day activation.",
          },
        ],
        raise: [
          {
            title: "First result within 24 hours",
            detail:
              "Raise time-to-value: a first measurable result within 24 hours of signup, not after a quarter.",
          },
          {
            title: "One-click data portability",
            detail:
              "Raise data portability: one-click export of everything, in open formats, at any time.",
          },
        ],
        create: [
          {
            title: "Outcome-based pricing",
            detail:
              "Pricing tied to a metric the customer already tracks — tickets resolved, leads converted, hours saved.",
          },
          {
            title: "Public value dashboard",
            detail:
              "A dashboard showing each customer exactly what the product earned or saved them this month.",
          },
          {
            title: "Reverse trials",
            detail:
              "Full product free until it demonstrably pays for itself — then pricing kicks in.",
          },
        ],
      },
      moves: [
        {
          title: "Charge for the outcome, not the login",
          body: "Seat-based pricing taxes adoption — the more your champion succeeds, the more they pay. Pick one metric your product directly moves (resolved tickets, qualified leads, processed invoices) and price against it. Customers stop auditing seats and start rooting for your invoice to grow, because it means theirs did too.",
        },
        {
          title: "Win the first 24 hours",
          body: "The average B2B SaaS takes 3-6 months to implement; most churn is decided in week one. Engineer a path from signup to first measurable result in under 24 hours — preloaded templates, automatic data import, one integration instead of twelve. The vendor that shows value before the kickoff call has already won the renewal.",
        },
        {
          title: "Make leaving easy — and watch retention rise",
          body: "Lock-in retains contracts, not customers. Offer monthly terms, one-click data export, and a documented off-boarding path, then publish it. The counterintuitive math: removing exit friction forces your product to earn its renewal every month, and buyers sign 2-3x faster when they know the door isn't welded shut.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Your real competitor is a spreadsheet",
          insight:
            "Buyers don't choose between you and the other vendor in the Gartner quadrant — they choose between you, Excel, an agency, and doing nothing. The spreadsheet is free, familiar, and wins more deals than any named competitor.",
          opportunity:
            "Price and pitch against the cost of the alternative — the analyst hours, the agency retainer, the errors — not against another SaaS line item.",
        },
        {
          path: "strategic-groups",
          title: "Enterprise outcomes at point-tool speed",
          insight:
            "Enterprise suites sell power with quarter-long implementations; cheap point tools sell speed with a capability ceiling. The buyer caught between them — too complex for the tool, too impatient for the suite — is served by neither group.",
          opportunity:
            "Deliver suite-grade outcomes with point-tool onboarding: live the same day, deep where it counts, shallow nowhere it matters.",
        },
        {
          path: "buyer-chain",
          title: "Sell to the CFO's dashboard, not procurement",
          insight:
            "SaaS is sold to CIOs and procurement on feature matrices, while end users suffer the product and CFOs question the renewal. Neither of the people who decide long-term fate sees value in checklist form.",
          opportunity:
            "Arm the CFO with a live value dashboard and win end users in the first session — procurement follows the people who already love it.",
        },
        {
          path: "complementary-offerings",
          title: "Absorb the implementation industry",
          insight:
            "Around every SaaS purchase sits a shadow economy of integration consultants, onboarding partners, and admin training — often costing more than the license. The industry treats this friction as someone else's revenue.",
          opportunity:
            "Make migration, integration, and onboarding part of the product — automatic data import and preloaded templates that delete the consulting line item.",
        },
        {
          path: "functional-emotional",
          title: "De-risk the champion's career bet",
          insight:
            "Vendors sell rational ROI decks, but the buyer's real calculus is emotional: a failed implementation is a career scar. Fear, not features, kills more deals than any competitor.",
          opportunity:
            "Sell safety: reverse trials, monthly terms, and a published exit path turn a career risk into a no-regret decision.",
        },
        {
          path: "time-trends",
          title: "Seat pricing dies when agents do the work",
          insight:
            "AI agents are starting to execute the workflows humans used to click through — and a seat-based model has no answer for software used by zero humans. Usage- and outcome-based economics are becoming the default expectation.",
          opportunity:
            "Move to outcome pricing now, before the AI transition forces it — vendors who price results are indifferent to who, or what, does the clicking.",
        },
      ],
    },
    utilityMap: {
      cells: [
        {
          stage: "purchase",
          lever: "productivity",
          status: "industry-focus",
          note: "Feature matrices, ROI decks, and demo theater — the industry's entire energy goes into winning the evaluation.",
        },
        {
          stage: "purchase",
          lever: "simplicity",
          status: "blocked",
          note: "Opaque, sales-gated pricing and quote-only tiers make a simple buying decision impossible.",
        },
        { stage: "purchase", lever: "convenience", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "risk",
          status: "opportunity",
          note: "Reverse trials — free until the product demonstrably pays for itself — remove the buyer's career risk at the signature moment.",
        },
        { stage: "purchase", lever: "fun-image", status: "neutral", note: null },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "productivity",
          status: "opportunity",
          note: "First measurable result within 24 hours of signup — preloaded templates and automatic import collapse the time-to-value gap.",
        },
        {
          stage: "delivery",
          lever: "simplicity",
          status: "blocked",
          note: "3-6 month implementation projects with consultants and kickoff calls; onboarding is an industry of its own.",
        },
        { stage: "delivery", lever: "convenience", status: "neutral", note: null },
        { stage: "delivery", lever: "risk", status: "neutral", note: null },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "industry-focus",
          note: "Power features for power users — roadmaps optimize for the 5% who attend user conferences.",
        },
        {
          stage: "use",
          lever: "simplicity",
          status: "blocked",
          note: "70% of purchased features go unused; bloat makes the daily experience slower every release.",
        },
        { stage: "use", lever: "convenience", status: "neutral", note: null },
        { stage: "use", lever: "risk", status: "neutral", note: null },
        { stage: "use", lever: "fun-image", status: "neutral", note: null },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "productivity",
          status: "industry-focus",
          note: "Integration marketplaces and partner ecosystems — heavy investment in connecting to everything.",
        },
        { stage: "supplements", lever: "simplicity", status: "neutral", note: null },
        { stage: "supplements", lever: "convenience", status: "neutral", note: null },
        { stage: "supplements", lever: "risk", status: "neutral", note: null },
        { stage: "supplements", lever: "fun-image", status: "neutral", note: null },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "productivity",
          status: "industry-focus",
          note: "Admin consoles, SLAs, and uptime reporting keep the IT department satisfied — and the renewal defensible.",
        },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        { stage: "maintenance", lever: "convenience", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "risk",
          status: "opportunity",
          note: "A public value dashboard — what the product earned or saved this month — turns every renewal from a debate into a formality.",
        },
        { stage: "maintenance", lever: "fun-image", status: "neutral", note: null },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        { stage: "disposal", lever: "productivity", status: "neutral", note: null },
        {
          stage: "disposal",
          lever: "simplicity",
          status: "opportunity",
          note: "One-click export in open formats and a documented off-boarding path — the published open door that makes buyers sign 2-3x faster.",
        },
        { stage: "disposal", lever: "convenience", status: "neutral", note: null },
        {
          stage: "disposal",
          lever: "risk",
          status: "blocked",
          note: "Data held hostage, 90-day cancellation windows, and auto-renewal traps — exiting is engineered to be painful.",
        },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        { stage: "disposal", lever: "eco", status: "neutral", note: null },
      ],
      keyInsight:
        "The industry over-invests in the evaluation and the power user, while delivery and disposal are deserts: the vendor that wins the first 24 hours and unlocks the exit door owns the trust the rest of the market is busy destroying.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "Shelfware accounts",
          whoTheyAre:
            "Customers who pay the invoice but barely log in — adoption stalled after onboarding and the renewal is already in doubt.",
          whyTheyLeave:
            "They never reached a measurable result; the product became a line item their CFO circles every budget cycle.",
          unlockStrategy:
            "Re-onboard them onto the 24-hour value path and move them to outcome pricing — when the invoice tracks results, zero usage means zero bill and renewed trust.",
          relativeSize: "medium",
        },
        {
          tier: "second",
          label: "Spreadsheet loyalists",
          whoTheyAre:
            "Teams that evaluated SaaS, got burned by a long implementation or surprise renewal, and deliberately run on Excel and email instead.",
          whyTheyLeave:
            "They concluded the category costs more in time, lock-in, and risk than the problem itself.",
          unlockStrategy:
            "Offer the reverse trial with monthly terms and a published exit path — remove every reason their last vendor gave them to distrust the category.",
          relativeSize: "large",
        },
        {
          tier: "third",
          label: "Below the sales-team radar",
          whoTheyAre:
            "Small teams and solo operators who fall under seat minimums and sales-led pricing floors — the industry literally cannot sell to them.",
          whyTheyLeave:
            "Nobody ever tried to win them: demos require a sales call and entry tiers assume ten seats they don't have.",
          unlockStrategy:
            "Self-serve signup with outcome pricing and no minimums — they pay only when results land, and the successful ones grow into your mid-market base.",
          relativeSize: "medium",
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
            "Same-day activation, an invoice tied to results, and a visible exit attack the three pains every SaaS buyer recites unprompted: slow value, misaligned pricing, and lock-in anxiety. Against a market where 70% of features go unused, the utility leap is exceptional and easy to demonstrate.",
          actions: [],
        },
        {
          gate: "price",
          question: "Is your price easily accessible to the mass of buyers?",
          verdict: "risk",
          assessment:
            "Outcome pricing is highly accessible at entry — pay nothing until value lands — but attribution is the trap: customers may dispute whether the product or their team resolved the ticket, and an uncapped success fee can exceed what a seat license would have cost.",
          actions: [
            "Anchor on one unambiguous metric the customer already reports today, agreed in writing before activation",
            "Cap the monthly outcome fee at a published ceiling so success never reads as a penalty",
          ],
        },
        {
          gate: "cost",
          question:
            "Can you attain your cost target to profit at your strategic price?",
          verdict: "pass",
          assessment:
            "Software gross margins absorb the model: automated 24-hour onboarding cuts customer-success cost per account, and reverse trials replace paid acquisition spend with product-led conversion. The cost structure improves precisely where the legacy model is heaviest — implementation and sales.",
          actions: [],
        },
        {
          gate: "adoption",
          question:
            "What are the adoption hurdles in actualizing the idea, and are you addressing them upfront?",
          verdict: "pass",
          assessment:
            "The hardest hurdle is internal: a sales team compensated on annual bookings will resist monthly terms and usage-revenue ramp. Customers, by contrast, adopt eagerly — the model removes their risk. Re-basing sales compensation on retained outcome revenue before launch defuses the only real resistance.",
          actions: [],
        },
      ],
      overallVerdict: "go",
      conclusion:
        "Utility, cost, and adoption clear convincingly; the model succeeds or stalls on pricing mechanics — nail attribution and caps, and the rest compounds.",
    },
  },
  nl: {
    v: 1,
    meta: {
      id: "preset-saas",
      company: "Software & SaaS",
      industry:
        "SaaS-leveranciers die features en seats stapelen terwijl klanten geen resultaat kunnen aanwijzen",
      language: "nl",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "Reken af op resultaat, niet op logins",
        narrative:
          "SaaS-bedrijven concurreren op feature-checklists, prijs per seat en contractuele lock-in — een rode oceaan waarin elke productdemo op elkaar lijkt en 70% van de gekochte features ongebruikt blijft. De blauwe oceaan ligt in **resultaatgedreven eenvoud met radicale time-to-value**: betalen voor resultaten in plaats van seats, klanten live in uren in plaats van kwartalen, en vertrekken zo makkelijk maken dat niemand het wil.",
        redOceanTraits: [
          "Feature-checklist-demo's die niet van de concurrent te onderscheiden zijn",
          "Prijs per seat die het adoptiesucces van de klant zelf belast",
          "Contractuele lock-in die het retentiewerk doet dat het product zou moeten doen",
        ],
        blueOceanThesis:
          "Concurreer op resultaatgedreven eenvoud en radicale time-to-value: beprijs resultaten in plaats van seats, ga live in uren in plaats van kwartalen, en maak vertrekken zo makkelijk dat niemand het wil.",
      },
      canvas: {
        factors: [
          {
            name: "Functieomvang",
            rationale:
              "Kopers vergelijken leveranciers met checklists, terwijl 70% van wat ze kopen nooit wordt gebruikt.",
          },
          {
            name: "Prijs per seat",
            rationale:
              "Seat-modellen bepalen wat uitrol kost — en straffen stilletjes de klanten die het meest adopteren.",
          },
          {
            name: "Contract-lock-in",
            rationale:
              "Meerjarige contracten en opzegtermijnen bepalen hoe klem een koper zich al vóór de handtekening voelt.",
          },
          {
            name: "Time-to-value",
            rationale:
              "Het gat tussen handtekening en eerste meetbare resultaat is waar de meeste churn stilletjes wordt beslist.",
          },
          {
            name: "Resultaatbeprijzing",
            rationale:
              "Betalen voor resultaten die de klant al meet, brengt de factuur in lijn met de geleverde waarde.",
          },
          {
            name: "Uitstapgemak",
            rationale:
              "Een zichtbaar open deur verlaagt het kooprisico — en dwingt het product elke verlenging te verdienen.",
          },
        ],
        industry: [5, 5, 4, 1, 1, 1],
        blueOcean: [2, 1, 1, 5, 5, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Stilzwijgende verlengingsfuiken",
            detail:
              "Schaf jaarcontracten met automatische verlenging en opzegtermijnen van 90 dagen af.",
          },
          {
            title: "Concurrentie-pariteit roadmaps",
            detail:
              "Stop met feature-checklist-roadmaps die draaien om gelijk oversteken met de concurrent in plaats van klantresultaat.",
          },
        ],
        reduce: [
          {
            title: "Adoptie-bestraffende seatprijzen",
            detail:
              "Verminder de afhankelijkheid van prijs per seat, die klanten straft voor een brede uitrol van het product.",
          },
          {
            title: "Implementaties van een kwartaal",
            detail:
              "Verkort implementatietrajecten van 3-6 maanden onboarding naar activatie op dezelfde dag.",
          },
        ],
        raise: [
          {
            title: "Eerste resultaat binnen 24 uur",
            detail:
              "Verhoog de time-to-value: een eerste meetbaar resultaat binnen 24 uur na aanmelding, niet na een kwartaal.",
          },
          {
            title: "Dataportabiliteit met één klik",
            detail:
              "Verhoog dataportabiliteit: alles exporteren met één klik, in open formaten, op elk moment.",
          },
        ],
        create: [
          {
            title: "Resultaatgebaseerde beprijzing",
            detail:
              "Beprijzing gekoppeld aan een metric die de klant al bijhoudt — opgeloste tickets, geconverteerde leads, bespaarde uren.",
          },
          {
            title: "Publiek waardedashboard",
            detail:
              "Een dashboard dat elke klant exact toont wat het product deze maand heeft opgeleverd of bespaard.",
          },
          {
            title: "Omgekeerde proefperiodes",
            detail:
              "Het volledige product gratis tot het zich aantoonbaar terugverdient — dan pas start de beprijzing.",
          },
        ],
      },
      moves: [
        {
          title: "Reken af op het resultaat, niet op de login",
          body: "Prijs per seat belast adoptie — hoe meer succes je interne ambassadeur boekt, hoe meer die betaalt. Kies één metric die je product direct beïnvloedt (opgeloste tickets, gekwalificeerde leads, verwerkte facturen) en beprijs daarop. Klanten stoppen met seats tellen en gaan hopen dat jouw factuur groeit — want dat betekent dat hun resultaat dat ook deed.",
        },
        {
          title: "Win de eerste 24 uur",
          body: "De gemiddelde B2B-SaaS kost 3-6 maanden om te implementeren; de meeste churn wordt in week één beslist. Bouw een pad van aanmelding naar eerste meetbare resultaat binnen 24 uur — voorgeladen templates, automatische data-import, één integratie in plaats van twaalf. De leverancier die waarde toont vóór de kick-offcall heeft de verlenging al gewonnen.",
        },
        {
          title: "Maak vertrekken makkelijk — en zie retentie stijgen",
          body: "Lock-in behoudt contracten, geen klanten. Bied maandtermijnen, data-export met één klik en een gedocumenteerd offboardingpad — en publiceer het. De contra-intuïtieve rekensom: het wegnemen van uitstapfrictie dwingt je product elke maand zijn verlenging te verdienen, en kopers tekenen 2-3x sneller als ze weten dat de deur niet is dichtgelast.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Je echte concurrent is een spreadsheet",
          insight:
            "Kopers kiezen niet tussen jou en die andere leverancier in het Gartner-kwadrant — ze kiezen tussen jou, Excel, een bureau en niets doen. De spreadsheet is gratis, vertrouwd en wint meer deals dan welke concurrent met een naam ook.",
          opportunity:
            "Beprijs en positioneer tegen de kosten van het alternatief — de analistenuren, het bureautarief, de fouten — niet tegen een andere SaaS-regel op de begroting.",
        },
        {
          path: "strategic-groups",
          title: "Enterprise-resultaat op point-tool-snelheid",
          insight:
            "Enterprise-suites verkopen kracht met implementaties van een kwartaal; goedkope point-tools verkopen snelheid met een plafond. De koper die ertussenin zit — te complex voor de tool, te ongeduldig voor de suite — wordt door geen van beide bediend.",
          opportunity:
            "Lever resultaten op suiteniveau met point-tool-onboarding: dezelfde dag live, diep waar het telt, nergens oppervlakkig waar het ertoe doet.",
        },
        {
          path: "buyer-chain",
          title: "Verkoop aan het CFO-dashboard, niet aan inkoop",
          insight:
            "SaaS wordt op feature-matrices verkocht aan CIO's en inkoop, terwijl eindgebruikers het product ondergaan en de CFO de verlenging betwijfelt. Geen van de mensen die het langetermijnlot bepalen ziet waarde in checklistvorm.",
          opportunity:
            "Geef de CFO een live waardedashboard en win eindgebruikers in de eerste sessie — inkoop volgt de mensen die er al van houden.",
        },
        {
          path: "complementary-offerings",
          title: "Absorbeer de implementatie-industrie",
          insight:
            "Rond elke SaaS-aankoop hangt een schaduweconomie van integratieconsultants, onboardingpartners en admintrainingen — vaak duurder dan de licentie zelf. De sector behandelt die frictie als andermans omzet.",
          opportunity:
            "Maak migratie, integratie en onboarding deel van het product — automatische data-import en voorgeladen templates die de consultancyregel van de begroting schrappen.",
        },
        {
          path: "functional-emotional",
          title: "Haal het carrièrerisico uit de keuze",
          insight:
            "Leveranciers verkopen rationele ROI-decks, maar de echte rekensom van de koper is emotioneel: een mislukte implementatie is een litteken op je cv. Angst, niet features, doodt meer deals dan welke concurrent ook.",
          opportunity:
            "Verkoop veiligheid: omgekeerde proefperiodes, maandtermijnen en een gepubliceerd uitstappad maken van een carrièrerisico een keuze zonder spijt.",
        },
        {
          path: "time-trends",
          title: "Seatprijzen sterven als agents het werk doen",
          insight:
            "AI-agents beginnen de workflows uit te voeren waar mensen doorheen klikten — en een seat-model heeft geen antwoord op software die door nul mensen wordt gebruikt. Usage- en resultaatbeprijzing worden de standaardverwachting.",
          opportunity:
            "Stap nu over op resultaatbeprijzing, vóór de AI-transitie het afdwingt — wie resultaten beprijst, maakt het niet uit wie of wat er klikt.",
        },
      ],
    },
    utilityMap: {
      cells: [
        {
          stage: "purchase",
          lever: "productivity",
          status: "industry-focus",
          note: "Feature-matrices, ROI-decks en demotheater — alle energie van de sector gaat naar het winnen van de evaluatie.",
        },
        {
          stage: "purchase",
          lever: "simplicity",
          status: "blocked",
          note: "Ondoorzichtige, door sales afgeschermde prijzen en offerte-only tiers maken een eenvoudige koopbeslissing onmogelijk.",
        },
        { stage: "purchase", lever: "convenience", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "risk",
          status: "opportunity",
          note: "Omgekeerde proefperiodes — gratis tot het product zich aantoonbaar terugverdient — nemen het carrièrerisico van de koper weg op het tekenmoment.",
        },
        { stage: "purchase", lever: "fun-image", status: "neutral", note: null },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "productivity",
          status: "opportunity",
          note: "Eerste meetbare resultaat binnen 24 uur na aanmelding — voorgeladen templates en automatische import vouwen het time-to-value-gat dicht.",
        },
        {
          stage: "delivery",
          lever: "simplicity",
          status: "blocked",
          note: "Implementatietrajecten van 3-6 maanden met consultants en kick-offcalls; onboarding is een industrie op zich.",
        },
        { stage: "delivery", lever: "convenience", status: "neutral", note: null },
        { stage: "delivery", lever: "risk", status: "neutral", note: null },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "industry-focus",
          note: "Power-features voor power-users — roadmaps optimaliseren voor de 5% die naar gebruikersconferenties gaat.",
        },
        {
          stage: "use",
          lever: "simplicity",
          status: "blocked",
          note: "70% van de gekochte features blijft ongebruikt; bloat maakt de dagelijkse ervaring elke release trager.",
        },
        { stage: "use", lever: "convenience", status: "neutral", note: null },
        { stage: "use", lever: "risk", status: "neutral", note: null },
        { stage: "use", lever: "fun-image", status: "neutral", note: null },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "productivity",
          status: "industry-focus",
          note: "Integratiemarktplaatsen en partnerecosystemen — zware investeringen in verbinden met alles.",
        },
        { stage: "supplements", lever: "simplicity", status: "neutral", note: null },
        { stage: "supplements", lever: "convenience", status: "neutral", note: null },
        { stage: "supplements", lever: "risk", status: "neutral", note: null },
        { stage: "supplements", lever: "fun-image", status: "neutral", note: null },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "productivity",
          status: "industry-focus",
          note: "Adminconsoles, SLA's en uptime-rapportages houden de IT-afdeling tevreden — en de verlenging verdedigbaar.",
        },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        { stage: "maintenance", lever: "convenience", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "risk",
          status: "opportunity",
          note: "Een publiek waardedashboard — wat het product deze maand opleverde of bespaarde — maakt van elke verlenging een formaliteit in plaats van een debat.",
        },
        { stage: "maintenance", lever: "fun-image", status: "neutral", note: null },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        { stage: "disposal", lever: "productivity", status: "neutral", note: null },
        {
          stage: "disposal",
          lever: "simplicity",
          status: "opportunity",
          note: "Export met één klik in open formaten en een gedocumenteerd offboardingpad — de gepubliceerde open deur waardoor kopers 2-3x sneller tekenen.",
        },
        { stage: "disposal", lever: "convenience", status: "neutral", note: null },
        {
          stage: "disposal",
          lever: "risk",
          status: "blocked",
          note: "Data in gijzeling, opzegtermijnen van 90 dagen en automatische verlengingsfuiken — vertrekken is bewust pijnlijk gemaakt.",
        },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        { stage: "disposal", lever: "eco", status: "neutral", note: null },
      ],
      keyInsight:
        "De sector overinvesteert in de evaluatie en de power-user, terwijl levering en vertrek woestijnen zijn: de leverancier die de eerste 24 uur wint en de uitgang van het slot haalt, bezit het vertrouwen dat de rest van de markt druk aan het slopen is.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "Shelfware-accounts",
          whoTheyAre:
            "Klanten die de factuur betalen maar amper inloggen — de adoptie strandde na onboarding en de verlenging staat al ter discussie.",
          whyTheyLeave:
            "Ze haalden nooit een meetbaar resultaat; het product werd een begrotingsregel die de CFO elke cyclus omcirkelt.",
          unlockStrategy:
            "Onboard ze opnieuw via het 24-uurs waardepad en zet ze op resultaatbeprijzing — als de factuur het resultaat volgt, betekent nul gebruik nul kosten en hersteld vertrouwen.",
          relativeSize: "medium",
        },
        {
          tier: "second",
          label: "Spreadsheet-loyalisten",
          whoTheyAre:
            "Teams die SaaS evalueerden, zich brandden aan een lange implementatie of een verrassingsverlenging, en bewust op Excel en e-mail draaien.",
          whyTheyLeave:
            "Ze concludeerden dat de categorie meer kost aan tijd, lock-in en risico dan het probleem zelf.",
          unlockStrategy:
            "Bied de omgekeerde proefperiode met maandtermijnen en een gepubliceerd uitstappad — neem elke reden weg die hun vorige leverancier ze gaf om de categorie te wantrouwen.",
          relativeSize: "large",
        },
        {
          tier: "third",
          label: "Onder de salesradar",
          whoTheyAre:
            "Kleine teams en zelfstandigen die onder seat-minima en sales-gedreven prijsvloeren vallen — de sector kán letterlijk niet aan ze verkopen.",
          whyTheyLeave:
            "Niemand heeft ooit geprobeerd ze te winnen: demo's vereisen een salescall en instaptiers gaan uit van tien seats die ze niet hebben.",
          unlockStrategy:
            "Self-service aanmelding met resultaatbeprijzing en zonder minima — ze betalen pas als resultaat landt, en de succesvolle groeien door tot je mid-marketbasis.",
          relativeSize: "medium",
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
            "Activatie op dezelfde dag, een factuur gekoppeld aan resultaat en een zichtbare uitgang pakken de drie pijnen aan die elke SaaS-koper ongevraagd opsomt: trage waarde, scheve beprijzing en lock-in-angst. In een markt waar 70% van de features ongebruikt blijft, is de waardesprong uitzonderlijk en eenvoudig aantoonbaar.",
          actions: [],
        },
        {
          gate: "price",
          question: "Is de prijs goed toegankelijk voor de massa van kopers?",
          verdict: "risk",
          assessment:
            "Resultaatbeprijzing is bij instap zeer toegankelijk — betaal niets tot er waarde landt — maar attributie is de valkuil: klanten kunnen betwisten of het product of hun team het ticket oploste, en een ongemaximeerde succesfee kan duurder uitpakken dan een seat-licentie ooit was.",
          actions: [
            "Veranker op één ondubbelzinnige metric die de klant vandaag al rapporteert, schriftelijk vastgelegd vóór activatie",
            "Maximeer de maandelijkse resultaatfee met een gepubliceerd plafond, zodat succes nooit als straf voelt",
          ],
        },
        {
          gate: "cost",
          question:
            "Haal je het kostendoel om winstgevend te zijn tegen je strategische prijs?",
          verdict: "pass",
          assessment:
            "Software-brutomarges dragen het model: geautomatiseerde 24-uurs onboarding drukt de customer-success-kosten per account, en omgekeerde proefperiodes vervangen betaalde acquisitie door product-led conversie. De kostenstructuur verbetert precies waar het oude model het zwaarst is — implementatie en sales.",
          actions: [],
        },
        {
          gate: "adoption",
          question: "Wat zijn de adoptiehordes en pak je ze vooraf aan?",
          verdict: "pass",
          assessment:
            "De grootste horde is intern: een salesteam dat op jaarboekingen wordt beloond, zal zich verzetten tegen maandtermijnen en geleidelijk groeiende omzet. Klanten adopteren juist gretig — het model neemt hún risico weg. De salesbeloning vóór lancering omzetten naar behouden resultaatomzet ontmantelt het enige echte verzet.",
          actions: [],
        },
      ],
      overallVerdict: "go",
      conclusion:
        "Waarde, kosten en adoptie komen overtuigend door de poorten; het model slaagt of strandt op de prijsmechaniek — regel attributie en plafonds, en de rest versterkt zichzelf.",
    },
  },
};
