import type { Analysis } from "@/lib/schema";

export const education: { en: Analysis; nl: Analysis } = {
  en: {
    v: 1,
    meta: {
      id: "preset-education",
      company: "Education & training",
      industry:
        "Institutions selling accreditation and campuses while learners and employers ask what graduates can actually do",
      language: "en",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "The portfolio is the new diploma",
        narrative:
          "Education providers compete on accreditation, curriculum breadth, and campus facilities — a red ocean where degrees take years, cost fortunes, and employers still retrain every hire. The blue ocean lies in **applied skills with guaranteed career outcomes**: short, stackable, job-anchored programs where the institution shares the risk and the proof is a portfolio, not a transcript.",
        redOceanTraits: [
          "Accreditation and ranking arms races that say nothing about ability",
          "Multi-year degrees and fortunes spent while employers retrain every hire",
          "Campus capex escalating while learning migrates online",
        ],
        blueOceanThesis:
          "Sell applied skills with guaranteed career outcomes: short, stackable, job-anchored programs where the institution shares the employment risk and the proof is a portfolio, not a transcript.",
      },
      canvas: {
        factors: [
          {
            name: "Accreditation",
            rationale:
              "The official stamp signals legitimacy to buyers — even when it certifies process rather than capability.",
          },
          {
            name: "Curriculum breadth",
            rationale:
              "A 40-course catalog reads as choice, but breadth dilutes depth in the skills employers actually hire for.",
          },
          {
            name: "Campus facilities",
            rationale:
              "Buildings sell the brochure and the campus tour, yet contribute little to whether a graduate gets hired.",
          },
          {
            name: "Applied skills",
            rationale:
              "What a learner can demonstrably do is the only currency that clears instantly with employers.",
          },
          {
            name: "Flexibility",
            rationale:
              "Working adults can commit to weeks, not years — entry points and pacing decide who can participate at all.",
          },
          {
            name: "Career outcomes",
            rationale:
              "Placement rates, starting salaries, and time-to-hire are the return on investment learners are actually buying.",
          },
        ],
        industry: [5, 5, 4, 2, 1, 1],
        blueOcean: [2, 2, 1, 5, 5, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Fixed semester calendars",
            detail:
              "Drop fixed semester calendars that force learners to wait months for an entry point.",
          },
          {
            title: "Lecture courses without output",
            detail:
              "Cut lecture-hall courses with no project output an employer could ever evaluate.",
          },
        ],
        reduce: [
          {
            title: "From 40 courses to 8-10 roles",
            detail:
              "Reduce curriculum breadth from 40-course catalogs to deep tracks built around 8-10 in-demand roles.",
          },
          {
            title: "Campus footprint and overhead",
            detail:
              "Move theory online and reserve physical space for practice, shrinking footprint and overhead.",
          },
        ],
        raise: [
          {
            title: "Portfolio artifacts every module",
            detail:
              "Raise applied skill density: every module ends in a portfolio artifact, not a multiple-choice exam.",
          },
          {
            title: "Instructors who practice now",
            detail:
              "Raise instructor currency: teachers who practice the craft now, not those who practiced it in 2005.",
          },
        ],
        create: [
          {
            title: "Outcome-linked tuition",
            detail:
              "Income share or partial refund if graduates aren't hired within 6 months.",
          },
          {
            title: "Stackable micro-credentials",
            detail:
              "Credentials that build toward a full qualification at the learner's own pace.",
          },
          {
            title: "Employer co-designed capstones",
            detail:
              "Real company problems, with hiring interviews built into the final review.",
          },
        ],
      },
      moves: [
        {
          title: "Sell the job, not the syllabus",
          body: "Learners don't buy 120 credits; they buy the career on the other side. Publish your placement rate, median starting salary, and time-to-hire for every program — audited, not asserted. Then back it with skin in the game: a 25-50% tuition refund if a graduate isn't employed in field within 6 months. The providers who can't make that promise are your market share.",
        },
        {
          title: "Make the portfolio the diploma",
          body: "Employers trust evidence over transcripts. Restructure every course so it ends with a reviewable artifact — a deployed app, a marketing campaign with real metrics, a financial model. A graduate with 8 employer-graded projects beats one with a 3.8 GPA in every screening process that matters.",
        },
        {
          title: "Unbundle the degree into 6-week blocks",
          body: "A working adult can't disappear for 3 years, but anyone can commit to 6 weeks. Break programs into stackable micro-credentials with monthly start dates, each independently valuable and each counting toward the full qualification. You convert the 95% of the market that a semester calendar locks out — and they pay as they go.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "You compete with YouTube, not other schools",
          insight:
            "Learners weighing your program aren't comparing it to a rival institution — they're comparing it to free YouTube tutorials, a $40 Udemy course, a vendor certification, and simply learning on the job. The alternatives win on price and speed; they lose on structure, feedback, and a believed credential.",
          opportunity:
            "Combine the credential trust of an institution with bootcamp speed and self-serve pricing — structured feedback and employer recognition at a fraction of degree cost.",
        },
        {
          path: "strategic-groups",
          title: "Between the ivory tower and the MOOC graveyard",
          insight:
            "Elite universities sell prestige at €40,000+ and four years; MOOCs sell access at €40 with 5-10% completion rates. The vast middle — motivated adults who need employer-credible skills with real accountability — is served by neither group.",
          opportunity:
            "Own the middle: employer-validated applied programs with live cohorts, real deadlines, and audited placement rates at one-tenth of degree cost.",
        },
        {
          path: "buyer-chain",
          title: "The employer is the real customer",
          insight:
            "The learner pays the tuition, but the employer buys the output — and currently re-trains every graduate at their own expense. Education sells to the wrong end of the chain and then wonders why its product is questioned.",
          opportunity:
            "Sell both ends: employer co-designed capstones with hiring interviews built in turn recruiting budgets into program revenue and graduates into pre-vetted hires.",
        },
        {
          path: "complementary-offerings",
          title: "The job search is part of the product",
          insight:
            "Learners buy education to get a job, then face the search alone: portfolio assembly, interview prep, and salary negotiation are 'career services' bolted on as an afterthought booth. The hardest part of the journey is the least supported.",
          opportunity:
            "Build hiring into the curriculum itself — employer-graded capstones that end in interviews, making the final exam and the job interview the same event.",
        },
        {
          path: "functional-emotional",
          title: "Strip the ceremony, sell the outcome",
          insight:
            "Traditional education is sold emotionally — campus life, gowns, prestige, the parental photo at graduation — while its functional payoff has eroded. The adult learner flips this: they want measurable employability and couldn't care less about the quad.",
          opportunity:
            "Position as the unapologetically functional choice: audited placement statistics, salary deltas, and time-to-hire on the homepage where the campus drone shot used to be.",
        },
        {
          path: "time-trends",
          title: "Skill half-life is collapsing to 2-3 years",
          insight:
            "AI is shortening the half-life of technical skills from a career to roughly 2-3 years, making the one-time degree structurally obsolete. The future buyer doesn't need an education once — they need re-skilling perpetually.",
          opportunity:
            "Convert graduates into subscribers: a lifelong re-skilling membership where stackable credentials refresh as the field moves — recurring revenue replacing one-time enrollment.",
        },
      ],
    },
    utilityMap: {
      cells: [
        {
          stage: "purchase",
          lever: "productivity",
          status: "blocked",
          note: "Years of time and a fortune in tuition for an ROI nobody will put a number on — the worst-documented major purchase a person makes.",
        },
        { stage: "purchase", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "convenience",
          status: "blocked",
          note: "Fixed semester calendars force learners to wait months for an entry point; the calendar serves the institution, not the buyer.",
        },
        {
          stage: "purchase",
          lever: "risk",
          status: "industry-focus",
          note: "Accreditation is the industry's risk answer — a stamp certifying process while saying nothing about employment odds.",
        },
        {
          stage: "purchase",
          lever: "fun-image",
          status: "industry-focus",
          note: "Rankings, brand prestige, and campus tours — the enrollment funnel is an image campaign.",
        },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        { stage: "delivery", lever: "productivity", status: "neutral", note: null },
        { stage: "delivery", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "convenience",
          status: "opportunity",
          note: "Monthly start dates and 6-week blocks let anyone begin within weeks — the unbundled entry point the semester calendar locks out.",
        },
        { stage: "delivery", lever: "risk", status: "neutral", note: null },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "industry-focus",
          note: "Contact hours, credit accumulation, and catalog breadth — the industry measures inputs because it can't prove outputs.",
        },
        { stage: "use", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "use",
          lever: "convenience",
          status: "blocked",
          note: "Full-time, fixed-schedule formats lock out the working adults who need re-skilling most.",
        },
        {
          stage: "use",
          lever: "risk",
          status: "opportunity",
          note: "Portfolio artifacts every module — employer-reviewable proof of skill that de-risks both the learning and the hire.",
        },
        { stage: "use", lever: "fun-image", status: "neutral", note: null },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        { stage: "supplements", lever: "productivity", status: "neutral", note: null },
        { stage: "supplements", lever: "simplicity", status: "neutral", note: null },
        { stage: "supplements", lever: "convenience", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "risk",
          status: "opportunity",
          note: "Outcome-linked tuition — income share or partial refund if not hired within 6 months — moves employment risk onto the institution's books.",
        },
        {
          stage: "supplements",
          lever: "fun-image",
          status: "industry-focus",
          note: "Climbing walls, student centers, and stadium seats — the facilities arms race sells the tour, not the outcome.",
        },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "productivity",
          status: "blocked",
          note: "The degree ends and skills start decaying; the industry offers alumni a magazine, not a re-skilling path.",
        },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "convenience",
          status: "opportunity",
          note: "Stackable micro-credentials let alumni keep adding qualifications at their own pace — lifelong learning as a product, not a slogan.",
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
        "The industry over-serves enrollment-stage image and under-serves everything after admission: flexible entry, provable skill, shared employment risk, and lifelong stackability are all wide open — and they compound into one offer.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "Doubting enrollees",
          whoTheyAre:
            "Current students and recent applicants quietly questioning whether the degree will pay off — the ones browsing bootcamp sites between lectures.",
          whyTheyLeave:
            "Tuition keeps rising while the link between coursework and employment keeps weakening; they see no evidence their investment converts to a job.",
          unlockStrategy:
            "Publish audited placement data per program and convert their remaining coursework into portfolio-producing modules — give them proof before they defect.",
          relativeSize: "medium",
        },
        {
          tier: "second",
          label: "Self-taught refusers",
          whoTheyAre:
            "Career switchers and ambitious juniors who deliberately chose YouTube, vendor certificates, and side projects over any formal program.",
          whyTheyLeave:
            "They concluded institutions charge 100x the price for content that is free, delivered slower, by instructors further from practice.",
          unlockStrategy:
            "Sell what self-teaching can't supply: structured feedback from current practitioners, employer-graded projects, and a hiring pipeline — priced per 6-week block, not per degree.",
          relativeSize: "large",
        },
        {
          tier: "third",
          label: "The locked-out workforce",
          whoTheyAre:
            "Working adults with jobs, mortgages, and families who have never considered formal education an option since their twenties.",
          whyTheyLeave:
            "Every program assumes they can surrender years and daytime hours; the format excludes them before price is even discussed.",
          unlockStrategy:
            "Offer 6-week stackable blocks with monthly starts, evening and async delivery, and pay-as-you-go pricing — convert the 95% of the market the semester calendar locks out.",
          relativeSize: "large",
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
            "Job-anchored skills, employer-graded portfolios, and a refund-backed outcome promise attack every major pain in the buyer's journey — uncertain ROI, locked-out schedules, and unverifiable ability. A graduate with 8 employer-graded projects beating a 3.8 GPA in screening is the utility case in one sentence.",
          actions: [],
        },
        {
          gate: "price",
          question: "Is your price easily accessible to the mass of buyers?",
          verdict: "pass",
          assessment:
            "Pay-as-you-go 6-week blocks turn a five-figure upfront decision into a sequence of small, independently valuable purchases, and outcome-linked tuition removes the fear of paying for nothing. Accessibility is the model's strongest gate — it prices for the 95% the semester calendar excludes.",
          actions: [],
        },
        {
          gate: "cost",
          question:
            "Can you attain your cost target to profit at your strategic price?",
          verdict: "fail",
          assessment:
            "The cost structure currently breaks the model: income-share and refund guarantees defer revenue 6-18 months while practitioner instructors and employer-graded capstones raise delivery cost per learner, all on top of legacy campus overhead that shrinks slower than enrollment shifts. Without restructuring the financing, the strategic price is unprofitable at scale.",
          actions: [
            "Blend the model: 50-70% upfront block tuition plus a capped outcome component, instead of full income-share exposure",
            "Sign employer co-funding for capstone tracks — companies pre-paying for vetted hiring pipelines covers the practitioner-instructor premium",
            "Sell or sublet campus space ahead of the transition; theory moves online before the experiential build-out begins",
          ],
        },
        {
          gate: "adoption",
          question:
            "What are the adoption hurdles in actualizing the idea, and are you addressing them upfront?",
          verdict: "risk",
          assessment:
            "Accreditors move slower than 6-week blocks, tenured faculty lose status in a practitioner-led model, and some employers still filter CVs by degree. Each hurdle is survivable, but together they can stall the rollout for years if confronted late.",
          actions: [
            "Launch micro-credentials under existing accreditation as 'continuing education' while pursuing full recognition in parallel",
            "Recruit 10-15 anchor employers who commit to interviewing portfolio graduates — their logos do the legitimacy work accreditation can't yet",
          ],
        },
      ],
      overallVerdict: "rework",
      conclusion:
        "The utility and price gates prove the demand is real, but the financing model fails the cost gate as designed — rework the tuition structure with capped outcome components and employer co-funding before scaling.",
    },
  },
  nl: {
    v: 1,
    meta: {
      id: "preset-education",
      company: "Onderwijs & training",
      industry:
        "Instellingen die accreditatie en campussen verkopen terwijl studenten en werkgevers vragen wat afgestudeerden echt kunnen",
      language: "nl",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "Het portfolio is het nieuwe diploma",
        narrative:
          "Onderwijsaanbieders concurreren op accreditatie, curriculumbreedte en campusfaciliteiten — een rode oceaan waarin diploma's jaren duren, fortuinen kosten en werkgevers alsnog elke nieuwe medewerker omscholen. De blauwe oceaan ligt in **toegepaste vaardigheden met gegarandeerde loopbaanresultaten**: korte, stapelbare, baangerichte programma's waarin de instelling het risico deelt en het bewijs een portfolio is, geen cijferlijst.",
        redOceanTraits: [
          "Wapenwedlopen om accreditatie en rankings die niets zeggen over kunnen",
          "Meerjarige opleidingen en fortuinen, terwijl werkgevers elke hire omscholen",
          "Oplopende campusinvesteringen terwijl het leren naar online verhuist",
        ],
        blueOceanThesis:
          "Verkoop toegepaste vaardigheden met gegarandeerde loopbaanresultaten: korte, stapelbare, baangerichte programma's waarin de instelling het arbeidsmarktrisico deelt en het bewijs een portfolio is, geen cijferlijst.",
      },
      canvas: {
        factors: [
          {
            name: "Accreditatie",
            rationale:
              "De officiële stempel straalt legitimiteit uit naar kopers — ook als die proces certificeert in plaats van bekwaamheid.",
          },
          {
            name: "Curriculumbreedte",
            rationale:
              "Een catalogus met 40 vakken oogt als keuze, maar breedte verdunt de diepgang in vaardigheden waar werkgevers echt op aannemen.",
          },
          {
            name: "Campusfaciliteiten",
            rationale:
              "Gebouwen verkopen de brochure en de rondleiding, maar dragen amper bij aan of een afgestudeerde wordt aangenomen.",
          },
          {
            name: "Toegepaste skills",
            rationale:
              "Wat iemand aantoonbaar kan, is de enige valuta die bij werkgevers direct wordt geaccepteerd.",
          },
          {
            name: "Flexibiliteit",
            rationale:
              "Werkende volwassenen kunnen zich aan weken binden, niet aan jaren — instapmomenten en tempo bepalen wie überhaupt kan meedoen.",
          },
          {
            name: "Loopbaanresultaten",
            rationale:
              "Plaatsingspercentages, startsalarissen en time-to-hire zijn het rendement waar studenten werkelijk voor betalen.",
          },
        ],
        industry: [5, 5, 4, 2, 1, 1],
        blueOcean: [2, 2, 1, 5, 5, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Vaste semesterkalenders",
            detail:
              "Schaf vaste semesterkalenders af die studenten maanden laten wachten op een instapmoment.",
          },
          {
            title: "Hoorcolleges zonder output",
            detail:
              "Schrap collegezaalvakken zonder projectresultaat dat een werkgever ooit zou kunnen beoordelen.",
          },
        ],
        reduce: [
          {
            title: "Van 40 vakken naar 8-10 rollen",
            detail:
              "Verminder de curriculumbreedte van catalogi met 40 vakken naar diepe leerroutes rond 8-10 gewilde rollen.",
          },
          {
            title: "Campusoppervlak en overhead",
            detail:
              "Verplaats theorie naar online en reserveer fysieke ruimte voor praktijk; krimp oppervlak en overhead.",
          },
        ],
        raise: [
          {
            title: "Portfoliobewijs per module",
            detail:
              "Verhoog de dichtheid van toegepaste vaardigheden: elke module eindigt in een portfolio-artefact, geen meerkeuzetentamen.",
          },
          {
            title: "Docenten die het nu nog doen",
            detail:
              "Verhoog de actualiteit van docenten: mensen die het vak nú uitoefenen, niet die het in 2005 deden.",
          },
        ],
        create: [
          {
            title: "Resultaatgekoppeld collegegeld",
            detail:
              "Inkomensdeling of gedeeltelijke terugbetaling als afgestudeerden niet binnen 6 maanden zijn aangenomen.",
          },
          {
            title: "Stapelbare micro-credentials",
            detail:
              "Deelcertificaten die in eigen tempo optellen tot een volledige kwalificatie.",
          },
          {
            title: "Capstones met werkgevers",
            detail:
              "Echte bedrijfsproblemen, met sollicitatiegesprekken ingebouwd in de eindbeoordeling.",
          },
        ],
      },
      moves: [
        {
          title: "Verkoop de baan, niet de syllabus",
          body: "Studenten kopen geen 120 studiepunten; ze kopen de carrière aan de andere kant. Publiceer per opleiding je plaatsingspercentage, mediaan startsalaris en time-to-hire — geauditeerd, niet beweerd. Zet er vervolgens eigen risico achter: 25-50% terugbetaling van het collegegeld als een afgestudeerde niet binnen 6 maanden in het vakgebied werkt. De aanbieders die die belofte niet kunnen doen, zijn jouw marktaandeel.",
        },
        {
          title: "Maak het portfolio het diploma",
          body: "Werkgevers vertrouwen bewijs boven cijferlijsten. Herstructureer elk vak zodat het eindigt met een beoordeelbaar artefact — een live app, een marketingcampagne met echte cijfers, een financieel model. Een afgestudeerde met 8 door werkgevers beoordeelde projecten verslaat iemand met een 8,5 gemiddeld in elke selectieronde die ertoe doet.",
        },
        {
          title: "Ontbundel het diploma in blokken van 6 weken",
          body: "Een werkende volwassene kan niet 3 jaar verdwijnen, maar iedereen kan zich 6 weken binden. Knip programma's op in stapelbare micro-credentials met maandelijkse startdata, elk zelfstandig waardevol en elk meetellend voor de volledige kwalificatie. Zo converteer je de 95% van de markt die een semesterkalender buitensluit — en ze betalen per blok.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Je concurreert met YouTube, niet met andere scholen",
          insight:
            "Wie jouw opleiding overweegt, vergelijkt die niet met een rivaliserende instelling — maar met gratis YouTube-tutorials, een Udemy-cursus van €40, een leverancierscertificaat en simpelweg leren op het werk. De alternatieven winnen op prijs en snelheid; ze verliezen op structuur, feedback en een geloofd diploma.",
          opportunity:
            "Combineer het diplomavertrouwen van een instelling met bootcampsnelheid en self-service prijzen — gestructureerde feedback en werkgevererkenning voor een fractie van de opleidingskosten.",
        },
        {
          path: "strategic-groups",
          title: "Tussen de ivoren toren en het MOOC-kerkhof",
          insight:
            "Topuniversiteiten verkopen prestige voor €40.000+ en vier jaar; MOOC's verkopen toegang voor €40 met 5-10% afronding. Het enorme midden — gemotiveerde volwassenen die werkgever-geloofwaardige vaardigheden met echte verantwoording nodig hebben — wordt door geen van beide bediend.",
          opportunity:
            "Claim het midden: door werkgevers gevalideerde praktijkprogramma's met live cohorten, echte deadlines en geauditeerde plaatsingscijfers voor een tiende van de opleidingskosten.",
        },
        {
          path: "buyer-chain",
          title: "De werkgever is de echte klant",
          insight:
            "De student betaalt het collegegeld, maar de werkgever koopt de output — en schoolt momenteel elke afgestudeerde op eigen kosten om. Het onderwijs verkoopt aan het verkeerde uiteinde van de keten en verbaast zich vervolgens dat zijn product ter discussie staat.",
          opportunity:
            "Verkoop aan beide uiteinden: capstones die je samen met werkgevers ontwerpt, met ingebouwde sollicitatiegesprekken, maken van wervingsbudgetten programmaomzet en van afgestudeerden voorgeselecteerde hires.",
        },
        {
          path: "complementary-offerings",
          title: "De banenjacht is onderdeel van het product",
          insight:
            "Studenten kopen onderwijs om een baan te krijgen en staan er daarna alleen voor: portfolio bouwen, sollicitatietraining en salarisonderhandeling zijn 'loopbaanservices' die er als bijzaak zijn aangeplakt. Het zwaarste deel van de reis krijgt de minste steun.",
          opportunity:
            "Bouw het aannemen in het curriculum zelf — door werkgevers beoordeelde capstones die eindigen in gesprekken, zodat het eindexamen en het sollicitatiegesprek hetzelfde moment zijn.",
        },
        {
          path: "functional-emotional",
          title: "Strip het ceremonieel, verkoop het resultaat",
          insight:
            "Traditioneel onderwijs wordt emotioneel verkocht — campusleven, toga's, prestige, de ouderfoto bij de diploma-uitreiking — terwijl de functionele opbrengst erodeert. De volwassen student draait dit om: die wil meetbare inzetbaarheid en geeft niets om het binnenplein.",
          opportunity:
            "Positioneer als de onbeschaamd functionele keuze: geauditeerde plaatsingsstatistieken, salarisverschillen en time-to-hire op de homepage waar vroeger de dronebeelden van de campus stonden.",
        },
        {
          path: "time-trends",
          title: "De halfwaardetijd van skills zakt naar 2-3 jaar",
          insight:
            "AI verkort de halfwaardetijd van technische vaardigheden van een hele carrière naar pakweg 2-3 jaar, waardoor het eenmalige diploma structureel veroudert. De koper van de toekomst heeft niet één keer onderwijs nodig — die moet zich permanent bijscholen.",
          opportunity:
            "Maak van afgestudeerden abonnees: een levenslang bijscholingslidmaatschap waarin stapelbare credentials meebewegen met het vakgebied — terugkerende omzet in plaats van eenmalige inschrijving.",
        },
      ],
    },
    utilityMap: {
      cells: [
        {
          stage: "purchase",
          lever: "productivity",
          status: "blocked",
          note: "Jaren tijd en een fortuin aan collegegeld voor een rendement waar niemand een getal op durft te plakken — de slechtst gedocumenteerde grote aankoop die een mens doet.",
        },
        { stage: "purchase", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "purchase",
          lever: "convenience",
          status: "blocked",
          note: "Vaste semesterkalenders laten studenten maanden wachten op een instapmoment; de kalender dient de instelling, niet de koper.",
        },
        {
          stage: "purchase",
          lever: "risk",
          status: "industry-focus",
          note: "Accreditatie is het risico-antwoord van de sector — een stempel die proces certificeert maar niets zegt over baankansen.",
        },
        {
          stage: "purchase",
          lever: "fun-image",
          status: "industry-focus",
          note: "Rankings, merkprestige en campusrondleidingen — de wervingsfunnel is een imagocampagne.",
        },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        { stage: "delivery", lever: "productivity", status: "neutral", note: null },
        { stage: "delivery", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "convenience",
          status: "opportunity",
          note: "Maandelijkse startdata en blokken van 6 weken laten iedereen binnen weken beginnen — het ontbundelde instapmoment dat de semesterkalender buitensluit.",
        },
        { stage: "delivery", lever: "risk", status: "neutral", note: null },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "industry-focus",
          note: "Contacturen, studiepunten en catalogusbreedte — de sector meet input omdat hij output niet kan bewijzen.",
        },
        { stage: "use", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "use",
          lever: "convenience",
          status: "blocked",
          note: "Voltijdse formats met vaste roosters sluiten precies de werkende volwassenen buiten die bijscholing het hardst nodig hebben.",
        },
        {
          stage: "use",
          lever: "risk",
          status: "opportunity",
          note: "Portfolio-artefacten in elke module — door werkgevers te beoordelen bewijs van kunnen dat zowel het leren als het aannemen ontrisicot.",
        },
        { stage: "use", lever: "fun-image", status: "neutral", note: null },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        { stage: "supplements", lever: "productivity", status: "neutral", note: null },
        { stage: "supplements", lever: "simplicity", status: "neutral", note: null },
        { stage: "supplements", lever: "convenience", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "risk",
          status: "opportunity",
          note: "Resultaatgekoppeld collegegeld — inkomensdeling of gedeeltelijke terugbetaling bij geen baan binnen 6 maanden — zet het arbeidsmarktrisico op de balans van de instelling.",
        },
        {
          stage: "supplements",
          lever: "fun-image",
          status: "industry-focus",
          note: "Klimwanden, studentencentra en stadionstoelen — de faciliteitenwedloop verkoopt de rondleiding, niet het resultaat.",
        },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "productivity",
          status: "blocked",
          note: "Het diploma eindigt en de vaardigheden beginnen te verouderen; de sector biedt alumni een magazine, geen bijscholingspad.",
        },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "convenience",
          status: "opportunity",
          note: "Stapelbare micro-credentials laten alumni in eigen tempo kwalificaties blijven toevoegen — een leven lang leren als product, niet als slogan.",
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
        "De sector overbedient het imago in de wervingsfase en onderbedient alles ná de toelating: flexibele instap, bewijsbaar kunnen, gedeeld arbeidsmarktrisico en levenslange stapelbaarheid liggen allemaal open — en ze versterken elkaar tot één aanbod.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "Twijfelende ingeschrevenen",
          whoTheyAre:
            "Huidige studenten en recente aanmelders die stilletjes betwijfelen of het diploma zich terugbetaalt — degenen die tussen colleges door bootcampsites bekijken.",
          whyTheyLeave:
            "Het collegegeld blijft stijgen terwijl de link tussen studie en baan blijft verzwakken; ze zien geen bewijs dat hun investering in werk wordt omgezet.",
          unlockStrategy:
            "Publiceer geauditeerde plaatsingscijfers per opleiding en zet hun resterende vakken om in portfolio-producerende modules — geef ze bewijs voordat ze overlopen.",
          relativeSize: "medium",
        },
        {
          tier: "second",
          label: "Zelflerende weigeraars",
          whoTheyAre:
            "Carrièreswitchers en ambitieuze starters die bewust kozen voor YouTube, leverancierscertificaten en eigen projecten boven welk formeel programma dan ook.",
          whyTheyLeave:
            "Ze concludeerden dat instellingen 100x de prijs vragen voor content die gratis is, trager wordt geleverd, door docenten die verder van de praktijk staan.",
          unlockStrategy:
            "Verkoop wat zelfstudie niet kan leveren: gestructureerde feedback van actieve vakmensen, door werkgevers beoordeelde projecten en een wervingspijplijn — geprijsd per blok van 6 weken, niet per diploma.",
          relativeSize: "large",
        },
        {
          tier: "third",
          label: "De buitengesloten beroepsbevolking",
          whoTheyAre:
            "Werkende volwassenen met banen, hypotheken en gezinnen die formeel onderwijs sinds hun twintigste nooit meer als optie hebben gezien.",
          whyTheyLeave:
            "Elk programma gaat ervan uit dat ze jaren en daguren kunnen opgeven; het format sluit ze al uit voordat de prijs ter sprake komt.",
          unlockStrategy:
            "Bied stapelbare blokken van 6 weken met maandelijkse starts, avond- en asynchrone lessen en betalen per blok — converteer de 95% van de markt die de semesterkalender buitensluit.",
          relativeSize: "large",
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
            "Baangerichte vaardigheden, door werkgevers beoordeelde portfolio's en een met terugbetaling gedekte resultaatbelofte pakken elke grote pijn in de koopreis aan — onzeker rendement, onmogelijke roosters en onbewijsbaar kunnen. Een afgestudeerde met 8 door werkgevers beoordeelde projecten die een 8,5-gemiddelde verslaat in de selectie: dat is het waardeargument in één zin.",
          actions: [],
        },
        {
          gate: "price",
          question: "Is de prijs goed toegankelijk voor de massa van kopers?",
          verdict: "pass",
          assessment:
            "Betalen per blok van 6 weken maakt van een vijfcijferige beslissing vooraf een reeks kleine, zelfstandig waardevolle aankopen, en resultaatgekoppeld collegegeld neemt de angst weg om voor niets te betalen. Toegankelijkheid is de sterkste poort van het model — het prijst voor de 95% die de semesterkalender uitsluit.",
          actions: [],
        },
        {
          gate: "cost",
          question:
            "Haal je het kostendoel om winstgevend te zijn tegen je strategische prijs?",
          verdict: "fail",
          assessment:
            "De kostenstructuur breekt het model in zijn huidige vorm: inkomensdeling en terugbetalingsgaranties schuiven omzet 6-18 maanden op, terwijl praktijkdocenten en werkgever-beoordeelde capstones de kosten per student verhogen — bovenop campusoverhead die trager krimpt dan de inschrijvingen verschuiven. Zonder herstructurering van de financiering is de strategische prijs op schaal verlieslatend.",
          actions: [
            "Meng het model: 50-70% collegegeld vooraf per blok plus een gemaximeerde resultaatcomponent, in plaats van volledige blootstelling aan inkomensdeling",
            "Sluit werkgever-cofinanciering voor capstone-trajecten — bedrijven die vooruitbetalen voor gescreende wervingspijplijnen dekken de premie van praktijkdocenten",
            "Verkoop of verhuur campusruimte vóór de transitie; theorie gaat online voordat de praktijkbouw begint",
          ],
        },
        {
          gate: "adoption",
          question: "Wat zijn de adoptiehordes en pak je ze vooraf aan?",
          verdict: "risk",
          assessment:
            "Accreditatieorganen bewegen trager dan blokken van 6 weken, vaste docenten verliezen status in een praktijkgedreven model, en sommige werkgevers filteren cv's nog altijd op diploma. Elke horde is te overleven, maar samen kunnen ze de uitrol jaren vertragen als je ze te laat aanpakt.",
          actions: [
            "Lanceer micro-credentials onder bestaande accreditatie als 'permanente educatie' en werk parallel aan volledige erkenning",
            "Werf 10-15 ankerwerkgevers die zich verbinden aan gesprekken met portfolio-afgestudeerden — hun logo's doen het legitimiteitswerk dat accreditatie nog niet kan",
          ],
        },
      ],
      overallVerdict: "rework",
      conclusion:
        "De poorten waarde en prijs bewijzen dat de vraag echt is, maar het financieringsmodel zakt in deze vorm voor de kostenpoort — herwerk de collegegeldstructuur met gemaximeerde resultaatcomponenten en werkgever-cofinanciering vóór het opschalen.",
    },
  },
};
