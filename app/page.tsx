const results = [
  ["2M+", "Personio.", "Led the materialization platform for employee time-off and vacation balances used by payroll and reporting."],
  ["~70%", "Personio.", "Reduced P95 latency for a critical Absence Balance API through query, batching, workload, and database improvements."],
  ["3B+", "Thoughtworks / Grab.", "Built real-time driver order assignment and lifecycle systems while the platform operated at billions of completed rides."],
];

const work = [
  {
    period: "2022—now",
    location: "Berlin",
    company: "Personio",
    title: "Senior Software Engineer",
    copy: "I own absence-management capabilities from problem framing to production. Recent work includes balance materialization for payroll and reporting, API performance, and reliable event-driven integrations.",
    keywords: "Product ownership / Java & Kotlin / TypeScript / Distributed systems / PostgreSQL",
  },
  {
    period: "2019—2022",
    location: "Berlin",
    company: "Forto",
    title: "Full-stack Software Engineer",
    copy: "Built operational workflows, services, data models, and integrations for transportation management, shipment visibility, and external partner booking.",
    keywords: "Full stack / State machines / Event ingestion / Domain-driven design",
  },
  {
    period: "2017—2019",
    location: "Bengaluru",
    company: "Thoughtworks / Grab",
    title: "Full-stack Software Engineer",
    copy: "Built Android and backend capabilities for real-time driver order delivery, assignment, incentives, navigation, and the ride lifecycle.",
    keywords: "Android / Backend services / Real-time systems / Marketplace",
  },
];

const principles = [
  ["Start with behaviour.", "Make the user, state changes, constraints, and success criteria clear before drawing the architecture."],
  ["Assume things fail.", "Model retries, duplicates, delays, partial failure, reconciliation, and ownership explicitly."],
  ["Ship the smallest complete change.", "Prefer observable, reversible releases that solve a real part of the problem."],
  ["Stay for the consequences.", "Measure the system in production, support it, and use what happens next to improve the design."],
];

function SectionHeader({ number, title, id }: { number: string; title: string; id: string }) {
  return <header><p className="section-label">{number}</p><h2 id={id}>{title}</h2></header>;
}

export default function Home() {
  return (
    <>
      <header className="site-header page-shell">
        <a className="site-name" href="#top">Dhayanand Baskar</a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="/blogs/">Writing</a><a href="/Dhayanand-Baskar-Resume.pdf?v=4" download="Dhayanand-Baskar-Resume.pdf">Resume ↓</a>
        </nav>
      </header>

      <main id="top" className="page-shell">
        <section className="intro">
          <aside className="identity">
            <img src="/profile-photo.png" alt="Dhayanand Baskar" width="104" height="104" fetchPriority="high" />
            <p>Senior Software Engineer</p><p>Berlin, Germany</p><p className="availability">Open to Senior and Staff-level roles</p>
          </aside>
          <div className="intro-copy">
            <p className="overline">Hello / 2026</p>
            <h1>Software engineer building products, platforms, and the systems behind them.</h1>
            <p className="intro-text">I have spent 12+ years turning messy business problems into software people can use and teams can operate. I work end to end: product discovery, user workflows, APIs, data, integrations, distributed systems, rollout, and production.</p>
            <div className="contact-links">
              <a href="mailto:dhayanand.baskar@gmail.com">Email me ↗</a>
              <a href="https://linkedin.com/in/dhayanandbaskar" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/DhayanandBaskar" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </section>

        <section className="content-section results" aria-labelledby="results-title">
          <SectionHeader number="01" title="Selected results" id="results-title" />
          <ol className="result-list">
            {results.map(([metric, company, copy]) => <li key={metric}><strong>{metric}</strong><p><b>{company}</b> {copy}</p></li>)}
          </ol>
        </section>

        <section className="content-section" id="work" aria-labelledby="work-title">
          <SectionHeader number="02" title="Selected work" id="work-title" />
          <div className="work-list">
            {work.map((role) => (
              <article className="work-item" key={role.company}>
                <div className="work-meta"><time>{role.period}</time><span>{role.location}</span></div>
                <div className="work-copy"><h3>{role.company} <span>{role.title}</span></h3><p>{role.copy}</p><p className="keywords">{role.keywords}</p></div>
              </article>
            ))}
          </div>
          <a className="inline-link" href="/Dhayanand-Baskar-Resume.pdf?v=4" download="Dhayanand-Baskar-Resume.pdf">Full work history in the PDF resume ↓</a>
        </section>

        <section className="content-section principles" aria-labelledby="principles-title">
          <SectionHeader number="03" title="How I work" id="principles-title" />
          <div className="principle-copy">
            {principles.map(([title, copy]) => <p key={title}><b>{title}</b> {copy}</p>)}
          </div>
        </section>

        <section className="content-section" aria-labelledby="writing-title">
          <SectionHeader number="04" title="Writing" id="writing-title" />
          <div className="writing-list">
            <a href="/blogs/atm-operations-system-design/"><span>System design · 20 min</span><strong>Designing a Reliable ATM Operations System</strong><em>Read ↗</em></a>
            <a href="/blogs/room-rental-system-design/"><span>System design · 24 min</span><strong>Room Rental with Unreliable Inventory and a Payment Provider</strong><em>Read ↗</em></a>
          </div>
          <a className="inline-link" href="/blogs/">Browse all engineering notes ↗</a>
        </section>
      </main>

      <footer className="site-footer page-shell"><p>Dhayanand Baskar · Berlin · 2026</p><a href="mailto:dhayanand.baskar@gmail.com">dhayanand.baskar@gmail.com</a></footer>
    </>
  );
}
