import type { Analysis } from "@/lib/schema";

export const healthcare: { en: Analysis; nl: Analysis } = {
  en: {
    v: 1,
    meta: {
      id: "preset-healthcare",
      company: "Healthcare & medtech",
      industry:
        "Providers and device companies trapped between regulatory burden and patient expectations",
      language: "en",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "The patient is not a case file",
        narrative:
          "Healthcare competes on clinical credentials, regulatory approvals, and institutional relationships — creating a red ocean where patients are treated as cases, not people. The blue ocean lies in **patient-centric delivery with radical accessibility**: reducing the friction between needing care and receiving it, while using technology to extend the reach of scarce clinical expertise.",
        redOceanTraits: [
          "Competes on credentials and approvals, not on how care actually feels",
          "Weeks-long waits and repeated paperwork treated as facts of life",
          "Patients processed as cases and billed as line items",
        ],
        blueOceanThesis:
          "Patient-centric delivery with radical accessibility: shrink the distance between needing care and receiving it, and use technology to multiply scarce clinical expertise.",
      },
      canvas: {
        factors: [
          {
            name: "Clinical credentials",
            rationale:
              "Buyers need assurance that care is competent and safe — but past a threshold, more credentials add cost without changing outcomes.",
          },
          {
            name: "Regulatory compliance",
            rationale:
              "A non-negotiable license to operate; patients assume it rather than choose on it.",
          },
          {
            name: "Wait time to care",
            rationale:
              "Every week between symptom and treatment compounds anxiety, cost, and clinical risk.",
          },
          {
            name: "Patient experience",
            rationale:
              "How care feels determines trust, adherence, and whether patients return before problems escalate.",
          },
          {
            name: "Digital access",
            rationale:
              "Patients manage everything else in life from their phone; care that requires a waiting room loses them.",
          },
          {
            name: "Preventive focus",
            rationale:
              "Catching deterioration early is cheaper for everyone — buyers increasingly choose providers who keep them well, not just treat them sick.",
          },
        ],
        industry: [5, 5, 1, 2, 1, 1],
        blueOcean: [4, 4, 5, 5, 5, 4],
      },
      errc: {
        eliminate: [
          {
            title: "Kill the routine office visit",
            detail:
              "Mandatory in-person visits for routine follow-ups and prescription renewals.",
          },
          {
            title: "End repetitive paperwork",
            detail:
              "Paper-based intake forms that patients fill out repeatedly at every visit.",
          },
        ],
        reduce: [
          {
            title: "Shorten referral chains",
            detail:
              "Dependency on specialist referral chains that add weeks of delay.",
          },
          {
            title: "Shrink the physical footprint",
            detail:
              "Physical infrastructure costs, by shifting suitable consultations to digital channels.",
          },
        ],
        raise: [
          {
            title: "Experience as core differentiator",
            detail:
              "Patient experience — from clinical afterthought to the heart of how the offering competes.",
          },
          {
            title: "Prevention as active program",
            detail:
              "Preventive care — from a brochure in the waiting room to an active, monitored program.",
          },
        ],
        create: [
          {
            title: "Async-first digital triage",
            detail:
              "Patients describe symptoms digitally and get routed to the right care level within hours.",
          },
          {
            title: "Continuous remote monitoring",
            detail:
              "For chronic conditions, replacing quarterly check-ups with real-time alerts.",
          },
          {
            title: "Price before treatment",
            detail:
              "Transparent pricing visible before treatment — the only industry where you buy before knowing the cost.",
          },
        ],
      },
      moves: [
        {
          title: "Make the wait the product, not the problem",
          body: "The average patient waits 3-6 weeks for a specialist. Build an async triage layer where patients submit symptoms, history, and photos digitally. An AI-assisted clinical team routes them within 24 hours: self-care guidance, GP, or fast-tracked specialist. The wait time itself becomes a competitive moat.",
        },
        {
          title: "Flip from episodic to continuous",
          body: "Replace quarterly check-ups with continuous remote monitoring for chronic patients. A connected blood pressure cuff that alerts a nurse when readings trend upward prevents the ER visit that costs 50x more. The economics and the outcomes both improve — a rare alignment.",
        },
        {
          title: "Show the price before the procedure",
          body: "Healthcare is the only major industry where customers routinely commit before knowing the cost. Publish transparent, all-in pricing for your top 20 procedures. You'll lose some margin on paper but gain massive patient trust and volume — the patients who shop around will all end up at your door.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Compete with the pharmacy, not the hospital",
          insight:
            "When a symptom appears, patients don't shortlist hospitals — they weigh the pharmacy counter, a wellness app, and Dr. Google against the hassle of an appointment. Those alternatives win on instant access, not clinical depth.",
          opportunity:
            "Match the instant access of the alternatives with real clinical judgment behind it: a digital front door that answers within hours, not weeks.",
        },
        {
          path: "strategic-groups",
          title: "Between the ER and the wellness app",
          insight:
            "The industry splits into premium private clinics selling comfort and overloaded public providers selling throughput. Wellness apps sit below both with zero clinical accountability. Nobody combines clinical-grade care with consumer-grade access.",
          opportunity:
            "Occupy the empty middle: accredited clinicians delivering async-first care at prices closer to an app subscription than a private clinic.",
        },
        {
          path: "buyer-chain",
          title: "Treat the payer and the caregiver too",
          insight:
            "The patient receives the care, but insurers and employers pay for it, and a daughter coordinating her parents' appointments often decides where it happens. The industry sells almost exclusively to clinicians and procurement.",
          opportunity:
            "Sell measurable prevention outcomes to insurers and employers, and design the booking, records, and follow-up experience for the family caregiver who actually runs it.",
        },
        {
          path: "complementary-offerings",
          title: "The visit is never just the visit",
          insight:
            "Around every appointment sits a day off work, transport, childcare, a pharmacy queue, and a follow-up call nobody makes. The industry optimizes the 20 minutes in the consultation room and ignores the 4 hours around it.",
          opportunity:
            "Bundle the periphery: e-prescriptions delivered to the door, async follow-ups that need no day off, and one digital record that travels with the patient.",
        },
        {
          path: "functional-emotional",
          title: "From clinical transaction to felt reassurance",
          insight:
            "The industry competes functionally — diagnose, treat, bill — while patients experience healthcare emotionally: fear, uncertainty, the 2 a.m. worry between appointments. That emotional layer is almost entirely unserved.",
          opportunity:
            "Continuous monitoring reframed as 'someone is watching over you' converts the most anxious patients into the most loyal ones — and they tell everyone.",
        },
        {
          path: "time-trends",
          title: "Aging patients, vanishing clinicians",
          insight:
            "Chronic disease is rising while the clinical workforce shrinks — the WHO projects a global shortfall of roughly 10 million health workers by 2030. The episodic, visit-based model mathematically cannot keep up.",
          opportunity:
            "Remote monitoring plus AI-assisted triage multiplies each clinician's reach 5-10x — the only model that scales with the demographic curve instead of against it.",
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
          note: "Transparent all-in pricing for the top 20 procedures plus a single digital intake removes the only purchase where buyers commit before knowing the cost.",
        },
        {
          stage: "purchase",
          lever: "convenience",
          status: "blocked",
          note: "Care is sold during office hours, by phone, on the provider's schedule — booking an appointment is a job in itself.",
        },
        {
          stage: "purchase",
          lever: "risk",
          status: "industry-focus",
          note: "Credentials, accreditations, and institutional reputation dominate how providers compete at the moment of choice — saturated and undifferentiating.",
        },
        { stage: "purchase", lever: "fun-image", status: "neutral", note: null },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "productivity",
          status: "blocked",
          note: "3-6 weeks between booking and treatment destroys buyer time — the single biggest utility block in the industry.",
        },
        { stage: "delivery", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "convenience",
          status: "opportunity",
          note: "Async triage that routes patients to the right care level within 24 hours turns the wait itself into the product.",
        },
        { stage: "delivery", lever: "risk", status: "neutral", note: null },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "industry-focus",
          note: "Clinical throughput and protocol efficiency are heavily optimized — for the provider's schedule, not the patient's outcome.",
        },
        { stage: "use", lever: "simplicity", status: "neutral", note: null },
        { stage: "use", lever: "convenience", status: "neutral", note: null },
        {
          stage: "use",
          lever: "risk",
          status: "industry-focus",
          note: "Clinical safety and regulatory compliance absorb most investment during treatment — table stakes that no longer differentiate.",
        },
        {
          stage: "use",
          lever: "fun-image",
          status: "opportunity",
          note: "Raising patient experience from afterthought to differentiator: care that feels human is rare enough to be a moat.",
        },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        { stage: "supplements", lever: "productivity", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "simplicity",
          status: "blocked",
          note: "Every prescription, referral, and lab result lives in a separate system the patient must navigate alone.",
        },
        { stage: "supplements", lever: "convenience", status: "neutral", note: null },
        { stage: "supplements", lever: "risk", status: "neutral", note: null },
        { stage: "supplements", lever: "fun-image", status: "neutral", note: null },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "productivity",
          status: "opportunity",
          note: "Continuous remote monitoring replaces quarterly check-ups — an alert before the ER visit that costs 50x more.",
        },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        { stage: "maintenance", lever: "convenience", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "risk",
          status: "industry-focus",
          note: "Follow-up protocols are designed around provider liability, not patient convenience or early detection.",
        },
        { stage: "maintenance", lever: "fun-image", status: "neutral", note: null },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        { stage: "disposal", lever: "productivity", status: "neutral", note: null },
        {
          stage: "disposal",
          lever: "simplicity",
          status: "blocked",
          note: "Switching providers means chasing records by fax and phone — patient data is effectively held hostage.",
        },
        { stage: "disposal", lever: "convenience", status: "neutral", note: null },
        { stage: "disposal", lever: "risk", status: "neutral", note: null },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        { stage: "disposal", lever: "eco", status: "neutral", note: null },
      ],
      keyInsight:
        "The biggest open space sits before and after treatment: purchase and maintenance, where async triage, transparent pricing, and continuous monitoring turn dead waiting time into the product itself.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "The reluctant waiters",
          whoTheyAre:
            "Patients inside the system who postpone follow-ups, skip renewals, and only show up when symptoms force them — minimal users counting the minutes until something easier exists.",
          whyTheyLeave:
            "Weeks-long waits, repeated paperwork, and visits that cost half a day off work for ten minutes of contact.",
          unlockStrategy:
            "Async triage and digital follow-ups that resolve routine care in hours from a phone — remove the half-day cost and they stop deferring care.",
          relativeSize: "large",
        },
        {
          tier: "second",
          label: "The self-treaters",
          whoTheyAre:
            "People who deliberately route around formal care: pharmacy counters, supplement regimes, symptom-checker apps, and Dr. Google.",
          whyTheyLeave:
            "They've decided the system's opacity and hassle outweigh its benefit — unknown costs, gatekeeping referrals, and the suspicion they'll be sent away with paracetamol anyway.",
          unlockStrategy:
            "Transparent upfront pricing and a low-friction digital entry point that takes their self-research seriously instead of dismissing it.",
          relativeSize: "medium",
        },
        {
          tier: "third",
          label: "The asymptomatic healthy",
          whoTheyAre:
            "People who feel fine and have never considered themselves healthcare customers — healthcare is for the sick, and they aren't.",
          whyTheyLeave:
            "The industry only sells episodic sick-care, so there is literally nothing on the shelf for someone who wants to stay well.",
          unlockStrategy:
            "Preventive monitoring subscriptions framed as performance and peace of mind — wearable-linked check-ins and an annual digital health review priced like a gym membership.",
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
            "Yes — the move attacks the industry's single largest pain point head-on. Cutting time-to-care from 3-6 weeks to 24 hours and replacing quarterly check-ups with continuous monitoring is a leap in utility patients can feel on day one.",
          actions: [],
        },
        {
          gate: "price",
          question:
            "Is the price easily accessible to the mass of buyers?",
          verdict: "risk",
          assessment:
            "Transparent flat pricing works for self-pay patients, but the mass of buyers runs through insurers whose reimbursement codes don't yet recognize async consultations or remote monitoring. Without coverage, the offer stays a niche premium product.",
          actions: [
            "Negotiate reimbursement pilots with 2-3 insurers, anchored on documented avoided ER visits and admissions.",
            "Price the monitoring subscription below a typical monthly copay so self-pay remains viable while coverage catches up.",
          ],
        },
        {
          gate: "cost",
          question:
            "Can the cost target be met to profit at the strategic price?",
          verdict: "pass",
          assessment:
            "Yes — digital triage and remote consultations carry a fraction of the cost of physical infrastructure, and each prevented ER visit removes a cost 50x larger than the monitoring that prevented it. The cost structure improves precisely where utility improves.",
          actions: [],
        },
        {
          gate: "adoption",
          question:
            "What are the adoption hurdles, and are they addressed upfront?",
          verdict: "risk",
          assessment:
            "Clinicians fear liability for diagnoses made without physical examination, and regulators move slower than the technology. Patient trust follows quickly; professional and regulatory trust must be earned deliberately.",
          actions: [
            "Run a documented clinical-safety pilot with published escalation protocols and outcome data before scaling.",
            "Engage the regulator and medical associations early — co-author the async-care guidelines instead of waiting for them.",
          ],
        },
      ],
      overallVerdict: "go",
      conclusion:
        "The utility leap is exceptional and the cost structure works in its favor; reimbursement and clinical adoption are real but solvable hurdles. Go — sequenced through insurer pilots and a safety-first regulatory posture.",
    },
  },
  nl: {
    v: 1,
    meta: {
      id: "preset-healthcare",
      company: "Zorg & medtech",
      industry:
        "Zorgaanbieders en medtech-bedrijven klem tussen regeldruk en de verwachtingen van patiënten",
      language: "nl",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "De patiënt is geen dossiernummer",
        narrative:
          "De zorg concurreert op klinische kwalificaties, registraties en institutionele relaties — een rode oceaan waarin patiënten worden behandeld als casussen, niet als mensen. De blauwe oceaan ligt in **patiëntgerichte zorg met radicale toegankelijkheid**: de frictie wegnemen tussen zorg nodig hebben en zorg krijgen, en technologie inzetten om schaarse klinische expertise verder te laten reiken.",
        redOceanTraits: [
          "Concurreert op diploma's en accreditaties, niet op hoe zorg voelt",
          "Wekenlange wachttijden en steeds dezelfde formulieren gelden als normaal",
          "Patiënten worden verwerkt als casussen en gefactureerd als regelitems",
        ],
        blueOceanThesis:
          "Patiëntgerichte zorg met radicale toegankelijkheid: verklein de afstand tussen zorg nodig hebben en zorg krijgen, en vermenigvuldig schaarse klinische expertise met technologie.",
      },
      canvas: {
        factors: [
          {
            name: "Klinische reputatie",
            rationale:
              "Patiënten willen de zekerheid van bekwame, veilige zorg — maar boven een drempel voegen extra kwalificaties kosten toe zonder dat de uitkomsten veranderen.",
          },
          {
            name: "Wet- en regelgeving",
            rationale:
              "Een niet-onderhandelbare licentie om te mogen opereren; patiënten gaan ervan uit, ze kiezen er niet op.",
          },
          {
            name: "Wachttijd tot zorg",
            rationale:
              "Elke week tussen klacht en behandeling stapelt angst, kosten en klinisch risico op.",
          },
          {
            name: "Patiëntervaring",
            rationale:
              "Hoe zorg voelt bepaalt vertrouwen, therapietrouw en of patiënten terugkomen vóórdat problemen escaleren.",
          },
          {
            name: "Digitale toegang",
            rationale:
              "Patiënten regelen de rest van hun leven via hun telefoon; zorg die een wachtkamer vereist, raakt ze kwijt.",
          },
          {
            name: "Preventieve focus",
            rationale:
              "Vroeg ingrijpen is voor iedereen goedkoper — patiënten kiezen steeds vaker voor aanbieders die ze gezond houden, niet alleen beter maken.",
          },
        ],
        industry: [5, 5, 1, 2, 1, 1],
        blueOcean: [4, 4, 5, 5, 5, 4],
      },
      errc: {
        eliminate: [
          {
            title: "Schrap het routinebezoek",
            detail:
              "Verplichte fysieke afspraken voor routinecontroles en herhaalrecepten.",
          },
          {
            title: "Stop het papierwerk-ritueel",
            detail:
              "Papieren intakeformulieren die patiënten bij elk bezoek opnieuw invullen.",
          },
        ],
        reduce: [
          {
            title: "Verkort de verwijsketens",
            detail:
              "Afhankelijkheid van verwijsketens naar specialisten die weken vertraging toevoegen.",
          },
          {
            title: "Verklein de fysieke voetafdruk",
            detail:
              "Kosten van fysieke infrastructuur, door geschikte consulten naar digitale kanalen te verplaatsen.",
          },
        ],
        raise: [
          {
            title: "Ervaring als onderscheidend wapen",
            detail:
              "Patiëntervaring — van klinische bijzaak naar de kern van waarop het aanbod concurreert.",
          },
          {
            title: "Preventie als actief programma",
            detail:
              "Preventieve zorg — van een folder in de wachtkamer naar een actief, gemonitord programma.",
          },
        ],
        create: [
          {
            title: "Async-first digitale triage",
            detail:
              "Patiënten beschrijven hun klachten digitaal en worden binnen enkele uren naar het juiste zorgniveau geleid.",
          },
          {
            title: "Continue monitoring op afstand",
            detail:
              "Voor chronische aandoeningen, ter vervanging van kwartaalcontroles door realtime signalering.",
          },
          {
            title: "Prijs vóór de behandeling",
            detail:
              "Transparante prijzen zichtbaar vóór de behandeling — de enige sector waar je koopt zonder de kosten te kennen.",
          },
        ],
      },
      moves: [
        {
          title: "Maak van de wachttijd het product, niet het probleem",
          body: "De gemiddelde patiënt wacht 3-6 weken op een specialist. Bouw een asynchrone triagelaag waarin patiënten klachten, voorgeschiedenis en foto's digitaal aanleveren. Een AI-ondersteund klinisch team routeert ze binnen 24 uur: zelfzorgadvies, huisarts of versneld naar de specialist. De wachttijd zelf wordt je concurrentievoordeel.",
        },
        {
          title: "Kantel van episodisch naar continu",
          body: "Vervang kwartaalcontroles door continue monitoring op afstand voor chronische patiënten. Een gekoppelde bloeddrukmeter die een verpleegkundige waarschuwt zodra de waarden oplopen, voorkomt het SEH-bezoek dat 50x meer kost. De economie én de uitkomsten verbeteren — een zeldzame combinatie.",
        },
        {
          title: "Toon de prijs vóór de ingreep",
          body: "De zorg is de enige grote sector waarin klanten zich standaard vastleggen zonder de kosten te kennen. Publiceer transparante all-in prijzen voor je top-20 behandelingen. Op papier lever je marge in, maar je wint enorm patiëntvertrouwen en volume — de patiënten die rondshoppen komen allemaal bij jou uit.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Concurreer met de apotheek, niet met het ziekenhuis",
          insight:
            "Bij een klacht maakt een patiënt geen shortlist van ziekenhuizen — hij weegt de apotheekbalie, een wellness-app en dokter Google af tegen het gedoe van een afspraak. Die alternatieven winnen op directe toegang, niet op klinische diepgang.",
          opportunity:
            "Evenaar de directe toegang van de alternatieven, maar mét echt klinisch oordeel erachter: een digitale voordeur die binnen uren antwoordt, niet binnen weken.",
        },
        {
          path: "strategic-groups",
          title: "Tussen de SEH en de wellness-app",
          insight:
            "De sector valt uiteen in privéklinieken die comfort verkopen en overbelaste reguliere aanbieders die doorstroom verkopen. Wellness-apps zitten daaronder, zonder enige klinische verantwoordelijkheid. Niemand combineert klinische kwaliteit met consumentvriendelijke toegang.",
          opportunity:
            "Bezet het lege midden: geregistreerde zorgverleners die async-first zorg leveren tegen prijzen die dichter bij een app-abonnement liggen dan bij een privékliniek.",
        },
        {
          path: "buyer-chain",
          title: "Bedien ook de betaler en de mantelzorger",
          insight:
            "De patiënt ontvangt de zorg, maar verzekeraars en werkgevers betalen ervoor, en de dochter die de afspraken van haar ouders regelt, bepaalt vaak waar die zorg plaatsvindt. De sector verkoopt vrijwel uitsluitend aan clinici en inkopers.",
          opportunity:
            "Verkoop meetbare preventie-uitkomsten aan verzekeraars en werkgevers, en ontwerp het boeken, het dossier en de nazorg voor de mantelzorger die het in de praktijk allemaal regelt.",
        },
        {
          path: "complementary-offerings",
          title: "Het consult is nooit alleen het consult",
          insight:
            "Rond elke afspraak hangt een vrije dag, vervoer, kinderopvang, een rij bij de apotheek en een nazorg-telefoontje dat niemand pleegt. De sector optimaliseert de 20 minuten in de spreekkamer en negeert de 4 uur eromheen.",
          opportunity:
            "Bundel de periferie: e-recepten thuisbezorgd, asynchrone nacontroles waarvoor geen vrije dag nodig is, en één digitaal dossier dat met de patiënt meereist.",
        },
        {
          path: "functional-emotional",
          title: "Van klinische transactie naar voelbare geruststelling",
          insight:
            "De sector concurreert functioneel — diagnosticeren, behandelen, factureren — terwijl patiënten zorg emotioneel beleven: angst, onzekerheid, het gepieker om 2 uur 's nachts tussen twee afspraken in. Die emotionele laag is vrijwel onbediend.",
          opportunity:
            "Continue monitoring, geframed als 'er waakt iemand over je', maakt van de meest angstige patiënten de meest loyale — en die vertellen het iedereen.",
        },
        {
          path: "time-trends",
          title: "Vergrijzende patiënten, verdwijnende zorgverleners",
          insight:
            "Chronische ziekten nemen toe terwijl het zorgpersoneel krimpt — de WHO voorziet wereldwijd een tekort van zo'n 10 miljoen zorgmedewerkers in 2030. Het episodische, afspraakgedreven model kan dat rekenkundig niet bijbenen.",
          opportunity:
            "Monitoring op afstand plus AI-ondersteunde triage vergroot het bereik van elke zorgverlener 5-10x — het enige model dat mét de demografische curve schaalt in plaats van ertegenin.",
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
          note: "Transparante all-in prijzen voor de top-20 behandelingen plus één digitale intake nemen de enige aankoop weg waarbij kopers tekenen zonder de kosten te kennen.",
        },
        {
          stage: "purchase",
          lever: "convenience",
          status: "blocked",
          note: "Zorg wordt verkocht tijdens kantooruren, telefonisch, op het ritme van de aanbieder — een afspraak maken is op zichzelf al een klus.",
        },
        {
          stage: "purchase",
          lever: "risk",
          status: "industry-focus",
          note: "Diploma's, accreditaties en institutionele reputatie domineren de concurrentie op het keuzemoment — verzadigd en niet langer onderscheidend.",
        },
        { stage: "purchase", lever: "fun-image", status: "neutral", note: null },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "productivity",
          status: "blocked",
          note: "3-6 weken tussen boeking en behandeling vernietigt de tijd van de patiënt — de grootste utiliteitsblokkade in de sector.",
        },
        { stage: "delivery", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "convenience",
          status: "opportunity",
          note: "Asynchrone triage die patiënten binnen 24 uur naar het juiste zorgniveau leidt, maakt van de wachttijd zelf het product.",
        },
        { stage: "delivery", lever: "risk", status: "neutral", note: null },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "industry-focus",
          note: "Klinische doorstroom en protocol-efficiëntie zijn tot op het bot geoptimaliseerd — voor de agenda van de aanbieder, niet voor de uitkomst van de patiënt.",
        },
        { stage: "use", lever: "simplicity", status: "neutral", note: null },
        { stage: "use", lever: "convenience", status: "neutral", note: null },
        {
          stage: "use",
          lever: "risk",
          status: "industry-focus",
          note: "Klinische veiligheid en compliance slokken tijdens de behandeling de meeste investeringen op — basisvereisten die niet meer onderscheiden.",
        },
        {
          stage: "use",
          lever: "fun-image",
          status: "opportunity",
          note: "Patiëntervaring optillen van bijzaak naar onderscheidend wapen: zorg die menselijk voelt is zeldzaam genoeg om een slotgracht te zijn.",
        },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        { stage: "supplements", lever: "productivity", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "simplicity",
          status: "blocked",
          note: "Elk recept, elke verwijzing en elke labuitslag leeft in een apart systeem waar de patiënt alleen doorheen moet navigeren.",
        },
        { stage: "supplements", lever: "convenience", status: "neutral", note: null },
        { stage: "supplements", lever: "risk", status: "neutral", note: null },
        { stage: "supplements", lever: "fun-image", status: "neutral", note: null },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "productivity",
          status: "opportunity",
          note: "Continue monitoring op afstand vervangt kwartaalcontroles — een signaal vóór het SEH-bezoek dat 50x meer kost.",
        },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        { stage: "maintenance", lever: "convenience", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "risk",
          status: "industry-focus",
          note: "Nazorgprotocollen zijn ontworpen rond aansprakelijkheid van de aanbieder, niet rond gemak voor de patiënt of vroege signalering.",
        },
        { stage: "maintenance", lever: "fun-image", status: "neutral", note: null },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        { stage: "disposal", lever: "productivity", status: "neutral", note: null },
        {
          stage: "disposal",
          lever: "simplicity",
          status: "blocked",
          note: "Overstappen naar een andere aanbieder betekent dossiers najagen per fax en telefoon — patiëntgegevens worden feitelijk gegijzeld.",
        },
        { stage: "disposal", lever: "convenience", status: "neutral", note: null },
        { stage: "disposal", lever: "risk", status: "neutral", note: null },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        { stage: "disposal", lever: "eco", status: "neutral", note: null },
      ],
      keyInsight:
        "De grootste open ruimte ligt vóór en ná de behandeling: bij aankoop en onderhoud, waar asynchrone triage, transparante prijzen en continue monitoring dode wachttijd omzetten in het product zelf.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "De aarzelende wachters",
          whoTheyAre:
            "Patiënten binnen het systeem die controles uitstellen, herhaalrecepten laten verlopen en pas verschijnen als klachten ze dwingen — minimale gebruikers die wachten tot er iets makkelijkers bestaat.",
          whyTheyLeave:
            "Wekenlange wachttijden, telkens dezelfde formulieren, en bezoeken die een halve vrije dag kosten voor tien minuten contact.",
          unlockStrategy:
            "Asynchrone triage en digitale nacontroles die routinezorg binnen uren via de telefoon afhandelen — haal de halve-dag-prijs weg en ze stellen zorg niet langer uit.",
          relativeSize: "large",
        },
        {
          tier: "second",
          label: "De zelfdokteraars",
          whoTheyAre:
            "Mensen die bewust om de reguliere zorg heen werken: de apotheekbalie, supplementen, symptoomcheckers en dokter Google.",
          whyTheyLeave:
            "Zij hebben besloten dat de ondoorzichtigheid en het gedoe van het systeem zwaarder wegen dan de baten — onbekende kosten, verwijspoortwachters en het vermoeden dat ze toch met paracetamol worden weggestuurd.",
          unlockStrategy:
            "Transparante prijzen vooraf en een laagdrempelige digitale ingang die hun eigen onderzoek serieus neemt in plaats van wegwuift.",
          relativeSize: "medium",
        },
        {
          tier: "third",
          label: "De klachtenvrije gezonden",
          whoTheyAre:
            "Mensen die zich prima voelen en zichzelf nooit als zorgklant hebben gezien — zorg is voor zieken, en dat zijn zij niet.",
          whyTheyLeave:
            "De sector verkoopt uitsluitend episodische ziekenzorg, dus er ligt letterlijk niets in het schap voor wie gezond wil blijven.",
          unlockStrategy:
            "Preventieve monitoringsabonnementen, geframed als prestatie en gemoedsrust — wearable-gekoppelde check-ins en een jaarlijkse digitale gezondheidsreview, geprijsd als een sportschoolabonnement.",
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
            "Ja — de zet pakt het grootste pijnpunt van de sector frontaal aan. De tijd tot zorg terugbrengen van 3-6 weken naar 24 uur en kwartaalcontroles vervangen door continue monitoring is een sprong in utiliteit die patiënten vanaf dag één voelen.",
          actions: [],
        },
        {
          gate: "price",
          question:
            "Is de prijs goed toegankelijk voor de massa van de kopers?",
          verdict: "risk",
          assessment:
            "Transparante vaste prijzen werken voor zelfbetalers, maar de massa loopt via verzekeraars wier vergoedingscodes asynchrone consulten en monitoring op afstand nog niet kennen. Zonder dekking blijft het aanbod een premium niche.",
          actions: [
            "Onderhandel vergoedingspilots met 2-3 verzekeraars, verankerd in aantoonbaar vermeden SEH-bezoeken en opnames.",
            "Prijs het monitoringsabonnement onder een gebruikelijke maandelijkse eigen bijdrage, zodat zelfbetalen rendabel blijft terwijl de dekking bijtrekt.",
          ],
        },
        {
          gate: "cost",
          question:
            "Is het kostendoel haalbaar om winstgevend te zijn tegen de strategische prijs?",
          verdict: "pass",
          assessment:
            "Ja — digitale triage en consulten op afstand kosten een fractie van fysieke infrastructuur, en elk voorkomen SEH-bezoek schrapt een kostenpost die 50x groter is dan de monitoring die het voorkwam. De kostenstructuur verbetert precies waar de utiliteit verbetert.",
          actions: [],
        },
        {
          gate: "adoption",
          question:
            "Wat zijn de adoptiehordes, en worden ze vooraf aangepakt?",
          verdict: "risk",
          assessment:
            "Zorgverleners vrezen aansprakelijkheid voor diagnoses zonder lichamelijk onderzoek, en toezichthouders bewegen trager dan de technologie. Patiëntvertrouwen volgt snel; professioneel en regulatoir vertrouwen moet bewust worden verdiend.",
          actions: [
            "Draai een gedocumenteerde klinische-veiligheidspilot met gepubliceerde escalatieprotocollen en uitkomstdata vóór het opschalen.",
            "Betrek toezichthouder en beroepsverenigingen vroeg — schrijf mee aan de richtlijnen voor asynchrone zorg in plaats van erop te wachten.",
          ],
        },
      ],
      overallVerdict: "go",
      conclusion:
        "De utiliteitssprong is uitzonderlijk en de kostenstructuur werkt mee; vergoeding en klinische adoptie zijn reële maar oplosbare hordes. Go — gefaseerd via verzekeraarspilots en een veiligheid-eerst-houding richting de toezichthouder.",
    },
  },
};
