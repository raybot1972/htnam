const SCREENS = [
  ["about", "About"],
  ["services", "Services"],
  ["products", "Products"],
  ["active-projects", "Active Projects"],
  ["client-stories", "Client Stories"],
  ["our-values", "Our Values"]
];

const CMS_CONTENT = window.HTIT_CMS_CONTENT || {};
const HOME_CONTENT = Object.assign({
  badge: "Human-Centered Tech Innovation & Integrity",
  headlineBefore: "Human-Centred",
  headlineAccent: "Technology",
  headlineAfter: ", Built the Right Way.",
  intro: "We are an engineering and AI solutions partner founded on righteousness, radical honesty, and uncompromising craftsmanship. Delivering high-impact software through authentic human connection.",
  primaryCta: "Consult with Our Team",
  secondaryCta: "Explore Our Work",
  teamTitle: "The HTIT Team",
  teamSubtitle: "Finance • Visualization • Development • Architecture",
  teamStatus: "Available for Collaboration",
  teamMembers: [
    { name: "Manny", role: "Back Office & Finance", image: "images/team/manny-studio-v2.jpg" },
    { name: "Mondo", role: "Visualization & Development", image: "images/team/mondo-studio-v2.jpg" },
    { name: "JoJo", role: "Development & Automation", image: "images/team/jojo-studio-v2.jpg" },
    { name: "Raymond", role: "Software Solutions Architect", image: "images/team/raymond-studio-v2.jpg" }
  ],
  metrics: [
    { value: "100%", label: "Auditable Code" },
    { value: "0 hrs", label: "Hidden Debt" },
    { value: "99.9%", label: "Uptime Reliability" }
  ]
}, CMS_CONTENT.home || {});

const FOOTER_CONTENT = Object.assign({
  summary: "Pioneering human-centric cognitive architecture, ethical enterprise systems, and cybernetic precision. We bridge high-velocity computation with moral clarity.",
  pledge: "All algorithmic systems deployed under HTIT stewardship adhere strictly to auditable transparency, user agency, and humane technical safety benchmarks.",
  primaryOffice: "Silicon Gateway",
  primaryAddress: "Cybernetic Nexus Tower, Ste 400\nSilicon Gateway, CA 94025",
  secondaryOffice: "EMEA Innovation Lab",
  secondaryAddress: "Koningin Wilhelminaplein\nAmsterdam, Netherlands",
  email: "telemetry@htit-global.internal",
  phone: "+1 (800) 484-8324"
}, CMS_CONTENT.footer || {});

function htmlLines(value) {
  return esc(value).replaceAll("\n", "<br />");
}

const SERVICE_FILTERS = [
  ["all", "All Disciplines"],
  ["Core Engine", "Core Engine"],
  ["Intelligence", "AI & Intelligence"],
  ["Velocity", "Velocity"],
  ["Synergy", "Integration"],
  ["DevOps", "DevOps"],
  ["Evolution", "Maintenance & SLA"]
];

const PROJECT_FILTERS = [
  ["all", "All Active Pipelines"],
  ["logistics", "Logistics Infrastructure"],
  ["healthcare", "Healthcare & Compliance"],
  ["fintech", "Fintech & Security"]
];

const SLA = {
  tier1: {
    name: "Tier 1: Mission-Critical Enterprise",
    time: "< 15 minutes",
    availability: "24/7/365 Dedicated Phone & Chat Escalation",
    team: "Direct access to Named Principal Engineer",
    guarantee: "100% SLA credit for every 10 min past target",
    monitoring: "Sub-second synthetic APM probes & automated failover"
  },
  tier2: {
    name: "Tier 2: Business-Critical Core",
    time: "< 45 minutes",
    availability: "24/7 Priority Desk with Weekend On-Call",
    team: "Senior Systems Engineer assigned",
    guarantee: "50% SLA credit on missed response",
    monitoring: "Continuous heartbeat logs & query latency traps"
  },
  tier3: {
    name: "Tier 3: Standard Operational Support",
    time: "< 2 hours",
    availability: "Standard Business Hours + Automated Alerts",
    team: "Engineering Collective Rotational Lead",
    guarantee: "Fast turnaround with root-cause post-mortem",
    monitoring: "Standard cloud metric telemetry"
  }
};

const ESTIMATES = {
  mvp: {
    sprints: "4 – 6 Sprints (8–12 Weeks)",
    team: "1 Principal Architect + 2 Senior Full-Stack Engineers",
    deliverable: "Production-ready MVP with 95% test coverage and CI/CD pipelines",
    notes: "Lean scope focused strictly on core user value."
  },
  growth: {
    sprints: "8 – 12 Sprints (16–24 Weeks)",
    team: "1 Systems Architect + 3 Senior Engineers + 1 AI Ethicist",
    deliverable: "High-scale distributed architecture, event queues, and multi-tenant security",
    notes: "Eliminates legacy bottlenecks and sets up decade-long scalability."
  },
  enterprise: {
    sprints: "12 – 18 Sprints (24–36 Weeks)",
    team: "Dedicated Squad: 2 Architects + 4 Senior Engineers + 24/7 Escalation Desk",
    deliverable: "SOC2 / ISO 27001 validated mission-critical platform with failover redundancy",
    notes: "Strict enterprise compliance, cryptographic audit trails, and zero-downtime cutover."
  }
};

const FOCUS_OPTIONS = [
  "New System Development",
  "Full-Stack Development",
  "AI Integration & Autonomous Agents",
  "New System Dev (0-to-1 Greenfield)",
  "Enterprise System-to-System Integration",
  "Automated DevOps & CI/CD Infrastructure",
  "Architecture Audit & Cloud Simplification",
  "Maintenance & 24/7 SLA Support"
];

const LEADS = [
  ["Viktor Chen, Distributed Systems", "Viktor Chen (Senior Distributed Systems Lead)"],
  ["Dr. Alicia Vance, Healthcare AI", "Dr. Alicia Vance (Healthcare & Regulated AI Fellow)"],
  ["Marcus Thorne, Principal Cryptographer", "Marcus Thorne (Principal Cryptographer & Security)"]
];

const SLOTS = [
  "Tomorrow, 10:00 AM EST",
  "Tomorrow, 2:00 PM EST",
  "Thursday, 11:30 AM EST",
  "Friday, 3:00 PM EST"
];

const TONE = {
  Righteousness: "tone-cyan",
  Honesty: "tone-pink",
  Truthfulness: "tone-lilac",
  "Doing It Right": "tone-ice"
};

const STORY_TONE = {
  omnilogistics: "tone-cyan",
  apexhealth: "tone-pink",
  novaretail: "tone-lilac"
};

const state = {
  screen: "about",
  mobileOpen: false,
  productId: null,
  trustOpen: false,
  trustTab: "security",
  advisoryOpen: false,
  advisoryEmail: "",
  advisorySubmitted: false,
  serviceCategory: "all",
  activeServiceId: "full-stack",
  slaTier: "tier1",
  productTab: "nexus",
  throughput: 1240500,
  latency: 1.82,
  packets: 48291000,
  pfStatus: "pending",
  pfConfidence: 88.4,
  auditLog: [
    "Prompt vector embedded in tenant enclave [isolated]",
    "Rule validation passed: PCI-DSS tokenization invariant",
    "Confidence score calculated: 88.4% (Threshold: 90%)",
    "Mandatory Human-in-the-loop gate triggered"
  ],
  scanning: false,
  projectFilter: "all",
  projectId: ACTIVE_PROJECTS[0].id,
  storyId: CLIENT_STORIES[0].id,
  monthlySpend: 35000,
  serviceCount: 18,
  ethics: {
    humanInLoop: true,
    dataRetention: false,
    openArchitecture: true,
    testCoverage: true
  },
  consult: {
    projectType: "New System Development",
    complexity: "growth",
    lead: LEADS[0][0],
    name: "",
    email: "",
    company: "",
    notes: "",
    date: SLOTS[0],
    booked: false
  }
};

const headerEl = document.getElementById("header");
const mainEl = document.getElementById("main");
const footerEl = document.getElementById("footer");
const modalEl = document.getElementById("modals");

let telemetryTimer = null;
let scanTimer = null;

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function icon(name, size = 22) {
  return `<span class="ms" style="font-size:${size}px">${name}</span>`;
}

function stars() {
  return Array.from({ length: 5 }, () => `<span class="ms fill" style="font-size:18px;color:var(--cyan)">star</span>`).join("");
}

function chips(list) {
  return `<div class="chips">${list.map((item) => `<span class="chip">${esc(item)}</span>`).join("")}</div>`;
}

function barColor(token) {
  if (String(token).includes("e1037d")) return "#e1037d";
  if (String(token).includes("cbb6ff")) return "#cbb6ff";
  return "#00d2ff";
}

