"use client";

const personioHighlights = [
  "Led backend architecture and implementation for absence management, powering balance, policy, holiday, payroll, calendar, and reporting workflows across Personio’s multi-tenant HR platform.",
  "Reduced Absence Balance API latency by ~70% at P95 and ~60% at P99 through query optimization, batching, workload isolation, and database-level tuning—eliminating timeout failures for a high-impact customer.",
  "Led the design and delivery of a balance materialization system covering 2M+ employee balances, replacing expensive real-time aggregation with precomputed, reporting-ready data that was faster, more predictable, and easier to reconcile.",
  "Strengthened event-driven data pipelines with idempotent consumers, retry-safe synchronization, reconciliation, observability, and reliable downstream payroll and calendar integrations.",
  "Drove technical initiatives from design through rollout: aligning cross-functional stakeholders, reviewing architecture, mentoring engineers, defining operational runbooks, and supporting production incidents.",
];

const fortoHighlights = [
  "Built core backend services for transportation management, real-time shipment visibility, and external logistics partner booking.",
  "Designed event-ingestion flows that normalized third-party tracking updates and remained correct when events arrived late, duplicated, or out of order.",
  "Modeled multi-step partner bookings as long-running, event-driven state machines with explicit transitions, retry policies, reconciliation, and failure recovery.",
  "Used domain-driven design and event storming with logistics leaders to create a scalable Transport Plan model and incrementally automate operational workflows.",
];

