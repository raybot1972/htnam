
// EDIT CONTENT HERE: these local paths can be replaced with approved brand assets.
var LOGO_URL = "images/htit-brand-lockup-v2.png";
var HEADER_LOGO_URL = "images/htit-header-logo-v1.png";
var TEAM_IMG_URL = "images/htit-team.jpg";

var ETHICS_PILLARS = [
  {
    number: "Pillar 01",
    title: "Righteousness",
    icon: "balance",
    colorClass: "text-[#00d2ff] bg-[#00d2ff]/10",
    summary: "Purposeful engineering designed to serve humanity responsibly. We evaluate every algorithm for social equity, privacy sovereignty, and moral clarity.",
    detailedManifesto: "Righteous technology cannot be an afterthought. We implement mathematical safeguards that ensure automated decisions respect fundamental human dignity. We reject surveillance capitalism architectures, deceptive dark patterns, and manipulative engagement loops.",
    pledges: [
      "Zero algorithmic discrimination or bias amplification",
      "Explicit user sovereignty over all personal telemetry",
      "Transparent fallbacks to human oversight for all high-stakes automated decisions"
    ]
  },
  {
    number: "Pillar 02",
    title: "Honesty",
    icon: "visibility",
    colorClass: "text-[#ffb0c9] bg-[#e1037d]/10",
    summary: "Radical transparency across pricing, sprint velocities, real-time code commits, and project hurdles. No obfuscated jargon, no hidden line items.",
    detailedManifesto: "In software engineering, dishonesty shows up as hidden technical debt, padded vendor estimates, and obscured progress reports. We provide clients with raw, real-time telemetry into our git repositories, test runs, and cost structures.",
    pledges: [
      "Open git branch transparency with auditable commit logs",
      "Exact cost breakdowns with zero markup on 3rd-party compute",
      "Proactive early warning on architectural risks before they turn into blockers"
    ]
  },
  {
    number: "Pillar 03",
    title: "Truthfulness",
    icon: "fact_check",
    colorClass: "text-[#e4d7ff] bg-[#cbb6ff]/20",
    summary: "Objective technical advice unswayed by vendor lock-ins or hype cycles. We architect strictly what your enterprise requires to prosper.",
    detailedManifesto: "If a simple, robust SQL database solves your problem better than an over-engineered distributed mesh, we tell you that plainly. We refuse to chase AI fads or lock clients into proprietary vendor monopolies when open standards are superior.",
    pledges: [
      "Architecture unburdened by vendor sponsorship kickbacks",
      "Right-sized tech stacks built for your actual operational throughput",
      "Honest feasibility assessments on AI capabilities and limitations"
    ]
  },
  {
    number: "Pillar 04",
    title: "Doing It Right",
    icon: "verified_user",
    colorClass: "text-[#a5e7ff] bg-[#a5e7ff]/20",
    summary: "Exhaustive automated testing, zero brittle workarounds, clean modular documentation, and zero technical debt compromises. Built to last decades.",
    detailedManifesto: "Writing clean, maintainable software requires immense craft. We treat code as institutional capital. Every module is covered by rigorous end-to-end integration tests, type-safe contracts, and comprehensive architecture decision records (ADRs).",
    pledges: [
      "Minimum 95% automated test coverage with regression assertions",
      "Self-documenting TypeScript and clear domain-driven boundary schemas",
      "Clean separation of concerns designed for long-term decoupled evolution"
    ]
  }
];