function screenFromHash() {
  const hash = location.hash.replace("#", "");
  return SCREENS.some(([id]) => id === hash) || hash === "consult-with-us" ? hash : "about";
}

function navigate(screen) {
  state.mobileOpen = false;
  state.screen = screen;
  if (location.hash !== `#${screen}`) {
    location.hash = screen;
    return;
  }
  paint(true);
}

function openConsult(projectType) {
  if (projectType) state.consult.projectType = projectType;
  state.consult.booked = false;
  navigate("consult-with-us");
}

function ethicsScore() {
  const answers = state.ethics;
  let score = 0;
  if (answers.humanInLoop) score += 25;
  if (!answers.dataRetention) score += 25;
  if (answers.openArchitecture) score += 25;
  if (answers.testCoverage) score += 25;
  return score;
}

function wasteFigures() {
  return {
    annual: Math.round(state.monthlySpend * 12 * 0.38),
    latency: Math.min(85, Math.round(state.serviceCount * 3.5 + 20))
  };
}

function filteredServices() {
  if (state.serviceCategory === "all") return SERVICES_LIST;
  return SERVICES_LIST.filter((service) => service.tagCategory === state.serviceCategory);
}

function activeService() {
  return SERVICES_LIST.find((service) => service.id === state.activeServiceId) || SERVICES_LIST[0];
}

function filteredProjects() {
  if (state.projectFilter === "all") return ACTIVE_PROJECTS;
  return ACTIVE_PROJECTS.filter((project) => project.domainCategory === state.projectFilter);
}

function selectedProject() {
  return ACTIVE_PROJECTS.find((project) => project.id === state.projectId) || ACTIVE_PROJECTS[0];
}

function selectedStory() {
  return CLIENT_STORIES.find((story) => story.id === state.storyId) || CLIENT_STORIES[0];
}

function selectedProduct() {
  return PRODUCTS_LIST.find((product) => product.id === state.productId) || null;
}

function renderHeader() {
  const nav = SCREENS.map(([id, label]) => {
    const on = state.screen === id ? "on" : "";
    return `<button class="${on}" data-nav="${id}">${label}</button>`;
  }).join("");
  const drawer = state.mobileOpen ? "open" : "";
  headerEl.innerHTML = `
    <div class="wrap head">
      <div class="row">
        <button class="brand" data-nav="about" aria-label="HTIT Homepage">
          <span class="brand-crop"><img src="${HEADER_LOGO_URL}" alt="Human Touch" /></span>
        </button>
      </div>
      <nav class="nav" aria-label="Main Navigation">${nav}</nav>
      <div class="row">
        <button class="consult-btn" data-nav="consult-with-us"><span>${esc((CMS_CONTENT.site || {}).consultLabel || "Consult with Us")}</span></button>
        <button class="icon-btn" data-action="advisory" title="Open Direct Advisory Desk" aria-label="Direct Advisory Desk">${icon("person", 19)}</button>
        <button class="menu-btn" data-action="menu" aria-label="Toggle navigation menu">${icon(state.mobileOpen ? "close" : "menu", 24)}</button>
      </div>
    </div>
    <div class="drawer ${drawer}">
      <div class="wrap stack">
        ${SCREENS.map(([id, label]) => `<button class="${state.screen === id ? "on" : ""}" data-nav="${id}">${label}</button>`).join("")}
        <button class="btn btn-primary" data-nav="consult-with-us">Schedule Technical Consultation</button>
      </div>
    </div>
  `;
}

function renderFooter() {
  const links = [
    ["about", "About HTIT"],
    ["services", "Core Services"],
    ["products", "Software Products"],
    ["active-projects", "Active Projects"],
    ["client-stories", "Client Stories"],
    ["our-values", "Our Values"]
  ];
  footerEl.innerHTML = `
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <div class="footer-brand-crop">
            <img src="${LOGO_URL}" alt="Human Touch Information Technology — Where People Meet Technology" />
          </div>
          <p class="muted" style="max-width:28rem">${esc(FOOTER_CONTENT.summary)}</p>
          <div class="pledge">
            <span class="kicker">${icon("verified", 15)} Corporate Integrity Pledge</span>
            <p>${esc(FOOTER_CONTENT.pledge)}</p>
          </div>
        </div>
        <div class="stack">
          <span class="kicker">Navigation</span>
          ${links.map(([id, label]) => `<button data-nav="${id}">${label}</button>`).join("")}
        </div>
        <div class="stack">
          <span class="kicker">Operations & Hubs</span>
          <p class="muted"><strong style="color:white">${esc(FOOTER_CONTENT.primaryOffice)}</strong><br />${htmlLines(FOOTER_CONTENT.primaryAddress)}</p>
          <p class="muted"><strong style="color:white">${esc(FOOTER_CONTENT.secondaryOffice)}</strong><br />${htmlLines(FOOTER_CONTENT.secondaryAddress)}</p>
          <a class="mono" href="mailto:${esc(FOOTER_CONTENT.email)}">${esc(FOOTER_CONTENT.email)}</a>
          <span class="mono faint">${esc(FOOTER_CONTENT.phone)}</span>
        </div>
        <div class="stack">
          <span class="kicker">Verification</span>
          <span class="mono faint"><i class="pulse" style="display:inline-block;margin-right:6px"></i>Systems Operational</span>
          <span class="mono faint"><i class="pulse" style="display:inline-block;margin-right:6px;background:var(--magenta)"></i>ISO/IEC 27001 Certified</span>
          <span class="mono faint"><i class="pulse" style="display:inline-block;margin-right:6px;background:var(--lilac-2)"></i>Ethical AI Standard Compliant</span>
          <button class="btn btn-sm" data-action="advisory">Direct Advisory Desk ${icon("arrow_forward", 14)}</button>
        </div>
      </div>
      <div class="legal">
        <p>© ${new Date().getFullYear()} Human-Touch Information Technology (HTIT) Inc. All rights reserved.</p>
        <div>
          <button data-action="trust" data-tab="privacy">Privacy Framework</button>
          <button data-action="trust" data-tab="terms">Terms of Engagement</button>
          <button data-action="trust" data-tab="security">Security & Trust Center</button>
        </div>
      </div>
    </div>
  `;
}

function homeProduct(product) {
  return `
    <article class="card">
      <div class="topbar" style="background:linear-gradient(90deg,${product.accentColor},#e1037d)"></div>
      <div class="between" style="align-items:center;margin-bottom:12px">
        <span class="tag">${esc(product.tag)}</span>
        <span class="mono" style="color:var(--cyan);font-size:12px"><i class="pulse" style="display:inline-block;margin-right:6px"></i>${esc(product.status)}</span>
      </div>
      <h3>${esc(product.title)}</h3>
      <p class="muted">${esc(product.shortDesc)}</p>
      <div class="mini-stat" style="margin:16px 0">
        <div class="between" style="align-items:center"><span class="mono faint">${esc(product.keyMetricLabel)}</span><b class="mono" style="color:var(--cyan)">${esc(product.keyMetricValue)}</b></div>
        <div class="bar slim" style="margin:8px 0"><i style="width:${esc(product.barWidth)}"></i></div>
        <div class="between" style="align-items:center"><span class="mono faint">${esc(product.secondaryMetricLabel)}</span><b class="mono">${esc(product.secondaryMetricValue)}</b></div>
      </div>
      <div class="between" style="align-items:center;border-top:1px solid rgba(60,73,78,.35);padding-top:12px">
        <span class="mono faint">${esc(product.badgeFooter)}</span>
        <button class="linkish" data-action="product" data-id="${product.id}">Deep Dive ${icon("north_east", 16)}</button>
      </div>
    </article>
  `;
}