function ExperienceRole({
  company,
  title,
  period,
  location,
  highlights,
}: {
  company: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
}) {
  return (
    <div className="role">
      <div className="role-heading">
        <div>
          <h3>{company}</h3>
          <p>{title} · {location}</p>
        </div>
        <time>{period}</time>
      </div>
      <ul>{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

function SectionTitle({ number, children }: { number: string; children: React.ReactNode }) {
  return <h2 className="section-title"><span>{number}</span>{children}</h2>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="toolbar" aria-label="Resume actions">
        <div className="profile-chip">
          <img className="profile-photo" src="/profile-photo.png" alt="Dhayanand Baskar" width="76" height="76" fetchPriority="high" />
          <div className="profile-meta">
            <strong>Dhayanand Baskar</strong>
            <div className="availability"><span className="status-dot" /><span>Berlin · Open to senior backend opportunities</span></div>
          </div>
        </div>
        <div className="toolbar-actions">
          <a className="secondary-button" href="mailto:dhayanand.baskar@gmail.com">Let&apos;s talk</a>
          <a className="download-button" href="/Dhayanand-Baskar-Resume.pdf" download="Dhayanand-Baskar-Resume.pdf" aria-label="Download Dhayanand Baskar resume as a PDF">
            <span aria-hidden="true">↓</span> Download PDF
          </a>
        </div>
      </nav>

      <div className="paper-stack">
        <article className="resume-page page-one">
          <div className="page-marker" aria-hidden="true">01 / 02</div>
          <header className="resume-header">
            <div className="identity">
              <p className="eyebrow">Senior Software Engineer · Backend &amp; Distributed Systems</p>
              <h1>Dhayanand<br />Baskar</h1>
              <p className="hero-statement">Building high-throughput distributed systems that stay fast, reliable, and correct while serving millions of users.</p>
            </div>
            <div className="contact-block">
              <p>Berlin, Germany</p>
              <a href="mailto:dhayanand.baskar@gmail.com">dhayanand.baskar@gmail.com</a>
              <a href="tel:+4917658613450">+49 176 586 13450</a>
              <a href="https://github.com/DhayanandBaskar" target="_blank" rel="noreferrer">github.com/DhayanandBaskar ↗</a>
              <a href="https://linkedin.com/in/dhayanandbaskar" target="_blank" rel="noreferrer">linkedin.com/in/dhayanandbaskar ↗</a>
            </div>
          </header>

          <section className="profile-section ruled-section">
            <SectionTitle number="01">Profile</SectionTitle>
            <p className="lead">Software engineer with 12+ years of experience designing and scaling distributed, high-throughput systems across HR technology, logistics, mobility, and SaaS. Combines deep system-design fundamentals with hands-on delivery—from domain modeling and API design to data partitioning, asynchronous workflows, production reliability, and performance optimization. Translates complex domains into resilient platforms and measurable business outcomes.</p>
          </section>

          <section className="impact-strip" aria-label="Selected systems Dhayanand built or led">
            <div>
              <h3><span>01</span> Thoughtworks / Grab</h3>
              <strong>3B+</strong>
              <p>rides completed across Southeast Asia at Jan 2019 platform scale; built real-time driver order assignment and lifecycle systems</p>
            </div>
            <div>
              <h3><span>02</span> Personio</h3>
              <strong>2M+</strong>
              <p>employee balances handled by the reporting materialization platform I led</p>
            </div>
            <div>
              <h3><span>03</span> Forto</h3>
              <strong className="impact-word">End-to-end transport tracking</strong>
              <p>built shipment event-ingestion pipelines that stayed correct when third-party updates arrived late, duplicated, or out of order</p>
            </div>
          </section>

          <div className="page-grid">
            <section className="experience-column">
              <SectionTitle number="02">Selected experience</SectionTitle>
              <ExperienceRole company="Personio" title="Senior Backend Engineer" period="Jun 2022 — Present" location="Berlin" highlights={personioHighlights} />
              <ExperienceRole company="Forto" title="Backend Software Engineer" period="Sep 2019 — May 2022" location="Berlin" highlights={fortoHighlights} />
            </section>

            <aside className="expertise-column">
              <SectionTitle number="03">Core expertise</SectionTitle>
              <div className="skill-group">
                <h3>Architecture</h3>
                <p>Distributed Systems<br />Event-Driven Architecture<br />Microservices · SOA<br />Domain-Driven Design<br />State Machines · REST APIs</p>
              </div>
              <div className="skill-group">
                <h3>Languages</h3>
                <p>Java · Kotlin<br />TypeScript · JavaScript<br />Node.js · Spring Boot</p>
              </div>
              <div className="skill-group">
                <h3>Data &amp; platform</h3>
                <p>PostgreSQL · MySQL<br />Oracle · MongoDB<br />AWS · Kubernetes<br />Messaging · CI/CD</p>
              </div>
              <div className="skill-group">
                <h3>Scale patterns</h3>
                <p>Sharding · Partitioning<br />Caching · Materialization<br />Idempotency · Retries<br />Eventual Consistency<br />Schema Evolution</p>
              </div>
              <div className="skill-group">
                <h3>Engineering</h3>
                <p>Performance Tuning<br />Reliability · Observability<br />Automated Testing<br />Incident Response<br />Technical Leadership<br />Mentoring · Design Reviews</p>
              </div>
            </aside>
          </div>
        </article>

        <article className="resume-page page-two">
          <div className="page-marker" aria-hidden="true">02 / 02</div>
          <header className="continuation-header">
            <div><strong>Dhayanand Baskar</strong><span>Senior Software Engineer</span></div>
            <a href="mailto:dhayanand.baskar@gmail.com">dhayanand.baskar@gmail.com</a>
          </header>

          <div className="second-page-grid">
            <section className="career-column">
              <SectionTitle number="04">Earlier experience</SectionTitle>
              <ExperienceRole
                company="Thoughtworks / Grab"
                title="Fullstack Software Engineer"
                period="Dec 2017 — Sep 2019"
                location="Bengaluru"
                highlights={[
                  "Worked on Grab’s driver team as the platform crossed 3B rides across Southeast Asia in January 2019; built Android and backend capabilities for real-time order delivery and the assignment lifecycle from offer through acceptance, rejection, and completion.",
                  "Led the Driver Incentive initiative across product and engineering, translating complex incentive rules into driver-facing experiences and supporting microservices.",
                  "Improved driver navigation flows and contributed to Google ride-hailing integration, coordinating changes across Android, backend APIs, and external systems.",
                  "Worked in a high-volume marketplace where low-latency dispatch, fault tolerance, and service reliability directly affected drivers, customers, and marketplace liquidity.",
                ]}
              />
              <ExperienceRole
                company="Whatfix"
                title="Fullstack Software Engineer"
                period="May 2017 — Dec 2017"
                location="Bengaluru"
                highlights={[
                  "Developed an analytics platform for collecting, processing, and presenting engagement data from Whatfix’s SaaS onboarding and interactive guidance products.",
                  "Built full-stack capabilities spanning instrumentation, backend APIs, data aggregation, and user-facing reporting for product-usage insights.",
                  "Partnered across teams to deliver scalable, algorithm-driven product features with maintainable interfaces and testable business logic.",
                ]}
              />
              <ExperienceRole
                company="Mphasis"
                title="Fullstack Software Engineer"
                period="Jul 2014 — May 2017"
                location="Pune"
                highlights={[
                  "Developed a full-stack telecom ordering system for Sprint, contributing across order capture, validation, enterprise workflows, backend service orchestration, relational data access, and user-facing capabilities.",
                  "Delivered features within a large enterprise codebase, collaborating with distributed teams and balancing new functionality with compatibility, testing, and production stability.",
                ]}
              />
            </section>

            <aside className="architecture-column">
              <SectionTitle number="05">Systems thinking</SectionTitle>
              <p className="aside-intro">Designs for scale from first principles, balancing correctness, latency, operability, and cost.</p>
              <div className="numbered-list">
                <div><span>01</span><p><strong>Partition intelligently</strong>Geo-partition for residency and latency; hash-shard by stable, high-cardinality identifiers to distribute load.</p></div>
                <div><span>02</span><p><strong>Make events safe</strong>Use idempotency, deduplication, versioning, retries, and reconciliation for delayed or out-of-order delivery.</p></div>
                <div><span>03</span><p><strong>Design for operations</strong>Build in SLOs, metrics, traces, alerting, runbooks, failure isolation, and controlled degradation.</p></div>
                <div><span>04</span><p><strong>Evolve with evidence</strong>Profile before optimizing; use caching, precomputation, batching, indexes, and workload separation deliberately.</p></div>
                <div><span>05</span><p><strong>Route and rebalance</strong>Use shard metadata, virtual partitions, controlled data movement, and dual-read or dual-write migrations to scale without downtime.</p></div>
              </div>
            </aside>
          </div>

          <div className="credentials-grid ruled-section">
            <section>
              <SectionTitle number="06">Education</SectionTitle>
              <div className="credential">
                <div>
                  <h3>Bachelor of Information Technology</h3>
                  <p>Anna University · Chennai</p>
                </div>
                <time>2010 — 2014</time>
              </div>
            </section>
            <section>
              <SectionTitle number="07">Advanced study</SectionTitle>
              <div className="credential">
                <div>
                  <h3>Algorithms</h3>
                  <p>Princeton University</p>
                </div>
                <time>2018 — 2019</time>
              </div>
              <div className="credential compact">
                <div>
                  <h3>Advanced Distributed Systems Design</h3>
                  <p>SOA &amp; DDD · Particular Software</p>
                </div>
                <time>2020</time>
              </div>
            </section>
          </div>

          <section className="leadership-band">
            <SectionTitle number="08">How I lead</SectionTitle>
            <div className="leadership-items">
              <p><strong>Set direction</strong>Turn ambiguous domains into clear boundaries, design documents, API contracts, and phased technical roadmaps.</p>
              <p><strong>Raise the bar</strong>Use design reviews, pragmatic testing, code reviews, and mentoring to improve both systems and engineering judgment.</p>
              <p><strong>Ship safely</strong>Prefer observable, reversible rollouts with migration plans, compatibility guarantees, measurable SLOs, and explicit ownership.</p>
            </div>
          </section>

          <footer className="resume-footer">
            <span>Dhayanand Baskar · Berlin · 2026</span>
          </footer>
        </article>
      </div>
    </main>
  );
}