var SERVICES_LIST = [
  {
    id: "full-stack",
    number: "01",
    tag: "01 • Core Engine",
    tagCategory: "Core Engine",
    title: "Full-Stack Development",
    description: "From resilient reactive frontends to distributed multi-tenant backends. High-performance asynchronous microservices engineered with clean architectures and automated regression shields.",
    detailedSpecs: [
      "Distributed microservices & modular event-driven monoliths",
      "Strict type safety from database query layers to reactive UI components",
      "High-throughput transactional integrity with sub-50ms p99 response times",
      "Zero-downtime database migrations with automated canary rollout stages"
    ],
    techStack: ["React 19", "Next.js", "Node.js", "Python", "PostgreSQL", "GraphQL"],
    icon: "code",
    colorClass: "text-[#a5e7ff]",
    badgeColor: "text-[#47d6ff] bg-[#262938]",
    span: "lg:col-span-2"
  },
  {
    id: "ai-integration",
    number: "02",
    tag: "02 • Intelligence",
    tagCategory: "Intelligence",
    title: "AI Integration",
    description: "Autonomous cognitive agents, real-time retrieval-augmented pipelines (RAG), embeddings, and custom domain-tuned models with guardrails.",
    detailedSpecs: [
      "Hybrid RAG with hybrid vector + lexical reranking",
      "Strict schema-enforced output structuring with hallucination circuit breakers",
      "Zero data leakage architecture with tenant-isolated vector spaces",
      "Cost-optimized multi-model routing between low-latency and reasoning models"
    ],
    techStack: ["LLM Agents", "Vector DBs", "LangChain", "Semantic Kernel"],
    icon: "neurology",
    colorClass: "text-[#ffb0c9]",
    badgeColor: "text-[#ffb0c9] bg-[#262938]"
  },
  {
    id: "ai-assisted-dev",
    number: "03",
    tag: "03 • Velocity",
    tagCategory: "Velocity",
    title: "AI-Assisted Dev",
    description: "Accelerated agile delivery combining machine-generated scaffolding with rigorous human peer validation, cutting lead times in half.",
    detailedSpecs: [
      "AI-accelerated boilerplate scaffolding with human-verified PR audits",
      "Automated test suite synthesis and fuzz testing generators",
      "Synthetic test data fixtures mimicking complex edge cases",
      "Developer productivity telemetry with verified defect rate tracking"
    ],
    techStack: ["Rapid Sprints", "Human-in-Loop", "Automated Fuzzing"],
    icon: "speed",
    colorClass: "text-[#e4d7ff]",
    badgeColor: "text-[#e4d7ff] bg-[#262938]"
  },
  {
    id: "system-integration",
    number: "04",
    tag: "04 • Synergy",
    tagCategory: "Synergy",
    title: "System Integration",
    description: "Secure enterprise bridges, asynchronous event queues, robust ETL protocols, and micro-orchestration across legacy and cloud apps.",
    detailedSpecs: [
      "Guaranteed exactly-once event streaming with dead-letter queue rehydration",
      "Legacy SOAP and mainframe connectors to modern cloud-native gRPC/REST",
      "Bidirectional data pipeline synchronization with conflict-free replication",
      "Zero-loss transactional outbox patterns across distributed data stores"
    ],
    techStack: ["Kafka", "REST / gRPC", "ETL", "RabbitMQ"],
    icon: "hub",
    colorClass: "text-[#00d2ff]",
    badgeColor: "text-[#a5e7ff] bg-[#262938]"
  },
  {
    id: "automated-environments",
    number: "05",
    tag: "05 • DevOps",
    tagCategory: "DevOps",
    title: "Automated Environments",
    description: "Zero-friction CI/CD deployment pipelines, automated canary releases, Infrastructure as Code, and resilient self-healing serverless clusters.",
    detailedSpecs: [
      "100% reproducible Infrastructure as Code with Terraform and OpenTofu",
      "Multi-region failover automation with continuous health probe checks",
      "GitOps-driven Kubernetes deployments with automated rollbacks on error",
      "Automated secrets management and ephemeral preview environments"
    ],
    techStack: ["Terraform", "Kubernetes", "AWS/GCP", "Docker", "ArgoCD"],
    icon: "settings_suggest",
    colorClass: "text-[#ffb0c9]",
    badgeColor: "text-[#ffb0c9] bg-[#262938]"
  },
  {
    id: "new-system-dev",
    number: "06",
    tag: "06 • Greenfield",
    tagCategory: "Greenfield",
    title: "New System Dev",
    description: "Zero-to-one product development: conceptual validation, interactive prototyping, and rapid MVP maturation into enterprise flagships.",
    detailedSpecs: [
      "From technical whitepaper to functional production MVP in 6–8 weeks",
      "Domain-driven design (DDD) schemas built for decade-long scalability",
      "Strict non-functional requirement verification (security, latency, scalability)",
      "Turnkey handover with full engineering ownership transfer and training"
    ],
    techStack: ["0-to-1 Build", "Product Scope", "Scalable Arch"],
    icon: "rocket",
    colorClass: "text-[#a5e7ff]",
    badgeColor: "text-[#a5e7ff] bg-[#262938]"
  },
  {
    id: "maintenance-improvement",
    number: "07",
    tag: "07 • Evolution",
    tagCategory: "Evolution",
    title: "Maintenance & Improvement",
    description: "Proactive system health sweeps, database query indexing, memory leak remedies, 24/7 SLA escalation desks, and systematic monolith de-coupling.",
    detailedSpecs: [
      "Continuous runtime profiling and database query optimization",
      "Sub-15 minute P1 emergency response with dedicated senior engineering leads",
      "Legacy code modernization with incremental strangler-fig refactoring",
      "Quarterly technical debt retirement audits and security vulnerability patching"
    ],
    techStack: ["SLA Desks", "APM Telemetry", "Refactoring", "Query Tuning"],
    icon: "build_circle",
    colorClass: "text-[#00d2ff]",
    badgeColor: "text-[#00d2ff] bg-[#262938]",
    span: "lg:col-span-2",
    metrics: { label: "Response Time", value: "< 15 min" }
  }
];

