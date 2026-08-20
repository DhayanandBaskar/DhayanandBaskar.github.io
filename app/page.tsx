"use client";

const personioHighlights = [
  "Led backend architecture and implementation for absence management, powering balance, policy, holiday, payroll, calendar, and reporting workflows across Personio’s HR platform.",
  "Reduced Absence Balance API latency by ~70% at P95 and ~60% at P99 through query optimization, batching, workload isolation, and database-level tuning—eliminating timeout failures for a high-impact customer.",
  "Designed and operationalized a balance materialization system across ~35K companies, enabling analytics workloads while reducing expensive real-time computation and improving data consistency by 10×.",
  "Strengthened event-driven data pipelines with idempotent processing, retry-safe synchronization, observability, operational runbooks, and reliable downstream payroll and calendar integrations.",
];

const fortoHighlights = [
  "Built scalable backend services for transportation management, real-time shipment tracking, and external logistics partner booking.",
  "Modeled long-running transport workflows as event-driven state machines, safely processing delayed, duplicated, and out-of-order updates from third-party systems.",
  "Used domain-driven design and event storming with logistics leaders to create a scalable Transport Plan model and incrementally automate partner booking workflows.",
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
        <div className="availability"><span className="status-dot" /><span>Berlin · Open to senior backend opportunities</span></div>
        <div className="toolbar-actions">
          <a className="secondary-button" href="mailto:dhayanand.baskar@gmail.com">Let&apos;s talk</a>
          <button className="download-button" onClick={() => window.print()} aria-label="Open print dialog to save this resume as PDF">
            <span aria-hidden="true">↓</span> Export PDF
          </button>
        </div>
      </nav>

      <div className="paper-stack">
        <article className="resume-page page-one">
          <div className="page-marker" aria-hidden="true">01 / 02</div>
          <header className="resume-header">
            <div className="identity">
              <p className="eyebrow">Senior Software Engineer · Backend &amp; Distributed Systems</p>
              <h1>Dhayanand<br />Baskar</h1>
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
            <p className="lead">Software engineer with 12+ years of experience designing and scaling distributed, high-throughput systems across HR technology, logistics, mobility, and SaaS. Translates complex domains into resilient platforms—and turns performance, consistency, and reliability constraints into measurable business outcomes.</p>
          </section>

          <section className="impact-strip" aria-label="Career highlights">
            <div><strong>12+</strong><span>years building<br />production systems</span></div>
            <div><strong>~70%</strong><span>lower P95 latency<br />on a critical API</span></div>
            <div><strong>~35K</strong><span>companies served by<br />materialized balances</span></div>
            <div><strong>10×</strong><span>better data<br />consistency</span></div>
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
                <p>Distributed Systems<br />Event-Driven Architecture<br />Microservices<br />Domain-Driven Design<br />State Machines<br />REST APIs</p>
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
                <h3>Engineering</h3>
                <p>Performance Tuning<br />Reliability · Observability<br />Incident Response<br />Technical Leadership<br />Mentoring</p>
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
                company="Thoughtworks"
                title="Fullstack Software Engineer"
                period="Dec 2017 — Sep 2019"
                location="Bengaluru"
                highlights={[
                  "Built Android and backend capabilities for Gojek’s driver marketplace, supporting real-time order delivery and the assignment lifecycle from offer through acceptance, rejection, and completion.",
                  "Led the Driver Incentive initiative, improved driver navigation experiences, and contributed to Google ride-hailing integration on operationally critical systems.",
                  "Collaborated across product, mobile, and platform teams in a high-volume marketplace where latency and service reliability directly affected drivers and customers.",
                ]}
              />
              <ExperienceRole
                company="Whatfix"
                title="Fullstack Software Engineer"
                period="May 2017 — Dec 2017"
                location="Bengaluru"
                highlights={[
                  "Developed an analytics platform for measuring engagement with Whatfix’s SaaS onboarding and interactive guidance products.",
                  "Partnered across teams to deliver scalable, algorithm-driven product capabilities and data-backed usage insights.",
                ]}
              />
              <ExperienceRole
                company="Mphasis"
                title="Fullstack Software Engineer"
                period="Jul 2014 — May 2017"
                location="Pune"
                highlights={[
                  "Developed a full-stack telecom ordering system for Sprint, contributing across enterprise workflows, backend services, data access, and user-facing capabilities.",
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
              </div>
            </aside>
          </div>

          <div className="credentials-grid ruled-section">
            <section>
              <SectionTitle number="06">Education</SectionTitle>
              <div className="credential">
                <h3>Bachelor of Information Technology</h3>
                <p>Anna University · Chennai</p>
                <time>2010 — 2014</time>
              </div>
            </section>
            <section>
              <SectionTitle number="07">Advanced study</SectionTitle>
              <div className="credential">
                <h3>Algorithms</h3>
                <p>Princeton University · 2018 — 2019</p>
              </div>
              <div className="credential compact">
                <h3>Advanced Distributed Systems Design using SOA &amp; DDD</h3>
                <p>Particular Software · 2020</p>
              </div>
            </section>
          </div>

          <footer className="resume-footer">
            <p>Building systems that stay fast, correct, and understandable as they scale.</p>
            <span>Berlin · 2026</span>
          </footer>
        </article>
      </div>
    </main>
  );
}
