// Research data for the Quickflows.AI competitive intelligence briefing.
// Competitor statements summarise public sources listed in `sources` and the
// research reports in /research. Every claim carries an `Evidence` label so the
// UI can keep facts, interpretations and recommendations visibly separate.

export type CompetitorId = "providertrust" | "symplr" | "medallion";

export type Evidence =
  | "public" // stated in the competitor's public materials
  | "company-reported" // a figure the company publishes about itself
  | "case-study" // outcome from a published customer case study
  | "interpretation" // our reading of public information
  | "recommendation" // proposed for Quickflows, not a proven result
  | "unverified"; // circulating claim without a reliable source

export const evidenceLabel: Record<Evidence, string> = {
  public: "Public info",
  "company-reported": "Company-reported",
  "case-study": "Case study",
  interpretation: "Interpretation",
  recommendation: "Recommendation",
  unverified: "Unverified",
};

export interface Competitor {
  id: CompetitorId;
  name: string;
  website: string;
  positioning: string;
  strength: string;
}

export const report = {
  title: "Healthcare Credentialing: Competitive Intelligence",
  subtitle: "ProviderTrust vs. symplr vs. Medallion",
  date: "October 30, 2026",
  context: "Internal strategy briefing",
  objective: "Strategic objective: build toward a $20M qualified sales pipeline. This is a goal, not a current result.",
};

export const competitors: Competitor[] = [
  {
    id: "providertrust",
    name: "ProviderTrust",
    website: "providertrust.com",
    positioning: "Verification data and compliance intelligence",
    strength: "Source coverage and monitoring",
  },
  {
    id: "symplr",
    name: "symplr",
    website: "symplr.com",
    positioning: "Enterprise credentialing and provider workflows",
    strength: "Integrated operations and CVO",
  },
  {
    id: "medallion",
    name: "Medallion",
    website: "medallion.co",
    positioning: "AI-assisted credentialing and enrollment",
    strength: "Workflow automation and provider readiness",
  },
];

export const competitorById = (id: CompetitorId): Competitor => competitors.find((c) => c.id === id)!;

/* ------------------------------------------------------------------ */
/* Executive takeaways                                                 */
/* ------------------------------------------------------------------ */

export interface Takeaway {
  title: string;
  body: string;
}

export const executiveTakeaways: Takeaway[] = [
  {
    title: "Three competitors, different strengths",
    body: "ProviderTrust owns verification trust, symplr owns broad workflows, and Medallion emphasises AI-assisted execution.",
  },
  {
    title: "The market buys outcomes",
    body: "Customers pay for compliance assurance, operational efficiency, provider readiness and lower administrative cost.",
  },
  {
    title: "Quickflows' opportunity",
    body: "Validate a lower-cost, integration-first automation approach without sacrificing verification quality.",
  },
];

/* ------------------------------------------------------------------ */
/* Diagram 1: positioning map (qualitative, directional)               */
/* ------------------------------------------------------------------ */

export interface MapPlacement {
  id: CompetitorId;
  /** 0 = focused verification / data, 1 = broad provider lifecycle. Directional only. */
  x: number;
  /** 0 = data and monitoring centric, 1 = workflow execution and services. Directional only. */
  y: number;
  reading: string;
  basis: string;
}

export const positioningMap: MapPlacement[] = [
  {
    id: "providertrust",
    x: 0.2,
    y: 0.22,
    reading: "Focused verification data with continuous monitoring",
    basis: "Products: Compliance Data, Credentialing Data, Workforce Data, APIs",
  },
  {
    id: "symplr",
    x: 0.82,
    y: 0.56,
    reading: "Broad enterprise workflow software plus CVO services",
    basis: "Products: Provider, CVO, Payer, Directory, Access",
  },
  {
    id: "medallion",
    x: 0.66,
    y: 0.84,
    reading: "Provider-lifecycle operations executed with AI and specialists",
    basis: "Products: Core, CVO, Enrollment, Licensing, Monitoring, Delegation",
  },
];

