const capabilities = [
  {
    title: "Product engineering",
    copy: "I turn business and user problems into workflows, contracts, domain models, and incremental releases. I stay involved through rollout, measurement, and production support.",
  },
  {
    title: "Distributed systems",
    copy: "I design event-driven systems for correctness under retries, duplicates, delays, partial failures, and change. Reliability is part of the model, not an afterthought.",
  },
  {
    title: "Full-stack delivery",
    copy: "I work across product discovery, user-facing experiences, TypeScript and JavaScript, Java and Kotlin services, data, integrations, observability, and operations.",
  },
];

const experience = [
  {
    period: "2022 - Present",
    location: "Berlin",
    company: "Personio",
    title: "Senior Software Engineer",
    copy: "Owned absence-management capabilities end to end. I led a materialization platform covering 2M+ employee time-off and vacation balances for payroll and reporting, and reduced a critical balance API's latency by roughly 70% at P95.",
    tags: ["Product ownership", "Materialization", "Event-driven systems", "Performance"],
  },
  {
    period: "2019 - 2022",
    location: "Berlin",
    company: "Forto",
    title: "Full-stack Software Engineer",
    copy: "Built transportation management, shipment visibility, and partner-booking capabilities across operational workflows, services, data, and third-party integrations.",
    tags: ["Full stack", "State machines", "Logistics", "DDD"],
  },
  {
    period: "2017 - 2019",
    location: "Bengaluru",
    company: "Thoughtworks / Grab",
    title: "Full-stack Software Engineer",
    copy: "Built Android and backend capabilities for real-time driver order delivery, assignment, incentives, navigation, and the ride lifecycle in a high-volume marketplace.",
    tags: ["Android", "Real-time systems", "Marketplace", "Product delivery"],
  },
];

const approach = [
  ["Start with the user workflow", "Make actors, states, decisions, and success criteria explicit before choosing components."],
  ["Model failure deliberately", "Design idempotency, retries, reconciliation, isolation, and degradation around real failure modes."],
  ["Measure real behavior", "Use SLOs, traces, metrics, and profiling to guide trade-offs and optimization."],
  ["Own the rollout", "Prefer incremental, observable, reversible delivery with clear migration and support plans."],
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dhayanand Baskar, home">
          <span className="brand-mark" aria-hidden="true">DB</span>
          <span>Dhayanand Baskar</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="/blogs/">Writing</a>
          <a className="nav-resume" href="/Dhayanand-Baskar-Resume.pdf?v=4" download="Dhayanand-Baskar-Resume.pdf">Resume <span aria-hidden="true">↓</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> Berlin · Open to Senior and Staff-level roles</p>
            <h1 id="hero-title">I build products that stay reliable when the stakes and scale grow.</h1>
            <p className="hero-lead">I am a software engineer with 12+ years of experience taking complex products from ambiguous problem to production. My work spans user workflows, APIs, data, integrations, distributed systems, and the operational details that keep them dependable.</p>
            <div className="hero-actions">
              <a className="primary-button" href="mailto:dhayanand.baskar@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#work">See selected work <span aria-hidden="true">↓</span></a>
            </div>
            <dl className="hero-facts" aria-label="Career summary">
              <div><dt>12+</dt><dd>years shipping software</dd></div>
              <div><dt>Full stack</dt><dd>product to production</dd></div>
              <div><dt>Berlin</dt><dd>Germany</dd></div>
            </dl>
          </div>

          <div className="portrait-wrap" aria-label="Portrait of Dhayanand Baskar">
            <div className="portrait-frame">
              <img src="/profile-photo.png" alt="Dhayanand Baskar" width="720" height="900" fetchPriority="high" />
            </div>
            <p className="portrait-note"><span>Current focus</span> Product engineering · Distributed systems · Technical leadership</p>
          </div>
        </section>

        <section className="impact-band" aria-label="Selected impact">
          <article><p className="impact-company">Thoughtworks / Grab</p><strong>3B+</strong><p>rides at platform scale while I built real-time driver order assignment and lifecycle systems.</p></article>
          <article><p className="impact-company">Personio</p><strong>2M+</strong><p>employee time-off and vacation balances handled by the materialization platform I led, used by payroll and reporting.</p></article>
          <article><p className="impact-company">Forto</p><strong>Reliable by design</strong><p>shipment tracking that stayed correct when partner events arrived late, duplicated, or out of order.</p></article>
        </section>

        <section className="capabilities section-shell" id="work">
          <div className="section-intro"><p className="section-kicker">What I build</p><h2>Products with a clear user story and a serious engineering foundation.</h2></div>
          <div className="capability-grid">
            {capabilities.map((item, index) => (
              <article key={item.title}>
                <span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-shell" aria-labelledby="experience-title">
          <div className="experience-heading">
            <p className="section-kicker">Selected experience</p>
            <h2 id="experience-title">Work that had to be useful, correct, and operable.</h2>
            <a className="text-link" href="/Dhayanand-Baskar-Resume.pdf?v=4" download="Dhayanand-Baskar-Resume.pdf">Download full resume <span aria-hidden="true">↓</span></a>
          </div>
          <div className="experience-list">
            {experience.map((role) => (
              <article className="experience-item" key={role.company}>
                <div className="experience-meta"><span>{role.period}</span><span>{role.location}</span></div>
                <div>
                  <h3>{role.company}</h3><p className="role-title">{role.title}</p><p>{role.copy}</p>
                  <ul className="tag-list" aria-label={`${role.company} expertise`}>{role.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="approach-inner section-shell">
            <div className="section-intro approach-intro"><p className="section-kicker">How I work</p><h2>Strong systems begin with a precise understanding of the problem.</h2></div>
            <ol className="approach-list">
              {approach.map(([title, copy], index) => (
                <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="writing section-shell" aria-labelledby="writing-title">
          <div className="writing-heading">
            <div><p className="section-kicker">Engineering notes</p><h2 id="writing-title">Thinking in public.</h2></div>
            <a className="text-link" href="/blogs/">All articles <span aria-hidden="true">↗</span></a>
          </div>
          <div className="article-grid">
            <a className="article-card" href="/blogs/atm-operations-system-design/">
              <p>System design · 20 min</p><h3>Designing a Reliable ATM Operations System</h3><span>Requirements, task lifecycle, APIs, data modelling, concurrency, and idempotency. <b aria-hidden="true">↗</b></span>
            </a>
            <a className="article-card" href="/blogs/room-rental-system-design/">
              <p>System design · 24 min</p><h3>Room Rental with Unreliable Inventory and Revolut Payments</h3><span>A booking saga built around unreliable inventory, payment capture, compensation, and reconciliation. <b aria-hidden="true">↗</b></span>
            </a>
          </div>
        </section>

        <section className="contact section-shell">
          <p className="section-kicker">Let&apos;s build something dependable</p><h2>Have a difficult product problem?</h2>
          <a href="mailto:dhayanand.baskar@gmail.com">dhayanand.baskar@gmail.com <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer className="site-footer">
        <span>Dhayanand Baskar · Berlin</span>
        <div><a href="https://github.com/DhayanandBaskar" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/dhayanandbaskar" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <span>© 2026</span>
      </footer>
    </>
  );
}
