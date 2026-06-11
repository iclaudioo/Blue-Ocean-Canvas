import type { Analysis } from "@/lib/schema";

export const hospitality: { en: Analysis; nl: Analysis } = {
  en: {
    v: 1,
    meta: {
      id: "preset-hospitality",
      company: "Hospitality & travel",
      industry:
        "Hotels and travel brands buying stars and OTA rankings while the guest experience commoditizes",
      language: "en",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "The stay no booking platform can list",
        narrative:
          "Hotels compete on star ratings, amenity checklists, and OTA visibility — paying 15-25% commissions to rank in a list where every property looks interchangeable. The blue ocean lies in **personalization and genuine local connection**: knowing the guest before arrival, embedding the destination into the stay, and building direct relationships that no booking platform can intermediate.",
        redOceanTraits: [
          "Star-rating and amenity arms races guests barely notice",
          "15-25% OTA commissions paid to look interchangeable in a list",
          "Chain standardization that erases the destination from the stay",
        ],
        blueOceanThesis:
          "Win on personalization and genuine local connection: know the guest before arrival, embed the destination into the stay, and own a direct relationship no booking platform can intermediate.",
      },
      canvas: {
        factors: [
          {
            name: "Star rating",
            rationale:
              "Stars are the industry's trust shorthand, yet they certify trouser presses — not whether anyone enjoyed the stay.",
          },
          {
            name: "Amenity count",
            rationale:
              "Checklists reassure on paper, but most amenities serve under 5% of guests while everyone pays for them.",
          },
          {
            name: "OTA visibility",
            rationale:
              "Platform ranking decides who even sees you — at the price of commission and an interchangeable presentation.",
          },
          {
            name: "Personalization",
            rationale:
              "A stay shaped to the guest before arrival is the difference between a room night and a relationship.",
          },
          {
            name: "Local connection",
            rationale:
              "Guests travel for the destination; a stay that unlocks it delivers what no standardized property can.",
          },
          {
            name: "Direct loyalty",
            rationale:
              "A direct relationship turns one paid acquisition into years of commission-free repeat bookings.",
          },
        ],
        industry: [5, 4, 5, 1, 1, 2],
        blueOcean: [3, 2, 1, 5, 5, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Amenities nobody uses",
            detail:
              "Cut the amenities nobody uses but everyone pays for — the trouser press, the business center, the minibar.",
          },
          {
            title: "OTA-first acquisition",
            detail:
              "End rate-parity dependence on OTAs as the primary acquisition channel.",
          },
        ],
        reduce: [
          {
            title: "Invisible star-compliance spend",
            detail:
              "Reduce spend on star-rating compliance items that guests never notice.",
          },
          {
            title: "Placeless chain protocols",
            detail:
              "Scale back standardized chain protocols that make a stay in Lisbon feel identical to one in Frankfurt.",
          },
        ],
        raise: [
          {
            title: "Pre-arrival personalization",
            detail:
              "Pillow, room temperature, and dietary needs known before check-in — not discovered at the desk.",
          },
          {
            title: "Empowered staff, real budgets",
            detail:
              "Give every employee a discretionary budget to fix problems and create moments on the spot.",
          },
        ],
        create: [
          {
            title: "Local insider program",
            detail:
              "Staff-curated neighborhood experiences guests can't book anywhere else.",
          },
          {
            title: "Direct-booking membership",
            detail:
              "Member-only rates, room choice, and flexible check-in for guests who book direct.",
          },
          {
            title: "Post-stay relationship",
            detail:
              "City guides, return-guest recognition, and pre-arranged favorites on the next visit.",
          },
        ],
      },
      moves: [
        {
          title: "Fire your trouser press, hire a neighbor",
          body: "Audit your amenities by actual usage — most hotels find 30-40% of their amenity cost serves under 5% of guests. Reallocate that budget to one thing OTAs can't list: staff who know the neighborhood. The hotel that books you a table at the place locals queue for beats the one with a fifth pillow option.",
        },
        {
          title: "Know the guest before the lobby does",
          body: "Send a 60-second pre-arrival form: pillow firmness, arrival time, one thing they're hoping to do in the city. Then act on it visibly. A handwritten note with two restaurant picks costs €2 and produces more five-star reviews than a €200,000 lobby renovation. Personalization at check-in is theater; personalization before arrival is loyalty.",
        },
        {
          title: "Treat every OTA booking as a one-time acquisition cost",
          body: "You paid 15-25% commission for that guest — never pay it twice. Capture their email at check-in, enroll them in a direct-booking tier with a 10% member rate and free flexibility, and make rebooking direct the obvious choice. Shifting 20 points of bookings from OTA to direct adds 3-5 points of margin without raising a single price.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "You compete with Airbnb's promise, not its product",
          insight:
            "Guests defecting to short-term rentals aren't buying square meters — they're buying the feeling of living like a local. Hotels answered with more amenities, which is precisely the thing those guests weren't asking for.",
          opportunity:
            "Deliver the local-living promise with hotel reliability: insider neighborhood access plus professional service — the combination neither Airbnb nor the chain next door offers.",
        },
        {
          path: "strategic-groups",
          title: "Boutique soul at midscale prices",
          insight:
            "Luxury properties sell character at €400 a night; midscale chains sell predictability at €120. The traveler who wants personality without the luxury invoice is told to pick one — and increasingly picks neither.",
          opportunity:
            "Strip star-compliance and amenity spend to fund boutique-level personalization at a midscale rate — character as the standard, not the splurge.",
        },
        {
          path: "buyer-chain",
          title: "Win the planner, not just the sleeper",
          insight:
            "OTAs own the moment of booking, but one person typically plans the whole trip for a couple, family, or team — and that planner is reachable weeks before any platform search begins.",
          opportunity:
            "Court the planner with pre-arrival tools, group itineraries, and a direct line — capture the booking before it ever reaches a commission engine.",
        },
        {
          path: "complementary-offerings",
          title: "The room is 30% of the trip's wallet",
          insight:
            "Guests spend more on dining, experiences, and transport than on the room itself, yet hotels watch that wallet walk past the front desk into the arms of tour platforms and tourist traps.",
          opportunity:
            "Curate the other 70% through the local insider program — commission-earning, loyalty-building, and impossible to replicate from a booking site's database.",
        },
        {
          path: "functional-emotional",
          title: "Sell the story they'll tell, not the bed",
          insight:
            "The industry sells functionally — beds, square meters, star counts — while travel is among the most emotional purchases people make. Nobody retells the tale of a reliable trouser press; everyone retells the night a concierge got them into the place locals queue for.",
          opportunity:
            "Engineer one story-worthy moment per stay through empowered staff with discretionary budgets — the memory becomes your marketing.",
        },
        {
          path: "time-trends",
          title: "Design for the laptop in the suitcase",
          insight:
            "Remote work has blurred travel categories: stays stretch from 2 nights toward 2 weeks, and the guest now needs a neighborhood to live in, not a lobby to pass through. Properties built for the overnight tourist misfit the fastest-growing segment.",
          opportunity:
            "Build long-stay, work-ready offers around local connection — weekly rates, workspace, and insider access that turn a 10-night workcation into a repeat ritual.",
        },
      ],
    },
    utilityMap: {
      cells: [
        {
          stage: "purchase",
          lever: "productivity",
          status: "industry-focus",
          note: "Rate parity, price comparison, and OTA ranking optimization absorb the industry's commercial energy.",
        },
        {
          stage: "purchase",
          lever: "simplicity",
          status: "opportunity",
          note: "A direct-booking membership — member rate, room choice, flexible terms — makes booking direct simpler than comparison-shopping three platforms.",
        },
        {
          stage: "purchase",
          lever: "convenience",
          status: "industry-focus",
          note: "OTA ubiquity and instant booking everywhere; the channel is convenient — for a 15-25% toll.",
        },
        { stage: "purchase", lever: "risk", status: "neutral", note: null },
        { stage: "purchase", lever: "fun-image", status: "neutral", note: null },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        { stage: "delivery", lever: "productivity", status: "neutral", note: null },
        { stage: "delivery", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "convenience",
          status: "blocked",
          note: "Rigid 3pm check-in and 11am check-out windows collide with flight schedules — and the industry shrugs.",
        },
        {
          stage: "delivery",
          lever: "risk",
          status: "opportunity",
          note: "Pre-arrival personalization — pillow, temperature, dietary needs known before check-in — removes the arrival roulette entirely.",
        },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "industry-focus",
          note: "Amenity counts and facility checklists — the arms race guests pay for but rarely use.",
        },
        { stage: "use", lever: "simplicity", status: "neutral", note: null },
        { stage: "use", lever: "convenience", status: "neutral", note: null },
        {
          stage: "use",
          lever: "risk",
          status: "industry-focus",
          note: "Star compliance and brand standards exist to guarantee predictability — the industry's one promise it reliably keeps.",
        },
        {
          stage: "use",
          lever: "fun-image",
          status: "blocked",
          note: "Standardized protocols make Lisbon feel identical to Frankfurt; the destination is erased from the stay.",
        },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        { stage: "supplements", lever: "productivity", status: "neutral", note: null },
        { stage: "supplements", lever: "simplicity", status: "neutral", note: null },
        { stage: "supplements", lever: "convenience", status: "neutral", note: null },
        { stage: "supplements", lever: "risk", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "fun-image",
          status: "opportunity",
          note: "The local insider program — staff-curated experiences guests can't book anywhere else — is the supplement no OTA can list.",
        },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        { stage: "maintenance", lever: "productivity", status: "neutral", note: null },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "convenience",
          status: "blocked",
          note: "After checkout the relationship goes dark — points programs nobody redeems and newsletters nobody reads.",
        },
        { stage: "maintenance", lever: "risk", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "fun-image",
          status: "opportunity",
          note: "Post-stay relationship: city guides, return-guest recognition, and pre-arranged favorites make the second visit feel like coming back.",
        },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        { stage: "disposal", lever: "productivity", status: "neutral", note: null },
        { stage: "disposal", lever: "simplicity", status: "neutral", note: null },
        { stage: "disposal", lever: "convenience", status: "neutral", note: null },
        { stage: "disposal", lever: "risk", status: "neutral", note: null },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        { stage: "disposal", lever: "eco", status: "neutral", note: null },
      ],
      keyInsight:
        "Everything before arrival and after checkout is unowned territory: the industry fights inside the stay while pre-arrival personalization and the post-stay relationship — the levers that convert a 15-25% commission into a direct guest for life — sit wide open.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "OTA loyalists with no loyalty",
          whoTheyAre:
            "Guests who have stayed with you two or three times — and booked through a platform every single time.",
          whyTheyLeave:
            "They feel loyal to the booking app, not the property: you've given them no reason or reward to come direct, so a €5 difference sends them elsewhere.",
          unlockStrategy:
            "Enroll them at check-in into a direct tier with a 10% member rate, room choice, and flexible check-in — make rebooking direct the obviously better deal.",
          relativeSize: "large",
        },
        {
          tier: "second",
          label: "Airbnb defectors",
          whoTheyAre:
            "Travelers who consciously abandoned hotels for short-term rentals in search of character, space, and neighborhood life.",
          whyTheyLeave:
            "Hotels offered them standardization and amenity lists when they wanted to feel like temporary locals.",
          unlockStrategy:
            "Lead with the insider program and flexible, apartment-style stays — local soul with professional service, the combination rentals can't guarantee.",
          relativeSize: "medium",
        },
        {
          tier: "third",
          label: "The sofa sleepers",
          whoTheyAre:
            "Visiting-friends-and-relatives travelers who default to the spare room or sofa and have never seriously considered paying for lodging.",
          whyTheyLeave:
            "To them a hotel is an impersonal expense for a trip that is fundamentally about closeness — the category was never framed for their occasion.",
          unlockStrategy:
            "Create a 'stay near them' offer: neighborhood properties at resident-guest rates with shared experiences to host their family in — sell proximity plus privacy, not a room night.",
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
            "Pre-arrival personalization, story-worthy staff moments, and insider access attack the exact blocks guests complain about — arrival roulette, placeless sameness, and a relationship that dies at checkout. A €2 handwritten note outperforming a €200,000 lobby renovation is the utility argument in one line.",
          actions: [],
        },
        {
          gate: "price",
          question: "Is your price easily accessible to the mass of buyers?",
          verdict: "pass",
          assessment:
            "The model needs no premium: a 10% member rate on direct bookings is cheaper for the guest than the OTA price, yet still nets the property 5-15 points more after saved commission. Both sides of the trade get a better deal — the rare price move with no loser except the platform.",
          actions: [],
        },
        {
          gate: "cost",
          question:
            "Can you attain your cost target to profit at your strategic price?",
          verdict: "pass",
          assessment:
            "The funding is already in the building: 30-40% of amenity cost serves under 5% of guests, and every point of bookings shifted from OTA to direct returns 15-25% commission to the margin. Reallocating dead amenity spend to insider staffing is cost-neutral before the loyalty effects even start.",
          actions: [],
        },
        {
          gate: "adoption",
          question:
            "What are the adoption hurdles in actualizing the idea, and are you addressing them upfront?",
          verdict: "risk",
          assessment:
            "Three real hurdles: owners must trust frontline staff with discretionary budgets, OTAs can demote properties that visibly divert bookings, and empowerment is a culture shift no memo achieves. None is fatal, but all three bite in quarter one if unaddressed.",
          actions: [
            "Pilot the full model at one property and publish internal results before a portfolio rollout",
            "Cap and track staff discretionary budgets per stay so finance sees control, not leakage",
            "Grow direct share gradually behind member-only value instead of public undercutting that triggers OTA retaliation",
          ],
        },
      ],
      overallVerdict: "go",
      conclusion:
        "Utility, price, and cost all clear with room to spare; the battle is adoption — pilot it, prove it, then scale before the platforms notice what's moving.",
    },
  },
  nl: {
    v: 1,
    meta: {
      id: "preset-hospitality",
      company: "Hospitality & reizen",
      industry:
        "Hotels en reismerken die sterren en OTA-posities kopen terwijl de gastervaring vercommoditiseert",
      language: "nl",
      source: "preset",
      generatedAt: "2026-06-11T00:00:00.000Z",
    },
    core: {
      summary: {
        headline: "Het verblijf dat geen boekingsplatform kan tonen",
        narrative:
          "Hotels concurreren op sterrenclassificaties, voorzieningenlijstjes en OTA-zichtbaarheid — en betalen 15-25% commissie om te ranken in een lijst waarin elk hotel inwisselbaar oogt. De blauwe oceaan ligt in **personalisatie en echte lokale verbondenheid**: de gast kennen vóór aankomst, de bestemming verweven in het verblijf, en directe relaties opbouwen waar geen boekingsplatform tussen kan komen.",
        redOceanTraits: [
          "Wapenwedlopen om sterren en voorzieningen die gasten amper opmerken",
          "15-25% OTA-commissie betalen om inwisselbaar in een lijst te staan",
          "Ketenstandaardisatie die de bestemming uit het verblijf gumt",
        ],
        blueOceanThesis:
          "Win op personalisatie en echte lokale verbondenheid: ken de gast vóór aankomst, verweef de bestemming in het verblijf en bezit een directe relatie waar geen boekingsplatform tussen kan komen.",
      },
      canvas: {
        factors: [
          {
            name: "Sterrenclassificatie",
            rationale:
              "Sterren zijn het vertrouwensetiket van de sector, maar ze certificeren broekpersen — niet of iemand van het verblijf genoot.",
          },
          {
            name: "Aantal voorzieningen",
            rationale:
              "Lijstjes stellen op papier gerust, maar de meeste voorzieningen bedienen minder dan 5% van de gasten terwijl iedereen ervoor betaalt.",
          },
          {
            name: "OTA-zichtbaarheid",
            rationale:
              "De platformranking bepaalt wie je überhaupt ziet — tegen de prijs van commissie en een inwisselbare presentatie.",
          },
          {
            name: "Personalisatie",
            rationale:
              "Een verblijf dat vóór aankomst op de gast is afgestemd, maakt het verschil tussen een kamernacht en een relatie.",
          },
          {
            name: "Lokale verbondenheid",
            rationale:
              "Gasten reizen voor de bestemming; een verblijf dat die ontsluit levert wat geen gestandaardiseerd hotel kan.",
          },
          {
            name: "Directe loyaliteit",
            rationale:
              "Een directe relatie maakt van één betaalde acquisitie jaren aan commissievrije herhaalboekingen.",
          },
        ],
        industry: [5, 4, 5, 1, 1, 2],
        blueOcean: [3, 2, 1, 5, 5, 5],
      },
      errc: {
        eliminate: [
          {
            title: "Voorzieningen die niemand gebruikt",
            detail:
              "Schrap de voorzieningen die niemand gebruikt maar waar iedereen voor betaalt — de broekpers, het businesscenter, de minibar.",
          },
          {
            title: "OTA-first acquisitie",
            detail:
              "Beëindig de rate-parity-afhankelijkheid van OTA's als primair acquisitiekanaal.",
          },
        ],
        reduce: [
          {
            title: "Onzichtbare sterren-compliance",
            detail:
              "Verminder uitgaven aan sterrenclassificatie-items die gasten nooit opmerken.",
          },
          {
            title: "Plaatsloze ketenprotocollen",
            detail:
              "Bouw gestandaardiseerde ketenprotocollen af die een verblijf in Lissabon identiek laten voelen aan één in Frankfurt.",
          },
        ],
        raise: [
          {
            title: "Personalisatie vóór aankomst",
            detail:
              "Kussen, kamertemperatuur en dieetwensen bekend vóór het inchecken — niet ontdekt aan de balie.",
          },
          {
            title: "Personeel met eigen budget",
            detail:
              "Geef elke medewerker een discretionair budget om problemen ter plekke op te lossen en momenten te creëren.",
          },
        ],
        create: [
          {
            title: "Lokaal insiderprogramma",
            detail:
              "Door personeel samengestelde buurtervaringen die gasten nergens anders kunnen boeken.",
          },
          {
            title: "Direct-boeken-lidmaatschap",
            detail:
              "Ledentarieven, kamerkeuze en flexibel inchecken voor gasten die direct boeken.",
          },
          {
            title: "Relatie na het verblijf",
            detail:
              "Stadsgidsen, herkenning van terugkerende gasten en vooraf geregelde favorieten bij het volgende bezoek.",
          },
        ],
      },
      moves: [
        {
          title: "Ontsla je broekpers, neem een buurman aan",
          body: "Audit je voorzieningen op werkelijk gebruik — de meeste hotels ontdekken dat 30-40% van de voorzieningenkosten minder dan 5% van de gasten bedient. Verschuif dat budget naar het ene dat OTA's niet kunnen tonen: personeel dat de buurt kent. Het hotel dat een tafel regelt bij de zaak waar locals in de rij staan, verslaat het hotel met een vijfde kussenoptie.",
        },
        {
          title: "Ken de gast voordat de lobby dat doet",
          body: "Stuur een pre-arrival-formulier van 60 seconden: kussenstevigheid, aankomsttijd, één ding dat ze in de stad hopen te doen. Handel er vervolgens zichtbaar naar. Een handgeschreven briefje met twee restauranttips kost €2 en levert meer vijfsterrenreviews op dan een lobbyrenovatie van €200.000. Personalisatie bij het inchecken is theater; personalisatie vóór aankomst is loyaliteit.",
        },
        {
          title: "Behandel elke OTA-boeking als eenmalige acquisitiekosten",
          body: "Je betaalde 15-25% commissie voor die gast — betaal dat nooit twee keer. Leg het e-mailadres vast bij het inchecken, schrijf de gast in voor een direct-boeken-tier met 10% ledentarief en gratis flexibiliteit, en maak direct herboeken de vanzelfsprekende keuze. 20 procentpunt boekingen verschuiven van OTA naar direct levert 3-5 punten marge op zonder één prijs te verhogen.",
        },
      ],
    },
    sixPaths: {
      paths: [
        {
          path: "alternative-industries",
          title: "Je concurreert met de belofte van Airbnb, niet het product",
          insight:
            "Gasten die overlopen naar vakantieverhuur kopen geen vierkante meters — ze kopen het gevoel als local te wonen. Hotels antwoordden met méér voorzieningen: precies datgene waar deze gasten niet om vroegen.",
          opportunity:
            "Lever de local-living-belofte met hotelbetrouwbaarheid: insider-toegang tot de buurt plus professionele service — de combinatie die Airbnb noch de keten ernaast biedt.",
        },
        {
          path: "strategic-groups",
          title: "Boetiekziel tegen middenklasseprijzen",
          insight:
            "Luxehotels verkopen karakter voor €400 per nacht; middenklasseketens voorspelbaarheid voor €120. De reiziger die persoonlijkheid wil zonder luxefactuur moet kiezen — en kiest steeds vaker geen van beide.",
          opportunity:
            "Strip sterren-compliance en voorzieningenkosten om personalisatie op boetiekniveau te financieren tegen een middenklassetarief — karakter als standaard, niet als uitspatting.",
        },
        {
          path: "buyer-chain",
          title: "Win de planner, niet alleen de slaper",
          insight:
            "OTA's bezitten het boekingsmoment, maar doorgaans plant één persoon de hele reis voor een stel, gezin of team — en die planner is weken vóór de eerste platformzoekopdracht al bereikbaar.",
          opportunity:
            "Verleid de planner met pre-arrival-tools, groepsroutes en een directe lijn — vang de boeking voordat die ooit een commissiemachine bereikt.",
        },
        {
          path: "complementary-offerings",
          title: "De kamer is 30% van het reisbudget",
          insight:
            "Gasten geven meer uit aan eten, ervaringen en vervoer dan aan de kamer zelf — en hotels zien dat budget langs de receptie de armen van tourplatforms en toeristenfuiken in lopen.",
          opportunity:
            "Cureer de overige 70% via het lokale insiderprogramma — commissie-genererend, loyaliteit-bouwend en onmogelijk te kopiëren vanuit de database van een boekingssite.",
        },
        {
          path: "functional-emotional",
          title: "Verkoop het verhaal dat ze gaan vertellen, niet het bed",
          insight:
            "De sector verkoopt functioneel — bedden, vierkante meters, sterren — terwijl reizen tot de meest emotionele aankopen behoort. Niemand vertelt thuis over een betrouwbare broekpers; iedereen vertelt over de avond dat de conciërge ze binnenkreeg waar locals in de rij staan.",
          opportunity:
            "Regisseer één verhaalwaardig moment per verblijf via personeel met eigen budget — de herinnering wordt je marketing.",
        },
        {
          path: "time-trends",
          title: "Ontwerp voor de laptop in de koffer",
          insight:
            "Thuiswerken heeft reiscategorieën vervaagd: verblijven rekken op van 2 nachten richting 2 weken, en de gast heeft een buurt nodig om in te wonen, geen lobby om doorheen te lopen. Hotels gebouwd voor de overnachtende toerist passen niet bij het snelst groeiende segment.",
          opportunity:
            "Bouw long-stay-, werkklare aanbiedingen rond lokale verbondenheid — weektarieven, werkplekken en insider-toegang die van een workcation van 10 nachten een terugkerend ritueel maken.",
        },
      ],
    },
    utilityMap: {
      cells: [
        {
          stage: "purchase",
          lever: "productivity",
          status: "industry-focus",
          note: "Rate parity, prijsvergelijking en OTA-rankingoptimalisatie slokken de commerciële energie van de sector op.",
        },
        {
          stage: "purchase",
          lever: "simplicity",
          status: "opportunity",
          note: "Een direct-boeken-lidmaatschap — ledentarief, kamerkeuze, flexibele voorwaarden — maakt direct boeken simpeler dan drie platforms vergelijken.",
        },
        {
          stage: "purchase",
          lever: "convenience",
          status: "industry-focus",
          note: "OTA-alomtegenwoordigheid en overal direct boeken; het kanaal is gemakkelijk — tegen een tol van 15-25%.",
        },
        { stage: "purchase", lever: "risk", status: "neutral", note: null },
        { stage: "purchase", lever: "fun-image", status: "neutral", note: null },
        { stage: "purchase", lever: "eco", status: "neutral", note: null },
        { stage: "delivery", lever: "productivity", status: "neutral", note: null },
        { stage: "delivery", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "delivery",
          lever: "convenience",
          status: "blocked",
          note: "Rigide inchecken om 15.00 en uitchecken om 11.00 botsen met vluchtschema's — en de sector haalt zijn schouders op.",
        },
        {
          stage: "delivery",
          lever: "risk",
          status: "opportunity",
          note: "Personalisatie vóór aankomst — kussen, temperatuur en dieetwensen bekend vóór het inchecken — schaft de aankomstroulette volledig af.",
        },
        { stage: "delivery", lever: "fun-image", status: "neutral", note: null },
        { stage: "delivery", lever: "eco", status: "neutral", note: null },
        {
          stage: "use",
          lever: "productivity",
          status: "industry-focus",
          note: "Voorzieningenaantallen en faciliteitenlijsten — de wapenwedloop waar gasten voor betalen maar die ze zelden gebruiken.",
        },
        { stage: "use", lever: "simplicity", status: "neutral", note: null },
        { stage: "use", lever: "convenience", status: "neutral", note: null },
        {
          stage: "use",
          lever: "risk",
          status: "industry-focus",
          note: "Sterren-compliance en merkstandaarden bestaan om voorspelbaarheid te garanderen — de ene belofte die de sector betrouwbaar nakomt.",
        },
        {
          stage: "use",
          lever: "fun-image",
          status: "blocked",
          note: "Gestandaardiseerde protocollen laten Lissabon identiek voelen aan Frankfurt; de bestemming is uit het verblijf gegumd.",
        },
        { stage: "use", lever: "eco", status: "neutral", note: null },
        { stage: "supplements", lever: "productivity", status: "neutral", note: null },
        { stage: "supplements", lever: "simplicity", status: "neutral", note: null },
        { stage: "supplements", lever: "convenience", status: "neutral", note: null },
        { stage: "supplements", lever: "risk", status: "neutral", note: null },
        {
          stage: "supplements",
          lever: "fun-image",
          status: "opportunity",
          note: "Het lokale insiderprogramma — door personeel samengestelde ervaringen die nergens anders te boeken zijn — is de aanvulling die geen OTA kan tonen.",
        },
        { stage: "supplements", lever: "eco", status: "neutral", note: null },
        { stage: "maintenance", lever: "productivity", status: "neutral", note: null },
        { stage: "maintenance", lever: "simplicity", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "convenience",
          status: "blocked",
          note: "Na het uitchecken gaat de relatie op zwart — puntenprogramma's die niemand verzilvert en nieuwsbrieven die niemand leest.",
        },
        { stage: "maintenance", lever: "risk", status: "neutral", note: null },
        {
          stage: "maintenance",
          lever: "fun-image",
          status: "opportunity",
          note: "De relatie na het verblijf: stadsgidsen, herkenning van terugkerende gasten en vooraf geregelde favorieten laten het tweede bezoek voelen als thuiskomen.",
        },
        { stage: "maintenance", lever: "eco", status: "neutral", note: null },
        { stage: "disposal", lever: "productivity", status: "neutral", note: null },
        { stage: "disposal", lever: "simplicity", status: "neutral", note: null },
        { stage: "disposal", lever: "convenience", status: "neutral", note: null },
        { stage: "disposal", lever: "risk", status: "neutral", note: null },
        { stage: "disposal", lever: "fun-image", status: "neutral", note: null },
        { stage: "disposal", lever: "eco", status: "neutral", note: null },
      ],
      keyInsight:
        "Alles vóór aankomst en na het uitchecken is onbezet terrein: de sector vecht bínnen het verblijf, terwijl personalisatie vooraf en de relatie achteraf — de hefbomen die een commissie van 15-25% omzetten in een directe gast voor het leven — wagenwijd openliggen.",
    },
    nonCustomers: {
      tiers: [
        {
          tier: "first",
          label: "OTA-loyalisten zonder loyaliteit",
          whoTheyAre:
            "Gasten die al twee of drie keer bij je verbleven — en elke keer via een platform boekten.",
          whyTheyLeave:
            "Ze voelen loyaliteit aan de boekingsapp, niet aan het hotel: je gaf ze geen reden of beloning om direct te komen, dus €5 verschil stuurt ze elders heen.",
          unlockStrategy:
            "Schrijf ze bij het inchecken in voor een directe tier met 10% ledentarief, kamerkeuze en flexibel inchecken — maak direct herboeken de aantoonbaar betere deal.",
          relativeSize: "large",
        },
        {
          tier: "second",
          label: "Airbnb-overlopers",
          whoTheyAre:
            "Reizigers die hotels bewust inruilden voor vakantieverhuur, op zoek naar karakter, ruimte en buurtleven.",
          whyTheyLeave:
            "Hotels boden ze standaardisatie en voorzieningenlijsten, terwijl ze zich tijdelijke locals wilden voelen.",
          unlockStrategy:
            "Open met het insiderprogramma en flexibele verblijven in appartementstijl — lokale ziel met professionele service, de combinatie die verhuur niet kan garanderen.",
          relativeSize: "medium",
        },
        {
          tier: "third",
          label: "De logeerbedslapers",
          whoTheyAre:
            "Familie- en vriendenbezoekers die standaard op de logeerkamer of bank belanden en nooit serieus hebben overwogen voor een overnachting te betalen.",
          whyTheyLeave:
            "Voor hen is een hotel een onpersoonlijke kostenpost bij een reis die juist om nabijheid draait — de categorie is nooit voor hun aanleiding bedacht.",
          unlockStrategy:
            "Creëer een 'logeer-dichtbij'-aanbod: buurtlocaties tegen bewonerstarieven met gedeelde ervaringen om familie te ontvangen — verkoop nabijheid plus privacy, geen kamernacht.",
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
            "Personalisatie vóór aankomst, verhaalwaardige personeelsmomenten en insider-toegang pakken exact de blokkades aan waar gasten over klagen — aankomstroulette, plaatsloze eenheidsworst en een relatie die sterft bij het uitchecken. Een handgeschreven briefje van €2 dat een lobbyrenovatie van €200.000 verslaat, is het waardeargument in één zin.",
          actions: [],
        },
        {
          gate: "price",
          question: "Is de prijs goed toegankelijk voor de massa van kopers?",
          verdict: "pass",
          assessment:
            "Het model vergt geen premium: een ledentarief van 10% korting op directe boekingen is voor de gast goedkoper dan de OTA-prijs en levert het hotel na bespaarde commissie alsnog 5-15 punten extra op. Beide kanten van de transactie krijgen een betere deal — de zeldzame prijszet zonder verliezer behalve het platform.",
          actions: [],
        },
        {
          gate: "cost",
          question:
            "Haal je het kostendoel om winstgevend te zijn tegen je strategische prijs?",
          verdict: "pass",
          assessment:
            "De financiering zit al in het gebouw: 30-40% van de voorzieningenkosten bedient minder dan 5% van de gasten, en elk procentpunt boekingen dat van OTA naar direct verschuift, geeft 15-25% commissie terug aan de marge. Dode voorzieningenkosten verschuiven naar insider-personeel is kostenneutraal nog vóór de loyaliteitseffecten beginnen.",
          actions: [],
        },
        {
          gate: "adoption",
          question: "Wat zijn de adoptiehordes en pak je ze vooraf aan?",
          verdict: "risk",
          assessment:
            "Drie echte hordes: eigenaren moeten baliepersoneel discretionaire budgetten toevertrouwen, OTA's kunnen hotels degraderen die zichtbaar boekingen wegleiden, en empowerment is een cultuuromslag die geen memo bereikt. Geen ervan is fataal, maar alle drie bijten in kwartaal één als je ze negeert.",
          actions: [
            "Pilot het volledige model in één hotel en publiceer interne resultaten vóór een portefeuillebrede uitrol",
            "Maximeer en monitor discretionaire budgetten per verblijf, zodat finance controle ziet in plaats van lekkage",
            "Laat het directe aandeel geleidelijk groeien achter exclusieve ledenwaarde in plaats van publiek onderbieden dat OTA-represailles uitlokt",
          ],
        },
      ],
      overallVerdict: "go",
      conclusion:
        "Waarde, prijs en kosten komen ruim door de poorten; de strijd zit in adoptie — pilot het, bewijs het en schaal op voordat de platforms doorhebben wat er verschuift.",
    },
  },
};