function renderHome() {
  return `
    <section class="wrap hero">
      <div>
        <div class="hero-brand-crop">
          <img src="${LOGO_URL}" alt="Human Touch Information Technology — Where People Meet Technology" />
        </div>
        <div class="badge" style="margin-top:18px"><span class="dot"></span> ${esc(HOME_CONTENT.badge)}</div>
        <h1 style="margin:18px 0 12px">${esc(HOME_CONTENT.headlineBefore)} <span class="grad">${esc(HOME_CONTENT.headlineAccent)}</span>${esc(HOME_CONTENT.headlineAfter)}</h1>
        <p class="lede">${esc(HOME_CONTENT.intro)}</p>
        <div class="wrap-row" style="margin-top:18px">
          <button class="btn btn-primary" data-nav="consult-with-us">${esc(HOME_CONTENT.primaryCta)} ${icon("arrow_forward", 18)}</button>
          <button class="btn" data-nav="services">${icon("terminal", 18)} ${esc(HOME_CONTENT.secondaryCta)}</button>
        </div>
        <div class="metrics">
          ${(Array.isArray(HOME_CONTENT.metrics) ? HOME_CONTENT.metrics : []).slice(0, 3).map((metric, index) => `<div class="metric ${["c", "p", "l"][index] || "c"}"><b>${esc(metric.value)}</b><span>${esc(metric.label)}</span></div>`).join("")}
        </div>
      </div>
      <div class="photo">
        <div class="photo-frame">
          <div class="team-mosaic" aria-label="HTIT team">
            ${(Array.isArray(HOME_CONTENT.teamMembers) && HOME_CONTENT.teamMembers.length ? HOME_CONTENT.teamMembers : [{ name: HOME_CONTENT.teamTitle, role: HOME_CONTENT.teamSubtitle, image: TEAM_IMG_URL }]).slice(0, 4).map((member) => `
              <article class="team-person">
                <img src="${esc(member.image || TEAM_IMG_URL)}" alt="${esc(member.name || "HTIT team member")}" />
                <div class="team-person-copy">
                  <strong>${esc(member.name || "HTIT Team")}</strong>
                  <span>${esc(member.role || "")}</span>
                </div>
              </article>
            `).join("")}
          </div>
          <div class="photo-badge">
            <div class="row">
              <div class="icon-round tone-cyan">${icon("groups", 20)}</div>
              <div>
                <strong>${esc(HOME_CONTENT.teamTitle)}</strong>
                <span class="mono faint" style="display:block;font-size:12px">${esc(HOME_CONTENT.teamSubtitle)}</span>
              </div>
            </div>
            <span class="tag">${icon("verified", 15)} ${esc(HOME_CONTENT.teamStatus)}</span>
          </div>
        </div>
      </div>
    </section>
    <div class="wrap ribbon">
      <b style="color:var(--text)">${icon("architecture", 20)} <span style="color:var(--cyan)">100% Transparent Architecture</span></b>
      <b style="color:var(--text)">${icon("psychology", 20)} <span style="color:var(--pink)">Ethical AI Systems</span></b>
      <b style="color:var(--text)">${icon("rocket_launch", 20)} <span style="color:var(--cyan-2)">End-to-End Delivery</span></b>
    </div>
    <section class="band" style="margin-top:48px">
      <div class="wrap">
        <div class="between" style="margin-bottom:28px">
          <div><span class="kicker pink">Foundational Ethics</span><h2>Built on Uncompromising Principles</h2></div>
          <p class="muted" style="max-width:28rem">Doing things the right way isn't just our policy — it is our foundational computational architecture and everyday posture.</p>
        </div>
        <div class="cards-4">
          ${ETHICS_PILLARS.map((pillar) => `
            <article class="card clickable" data-nav="our-values">
              <div class="icon-box ${TONE[pillar.title] || "tone-cyan"}">${icon(pillar.icon, 26)}</div>
              <span class="kicker" style="display:block;margin-top:14px">${esc(pillar.number)}</span>
              <h3 style="margin:6px 0">${esc(pillar.title)}</h3>
              <p class="muted" style="font-size:14px">${esc(pillar.summary)}</p>
              <div class="more">Read manifesto ${icon("arrow_forward", 14)}</div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
    <section class="wrap section">
      <div class="between" style="margin-bottom:28px">
        <div>
          <span class="kicker">Full Spectrum Execution</span>
          <h2>Comprehensive Technical Capabilities</h2>
          <p class="muted">Bridging deep algorithmic intelligence and human empathy through robust software engineering.</p>
        </div>
        <button class="linkish" data-nav="services">View Interactive Tech Stack ${icon("arrow_forward", 18)}</button>
      </div>
      <div class="bento">
        ${SERVICES_LIST.map((service) => `
          <article class="card clickable ${service.span ? "span-2" : ""}" data-nav="services">
            <div class="between" style="align-items:center">
              <div class="icon-box">${icon(service.icon, 28)}</div>
              <span class="tag">${esc(service.tag)}</span>
            </div>
            <h3 style="margin:14px 0 8px">${esc(service.title)}</h3>
            <p class="muted" style="font-size:14px">${esc(service.description)}</p>
            <div style="margin-top:16px;padding-top:14px;border-top:1px solid rgba(60,73,78,.35)">
              ${chips(service.techStack)}
              ${service.metrics ? `<div class="mini-stat" style="margin-top:12px"><span class="kicker">${esc(service.metrics.label)}</span><strong>${esc(service.metrics.value)}</strong></div>` : ""}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="band">
      <div class="wrap">
        <div class="between" style="margin-bottom:28px">
          <div><span class="kicker">Accelerators & IP</span><h2>Proprietary Products & Accelerators</h2></div>
          <p class="muted" style="max-width:32rem">Battle-tested enterprise software foundations engineered in-house to supercharge project velocity without compromising customizability.</p>
        </div>
        <div class="cards-3">${PRODUCTS_LIST.map(homeProduct).join("")}</div>
      </div>
    </section>
    <section class="wrap section">
      <div class="between" style="margin-bottom:28px">
        <div><span class="kicker pink">Transparent Pipeline</span><h2>What We’re Actively Building</h2></div>
        <span class="live"><i class="pulse"></i> Live workbench • Updated continuously</span>
      </div>
      <div class="cards-3">
        ${ACTIVE_PROJECTS.map((project) => `
          <article class="card clickable" data-nav="active-projects">
            <div class="between" style="align-items:center"><span class="tag">${esc(project.domain)}</span><span class="mono faint">${esc(project.sprint)}</span></div>
            <h3 style="margin:12px 0 8px">${esc(project.title)}</h3>
            <p class="muted" style="font-size:14px">${esc(project.description)}</p>
            <div class="between" style="align-items:center;margin-top:16px"><span class="mono faint">Milestone: ${esc(project.milestone)}</span><b style="color:var(--cyan)">${project.progressPercent}% Complete</b></div>
            <div class="bar" style="margin:8px 0 12px"><i style="width:${project.progressPercent}%;background:${barColor(project.barColor)}"></i></div>
            <div class="mini-stat between" style="align-items:center"><span>Next Checkpoint: ${esc(project.nextCheckpoint)}</span><b>${esc(project.checkpointDate)}</b></div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="band">
      <div class="wrap">
        <div class="between" style="margin-bottom:28px">
          <div><span class="kicker">Verified Outcomes</span><h2>Client Stories & Partnerships</h2></div>
          <p class="muted" style="max-width:32rem">Real organizational transformation rooted in mutual respect, clear metrics, and ethical collaboration.</p>
        </div>
        <div class="cards-3">
          ${CLIENT_STORIES.map((story) => `
            <article class="card clickable" data-nav="client-stories">
              <div>${stars()}</div>
              <p style="font-style:italic;font-size:1.05rem">${esc(story.quote)}</p>
              <div class="row" style="margin-top:18px;padding-top:14px;border-top:1px solid rgba(60,73,78,.35)">
                <div class="icon-round ${STORY_TONE[story.id]}" style="font-weight:800">${esc(story.initials)}</div>
                <div>
                  <strong>${esc(story.author)}</strong>
                  <span class="muted" style="display:block;font-size:13px">${esc(story.role)}</span>
                  <span class="kicker" style="letter-spacing:0">Verified Enterprise Partner</span>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
    <section class="wrap section">
      <div class="cta">
        <div class="badge">Start With Integrity</div>
        <h2 style="font-size:clamp(2rem,4vw,3rem);max-width:18ch;margin:18px auto">Ready to Build Something Remarkable Together?</h2>
        <p class="lede" style="margin:0 auto 22px">Schedule an open, confidential advisory consultation with our founding technical leadership. No high-pressure sales — just authentic human dialogue and sound engineering.</p>
        <div class="wrap-row" style="justify-content:center">
          <button class="btn btn-primary" data-nav="consult-with-us">Schedule Technical Consultation</button>
          <button class="btn" data-nav="services">View Service Catalog</button>
        </div>
      </div>
    </section>
  `;
}

function renderServices() {
  const service = activeService();
  const tier = SLA[state.slaTier];
  return `
    <div class="wrap page">
      <div class="badge">${icon("developer_board", 16)} Engineering Catalog & Execution</div>
      <h1 style="margin:16px 0 10px">Comprehensive Technical Capabilities</h1>
      <p class="lede">We don't sell vaporware or offshore boilerplate. Every line of code is designed for high reliability, clean architectural boundaries, and verifiable client sovereignty.</p>
      <div class="filters" style="margin-top:28px">
        ${SERVICE_FILTERS.map(([id, label]) => `<button class="${state.serviceCategory === id ? "on" : ""}" data-action="service-filter" data-id="${id}">${label}</button>`).join("")}
      </div>
      <div class="split">
        <div class="stack">
          ${filteredServices().map((item) => `
            <article class="card clickable ${item.id === service.id ? "selected" : ""}" data-action="service-pick" data-id="${item.id}">
              <div class="between" style="align-items:center">
                <div class="row"><div class="icon-box">${icon(item.icon, 24)}</div><h3>${esc(item.title)}</h3></div>
                <span class="tag">${esc(item.tag)}</span>
              </div>
              <p class="muted">${esc(item.description)}</p>
              ${chips(item.techStack)}
            </article>
          `).join("")}
        </div>
        <aside class="card sticky">
          <div class="between" style="align-items:center"><span class="kicker">Discipline Specifications</span><span class="tag">Ref: HTIT-${esc(service.number)}</span></div>
          <h2 style="font-size:1.7rem;margin:10px 0">${esc(service.title)}</h2>
          <p class="muted">${esc(service.description)}</p>
          <h3 class="kicker" style="margin:18px 0 8px">Architectural Deliverables</h3>
          ${(service.detailedSpecs || []).map((spec) => `<div class="check">${icon("check_circle", 16)}<span>${esc(spec)}</span></div>`).join("")}
          <h3 class="kicker" style="margin:18px 0 8px">Primary Tech Frameworks</h3>
          ${chips(service.techStack)}
          <button class="btn btn-primary" style="width:100%;margin-top:22px" data-action="consult-service" data-title="${esc(service.title)}">Inquire About ${esc(service.title)}</button>
        </aside>
      </div>
      <section class="panel" style="margin-top:36px">
        <span class="kicker">Service Level Architecture</span>
        <h2 style="margin:8px 0">24/7 Guaranteed Response Desks</h2>
        <p class="muted">Software failures in mission-critical environments cost thousands of dollars per minute. Select your organizational criticality level to see our contractual SLA benchmarks.</p>
        <div class="cards-3" style="margin:22px 0">
          ${Object.entries(SLA).map(([key, item]) => `
            <button class="card ${state.slaTier === key ? "selected" : ""}" data-action="sla" data-id="${key}" style="text-align:left">
              <span class="kicker">${key.toUpperCase()}</span>
              <strong style="display:block;font-size:1.15rem">${esc(item.name.split(":")[0])}</strong>
              <span class="display" style="color:var(--cyan);font-size:1.7rem">${esc(item.time)}</span>
            </button>
          `).join("")}
        </div>
        <div class="cards-4">
          <div><span class="mono faint">Response Guarantee</span><strong style="display:block;color:var(--cyan);font-size:1.3rem">${esc(tier.time)}</strong></div>
          <div><span class="mono faint">Availability Window</span><strong>${esc(tier.availability)}</strong></div>
          <div><span class="mono faint">Assigned Personnel</span><strong>${esc(tier.team)}</strong></div>
          <div><span class="mono faint">Contractual Remedy</span><strong style="color:var(--cyan-2)">${esc(tier.guarantee)}</strong></div>
        </div>
      </section>
      <div style="text-align:center;margin-top:28px">
        <button class="btn btn-primary" data-nav="consult-with-us">Request an Engineering Consultation</button>
      </div>
    </div>
  `;
}

function renderNexus() {
  const heights = [45, 60, 85, 70, 95, 90, 80, 100, 92, 88, 96, 75, 84, 98, 91, 100, 94, 89, 93, 97];
  return `
    <div class="split">
      <div class="card">
        <div class="between" style="align-items:center">
          <span class="kicker"><i class="pulse" style="display:inline-block;margin-right:6px"></i> Live Data Pipeline Telemetry</span>
          <span class="mono faint">Cluster Node: #ams-fra-edge-01</span>
        </div>
        <div class="cards-3" style="margin:16px 0">
          <div class="mini-stat"><span class="mono faint">Throughput</span><b class="display" style="color:var(--cyan);font-size:1.8rem"><span id="nx-throughput">${(state.throughput / 1000000).toFixed(2)}</span> <small>msg/s</small></b></div>
          <div class="mini-stat"><span class="mono faint">P99 Latency</span><b class="display" style="font-size:1.8rem"><span id="nx-latency">${state.latency.toFixed(2)}</span> <small class="faint">ms</small></b></div>
          <div class="mini-stat"><span class="mono faint">Packet Loss</span><b class="display ok" style="font-size:1.8rem">0.000%</b></div>
        </div>
        <div class="mini-stat">
          <div class="between"><span class="mono faint">Synchronized Streams</span><span class="mono faint" id="nx-packets">Total Packets: ${state.packets.toLocaleString()}</span></div>
          <div class="bars" style="margin-top:8px">${heights.map((value) => `<i style="height:${value}%;opacity:${(0.4 + value / 160).toFixed(2)}"></i>`).join("")}</div>
        </div>
        <div class="between" style="margin-top:16px;align-items:center">
          <span class="mono faint">Engine State: Zero Invariant Violations</span>
          <button class="btn btn-primary btn-sm" data-action="peak">Simulate Peak Load Surge</button>
        </div>
      </div>
      <div class="card">
        <h3>Zero Data Migration Requirement</h3>
        <p class="muted">Traditional consultancies force enterprises to abandon legacy databases for 7-figure replatforming projects. NexusBridge bridges your existing Postgres, SAP, Oracle, and MongoDB databases in place.</p>
        <div class="check">${icon("check_circle", 16)}<span>Direct Change Data Capture (CDC)</span></div>
        <div class="check">${icon("check_circle", 16)}<span>Guaranteed exactly-once semantics</span></div>
        <div class="check">${icon("check_circle", 16)}<span>Automatic queue backpressure buffering</span></div>
        <button class="btn" style="width:100%;margin-top:18px" data-nav="consult-with-us">Request Deployment Specs</button>
      </div>
    </div>
  `;
}

function renderPulse() {
  const pending = state.pfStatus === "pending";
  return `
    <div class="split">
      <div class="card" style="border-color:rgba(225,3,125,.35)">
        <div class="between"><span class="kicker pink">Human-in-the-Loop Decision Gate</span><span class="mono faint">Workflow: Commercial Credit Appraisal</span></div>
        <div class="mini-stat" style="margin:14px 0">
          <span class="mono faint">Simulated Incoming Transaction</span>
          <p><strong>"Authorize $250,000 credit expansion for Apex Retailers LLC based on Q3 audited ledger statements."</strong></p>
          <div class="between"><span class="mono faint">Autonomous Model Confidence: <b style="color:var(--pink)">${state.pfConfidence}%</b></span><span class="tag warn">Threshold &lt; 90% (Gate Active)</span></div>
        </div>
        <div class="mini-stat">
          <span class="kicker">Human Oversight Sign-Off:</span>
          ${pending ? `
            <div class="wrap-row" style="margin-top:10px">
              <button class="btn btn-ok btn-sm" data-action="approve">Approve & Sign With Merkle Proof</button>
              <button class="btn btn-bad btn-sm" data-action="escalate">Escalate to Ethics Board</button>
            </div>` : `
            <div class="between" style="align-items:center;margin-top:8px">
              <span>${icon("task_alt", 20)} Decision resolved as: <b style="color:var(--cyan)">${esc(state.pfStatus.toUpperCase())}</b></span>
              <button class="linkish" data-action="reset-gate">Reset Test</button>
            </div>`}
        </div>
        <span class="mono faint" style="display:block;margin:12px 0 6px">Cryptographic Audit Trail</span>
        <div class="log">${state.auditLog.map((line) => `<div><span style="color:var(--cyan)">›</span> ${esc(line)}</div>`).join("")}</div>
      </div>
      <div class="card" style="border-color:rgba(225,3,125,.35)">
        <h3>Zero Hallucination Guarantee</h3>
        <p class="muted">PulseFlow AI is built for regulated banks, hospitals, and logistics giants who cannot afford to let an AI hallucinate or make autonomous decisions on sensitive business assets.</p>
        <div class="spec-row"><span class="faint">Audit Ledger:</span><span>Immutable SHA-256</span></div>
        <div class="spec-row"><span class="faint">Data Retention:</span><span style="color:var(--cyan)">0-Day Ephemeral Enclave</span></div>
        <div class="spec-row"><span class="faint">EU AI Act Status:</span><span class="ok">High-Risk Tier Compliant</span></div>
        <button class="btn btn-mag" style="width:100%;margin-top:18px" data-nav="consult-with-us">Inquire for Regulated Workloads</button>
      </div>
    </div>
  `;
}

function renderTrustSim() {
  return `
    <div class="split">
      <div class="card" style="border-color:rgba(203,182,255,.35)">
        <div class="between" style="align-items:center">
          <span class="kicker" style="color:var(--lilac-2)">Continuous Governance & Code Telemetry</span>
          <button class="btn btn-sm" data-action="scan" ${state.scanning ? "disabled" : ""}>${state.scanning ? "Evaluating Ast..." : "Trigger Full Scan"}</button>
        </div>
        <div class="cards-3" style="margin:16px 0">
          <div class="mini-stat"><span class="mono faint">SOC2 Invariants</span><b class="ok display" style="font-size:1.5rem">100% Passed</b></div>
          <div class="mini-stat"><span class="mono faint">License Contagion</span><b class="display" style="color:var(--cyan);font-size:1.5rem">0 Threats</b></div>
          <div class="mini-stat"><span class="mono faint">Vulnerabilities</span><b class="ok display" style="font-size:1.5rem">0 Critical</b></div>
        </div>
        ${state.scanning ? `<p class="kicker" style="color:var(--lilac-2)">Analyzing dependency AST trees...</p><div class="bar slim"><i style="width:75%;background:var(--lilac-2)"></i></div>` : ""}
        <div class="stack" style="margin-top:12px">
          <div class="mini-stat between"><span>ISO/IEC 27001 Cryptographic Key Rotation</span><b class="ok">Compliant (Validated)</b></div>
          <div class="mini-stat between"><span>Zero Hardcoded Secrets in Git Commit Tree</span><b class="ok">Verified Clean</b></div>
          <div class="mini-stat between"><span>HIPAA ePHI Encryption at Rest & Transit</span><b class="ok">AES-256-GCM Enforced</b></div>
        </div>
      </div>
      <div class="card" style="border-color:rgba(203,182,255,.35)">
        <h3>Executive Peace of Mind</h3>
        <p class="muted">TrustAudit OS turns complex software compliance into automated, push-button certifiable reports ready for board reviews and external Big Four auditors.</p>
        <div class="mini-stat mono">
          <span class="faint">Supported Standards:</span>
          <p>• SOC 2 Type II Audits</p>
          <p>• ISO/IEC 27001:2022</p>
          <p>• HIPAA Security Rule</p>
          <p>• FedRAMP Baseline</p>
        </div>
        <button class="btn btn-lil" style="width:100%;margin-top:18px" data-nav="consult-with-us">Request Audit Demo</button>
      </div>
    </div>
  `;
}

function renderProducts() {
  const tab = state.productTab;
  const sim = tab === "nexus" ? renderNexus() : tab === "pulseflow" ? renderPulse() : renderTrustSim();
  return `
    <div class="wrap page">
      <div class="badge">${icon("precision_manufacturing", 16)} In-House Accelerators & IP</div>
      <h1 style="margin:16px 0 10px">Proprietary Products & Accelerators</h1>
      <p class="lede">Pre-built, battle-tested software foundations engineered in-house. We deploy these frameworks into client architectures to cut development time by 50% without vendor lock-in.</p>
      <div class="cards-3" style="margin:32px 0">
        ${PRODUCTS_LIST.map((product) => `
          <article class="card">
            <div class="topbar thick" style="background:linear-gradient(90deg,${product.accentColor},#00d2ff)"></div>
            <div class="between" style="align-items:center"><span class="tag">${esc(product.tag)}</span><span class="mono" style="color:var(--cyan);font-size:12px"><i class="pulse" style="display:inline-block;margin-right:6px"></i>${esc(product.status)}</span></div>
            <h3>${esc(product.title)}</h3>
            <p class="muted">${esc(product.shortDesc)}</p>
            <div class="mini-stat" style="margin:14px 0">
              <div class="spec-row"><span class="faint">Latency:</span><b style="color:var(--cyan)">${esc(product.specs.latency)}</b></div>
              <div class="spec-row"><span class="faint">Throughput:</span><span>${esc(product.specs.throughput)}</span></div>
              <div class="spec-row"><span class="faint">Compliance:</span><span style="color:var(--cyan-2)">${esc(product.specs.compliance)}</span></div>
            </div>
            <div class="between" style="align-items:center"><span class="mono faint">${esc(product.badgeFooter)}</span><button class="btn btn-sm" data-action="product" data-id="${product.id}">Deep Dive ${icon("north_east", 15)}</button></div>
          </article>
        `).join("")}
      </div>
      <section class="panel">
        <div class="between" style="margin-bottom:18px">
          <div><span class="kicker">Interactive Hardware Telemetry</span><h2>Live Accelerator Simulator</h2></div>
          <div class="tabs">
            <button class="${tab === "nexus" ? "on-cyan" : ""}" data-action="product-tab" data-id="nexus">NexusBridge Sync</button>
            <button class="${tab === "pulseflow" ? "on-mag" : ""}" data-action="product-tab" data-id="pulseflow">PulseFlow AI Lab</button>
            <button class="${tab === "trustaudit" ? "on-lil" : ""}" data-action="product-tab" data-id="trustaudit">TrustAudit OS</button>
          </div>
        </div>
        ${sim}
      </section>
    </div>
  `;
}

function renderProjects() {
  const project = selectedProject();
  return `
    <div class="wrap page">
      <div class="badge"><span class="dot"></span> Transparent Pipeline • Live Workbench</div>
      <h1 style="margin:16px 0 10px">What We’re Actively Building</h1>
      <p class="lede">True engineering transparency means opening the hood. Follow our active client builds, sprint milestones, automated test pass rates, and recent git commits in real time.</p>
      <div class="filters" style="margin-top:28px">
        ${PROJECT_FILTERS.map(([id, label]) => `<button class="${state.projectFilter === id ? "on" : ""}" data-action="project-filter" data-id="${id}">${label}</button>`).join("")}
      </div>
      <div class="split">
        <div class="stack">
          ${filteredProjects().map((item) => `
            <article class="card clickable ${item.id === project.id ? "selected" : ""}" data-action="project-pick" data-id="${item.id}">
              <div class="between"><span class="tag">${esc(item.domain)}</span><span class="mono faint">${esc(item.sprint)}</span></div>
              <h3>${esc(item.title)}</h3>
              <p class="muted">${esc(item.description)}</p>
              <div class="between"><span class="mono faint">Current Phase: ${esc(item.milestone)}</span><b style="color:var(--cyan)">${item.progressPercent}% Complete</b></div>
              <div class="bar"><i style="width:${item.progressPercent}%;background:${barColor(item.barColor)}"></i></div>
              <div class="mini-stat between" style="align-items:center">${icon("flag", 16)} Next Checkpoint: ${esc(item.nextCheckpoint)} <b>${esc(item.checkpointDate)}</b></div>
            </article>
          `).join("")}
        </div>
        <aside class="card sticky">
          <div class="between"><span class="kicker">Repository Telemetry</span><span class="tag ok">CI/CD: Passing (100%)</span></div>
          <h3>${esc(project.title)} Workbench</h3>
          <p class="mono faint">Lead: ${esc(project.leadArchitect)}</p>
          <h4 class="kicker">${icon("commit", 16)} Recent Verifiable Commits</h4>
          ${project.recentCommits.map((commit) => `
            <div class="mini-stat" style="margin-bottom:10px">
              <div class="between"><b style="color:var(--cyan)">commit #${esc(commit.hash)}</b><span class="faint">${esc(commit.time)}</span></div>
              <p style="margin:6px 0">${esc(commit.msg)}</p>
              <span class="mono faint">Author: ${esc(commit.author)}</span>
            </div>
          `).join("")}
          <div class="mini-stat">
            <div class="between"><span>Automated Test Coverage</span><b class="ok">98.4%</b></div>
            <div class="bar slim"><i style="width:98.4%;background:var(--ok)"></i></div>
            <span class="mono faint">Zero security regressions detected in 45 days.</span>
          </div>
          <button class="btn btn-primary" style="width:100%;margin-top:16px" data-nav="consult-with-us">Reserve Squad Bandwidth for Q4</button>
        </aside>
      </div>
    </div>
  `;
}

function renderStories() {
  const story = selectedStory();
  const figures = wasteFigures();
  return `
    <div class="wrap page">
      <div class="badge">${icon("verified", 16)} Verified Outcomes & Case Studies</div>
      <h1 style="margin:16px 0 10px">Client Stories & Partnerships</h1>
      <p class="lede">We build lasting relationships founded on technical truth, measurable business value, and respect. Here is how our engineering partnerships transform organizations.</p>
      <div class="cards-3" style="margin:32px 0">
        ${CLIENT_STORIES.map((item) => `
          <article class="card clickable ${item.id === story.id ? "selected" : ""}" data-action="story-pick" data-id="${item.id}">
            <div>${stars()}</div>
            <p style="font-style:italic">${esc(item.quote)}</p>
            <div class="row" style="margin-top:16px;padding-top:12px;border-top:1px solid rgba(60,73,78,.35)">
              <div class="icon-round ${STORY_TONE[item.id]}" style="font-weight:800">${esc(item.initials)}</div>
              <div>
                <strong>${esc(item.author)}</strong>
                <span class="muted" style="display:block">${esc(item.role)}</span>
                <span class="kicker" style="letter-spacing:0">Click to view full architecture study →</span>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
      <section class="panel">
        <div class="between">
          <div><span class="kicker">Architecture Case Study</span><h2>${esc(story.company)}</h2></div>
          <span class="tag">Timeline: ${esc(story.fullStory.timeToDeploy)}</span>
        </div>
        <div class="cards-3" style="margin-top:22px">
          <div class="card"><span class="kicker" style="color:var(--rose)">01. The Problem & Bloat</span><p class="muted">${esc(story.fullStory.challenge)}</p></div>
          <div class="card"><span class="kicker">02. The HTIT Honest Solution</span><p class="muted">${esc(story.fullStory.architecture)}</p></div>
          <div class="card"><span class="kicker ok">03. Verified Impact & ROI</span><p class="muted">${esc(story.fullStory.impact)}</p><div class="mini-stat"><span class="mono ok">Quantified Savings</span><strong>${esc(story.fullStory.savedCost)}</strong></div></div>
        </div>
        <div style="text-align:center;margin-top:18px"><button class="btn btn-primary" data-nav="consult-with-us">Schedule Technical Assessment for Your Stack</button></div>
      </section>
      <section class="card" style="margin-top:28px;padding:32px">
        <span class="kicker">Radical Honesty Benchmark</span>
        <h2>Cloud Overhead & Complexity Calculator</h2>
        <p class="muted">Most software consultancies profit from making your architecture more convoluted. We do the opposite: by right-sizing databases and pruning redundant microservices, we cut unnecessary cloud bills in half.</p>
        <div class="split-even" style="margin-top:18px">
          <div class="stack">
            <label class="field">
              <span class="between" style="align-items:center"><span>Monthly Cloud Bill (AWS/GCP/Azure)</span><b id="spend-label" style="color:var(--cyan)">$${state.monthlySpend.toLocaleString()} / mo</b></span>
              <input id="spend" data-slider="spend" type="range" min="5000" max="150000" step="2500" value="${state.monthlySpend}" />
              <span class="between faint mono" style="font-size:10px"><span>$5,000</span><span>$75,000</span><span>$150,000+</span></span>
            </label>
            <label class="field">
              <span class="between" style="align-items:center"><span>Number of Microservices / Lambdas</span><b id="count-label" style="color:var(--cyan)">${state.serviceCount} services</b></span>
              <input id="count" data-slider="count" type="range" min="3" max="50" step="1" value="${state.serviceCount}" />
              <span class="between faint mono" style="font-size:10px"><span>3 services</span><span>25 services</span><span>50+ services</span></span>
            </label>
          </div>
          <div class="mini-stat" style="text-align:center;padding:28px">
            <span class="mono faint">Estimated Waste Recoverable by HTIT Simplification</span>
            <div class="display" style="color:var(--cyan);font-size:clamp(2rem,4vw,3rem)">$<span id="waste-value">${figures.annual.toLocaleString()}</span> <small style="color:white;font-size:1rem">/ year</small></div>
            <p class="muted">Plus an estimated <strong class="ok" id="latency-value">${figures.latency}% drop</strong> in end-to-end network hop latency through unified event queues.</p>
            <button class="btn btn-primary" data-nav="consult-with-us">Get an Honest Architecture Audit</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderValues() {
  const score = ethicsScore();
  const message = score === 100
    ? "Exemplary standard! Your architecture embodies our highest principles of transparency and human-centered design."
    : score >= 75
      ? "Strong foundation with a few vulnerable areas that could introduce hidden technical or regulatory debt."
      : "Critical architectural risks detected. We recommend an urgent independent audit before scaling.";
  const box = (key, label, extra = "") => `
    <label class="checkline">
      <span>${label}</span>
      <span class="row">${extra}<input data-ethics="${key}" type="checkbox" ${state.ethics[key] ? "checked" : ""} /></span>
    </label>
  `;
  return `
    <div class="wrap page">
      <div class="badge">${icon("balance", 16)} Foundational Ethics & Philosophy</div>
      <h1 style="margin:16px 0 10px">Built on Uncompromising Principles</h1>
      <p class="lede">Technology without ethics is dangerous; engineering without honesty is expensive. Here is how our four pillars guide every architectural decision, line of code, and client interaction.</p>
      <div class="cards-2" style="margin:32px 0">
        ${ETHICS_PILLARS.map((pillar) => `
          <article class="card">
            <div class="between"><div class="icon-box ${TONE[pillar.title] || "tone-cyan"}">${icon(pillar.icon, 26)}</div><span class="kicker">${esc(pillar.number)}</span></div>
            <h2 style="font-size:1.7rem;margin:12px 0">${esc(pillar.title)}</h2>
            <p class="muted">${esc(pillar.summary)}</p>
            <p class="faint" style="font-size:13px">${esc(pillar.detailedManifesto)}</p>
            <div class="mini-stat">
              <span class="kicker">Our Engineering Commitments:</span>
              ${pillar.pledges.map((pledge) => `<div class="check">${icon("check", 15)}<span>${esc(pledge)}</span></div>`).join("")}
            </div>
          </article>
        `).join("")}
      </div>
      <section class="panel" style="text-align:center">
        <div class="icon-box tone-cyan" style="margin:0 auto 12px;width:56px;height:56px">${icon("handshake", 32)}</div>
        <h2>The HTIT Corporate Integrity Pledge</h2>
        <p class="lede" style="margin:12px auto">"We believe software is the modern nervous system of human society. Therefore, we pledge to never obfuscate pricing, never architect artificial lock-ins, never compromise automated test coverage, and always safeguard human dignity in automated intelligence."</p>
        <p class="mono faint">Ratified: 2025 • <span style="color:var(--cyan)">Enforced in Every Statement of Work</span></p>
      </section>
      <section class="card" style="margin-top:28px;padding:32px">
        <span class="kicker">Self-Audit Tool</span>
        <h2>Is Your Tech Stack Ethically & Technically Sound?</h2>
        <p class="muted">Check your current system invariants against the HTIT integrity matrix.</p>
        <div class="split-even" style="margin-top:18px">
          <div class="stack">
            ${box("humanInLoop", "Human-in-the-loop review for high-impact automated AI decisions")}
            ${box("dataRetention", "Vendor lock-in contracts without open database exports", `<span class="mono faint">(Unchecked is better)</span>`)}
            ${box("openArchitecture", "100% auditable source code with transparent git history")}
            ${box("testCoverage", "Automated regression & integration test suite > 90%")}
          </div>
          <div class="mini-stat" style="text-align:center;padding:28px">
            <span class="mono faint">Integrity Alignment Quotient</span>
            <div class="display" style="color:var(--cyan);font-size:3.2rem"><span id="ethics-score">${score}</span> <small class="faint">/ 100</small></div>
            <p class="muted" id="ethics-copy">${message}</p>
            <button class="btn btn-primary" data-nav="consult-with-us">Discuss Audit Findings With Leadership</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderConsult() {
  const form = state.consult;
  const estimate = ESTIMATES[form.complexity];
  const options = FOCUS_OPTIONS.includes(form.projectType) ? FOCUS_OPTIONS : [form.projectType, ...FOCUS_OPTIONS];
  if (form.booked) {
    return `
      <div class="wrap page">
        <div class="card" style="max-width:720px;margin:0 auto;text-align:center;padding:40px">
          <div class="icon-round tone-cyan" style="width:64px;height:64px;margin:0 auto 12px;color:var(--ok);background:rgba(52,211,153,.15)">${icon("event_available", 36)}</div>
          <span class="kicker">Advisory Session Confirmed</span>
          <h2 style="margin:10px 0">We look forward to speaking, ${esc(form.name)}!</h2>
          <p class="muted">A calendar confirmation and secure video conference link have been dispatched to <strong>${esc(form.email)}</strong>.</p>
          <div class="mini-stat" style="text-align:left;margin:18px 0">
            <div class="spec-row"><span class="faint">Project Focus:</span><span>${esc(form.projectType)}</span></div>
            <div class="spec-row"><span class="faint">Consulting Lead:</span><span style="color:var(--cyan)">${esc(form.lead)}</span></div>
            <div class="spec-row"><span class="faint">Scheduled Slot:</span><span class="ok">${esc(form.date)}</span></div>
            <div class="spec-row"><span class="faint">Mutual NDA Status:</span><span>Active Standard (Zero IP Leakage)</span></div>
          </div>
          <div class="wrap-row" style="justify-content:center">
            <button class="btn" data-nav="about">Back to Overview</button>
            <button class="btn btn-primary" data-action="edit-booking">Modify Consultation Details</button>
          </div>
        </div>
      </div>
    `;
  }
  return `
    <div class="wrap page">
      <div class="badge">${icon("calendar_month", 16)} Confidential Advisory & Discovery</div>
      <h1 style="margin:16px 0 10px">Consult with Our Engineering Leadership</h1>
      <p class="lede">No high-pressure salespeople, commission-driven account managers, or outsourced junior developers. You speak directly with our founding architects.</p>
      <div class="split" style="margin-top:28px">
        <form id="consult-form" class="card stack">
          <label class="field"><span class="kicker">1. Project Focus Area</span>
            <select data-consult="projectType">${options.map((option) => `<option ${option === form.projectType ? "selected" : ""}>${esc(option)}</option>`).join("")}</select>
          </label>
          <div>
            <span class="kicker">2. Operational Scope & Maturity</span>
            <div class="choice" style="margin-top:8px">
              ${[["mvp", "Startup / MVP"], ["growth", "Growth / Scale"], ["enterprise", "Enterprise Mission"]].map(([id, label]) => `<button type="button" class="${form.complexity === id ? "on" : ""}" data-action="complexity" data-id="${id}">${label}</button>`).join("")}
            </div>
          </div>
          <label class="field"><span class="kicker">3. Lead Architect Assigned to Call</span>
            <select data-consult="lead">${LEADS.map(([value, label]) => `<option value="${esc(value)}" ${value === form.lead ? "selected" : ""}>${esc(label)}</option>`).join("")}</select>
          </label>
          <div class="form-grid">
            <label class="field"><span>Your Full Name *</span><input data-consult="name" required type="text" placeholder="e.g. Alex Morgan" value="${esc(form.name)}" /></label>
            <label class="field"><span>Work Email *</span><input data-consult="email" required type="email" placeholder="alex@company.com" value="${esc(form.email)}" /></label>
          </div>
          <label class="field"><span>Company / Organization</span><input data-consult="company" type="text" placeholder="e.g. HyperScale Tech Inc." value="${esc(form.company)}" /></label>
          <label class="field"><span>Preferred Time Window</span>
            <select data-consult="date">${SLOTS.map((slot) => `<option ${slot === form.date ? "selected" : ""}>${esc(slot)}</option>`).join("")}</select>
          </label>
          <label class="field"><span>Brief Architecture Context or Problem</span><textarea data-consult="notes" rows="3" placeholder="Describe your current tech stack, pain points, or timeline goals...">${esc(form.notes)}</textarea></label>
          <button class="btn btn-primary" type="submit">Confirm 45-Min Advisory Consultation</button>
          <p class="mono faint" style="text-align:center">Strict confidentiality guaranteed. We sign mutual NDAs prior to any codebase review.</p>
        </form>
        <aside class="card sticky">
          <span class="kicker">Radical Honesty Scope Projection</span>
          <h3>Estimated Timeline</h3>
          <p class="display" style="color:var(--cyan);font-size:1.6rem">${esc(estimate.sprints)}</p>
          <div class="mini-stat">
            <span class="mono faint">Engineering Squad:</span><p>${esc(estimate.team)}</p>
            <span class="mono faint">Core Deliverable:</span><p style="color:var(--cyan-2)">${esc(estimate.deliverable)}</p>
            <span class="mono faint">Scope Stance:</span><p class="muted">${esc(estimate.notes)}</p>
          </div>
          <div class="mini-stat">
            <strong>${icon("verified", 16)} Zero Markup on Cloud Infrastructure</strong>
            <p class="faint">You pay AWS, GCP, or your host directly. HTIT never marks up infrastructure bills or locks you into proprietary host accounts.</p>
          </div>
          <p class="mono faint" style="text-align:center">Questions? Call Direct: <strong style="color:white">+1 (800) 484-8324</strong></p>
        </aside>
      </div>
    </div>
  `;
}

function renderMain() {
  const views = {
    about: renderHome,
    services: renderServices,
    products: renderProducts,
    "active-projects": renderProjects,
    "client-stories": renderStories,
    "our-values": renderValues,
    "consult-with-us": renderConsult
  };
  mainEl.innerHTML = (views[state.screen] || renderHome)();
}

function renderModals() {
  const product = selectedProduct();
  const productHtml = product ? `
    <div class="backdrop" data-close="product">
      <div class="modal" data-stop>
        <button class="x" data-close="product" aria-label="Close modal">${icon("close", 20)}</button>
        <div class="row"><span class="tag">${esc(product.tag)}</span><span class="kicker">${esc(product.status)}</span></div>
        <h2 style="margin:10px 0">${esc(product.title)}</h2>
        <p class="muted">${esc(product.fullDesc)}</p>
        <div class="mini-stat">
          <div class="spec-row"><span class="faint">Measured Latency:</span><b style="color:var(--cyan)">${esc(product.specs.latency)}</b></div>
          <div class="spec-row"><span class="faint">Throughput Baseline:</span><span>${esc(product.specs.throughput)}</span></div>
          <div class="spec-row"><span class="faint">Cryptographic Layer:</span><span style="color:var(--cyan-2)">${esc(product.specs.encryption)}</span></div>
          <div class="spec-row"><span class="faint">Compliance Standard:</span><span class="ok">${esc(product.specs.compliance)}</span></div>
        </div>
        <h3 class="kicker">Core Framework Invariants</h3>
        ${product.features.map((feature) => `<div class="check">${icon("check_circle", 16)}<span>${esc(feature)}</span></div>`).join("")}
        <div class="wrap-row" style="margin-top:18px">
          <button class="btn btn-primary" data-action="consult-product" data-title="${esc(product.title)}">Deploy ${esc(product.title)} to Your Stack</button>
          <button class="btn" data-close="product">Close</button>
        </div>
      </div>
    </div>` : "";

  const trustCopy = {
    security: `<h3>Enterprise Security & ISO/IEC 27001 Certification</h3><p class="muted">HTIT operates under ISO/IEC 27001:2022 certified Information Security Management Systems (ISMS). All client codebase repositories, ephemeral build nodes, and advisory telemetry are compartmentalized with zero cross-tenant contamination.</p><div class="cards-2"><div class="mini-stat"><b class="ok">SOC 2 Type II Audited</b><p class="faint">Annual independent evaluation covering Security, Availability, and Confidentiality.</p></div><div class="mini-stat"><b class="ok">Zero Secrets Retention</b><p class="faint">All encryption keys and API secrets reside strictly within client cloud enclaves.</p></div></div>`,
    privacy: `<h3>Ethical Privacy & Data Sovereignty Framework</h3><p class="muted">We reject the surveillance data-scraping business model. When we build or audit software, client training data and end-user telemetry remain strictly sovereign.</p><div class="mini-stat mono"><p>• Zero training of foundation models on client private intellectual property.</p><p>• Full GDPR Article 17 "Right to Erasure" automated cryptographic shredding routines.</p><p>• HIPAA-compliant Business Associate Agreement (BAA) coverage available on day one.</p></div>`,
    terms: `<h3>Transparent Terms of Engagement</h3><p class="muted">Our contractual relationships reflect our values of Honesty and Doing It Right:</p><div class="mini-stat mono"><p>• <strong>100% Client IP Ownership:</strong> Every line of custom software, documentation, and automated test suite is exclusively owned by the client upon payment.</p><p>• <strong>No Hidden Markups:</strong> Compute and hosting bills are billed directly by your infrastructure provider with zero agency surcharge.</p><p>• <strong>Turnkey Codebase Handover:</strong> We provide structured engineering documentation and developer training so you are never held hostage.</p></div>`
  };
  const trustHtml = state.trustOpen ? `
    <div class="backdrop" data-close="trust">
      <div class="modal" data-stop>
        <button class="x" data-close="trust" aria-label="Close modal">${icon("close", 20)}</button>
        <div class="row">${icon("shield_lock", 22)} <span class="kicker">HTIT Global Governance & Verification</span></div>
        <div class="tabs" style="margin:16px 0">
          ${[["security", "Security & Trust Center"], ["privacy", "Privacy Framework"], ["terms", "Terms of Engagement"]].map(([id, label]) => `<button class="${state.trustTab === id ? "on-cyan" : ""}" data-action="trust-tab" data-id="${id}">${label}</button>`).join("")}
        </div>
        ${trustCopy[state.trustTab]}
        <div style="text-align:right;margin-top:18px"><button class="btn" data-close="trust">Close Trust Center</button></div>
      </div>
    </div>` : "";

  const advisoryHtml = state.advisoryOpen ? `
    <div class="backdrop" data-close="advisory">
      <div class="modal narrow" data-stop>
        <button class="x" data-close="advisory" aria-label="Close modal">${icon("close", 20)}</button>
        <div class="row"><span class="dot"></span><span class="kicker">Live Escalation Desk</span></div>
        <h3>Direct Advisory Desk</h3>
        <p class="muted">Connect immediately with on-duty founding technical leadership. For enterprise emergencies or high-priority project scoping.</p>
        ${state.advisorySubmitted ? `
          <div class="mini-stat" style="text-align:center;border-color:rgba(52,211,153,.4)">
            ${icon("check_circle", 32)}
            <p><strong>Signal Received</strong></p>
            <p class="muted">A senior engineer will contact ${esc(state.advisoryEmail)} within 15 minutes.</p>
          </div>` : `
          <form id="advisory-form" class="stack">
            <label class="field"><span>Your Direct Work Email / Phone</span><input id="advisory-email" required type="text" placeholder="name@enterprise.com or +1 (555) 000-0000" value="${esc(state.advisoryEmail)}" /></label>
            <button class="btn btn-primary" type="submit">Request Rapid Senior Engineer Callback</button>
          </form>`}
        <div class="mini-stat mono" style="margin-top:14px">
          <div class="between"><span class="faint">Direct Advisory Hotline:</span><span>+1 (800) 484-8324</span></div>
          <div class="between"><span class="faint">Secure Telemetry Channel:</span><span style="color:var(--cyan)">telemetry@htit-global.internal</span></div>
        </div>
        <div class="between" style="margin-top:12px">
          <button class="linkish" data-action="advisory-consult">Or schedule full 45-min technical consultation →</button>
          <button class="btn btn-sm" data-close="advisory">Dismiss</button>
        </div>
      </div>
    </div>` : "";

  modalEl.innerHTML = productHtml + trustHtml + advisoryHtml;
}

function paint(scroll) {
  renderHeader();
  renderMain();
  renderFooter();
  renderModals();
  syncTelemetry();
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncTelemetry() {
  const shouldRun = state.screen === "products";
  if (shouldRun && !telemetryTimer) telemetryTimer = setInterval(tickTelemetry, 1500);
  if (!shouldRun && telemetryTimer) {
    clearInterval(telemetryTimer);
    telemetryTimer = null;
  }
}

function tickTelemetry() {
  state.throughput = Math.floor(state.throughput + (Math.random() * 8000 - 4000));
  state.latency = +(state.latency + (Math.random() * 0.06 - 0.03)).toFixed(2);
  state.packets += 1200;
  const throughput = document.getElementById("nx-throughput");
  const latency = document.getElementById("nx-latency");
  const packets = document.getElementById("nx-packets");
  if (throughput) throughput.textContent = (state.throughput / 1000000).toFixed(2);
  if (latency) latency.textContent = state.latency.toFixed(2);
  if (packets) packets.textContent = `Total Packets: ${state.packets.toLocaleString()}`;
}

function closeModal(name) {
  if (name === "product") state.productId = null;
  if (name === "trust") state.trustOpen = false;
  if (name === "advisory") state.advisoryOpen = false;
  renderModals();
}

function refreshEthicsCopy() {
  const score = ethicsScore();
  const scoreEl = document.getElementById("ethics-score");
  const copyEl = document.getElementById("ethics-copy");
  if (!scoreEl || !copyEl) return;
  scoreEl.textContent = String(score);
  copyEl.textContent = score === 100
    ? "Exemplary standard! Your architecture embodies our highest principles of transparency and human-centered design."
    : score >= 75
      ? "Strong foundation with a few vulnerable areas that could introduce hidden technical or regulatory debt."
      : "Critical architectural risks detected. We recommend an urgent independent audit before scaling.";
}

function refreshWaste() {
  const figures = wasteFigures();
  const spend = document.getElementById("spend-label");
  const count = document.getElementById("count-label");
  const waste = document.getElementById("waste-value");
  const latency = document.getElementById("latency-value");
  if (spend) spend.textContent = `$${state.monthlySpend.toLocaleString()} / mo`;
  if (count) count.textContent = `${state.serviceCount} services`;
  if (waste) waste.textContent = figures.annual.toLocaleString();
  if (latency) latency.textContent = `${figures.latency}% drop`;
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  if (nav) {
    navigate(nav.dataset.nav);
    return;
  }
  const closer = event.target.closest("[data-close]");
  if (closer && !(closer.classList.contains("backdrop") && event.target !== closer)) {
    closeModal(closer.dataset.close);
    return;
  }
  const actionEl = event.target.closest("[data-action]");
  if (!actionEl) return;
  const { action, id, title, tab } = actionEl.dataset;
  if (action === "menu") {
    state.mobileOpen = !state.mobileOpen;
    renderHeader();
  } else if (action === "advisory") {
    state.advisoryOpen = true;
    renderModals();
  } else if (action === "trust") {
    state.trustOpen = true;
    state.trustTab = tab || "security";
    renderModals();
  } else if (action === "trust-tab") {
    state.trustTab = id;
    renderModals();
  } else if (action === "product") {
    state.productId = id;
    renderModals();
  } else if (action === "consult-product") {
    state.productId = null;
    openConsult(`Proprietary Accelerator: ${title}`);
  } else if (action === "consult-service") {
    openConsult(title);
  } else if (action === "service-filter") {
    state.serviceCategory = id;
    paint(false);
  } else if (action === "service-pick") {
    state.activeServiceId = id;
    paint(false);
  } else if (action === "sla") {
    state.slaTier = id;
    paint(false);
  } else if (action === "product-tab") {
    state.productTab = id;
    paint(false);
  } else if (action === "peak") {
    state.throughput = 1450000;
    state.latency = 1.65;
    const throughput = document.getElementById("nx-throughput");
    const latency = document.getElementById("nx-latency");
    if (throughput) throughput.textContent = (state.throughput / 1000000).toFixed(2);
    if (latency) latency.textContent = state.latency.toFixed(2);
  } else if (action === "approve") {
    state.pfStatus = "approved";
    state.auditLog.unshift(
      `Human Signature Recorded: Lead Architect (UID: HTIT-9921) at ${new Date().toLocaleTimeString()}`,
      "Cryptographic Merkle proof created: 0x9f4a...e12d"
    );
    paint(false);
  } else if (action === "escalate") {
    state.pfStatus = "escalated";
    state.auditLog.unshift(
      `Decision escalated to Ethics & Compliance Board at ${new Date().toLocaleTimeString()}`,
      "Execution halted safely. Zero unauthorized state mutations."
    );
    paint(false);
  } else if (action === "reset-gate") {
    state.pfStatus = "pending";
    paint(false);
  } else if (action === "scan") {
    state.scanning = true;
    paint(false);
    clearTimeout(scanTimer);
    scanTimer = setTimeout(() => {
      state.scanning = false;
      paint(false);
    }, 1400);
  } else if (action === "project-filter") {
    state.projectFilter = id;
    paint(false);
  } else if (action === "project-pick") {
    state.projectId = id;
    paint(false);
  } else if (action === "story-pick") {
    state.storyId = id;
    paint(false);
  } else if (action === "complexity") {
    state.consult.complexity = id;
    paint(false);
  } else if (action === "edit-booking") {
    state.consult.booked = false;
    paint(false);
  } else if (action === "advisory-consult") {
    state.advisoryOpen = false;
    navigate("consult-with-us");
  }
});

document.addEventListener("input", (event) => {
  const consult = event.target.dataset.consult;
  if (consult) state.consult[consult] = event.target.value;
  const slider = event.target.dataset.slider;
  if (slider === "spend") {
    state.monthlySpend = Number(event.target.value);
    refreshWaste();
  }
  if (slider === "count") {
    state.serviceCount = Number(event.target.value);
    refreshWaste();
  }
});

document.addEventListener("change", (event) => {
  const ethics = event.target.dataset.ethics;
  if (ethics) {
    state.ethics[ethics] = event.target.checked;
    refreshEthicsCopy();
  }
  const consult = event.target.dataset.consult;
  if (consult) state.consult[consult] = event.target.value;
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "consult-form") {
    event.preventDefault();
    if (!state.consult.name || !state.consult.email) return;
    state.consult.booked = true;
    paint(false);
  }
  if (event.target.id === "advisory-form") {
    event.preventDefault();
    const email = document.getElementById("advisory-email");
    state.advisoryEmail = email ? email.value.trim() : "";
    if (!state.advisoryEmail) return;
    state.advisorySubmitted = true;
    renderModals();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (state.productId) closeModal("product");
  else if (state.trustOpen) closeModal("trust");
  else if (state.advisoryOpen) closeModal("advisory");
});

window.addEventListener("hashchange", () => {
  state.screen = screenFromHash();
  state.mobileOpen = false;
  paint(true);
});

state.screen = screenFromHash();
paint(false);