export const quickflowsMapRegion = {
  cx: 0.34,
  cy: 0.6,
  rx: 0.16,
  ry: 0.17,
  label: "Quickflows opportunity",
  sublabel: "to validate",
  reading:
    "Verified data plus an automated layer that resolves the work after verification, in a focused scope",
  basis: "Research hypothesis (ProviderTrust report §9). Not a demonstrated position.",
};

/* ------------------------------------------------------------------ */
/* Comparison table                                                    */
/* ------------------------------------------------------------------ */

export type ComparisonGroup =
  | "Positioning"
  | "Customers and buyers"
  | "Commercial model"
  | "Competitive strength"
  | "Quickflows opportunity";

export interface ComparisonRow {
  group: ComparisonGroup;
  category: string;
  evidence: Evidence;
  /** One value per competitor, or a single shared value spanning all columns. */
  values: Record<CompetitorId, string> | { all: string };
}

export const comparison: ComparisonRow[] = [
  {
    group: "Positioning",
    category: "Primary focus",
    evidence: "public",
    values: {
      providertrust: "Verification data, exclusion monitoring, compliance intelligence",
      symplr: "Enterprise healthcare operations, provider credentialing, CVO",
      medallion: "AI-assisted credentialing and enrollment workflows",
    },
  },
  {
    group: "Positioning",
    category: "Core products",
    evidence: "public",
    values: {
      providertrust: "Compliance Data, Credentialing Data, Workforce Data, APIs",
      symplr: "Provider, CVO, Payer, Directory, Access",
      medallion: "Core, CVO, Enrollment, Licensing, Monitoring, Delegation",
    },
  },
  {
    group: "Positioning",
    category: "AI positioning",
    evidence: "public",
    values: {
      providertrust: "Automation and enriched verification data, AI integration strategy",
      symplr: "Workflow automation and AI-powered modules",
      medallion: "AI-assisted workflow execution with specialist oversight",
    },
  },
  {
    group: "Customers and buyers",
    category: "Target customers",
    evidence: "public",
    values: {
      providertrust: "Hospitals, providers, payers, HR/compliance teams, partners",
      symplr: "Hospitals, health systems, payers, medical groups, vendors",
      medallion: "Provider groups, payers, health systems, telehealth, digital health",
    },
  },
  {
    group: "Customers and buyers",
    category: "Primary buyers",
    evidence: "interpretation",
    values: {
      providertrust: "Compliance, credentialing, HR, payer operations",
      symplr: "Medical staff, credentialing, CIO, operations leadership",
      medallion: "Credentialing, operations, finance, provider network teams",
    },
  },
  {
    group: "Customers and buyers",
    category: "What customers buy",
    evidence: "interpretation",
    values: {
      providertrust: "Trustworthy verification, eligibility monitoring, compliance protection",
      symplr: "Integrated credentialing workflows, services, enrollment and data management",
      medallion: "Faster provider readiness, payer enrollment and reduced operational effort",
    },
  },
  {
    group: "Customers and buyers",
    category: "Public customer examples",
    evidence: "public",
    values: {
      providertrust: "Highmark, Acadia Healthcare, Dialysis Clinic, DentaQuest",
      symplr: "St. Clair Health, Yale New Haven, Cone Health",
      medallion: "Tampa General, WellBe, Ivy Rehab, PM Pediatric Care",
    },
  },
  {
    group: "Commercial model",
    category: "Revenue model",
    evidence: "interpretation",
    values: {
      providertrust: "Enterprise data, verification and monitoring services",
      symplr: "Enterprise software, managed CVO services and vendor subscriptions",
      medallion: "Custom platform and services across provider lifecycle workflows",
    },
  },
  {
    group: "Commercial model",
    category: "Pricing",
    evidence: "public",
    values: { all: "Enterprise prices are generally quote-based and not publicly established." },
  },
  {
    group: "Commercial model",
    category: "Sales motion",
    evidence: "interpretation",
    values: {
      providertrust: "Demo, RFP, quality proof, pilot, enterprise expansion",
      symplr: "Consultative sales, demos, ROI assessment, custom proposals",
      medallion: "Outcome-led demonstrations, tailored service proposals, lifecycle expansion",
    },
  },
  {
    group: "Commercial model",
    category: "Marketing",
    evidence: "public",
    values: {
      providertrust: "Regulatory education, compliance reports, case studies, events",
      symplr: "Surveys, case studies, webinars, conferences, ROI calculators",
      medallion: "AI positioning, educational content, case studies, calculators, events",
    },
  },
  {
    group: "Competitive strength",
    category: "Competitive strength",
    evidence: "interpretation",
    values: {
      providertrust: "Data quality, source coverage, identity matching",
      symplr: "Enterprise distribution, integrated workflows, CVO expertise",
      medallion: "AI-assisted operations, provider lifecycle and payer relationships",
    },
  },
  {
    group: "Quickflows opportunity",
    category: "Quickflows opportunity",
    evidence: "recommendation",
    values: {
      providertrust: "Verification economics and operational automation",
      symplr: "Focused automation inside existing enterprise systems",
      medallion: "Prove better efficiency, cost or outcomes in selected workflows",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Diagram 2: synthesized enterprise buying pattern                    */
/* ------------------------------------------------------------------ */

export interface SalesStage {
  title: string;
  detail: string;
  /** A documented instance of the stage, drawn from a published case. */
  example: string;
}

export const salesFlow: SalesStage[] = [
  {
    title: "Buyer problem",
    detail: "Manual credentialing, missed exclusions, delayed enrollment",
    example: "Highmark struggled with its previous screening vendor",
  },
  {
    title: "Economic value",
    detail: "Risk reduction, labour savings, provider readiness",
    example: "symplr frames denials as annual losses, not software cost",
  },
  {
    title: "Evaluation",
    detail: "Demo, proof of accuracy, ROI case, implementation assessment",
    example: "Highmark ran a competitive RFP in 2021",
  },
  {
    title: "Pilot, RFP or contract",
    detail: "Software subscription, verification or monitoring service, CVO service",
    example: "symplr scopes software only, CVO only, or combined",
  },
  {
    title: "Expansion",
    detail: "More providers, modules, business units or payer relationships",
    example: "Highmark grew from one network to an enterprise-wide rollout",
  },
];

export const salesEmphasis: Record<CompetitorId, string> = {
  providertrust: "Leads with risk and data quality: a missed exclusion outweighs a feature list.",
  symplr: "Leads with ROI and integrated workflows, often selling the cost of not solving the problem.",
  medallion: "Leads with speed and provider readiness, quantifying the revenue cost of delay.",
};

/* ------------------------------------------------------------------ */
/* Company intelligence                                                */
/* ------------------------------------------------------------------ */

export interface ResearchPoint {
  text: string;
  evidence: Evidence;
  /** A URL from `sources`, or an internal research report reference. */
  source?: { label: string; url?: string };
}

export interface CompanyIntel {
  id: CompetitorId;
  takeaway: string;
  strength: string;
  salesMotion: string;
  consideration: string;
  examples: string;
  distribution: string;
  research: ResearchPoint[];
}

export const companyIntel: CompanyIntel[] = [
  {
    id: "providertrust",
    takeaway: "Sells confidence in the underlying verification data.",
    strength: "Enriched data and identity matching across fragmented records",
    salesMotion: "Competitive RFP, a smaller first deployment, then enterprise expansion",
    consideration: "Compete on verification accuracy and monitoring quality, not price alone",
    examples: "Highmark",
    distribution: "Direct sales, API integration and referral partnerships",
    research: [
      {
        text: "Highmark ran a competitive RFP in 2021, started with the smaller Allegheny Health Network population, found an exclusion the previous system had missed, then expanded across the enterprise.",
        evidence: "case-study",
        source: {
          label: "Highmark case study",
          url: "https://explore.providertrust.com/case-study/how-highmark-found-undetected-exclusions-in-month-one/",
        },
      },
      {
        text: "Another published case describes a customer that moved to a cheaper vendor, had match-quality problems and returned. Expect this argument against any low-price pitch.",
        evidence: "case-study",
        source: { label: "Research report: ProviderTrust §5" },
      },
      {
        text: "A $300M valuation figure circulates, but no reliable source supports it. Financial terms of the 2021 investment were not disclosed. Do not use it.",
        evidence: "unverified",
        source: { label: "Research report: ProviderTrust §1" },
      },
    ],
  },
  {
    id: "symplr",
    takeaway: "Sells breadth: integrated workflows, services and the cost of inaction.",
    strength: "Enterprise integration and workflow breadth",
    salesMotion: "Leads with outcomes and ROI, then scopes software, CVO or a combined offer",
    consideration: "Work alongside existing systems rather than requiring immediate replacement",
    examples: "St. Clair Health, Yale New Haven, Cone Health",
    distribution: "Enterprise sales, installed customer base and partnerships",
    research: [
      {
        text: "A southeastern health system of about 10,000 professionals reported enrollment-related denials falling from $7M to $500K a year after implementing symplr Provider.",
        evidence: "case-study",
        source: {
          label: "Enrollment denials case study",
          url: "https://www.symplr.com/case-studies/provider-enrollment-reduced-denials",
        },
      },
      {
        text: "Named customers use different products: Yale New Haven (Directory), St. Clair Health (Provider), Cone Health (Access, vendor compliance). A logo is not evidence of a credentialing contract.",
        evidence: "public",
        source: { label: "Research report: symplr §6" },
      },
      {
        text: "St. Clair Health moved from the legacy Cactus platform to symplr Provider in 2023, showing symplr selling modernisation to its own installed base.",
        evidence: "case-study",
        source: { label: "Research report: symplr §6" },
      },
    ],
  },
  {
    id: "medallion",
    takeaway: "Sells speed to provider readiness, with AI doing the operational work.",
    strength: "AI-supported workflow execution with specialist oversight",
    salesMotion: "Quantifies the cost of delay, then proposes a tailored platform-and-service package",
    consideration: "AI alone will not differentiate Quickflows; measured outcomes will",
    examples: "Tampa General, WellBe, Ivy Rehab",
    distribution: "Direct sales, education, events and payer/network relationships",
    research: [
      {
        text: "Andros acquisition announced September 15, 2026. Medallion says it brings more than one million providers across nearly 400 organisations and health plans.",
        evidence: "company-reported",
        source: { label: "Andros acquisition", url: "https://www.medallion.co/news/medallion-acquires-andros" },
      },
      {
        text: "WellBe's previous vendor took about 30 days to complete credentialing; WellBe reported 6 days with Medallion across 500+ clinicians in seven states.",
        evidence: "case-study",
        source: { label: "Case studies", url: "https://www.medallion.co/resources/case-studies" },
      },
      {
        text: "Some customer logos may come through Andros. A logo does not establish product scope or current contract status.",
        evidence: "interpretation",
        source: { label: "Research report: Medallion §4" },
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Customer proof                                                      */
/* ------------------------------------------------------------------ */

export interface ProofPoint {
  id: CompetitorId;
  figure: string;
  statement: string;
  evidence: Extract<Evidence, "company-reported" | "case-study">;
  sourceUrl: string;
}

export const proofPoints: ProofPoint[] = [
  {
    id: "providertrust",
    figure: "215M+",
    statement: "Annual license verifications reported on the company website.",
    evidence: "company-reported",
    sourceUrl: "https://providertrust.com/",
  },
  {
    id: "symplr",
    figure: "93%",
    statement: "Reduction in enrollment-related denials at one southeastern health system.",
    evidence: "case-study",
    sourceUrl: "https://www.symplr.com/case-studies/provider-enrollment-reduced-denials",
  },
  {
    id: "medallion",
    figure: "30 → 6 days",
    statement: "WellBe reported credentialing turnaround falling from 30 to 6 days.",
    evidence: "case-study",
    sourceUrl: "https://www.medallion.co/resources/case-studies",
  },
];

/* ------------------------------------------------------------------ */
/* Implications for Quickflows (all recommendations)                   */
/* ------------------------------------------------------------------ */

export type TakeawayIcon = "trust" | "automate" | "focus";

export const strategicTakeaways: (Takeaway & { icon: TakeawayIcon })[] = [
  {
    icon: "trust",
    title: "Compete on trust",
    body: "Prove verification accuracy, source coverage and audit evidence.",
  },
  {
    icon: "automate",
    title: "Automate the work",
    body: "Reduce manual verification follow-up, exception handling and administrative effort.",
  },
  {
    icon: "focus",
    title: "Win through focused entry",
    body: "Prioritise integration-first deployments and measurable pilot outcomes.",
  },
];

export type Phase = "validate" | "build" | "partner" | "later";

export const phaseLabel: Record<Phase, string> = {
  validate: "Validate now",
  build: "Build next",
  partner: "Then expand",
  later: "Longer-term evaluation",
};

export interface Opportunity {
  name: string;
  phase: Phase;
  /** Qualitative hypothesis, not a score. */
  relevance: "higher" | "uncertain";
  effort: "lower" | "higher";
  rationale: string;
}

export const opportunities: Opportunity[] = [
  {
    name: "Verification and monitoring benchmark",
    phase: "validate",
    relevance: "higher",
    effort: "lower",
    rationale: "Prove accuracy and unit economics before any comparative claim",
  },
  {
    name: "AI exception handling",
    phase: "build",
    relevance: "higher",
    effort: "higher",
    rationale: "Closest match to Quickflows' agentic direction",
  },
  {
    name: "Existing-system integrations",
    phase: "build",
    relevance: "higher",
    effort: "higher",
    rationale: "Lowers adoption friction next to incumbent platforms",
  },
  {
    name: "CVO / API partner distribution",
    phase: "partner",
    relevance: "uncertain",
    effort: "lower",
    rationale: "Competitors already use partner channels; fit to be tested",
  },
  {
    name: "Full credentialing platform replacement",
    phase: "later",
    relevance: "uncertain",
    effort: "higher",
    rationale: "High switching cost; research favours working alongside",
  },
];

export type CapabilityStatus = "documented" | "benchmark" | "confirm" | "opportunity";

export const capabilityStatusLabel: Record<CapabilityStatus, string> = {
  documented: "Documented capability",
  benchmark: "Requires benchmark",
  confirm: "Requires product confirmation",
  opportunity: "Strategic opportunity",
};

export interface Capability {
  area: string;
  scope: string;
  competitors: string;
  quickflows: string;
  status: CapabilityStatus;
}

// Quickflows baselines come from the research reports' capability tables
// (ProviderTrust §9, Medallion §10), which use internal company context and
// founder statements, not an independent product audit.
export const capabilities: Capability[] = [
  {
    area: "Data coverage",
    scope: "Official sources, credential types, state coverage",
    competitors: "Extensive source networks; ProviderTrust reports 4M+ verified profiles",
    quickflows: "License verification is documented; source and state coverage not yet benchmarked",
    status: "benchmark",
  },
  {
    area: "Verification accuracy",
    scope: "False matches, missed issues, identity resolution",
    competitors: "Identity matching marketed as a core differentiator",
    quickflows: "No comparable identity dataset established; error rates not yet measured",
    status: "benchmark",
  },
  {
    area: "Monitoring reliability",
    scope: "Refresh frequency, alert latency, evidence history",
    competitors: "Continuous monitoring is an established flagship product",
    quickflows: "Monitoring documented as a concept; refresh and alert SLAs not established",
    status: "confirm",
  },
  {
    area: "Workflow automation",
    scope: "Exception detection, follow-up, human escalation",
    competitors: "Medallion advertises AI agents for outreach, follow-up and documents",
    quickflows: "Agentic workflows are central to company direction; implementation to validate",
    status: "opportunity",
  },
  {
    area: "Enterprise readiness",
    scope: "API reliability, security, access controls, auditability",
    competitors: "Public APIs; NCQA certification advertised",
    quickflows: "Integration-led strategy; credentialing API readiness and certification not established",
    status: "confirm",
  },
  {
    area: "Commercial economics",
    scope: "Cost per correctly completed verification, implementation cost",
    competitors: "Enterprise pricing is quote-based and not public",
    quickflows: "Cost per correctly completed verification not yet modelled",
    status: "benchmark",
  },
];

export interface RoadmapPhase {
  name: string;
  steps: string[];
}

export const roadmap: RoadmapPhase[] = [
  {
    name: "Validate",
    steps: ["Confirm product capabilities", "Benchmark accuracy and coverage", "Calculate unit economics"],
  },
  {
    name: "Pilot",
    steps: [
      "Target selected buyer segments",
      "Run controlled customer assessments",
      "Measure cost and operational impact",
    ],
  },
  {
    name: "Expand",
    steps: ["Build case studies", "Deepen integrations", "Develop partner channels", "Expand qualified pipeline"],
  },
];

export interface StrategyRow {
  finding: string;
  implication: string;
  action: string;
}

export const strategy: StrategyRow[] = [
  {
    finding: "Competitors sell into different buying centers",
    implication: "Segment-specific messaging",
    action:
      "Write separate value messages and proof points for compliance, credentialing / medical staff, and payer network buyers.",
  },
  {
    finding: "Mature competitors with established track records",
    implication: "Prove quality and economics",
    action: "Measure accuracy, turnaround and cost per completed verification against each prospect's current baseline.",
  },
  {
    finding: "Strong case-study marketing",
    implication: "Run documented pilot benchmarks",
    action: "Agree baseline metrics with pilot customers before launch and seek permission to publish the results.",
  },
  {
    finding: "Existing enterprise software is already in place",
    implication: "Integration-first positioning",
    action: "Position Quickflows alongside incumbent systems and prioritise the integrations buyers already depend on.",
  },
  {
    finding: "Established partner channels",
    implication: "Explore CVO / API partnerships",
    action: "Identify CVOs, data providers and platforms where Quickflows could be embedded or resold.",
  },
  {
    finding: "Enterprise pricing is not public",
    implication: "Validate actual prices and internal unit economics",
    action:
      "Gather pricing evidence from buyer interviews and deal reviews, and model Quickflows' cost per completed outcome.",
  },
  {
    finding: "High-value customer relationships",
    implication: "Build researched target account lists",
    action:
      "Build segment-level account lists with buyer roles, likely incumbent and trigger events. Verify current vendor status directly.",
  },
];

export const positioning =
  "Quickflows should compete on the total cost of a correctly completed, audit-ready verification outcome, not simply the number of automated checks.";

export type DiscussionIcon = "segment" | "advantage" | "benchmark" | "pipeline";

export const discussionQuestions: { icon: DiscussionIcon; question: string }[] = [
  { icon: "segment", question: "Which buyer segment should Quickflows target first?" },
  { icon: "advantage", question: "What verified advantages does Quickflows have today?" },
  { icon: "benchmark", question: "Which pricing and quality benchmarks must we establish?" },
  { icon: "pipeline", question: "How should we convert the research into qualified enterprise opportunities?" },
];

/* ------------------------------------------------------------------ */
/* Sources                                                             */
/* ------------------------------------------------------------------ */

export interface SourceLink {
  label: string;
  url: string;
}

export const sources: Record<CompetitorId, SourceLink[]> = {
  providertrust: [
    { label: "Homepage", url: "https://providertrust.com/" },
    { label: "Credentialing Data", url: "https://providertrust.com/products/credentialing-data" },
    { label: "Partners", url: "https://providertrust.com/who-we-serve/partners" },
    {
      label: "Highmark case study",
      url: "https://explore.providertrust.com/case-study/how-highmark-found-undetected-exclusions-in-month-one/",
    },
  ],
  symplr: [
    { label: "Homepage", url: "https://www.symplr.com/" },
    { label: "symplr Provider", url: "https://www.symplr.com/products/symplr-provider" },
    { label: "symplr CVO", url: "https://www.symplr.com/products/symplr-cvo" },
    {
      label: "Enrollment denials case study",
      url: "https://www.symplr.com/case-studies/provider-enrollment-reduced-denials",
    },
  ],
  medallion: [
    { label: "Homepage", url: "https://www.medallion.co/" },
    { label: "Products", url: "https://www.medallion.co/products" },
    { label: "Case studies", url: "https://www.medallion.co/resources/case-studies" },
    { label: "Andros acquisition", url: "https://www.medallion.co/news/medallion-acquires-andros" },
  ],
};

export const researchReports = [
  "ProviderTrust: Deep Competitive Intelligence Research",
  "symplr: Deep Competitive Intelligence Report",
  "Medallion: Deep Competitive Intelligence Report",
];
