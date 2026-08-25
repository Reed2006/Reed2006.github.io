import { profile } from "@/profile";
import ScrollReveal from "./scroll-reveal";

const navItems = [
  { label: "Overview", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Coursework", href: "#coursework" },
  { label: "Posts", href: "#posts" },
  { label: "Contact", href: "#contact" }
];

const overviewItems = [
  {
    index: "01",
    label: "About",
    href: "#about",
    text: ""
  },
  {
    index: "02",
    label: "Selected works",
    href: "#research",
    text: ""
  },
  {
    index: "03",
    label: "Selected working experience & Projects",
    href: "#experience",
    text: ""
  },
  {
    index: "04",
    label: "Selected Course works",
    href: "#coursework",
    text: ""
  },
  {
    index: "05",
    label: "CV",
    href: profile.cvHref,
    text: ""
  },
  {
    index: "06",
    label: "Posts and Public goods",
    href: "#posts",
    text: ""
  },
  {
    index: "07",
    label: "Contact",
    href: "#contact",
    text: ""
  }
];

const sectionBackgrounds = {
  about: { src: "/backgrounds/huzhou.png" },
  research: { src: "/backgrounds/shanghai.png" },
  experience: { src: "/backgrounds/hong-kong.png" },
  coursework: { src: "/backgrounds/san-diego.png" },
  posts: { src: "/backgrounds/vancouver.png" }
};

function NavBar() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="site-nav-inner">
        <a data-nav-link href="#top" className="site-mark">
          <span>{profile.displayName}</span>
          <span>{profile.name}</span>
        </a>

        <div className="site-nav-links">
          {navItems.map((item) => (
            <a key={item.href} data-nav-link href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a href={profile.cvHref} className="site-nav-cta">
          CV
        </a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-nav-panel">
            {navItems.map((item) => (
              <a key={item.href} data-nav-link href={item.href}>
                {item.label}
              </a>
            ))}
            <a href={profile.cvHref}>CV</a>
          </div>
        </details>
      </div>
    </nav>
  );
}

function ProfileRail() {
  return (
    <aside className="profile-rail" aria-label="Section profile navigation">
      <div className="rail-profile">
        <div className="rail-portrait">
          <img src={profile.photo.src} alt={profile.photo.alt} />
        </div>
        <h2 className="hover-name" aria-label="Yuecheng He">
          <span>Yuecheng He</span>
          <span aria-hidden="true">Reed He</span>
        </h2>
        <p>Undergrad. at Fudan university</p>
      </div>

      <nav className="rail-menu" aria-label="Compressed section navigation">
        {overviewItems.map((item) => (
          <a key={item.href} data-nav-link href={item.href}>
            <span className="rail-index">{item.index}</span>
            <strong>{item.label}</strong>
            <i aria-hidden="true" />
          </a>
        ))}
      </nav>
    </aside>
  );
}

function SectionBackground({ src }: { src: string }) {
  return (
    <div className="section-map-background" aria-hidden="true">
      <img src={src} alt="" />
    </div>
  );
}

export default function Page() {
  const primaryPaper = profile.workingPapers[0];
  const primaryHackathon = profile.hackathonExperience[0];
  const primaryEducation = profile.education[0];

  return (
    <>
      <ScrollReveal />
      <NavBar />
      <ProfileRail />

      <main className="site-shell">
        <section id="top" data-section className="overview-section">
          <div className="overview-backdrop">
            <img src={profile.heroBg} alt="" />
          </div>

          <div className="overview-inner">
            <div className="overview-portrait fade-up">
              <img
                src="/Image_sumiao.png"
                alt="Sketch portrait of Reed (Yuecheng He)"
                className="portrait-base"
              />
              <img
                src={profile.photo.src}
                alt={profile.photo.alt}
                className="portrait-hover"
              />
              <span className="portrait-shadow" aria-hidden="true" />
            </div>

            <div className="overview-copy fade-up">
              <h1 className="hover-name" aria-label="Yuecheng He">
                <span>Yuecheng He</span>
                <span aria-hidden="true">Reed He</span>
              </h1>
              <p className="overview-role">Undergrad. at Fudan university</p>
              <p className="overview-summary">
                I will visit the University of California, San diego in the fall
                of 2026, and then British Columbia Sauder School of Business in
                the winter of 2026.
              </p>
              <p className="overview-summary">
                I&apos;m expected to graduate from Fudan university with B.Econ
                and B.S in Artificial intelligence in 2028.
              </p>
            </div>

            <aside className="overview-menu fade-up" aria-label="Overview links">
              {overviewItems.map((item) => (
                <a key={item.href} href={item.href} className="overview-menu-item">
                  <span>{item.index}</span>
                  <strong>{item.label}</strong>
                  <em>{item.text}</em>
                  <i aria-hidden="true" />
                </a>
              ))}
            </aside>

            <div className="overview-interest fade-up">
              <p>
                My long-term research interest focuses on how technological
                advancements(Especially AI) transform the society.
              </p>
              <p>
                I&apos;m also open to the issues in Political Economy, Macro
                finance and Industry Organization.
              </p>
            </div>
          </div>

          <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
            <span />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </section>

        <section id="about" data-section className="story-section about-section">
          <SectionBackground {...sectionBackgrounds.about} />
          <div className="about-inner">
            <div className="about-heading fade-up">
              <h2>About</h2>
              <span aria-hidden="true" />
            </div>

            <div className="about-content fade-up">
              <div className="about-prose">
                <p>
                  I am an economics student interested in macroeconomics,
                  information systems, and the innovation frontier in recent
                  years — LLMs, agentic science, and related topics.
                </p>
                <p>
                  I want to further my education after graduation, with long-term
                  interest in how technology changes the society.
                </p>
              </div>

              <div className="about-rule" aria-hidden="true" />

              <div className="info-stack">
                <div>
                  <span>Education</span>
                  <strong>{primaryEducation.school}</strong>
                  <p>
                    {primaryEducation.degree} / {primaryEducation.period}
                  </p>
                </div>
                <div>
                  <span>Location</span>
                  <strong>{profile.location}</strong>
                  <p>{profile.email}</p>
                </div>
                <div>
                  <span>Selected Honors</span>
                  <strong>National Scholarship</strong>
                  <p>Yanbao Scholarship / Shupin Scholarship</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="research" data-section className="story-section selected-section">
          <SectionBackground {...sectionBackgrounds.research} />
          <div className="selected-inner">
            <div className="about-heading fade-up">
              <h2>Selected works</h2>
              <span aria-hidden="true" />
            </div>

            <article className="selected-card fade-up">
              <header>
                <h3>{primaryPaper.title}</h3>
                <p>{primaryPaper.authors}</p>
              </header>

              <div className="selected-notes">
                <span>Best paper of the undergraduate forum in Fudan university</span>
                <span>Will be presented at 教育部拔尖人才培养基地年会</span>
                <span>Available upon request</span>
              </div>

              <div className="selected-abstract">
                <h4>Abstract</h4>
                {primaryPaper.abstract && <p>{primaryPaper.abstract}</p>}
              </div>
            </article>

            <article className="selected-card fade-up">
              <header>
                <h3>Quantity Up, Novelty Down: Generative AI and Research</h3>
                <p>with Mingduo Zhao</p>
              </header>

              <div className="selected-notes">
                <span>Accepted and will be presented at CIST2026</span>
                <span>Available upon request</span>
              </div>

              <div className="selected-abstract">
                <h4>Abstract</h4>
                <p>
                  Generative AI may increase the number of papers being written,
                  but it might not necessarily improve the underlying ideas.
                  This paper examines whether large language models (LLMs)
                  increase research output while reducing the novelty of the work
                  produced. A toy theory model clarifies two channels behind this
                  hypothesis: a selection channel, in which lower writing costs
                  bring more marginal ideas into circulation, and a homogenization
                  channel, in which shared AI tools make written output more
                  similar. Empirically, using 42,529 SSRN business working papers
                  from 2021Q1 to 2025Q4, we identify the causal effect of LLM
                  adoption using two complementary identification strategies.
                  First, we compare English-as-a-Foreign-Language (EFL) and
                  non-EFL researchers around a major increase in LLM capability,
                  when frontier models began to perform at a level comparable to
                  average humans. We treat EFL status as a proxy for higher
                  LLM-adoption intensity because generative AI lowers
                  English-writing costs more for non-native English researchers.
                  Second, we replace the binary shock indicator with a continuous
                  measure of frontier AI capability over time, which allows us to
                  trace how successive improvements in LLM affect business
                  research output and novelty. Across both designs, higher LLM
                  exposure increases research output while reducing novelty. In
                  the baseline difference-in-differences design, EFL paper counts
                  rise by 34.3 percent relative to non-EFL counts, while average
                  novelty falls by about 9 percent. The main effects are largely
                  driven by new entrants, and that publication pressure amplifies
                  the novelty decline. At the same time, screening institutions
                  mitigate the novelty loss: published papers show no detectable
                  decline, and the decline is substantially smaller among
                  top-school authors.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="experience" data-section className="story-section selected-section">
          <SectionBackground {...sectionBackgrounds.experience} />
          <div className="selected-inner">
            <div className="about-heading compact-heading fade-up">
              <h2>Selected working experience & Projects</h2>
              <span aria-hidden="true" />
            </div>

            <div className="experience-card-list fade-up">
              {profile.professionalExperience.map((item) => (
                <article key={`${item.role}-${item.period}`} className="experience-card">
                  <time>{item.period}</time>
                  <h3>{item.role}</h3>
                  <p>
                    {item.companyUrl ? (
                      <a href={item.companyUrl} target="_blank" rel="noreferrer">
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                    {" / "}
                    {item.location}
                  </p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}

              {profile.hackathonExperience.map((item) => (
                <article key={`${item.event}-${item.location}`} className="experience-card">
                  <time>{item.location}</time>
                  <h3>{item.event}</h3>
                  <p>
                    {item.role}
                    {item.award ? ` / ${item.award}` : ""}
                  </p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}

              <article className="experience-card">
                <time>Product project</time>
                <h3>
                  <a
                    href="https://github.com/DonkeyKing01/BriefyPet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    BriefyPet
                  </a>
                </h3>
                <p>AI-powered desktop reading companion / Rust, Tauri, TypeScript</p>
                <ul>
                  <li>
                    Built a desktop reading workflow that filters RSS sources and
                    surfaces high-value information.
                  </li>
                  <li>
                    Integrated LLM summarization to turn long-form feeds into
                    concise, reviewable briefs.
                  </li>
                  <li>
                    Designed the product around knowledge management and
                    productivity use cases, with a public demo site.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="coursework" data-section className="story-section selected-section">
          <SectionBackground {...sectionBackgrounds.coursework} />
          <div className="selected-inner">
            <div className="about-heading fade-up">
              <h2>Selected Course works</h2>
              <span aria-hidden="true" />
            </div>

            <div className="course-grid fade-up">
              {profile.courseCategories.map((category) => (
                <article key={category.category} className="course-card">
                  <h3>{category.category}</h3>
                  <ul>
                    {category.courses.map((course) => (
                      <li key={course.name}>
                        <span>{course.name}</span>
                        {course.note && <strong>{course.note}</strong>}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="posts" data-section className="story-section selected-section">
          <SectionBackground {...sectionBackgrounds.posts} />
          <div className="selected-inner">
            <div className="about-heading fade-up">
              <h2>Posts and Public goods</h2>
              <span aria-hidden="true" />
            </div>

            <div className="experience-card-list fade-up">
              <article className="experience-card">
                <time>Public notes</time>
                <h3>
                  <a
                    href="https://reed2006.github.io/Awesome_Notes_Site/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Awesome Notes Site
                  </a>
                </h3>
                <p>My public course-notes website, shared openly for everyone.</p>
                <ul>
                  <li>
                    Organized course notes across economics, mathematics, AI,
                    and programming.
                  </li>
                  <li>
                    Maintained as an open knowledge base for review, reference,
                    and peer learning.
                  </li>
                </ul>
              </article>

              <article className="experience-card">
                <time>Chinese blog</time>
                <h3>
                  <a
                    href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkwNjcyMjQzMw==&scene=124#wechat_redirect"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voice of Reed
                  </a>
                </h3>
                <p>My WeChat public account for Chinese blog posts and essays.</p>
                <ul>
                  <li>
                    Publishes Chinese writing on academic life, technology, and
                    personal observations.
                  </li>
                  <li>
                    Serves as a public outlet for longer-form notes outside the
                    main academic homepage.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" data-section className="story-section selected-section contact-section">
          <div className="selected-inner">
            <div className="about-heading fade-up">
              <h2>Contact</h2>
              <span aria-hidden="true" />
            </div>

            <article className="selected-card contact-panel fade-up">
              <header>
                <h3>Open to research and product conversations</h3>
                <p>
                  I am open to collaborations, research opportunities, and
                  conversations about economics, AI, and information systems.
                </p>
              </header>

              <div className="overview-actions">
                <a href={`mailto:${profile.email}`} className="button-primary">
                  {profile.email}
                </a>
                {profile.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <footer>
                <span>{profile.footerNote}</span>
                <span>
                  {profile.name} / {profile.location}
                </span>
              </footer>
            </article>
          </div>
        </section>

        {primaryHackathon && (
          <section className="compact-note" aria-label="Hackathon highlight">
            <span>{primaryHackathon.award}</span>
            <strong>{primaryHackathon.event}</strong>
            <p>
              {primaryHackathon.role} / {primaryHackathon.location}
            </p>
          </section>
        )}
      </main>
    </>
  );
}