var PRODUCTS_LIST = [
  {
    id: "pulseflow-ai",
    tag: "Active Suite v2.4",
    status: "Production Ready",
    title: "PulseFlow AI",
    shortDesc: "Enterprise workflow orchestration framework embedding mandatory human-in-the-loop audit checkpoints for mission-critical decisions.",
    fullDesc: "PulseFlow AI is our proprietary orchestration framework engineered for regulated industries. Rather than allowing generative models to act unchecked, PulseFlow enforces strict confidence thresholding, semantic boundary checking, and mandatory human sign-off for critical financial, legal, or clinical decisions.",
    gradient: "from-[#a5e7ff] to-[#00d2ff]",
    accentColor: "#00d2ff",
    keyMetricLabel: "Decision Latency",
    keyMetricValue: "14.2 ms",
    secondaryMetricLabel: "Human Validation Accuracy",
    secondaryMetricValue: "99.98%",
    barWidth: "80%",
    badgeFooter: "Zero-hallucination guard",
    specs: {
      latency: "14.2 ms (p95)",
      throughput: "45,000 evaluations/min",
      encryption: "AES-256-GCM + hardware enclave",
      compliance: "SOC2 Type II, HIPAA, EU AI Act Ready"
    },
    features: [
      "Automated confidence scoring with configurable human escalation gates",
      "Cryptographically sealed audit trail for every automated suggestion",
      "Multi-LLM consensus arbitration to detect and nullify hallucinations",
      "Zero-latency streaming interface with interactive review desks"
    ]
  },
  {
    id: "nexusbridge",
    tag: "Sync Engine v3.1",
    status: "Ultra Low Latency",
    title: "NexusBridge",
    shortDesc: "Secure enterprise data connector delivering ultra-low-latency real-time bidirectional synchronization across disparate software silos.",
    fullDesc: "NexusBridge breaks down enterprise data silos without requiring costly database migrations. Operating over custom streaming protocols, it synchronizes legacy ERPs, relational databases, cloud microservices, and CRM platforms with near-zero latency and guaranteed packet delivery.",
    gradient: "from-[#ffb0c9] to-[#e1037d]",
    accentColor: "#e1037d",
    keyMetricLabel: "Throughput Capacity",
    keyMetricValue: "1.2M msgs/sec",
    secondaryMetricLabel: "Packet Loss",
    secondaryMetricValue: "0.000%",
    barWidth: "91%",
    badgeFooter: "TLS 1.3 + e2e Encrypted",
    specs: {
      latency: "1.8 ms end-to-end",
      throughput: "1,200,000 msgs/sec per cluster node",
      encryption: "mTLS 1.3 with automated certificate rotation",
      compliance: "FIPS 140-3, PCI-DSS Level 1 compliant"
    },
    features: [
      "Bidirectional delta synchronization with distributed conflict resolution",
      "Zero-overhead CDC (Change Data Capture) connectors for Postgres, Oracle & Mongo",
      "Automatic queue backpressure buffering during destination outages",
      "Live visual node health map with packet telemetry"
    ]
  },
  {
    id: "trustaudit-os",
    tag: "Governance Platform",
    status: "Continuous Audit",
    title: "TrustAudit OS",
    shortDesc: "Real-time compliance, license verification, automated vulnerability scoring, and auditable code telemetry dashboard for executive clarity.",
    fullDesc: "TrustAudit OS gives executive teams, security officers, and compliance auditors continuous, unshakeable visibility into the software supply chain. It monitors dependencies, license exposures, secret leaks, and security compliance in real time with zero fluff.",
    gradient: "from-[#e4d7ff] to-[#00d2ff]",
    accentColor: "#cbb6ff",
    keyMetricLabel: "Compliance Metric",
    keyMetricValue: "100% Passed",
    secondaryMetricLabel: "Continuous Telemetry",
    secondaryMetricValue: "SOC2 • HIPAA • ISO",
    barWidth: "100%",
    badgeFooter: "Immutable audit ledger",
    specs: {
      latency: "Real-time stream evaluation",
      throughput: "500+ repositories analyzed concurrently",
      encryption: "SHA-256 Merkle tree verification",
      compliance: "ISO/IEC 27001, SOC2, FedRAMP High Ready"
    },
    features: [
      "Automated SBOM (Software Bill of Materials) generation with vulnerability scoring",
      "Cryptographic ledger recording all source code modifications and author sign-offs",
      "Continuous license compliance scanner preventing GPL/AGPL contagion risks",
      "One-click audit export for SOC2 and ISO 27001 compliance auditors"
    ]
  }
];

