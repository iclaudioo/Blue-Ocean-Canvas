export const en = {
  // App
  "app.title": "Blue Ocean Strategy Studio",
  "app.tagline": "AI-powered strategy tool",
  "app.heroTitle1": "Chart your industry.",
  "app.heroTitle2": "Find your blue ocean.",
  "app.heroSub":
    "Enter any company and industry. The studio generates a full Blue Ocean Strategy analysis — strategy canvas, four actions, six paths, buyer utility map, noncustomers and the strategy sequence.",

  // Form
  "form.company": "Company",
  "form.companyPlaceholder": "e.g. Acme Logistics",
  "form.industry": "Industry / sector",
  "form.industryPlaceholder": "e.g. last-mile delivery in Benelux",
  "form.context": "Extra context (optional)",
  "form.contextPlaceholder":
    "Region, size, current positioning, biggest competitor…",
  "form.submit": "Generate analysis",
  "form.generating": "Generating…",
  "form.error.required": "Company and industry are required.",
  "form.error.rateLimit": "Too many analyses for now — try again in a while.",
  "form.error.generic": "Something went wrong. Try again.",

  // Gallery & history
  "gallery.title": "Or explore an example industry",
  "history.title": "Recent analyses",
  "history.open": "Open",
  "history.delete": "Delete",
  "history.empty": "Analyses you generate appear here.",

  // Sections
  "section.summary": "Strategic read",
  "section.canvas": "Strategy canvas",
  "section.errc": "Four actions framework",
  "section.moves": "Strategic moves",
  "section.sixPaths": "Six paths framework",
  "section.utilityMap": "Buyer utility map",
  "section.nonCustomers": "Three tiers of noncustomers",
  "section.boi": "Blue ocean strategy sequence",

  // Canvas
  "canvas.industry": "Industry standard",
  "canvas.blueOcean": "Blue ocean move",
  "canvas.hint": "Drag the sliders to reshape the blue ocean curve.",

  // ERRC
  "errc.eliminate": "Eliminate",
  "errc.reduce": "Reduce",
  "errc.raise": "Raise",
  "errc.create": "Create",

  // Six paths (canonical labels)
  "path.alternative-industries": "Look across alternative industries",
  "path.strategic-groups": "Look across strategic groups",
  "path.buyer-chain": "Redefine the buyer group",
  "path.complementary-offerings": "Look at complementary offerings",
  "path.functional-emotional": "Rethink functional–emotional appeal",
  "path.time-trends": "Shape external trends over time",
  "path.opportunity": "Opportunity",

  // Buyer utility map (canonical axes)
  "stage.purchase": "Purchase",
  "stage.delivery": "Delivery",
  "stage.use": "Use",
  "stage.supplements": "Supplements",
  "stage.maintenance": "Maintenance",
  "stage.disposal": "Disposal",
  "lever.productivity": "Customer productivity",
  "lever.simplicity": "Simplicity",
  "lever.convenience": "Convenience",
  "lever.risk": "Risk reduction",
  "lever.fun-image": "Fun & image",
  "lever.eco": "Environmental friendliness",
  "utility.industry-focus": "Industry focus",
  "utility.blocked": "Blocked",
  "utility.opportunity": "Opportunity",
  "utility.neutral": "Neutral",
  "utility.legend": "Where the industry competes, where utility is blocked, and where the open space lies.",

  // Noncustomers
  "tier.core": "Core market",
  "tier.first": "First tier",
  "tier.second": "Second tier",
  "tier.third": "Third tier",
  "tier.first.sub": "Soon-to-be noncustomers on the edge of your market",
  "tier.second.sub": "Refusing noncustomers who consciously chose against your market",
  "tier.third.sub": "Unexplored noncustomers in distant markets",
  "tier.who": "Who they are",
  "tier.why": "Why they stay away",
  "tier.unlock": "How to unlock them",

  // BOI sequence
  "boi.utility": "Buyer utility",
  "boi.price": "Price",
  "boi.cost": "Cost",
  "boi.adoption": "Adoption",
  "boi.pass": "Pass",
  "boi.risk": "Risk",
  "boi.fail": "Fail",
  "boi.go": "Go",
  "boi.rework": "Rework",
  "boi.no-go": "No-go",
  "boi.actions": "What it takes to pass",

  // Toolbar
  "tool.copyLink": "Copy link",
  "tool.copied": "Link copied ✓",
  "tool.print": "Print report",
  "tool.png": "PNG",
  "tool.reset": "Reset",
  "tool.regenerate": "Regenerate in English",
  "tool.newAnalysis": "New analysis",

  // Status / streaming
  "status.queued": "Queued…",
  "status.thinking": "Analyzing…",
  "status.retry": "Retry",
  "status.sectionError": "This section failed to generate.",
  "status.linkError": "This link couldn't be opened. Start a new analysis below.",
  "status.warning.longLink": "Long link — paste it directly rather than relying on previews.",

  // Footer
  "footer.credit": "Built with Claude",
  "footer.framework": "Blue Ocean Strategy · W. Chan Kim & Renée Mauborgne",

  // Report
  "report.title": "Blue Ocean Strategy Report",
  "report.generatedFor": "Prepared for",
} as const;

export type Dict = Record<keyof typeof en, string>;
