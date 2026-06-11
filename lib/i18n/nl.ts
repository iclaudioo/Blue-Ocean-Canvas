import type { Dict } from "./en";

export const nl: Dict = {
  // App
  "app.title": "Blue Ocean Strategy Studio",
  "app.tagline": "AI-gedreven strategietool",
  "app.heroTitle1": "Breng je industrie in kaart.",
  "app.heroTitle2": "Vind je blue ocean.",
  "app.heroSub":
    "Voer een bedrijf en sector in. De studio genereert een volledige Blue Ocean Strategy-analyse — strategy canvas, four actions, six paths, buyer utility map, noncustomers en de strategievolgorde.",

  // Form
  "form.company": "Bedrijf",
  "form.companyPlaceholder": "bijv. Acme Logistics",
  "form.industry": "Industrie / sector",
  "form.industryPlaceholder": "bijv. last-mile bezorging in de Benelux",
  "form.context": "Extra context (optioneel)",
  "form.contextPlaceholder":
    "Regio, omvang, huidige positionering, grootste concurrent…",
  "form.submit": "Genereer analyse",
  "form.generating": "Genereren…",
  "form.error.required": "Bedrijf en industrie zijn verplicht.",
  "form.error.rateLimit": "Te veel analyses voor nu — probeer het straks opnieuw.",
  "form.error.generic": "Er ging iets mis. Probeer het opnieuw.",

  // Gallery & history
  "gallery.title": "Of verken een voorbeeldindustrie",
  "history.title": "Recente analyses",
  "history.open": "Openen",
  "history.delete": "Verwijderen",
  "history.empty": "Analyses die je genereert verschijnen hier.",

  // Sections
  "section.summary": "Strategische lezing",
  "section.canvas": "Strategy canvas",
  "section.errc": "Four actions framework",
  "section.moves": "Strategische zetten",
  "section.sixPaths": "Six paths framework",
  "section.utilityMap": "Buyer utility map",
  "section.nonCustomers": "Drie lagen van noncustomers",
  "section.boi": "Blue ocean strategievolgorde",

  // Canvas
  "canvas.industry": "Industriestandaard",
  "canvas.blueOcean": "Blue ocean-zet",
  "canvas.hint": "Versleep de sliders om de blauwe curve te hervormen.",

  // ERRC
  "errc.eliminate": "Elimineer",
  "errc.reduce": "Verminder",
  "errc.raise": "Versterk",
  "errc.create": "Creëer",

  // Six paths (canonical labels)
  "path.alternative-industries": "Kijk over alternatieve industrieën heen",
  "path.strategic-groups": "Kijk over strategische groepen heen",
  "path.buyer-chain": "Herdefinieer de kopersgroep",
  "path.complementary-offerings": "Kijk naar aanvullende producten en diensten",
  "path.functional-emotional": "Herzie functionele–emotionele aantrekkingskracht",
  "path.time-trends": "Geef externe trends vorm in de tijd",
  "path.opportunity": "Kans",

  // Buyer utility map (canonical axes)
  "stage.purchase": "Aankoop",
  "stage.delivery": "Levering",
  "stage.use": "Gebruik",
  "stage.supplements": "Aanvullingen",
  "stage.maintenance": "Onderhoud",
  "stage.disposal": "Afdanking",
  "lever.productivity": "Klantproductiviteit",
  "lever.simplicity": "Eenvoud",
  "lever.convenience": "Gemak",
  "lever.risk": "Risicoreductie",
  "lever.fun-image": "Plezier & imago",
  "lever.eco": "Milieuvriendelijkheid",
  "utility.industry-focus": "Industriefocus",
  "utility.blocked": "Geblokkeerd",
  "utility.opportunity": "Kans",
  "utility.neutral": "Neutraal",
  "utility.legend": "Waar de industrie concurreert, waar nut geblokkeerd is, en waar de open ruimte ligt.",

  // Noncustomers
  "tier.core": "Kernmarkt",
  "tier.first": "Eerste laag",
  "tier.second": "Tweede laag",
  "tier.third": "Derde laag",
  "tier.first.sub": "Bijna-noncustomers op de rand van je markt",
  "tier.second.sub": "Weigerende noncustomers die bewust tegen je markt kozen",
  "tier.third.sub": "Onontgonnen noncustomers in verafgelegen markten",
  "tier.who": "Wie ze zijn",
  "tier.why": "Waarom ze wegblijven",
  "tier.unlock": "Hoe je ze ontsluit",

  // BOI sequence
  "boi.utility": "Kopersnut",
  "boi.price": "Prijs",
  "boi.cost": "Kosten",
  "boi.adoption": "Adoptie",
  "boi.pass": "Geslaagd",
  "boi.risk": "Risico",
  "boi.fail": "Gezakt",
  "boi.go": "Go",
  "boi.rework": "Herwerk",
  "boi.no-go": "No-go",
  "boi.actions": "Wat nodig is om te slagen",

  // Toolbar
  "tool.copyLink": "Kopieer link",
  "tool.copied": "Link gekopieerd ✓",
  "tool.print": "Print rapport",
  "tool.png": "PNG",
  "tool.reset": "Reset",
  "tool.regenerate": "Genereer opnieuw in het Nederlands",
  "tool.newAnalysis": "Nieuwe analyse",

  // Status / streaming
  "status.queued": "In de wachtrij…",
  "status.thinking": "Analyseren…",
  "status.retry": "Opnieuw",
  "status.sectionError": "Deze sectie kon niet gegenereerd worden.",
  "status.linkError": "Deze link kon niet geopend worden. Start hieronder een nieuwe analyse.",
  "status.warning.longLink": "Lange link — plak hem direct in plaats van op previews te vertrouwen.",

  // Footer
  "footer.credit": "Gebouwd met Claude",
  "footer.framework": "Blue Ocean Strategy · W. Chan Kim & Renée Mauborgne",

  // Report
  "report.title": "Blue Ocean Strategy-rapport",
  "report.generatedFor": "Opgesteld voor",
};