var ACTIVE_PROJECTS = [
  {
    id: "project-alpha",
    domain: "LOGISTICS INFRASTRUCTURE",
    domainCategory: "logistics",
    title: "Project Alpha",
    sprint: "Sprint 18 / 20",
    description: "Autonomous Logistics Dispatch Engine capable of route re-allocation under adverse supply chain shocks in sub-second timelines.",
    milestone: "Final Load Testing",
    progressPercent: 85,
    nextCheckpoint: "Stress Sim",
    checkpointDate: "Oct 28",
    badgeColor: "text-[#a5e7ff] bg-[#262938]",
    barColor: "bg-[#00d2ff]",
    leadArchitect: "Viktor Chen, Senior Distributed Systems Lead",
    recentCommits: [
      { hash: "8f42d1", msg: "Implement genetic route re-allocation under deadhead constraints", author: "V. Chen", time: "2h ago" },
      { hash: "2c79a0", msg: "Pass 50k concurrent simulated truck telemetry pings at 4ms latency", author: "E. Morales", time: "5h ago" },
      { hash: "b9e314", msg: "Integrate weather storm alert webhooks into graph topology", author: "J. Doe", time: "1d ago" }
    ]
  },
  {
    id: "project-medconnect",
    domain: "HEALTHCARE • COMPLIANCE",
    domainCategory: "healthcare",
    title: "Project MedConnect",
    sprint: "Sprint 09 / 16",
    description: "HIPAA-Compliant Telehealth AI Copilot providing live practitioner ambient charting with strict zero-retention privacy fences.",
    milestone: "Integration Sprint",
    progressPercent: 60,
    nextCheckpoint: "EHR Mock API",
    checkpointDate: "Nov 04",
    badgeColor: "text-[#ffb0c9] bg-[#262938]",
    barColor: "bg-[#e1037d]",
    leadArchitect: "Dr. Alicia Vance, Healthcare AI Systems Fellow",
    recentCommits: [
      { hash: "a310bb", msg: "Enforce cryptographically scrubbed audio transcript buffer flush", author: "A. Vance", time: "4h ago" },
      { hash: "7d14fc", msg: "Pass FHIR release 4 clinical ontology mapping assertions", author: "S. Lindqvist", time: "9h ago" },
      { hash: "991e23", msg: "Zero-retention verification probe validated by independent audit", author: "T. Weber", time: "2d ago" }
    ]
  },
  {
    id: "project-finshield",
    domain: "FINTECH • SECURITY",
    domainCategory: "fintech",
    title: "Project FinShield",
    sprint: "Sprint 22 / 24",
    description: "High-throughput real-time fraud signature detection combined with cross-institutional distributed ledger state verification.",
    milestone: "External Security Audit",
    progressPercent: 92,
    nextCheckpoint: "Mainnet Freeze",
    checkpointDate: "Nov 12",
    badgeColor: "text-[#e4d7ff] bg-[#262938]",
    barColor: "bg-[#cbb6ff]",
    leadArchitect: "Marcus Thorne, Principal Cryptographer",
    recentCommits: [
      { hash: "ff8301", msg: "Complete formal mathematical verification of state transition proofs", author: "M. Thorne", time: "1h ago" },
      { hash: "44e299", msg: "Zero-knowledge proof generation optimized to 38ms on Apple Silicon", author: "N. Patel", time: "8h ago" },
      { hash: "119ca8", msg: "Security audit remediation: patch nonces in inter-bank settle handler", author: "M. Thorne", time: "1d ago" }
    ]
  }
];

var CLIENT_STORIES = [
  {
    id: "omnilogistics",
    quote: "“HTIT delivered our mission-critical platform on schedule with unmatched code clarity and integrity. They never cut corners.”",
    author: "Elena Rostova",
    role: "CTO at OmniLogistics",
    company: "OmniLogistics Global",
    initials: "ER",
    colorClass: "text-[#a5e7ff] bg-[#00d2ff]/10",
    rating: 5,
    fullStory: {
      challenge: "OmniLogistics faced massive route inefficiencies and delayed dispatch decisions across 12 European freight corridors during geopolitical disruptions.",
      architecture: "HTIT designed an asynchronous event-driven dispatch engine with NexusBridge micro-syncing legacy AS400 warehouse databases to modern cloud workers.",
      impact: "Reduced rerouting decision lag from 24 minutes to 850 milliseconds. Cut fuel waste by 18.4% across 4,200 active vehicles.",
      savedCost: "$420,000 / year in automated dispatch optimization",
      timeToDeploy: "14 weeks from kickoff to production cutover"
    }
  },
  {
    id: "apexhealth",
    quote: "“Their honesty on architecture saved us $200k in unnecessary cloud overhead. They advised against shiny distractions and built pure value.”",
    author: "Marcus Vance",
    role: "VP Engineering at ApexHealth",
    company: "ApexHealth Systems",
    initials: "MV",
    colorClass: "text-[#ffb0c9] bg-[#e1037d]/10",
    rating: 5,
    fullStory: {
      challenge: "An external consulting firm recommended a complex $350k multi-cluster Kubernetes deployment with 7 AI vendor dependencies that ApexHealth's team couldn't maintain.",
      architecture: "HTIT performed an honest architectural audit, stripped away superfluous vendor lock-ins, and built a lean, HIPAA-compliant event pipeline on right-sized serverless compute.",
      impact: "Reduced infrastructure burn by 62% while improving patient intake chart rendering speed by 4x. Zero maintenance headaches.",
      savedCost: "$200,000 upfront savings + $8,500 monthly cloud reduction",
      timeToDeploy: "8 weeks with turnkey team training"
    }
  },
  {
    id: "novaretail",
    quote: "“True human partnership in an era of automated indifference. Working with HTIT feels like having an honest in-house team of world-class experts.”",
    author: "Sarah Jenkins",
    role: "Founder at NovaRetail",
    company: "NovaRetail Group",
    initials: "SJ",
    colorClass: "text-[#e4d7ff] bg-[#cbb6ff]/20",
    rating: 5,
    fullStory: {
      challenge: "NovaRetail needed real-time inventory synchronization across 180 brick-and-mortar storefronts and high-traffic flash-sale web traffic without inventory double-sells.",
      architecture: "HTIT deployed high-throughput transactional outbox queues with optimistic locking and distributed cache invalidation.",
      impact: "Over Black Friday weekend, handled 1.8M concurrent transactions with 0.00% inventory oversells and zero outages.",
      savedCost: "Eliminated $140,000 in customer chargebacks and lost orders",
      timeToDeploy: "10 weeks from initial design review"
    }
  }
];

// Content saved by the cPanel admin dashboard is injected by index.php before
// this file loads. The original objects above remain safe defaults and retain
// design-only properties that are intentionally not exposed in the CMS.
function htitCmsMerge(base, override) {
  if (!override || typeof override !== "object" || Array.isArray(override)) return base;
  var merged = Object.assign({}, base);
  Object.keys(override).forEach(function (key) {
    if (
      merged[key] && typeof merged[key] === "object" && !Array.isArray(merged[key]) &&
      override[key] && typeof override[key] === "object" && !Array.isArray(override[key])
    ) {
      merged[key] = htitCmsMerge(merged[key], override[key]);
    } else {
      merged[key] = override[key];
    }
  });
  return merged;
}

function htitCmsCollection(defaults, overrides, keyName) {
  if (!Array.isArray(overrides)) return defaults;
  return defaults.map(function (item) {
    var match = overrides.find(function (candidate) {
      return candidate && candidate[keyName] === item[keyName];
    });
    return match ? htitCmsMerge(item, match) : item;
  });
}

var HTIT_CMS = window.HTIT_CMS_CONTENT || {};
var HTIT_ASSETS = HTIT_CMS.assets || {};
LOGO_URL = HTIT_ASSETS.brandLogo || LOGO_URL;
HEADER_LOGO_URL = HTIT_ASSETS.headerLogo || HEADER_LOGO_URL;
TEAM_IMG_URL = HTIT_ASSETS.teamImage || TEAM_IMG_URL;
SERVICES_LIST = htitCmsCollection(SERVICES_LIST, HTIT_CMS.services, "id");
PRODUCTS_LIST = htitCmsCollection(PRODUCTS_LIST, HTIT_CMS.products, "id");
ACTIVE_PROJECTS = htitCmsCollection(ACTIVE_PROJECTS, HTIT_CMS.projects, "id");
CLIENT_STORIES = htitCmsCollection(
  CLIENT_STORIES,
  Array.isArray(HTIT_CMS.stories)
    ? HTIT_CMS.stories.map(function (story) {
        return htitCmsMerge(story, {
          fullStory: {
            challenge: story.challenge,
            impact: story.impact
          }
        });
      })
    : null,
  "id"
);
ETHICS_PILLARS = htitCmsCollection(ETHICS_PILLARS, HTIT_CMS.values, "number");
