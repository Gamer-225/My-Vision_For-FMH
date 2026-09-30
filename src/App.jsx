import { useEffect } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  Compass,
  Lightbulb,
  Orbit,
  Handshake,
  Sparkles,
  Sprout,
  UsersRound,
  Wrench,
  BriefcaseBusiness,
  CalendarDays,
  MessagesSquare,
  HeartHandshake,
  Layers3,
  MoveUpRight,
  ArrowUpRight,
} from 'lucide-react'
import './App.css'

const stages = [
  { icon: Compass, title: 'Discover', text: 'Find a spark, a subject, or a new point of view.' },
  { icon: UsersRound, title: 'Connect', text: 'Meet people whose paths and interests cross yours.' },
  { icon: Handshake, title: 'Collaborate', text: 'Bring different strengths to the same table.' },
  { icon: Lightbulb, title: 'Create', text: 'Give a shared idea room to become something real.' },
  { icon: Sprout, title: 'Impact', text: 'Let what you make reach beyond the starting point.' },
]

const ecosystemNodes = [
  { name: 'People', icon: UsersRound, slot: 'node-people' },
  { name: 'Ideas', icon: Lightbulb, slot: 'node-ideas' },
  { name: 'Skills', icon: Wrench, slot: 'node-skills' },
  { name: 'Projects', icon: Layers3, slot: 'node-projects' },
  { name: 'FMH', icon: Orbit, slot: 'node-center', center: true },
  { name: 'Opportunities', icon: MoveUpRight, slot: 'node-opportunities' },
  { name: 'Events', icon: CalendarDays, slot: 'node-events' },
  { name: 'Communities', icon: MessagesSquare, slot: 'node-communities' },
  { name: 'Mentorship', icon: HeartHandshake, slot: 'node-mentorship' },
]

const conceptCards = [
  { icon: UsersRound, title: 'People to learn from', note: 'Different paths, shared curiosity', color: 'sage' },
  { icon: Layers3, title: 'Projects to join', note: 'Early ideas looking for a hand', color: 'peach' },
  { icon: BriefcaseBusiness, title: 'Opportunities nearby', note: 'Possibilities shaped around you', color: 'blue' },
  { icon: MessagesSquare, title: 'Communities to find', note: 'A place to bring your perspective', color: 'yellow' },
]

const journey = ['Interest', 'People', 'Idea', 'Collaboration', 'Project', 'Experience', 'Impact']

function Reveal({ children, className = '', delay = 0 }) {
  useEffect(() => {
    const element = document.querySelector(`[data-reveal-id="${CSS.escape(String(delay) + className)}"]`)
    if (!element) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible')
        observer.unobserve(element)
      }
    }, { threshold: 0.12 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [className, delay])

  return <div className={`reveal ${className}`} data-reveal-id={String(delay) + className} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>
}

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span className="eyebrow-mark" />{children}</p>
}

function Navbar() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="FMH vision, back to top">FMH<span>·</span></a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#vision">Vision</a>
        <a href="#ecosystem">Ecosystem</a>
        <a href="#experience">Experience</a>
        <a href="#journey">Journey</a>
        <a href="#future">Future</a>
      </nav>
      <a className="header-note" href="#final">A personal vision <ArrowDownRight size={15} aria-hidden="true" /></a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <Eyebrow>Future concept <span className="eyebrow-dot">·</span> Personal vision</Eyebrow>
        <h1 id="hero-title">My vision<br />of <span>FMH.</span></h1>
        <p className="hero-lede">I imagine FMH evolving beyond a place where people simply participate — into an ecosystem where people discover, connect, build and create meaningful impact together.</p>
        <a className="text-link" href="#vision">Explore the idea <ArrowDown size={16} aria-hidden="true" /></a>
      </div>
      <div className="hero-art" aria-label="An abstract illustration of people, ideas, and opportunities connecting">
        <div className="art-caption"><span>01 / A connected possibility</span><span>FMH, reimagined</span></div>
        <svg className="hero-lines" viewBox="0 0 560 500" fill="none" aria-hidden="true">
          <path className="draw-line line-a" d="M126 100C183 124 184 209 266 233" />
          <path className="draw-line line-b" d="M450 95C368 143 389 198 289 230" />
          <path className="draw-line line-c" d="M76 245C144 253 201 282 263 257" />
          <path className="draw-line line-d" d="M490 245C423 253 359 276 291 255" />
          <path className="draw-line line-e" d="M134 410C175 354 201 282 263 257" />
          <path className="draw-line line-f" d="M438 410C373 319 359 276 291 255" />
          <circle className="orbit-dot dot-one" cx="126" cy="100" r="5" />
          <circle className="orbit-dot dot-two" cx="450" cy="95" r="5" />
          <circle className="orbit-dot dot-three" cx="76" cy="245" r="5" />
          <circle className="orbit-dot dot-four" cx="490" cy="245" r="5" />
          <circle className="orbit-dot dot-five" cx="134" cy="410" r="5" />
          <circle className="orbit-dot dot-six" cx="438" cy="410" r="5" />
        </svg>
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-inner" />
        <div className="hero-node node-idea"><Lightbulb size={20} /><span>Ideas</span></div>
        <div className="hero-node node-people"><UsersRound size={20} /><span>People</span></div>
        <div className="hero-node node-skill"><Wrench size={18} /><span>Skills</span></div>
        <div className="hero-node node-create"><Sparkles size={19} /><span>Making</span></div>
        <div className="hero-node node-opportunity"><MoveUpRight size={19} /><span>Possibility</span></div>
        <div className="hero-node node-community"><MessagesSquare size={18} /><span>Community</span></div>
        <div className="hero-core"><span>FMH</span><small>connection<br />in motion</small></div>
        <a className="scroll-cue" href="#vision"><span>Scroll to imagine</span><ArrowDown size={14} aria-hidden="true" /></a>
      </div>
      <div className="hero-index" aria-hidden="true">A NOTE ON WHAT COULD BE <span>—</span> 2026+</div>
    </section>
  )
}

function CoreIdea() {
  return (
    <section className="core-section" id="vision" aria-labelledby="core-title">
      <div className="section-wrap core-inner">
        <Reveal className="core-heading">
          <Eyebrow>The core idea</Eyebrow>
          <h2 id="core-title">From a community<br />to an <em>ecosystem.</em></h2>
          <p>A person's journey rarely moves in a straight line. My vision is for FMH to make the connections between each next step easier to see.</p>
        </Reveal>
        <div className="stage-list">
          {stages.map(({ icon: Icon, title, text }, index) => (
            <Reveal className="stage-item" key={title} delay={index * 70}>
              <div className="stage-icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></div>
              <span className="stage-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              {index < stages.length - 1 && <ArrowRight className="stage-arrow" size={15} aria-hidden="true" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Ecosystem() {
  return (
    <section className="ecosystem-section section-wrap" id="ecosystem" aria-labelledby="ecosystem-title">
      <Reveal className="section-heading ecosystem-heading">
        <div><Eyebrow>The FMH ecosystem</Eyebrow><h2 id="ecosystem-title">Nothing meaningful<br />happens <em>in isolation.</em></h2></div>
        <p>A map of the things I imagine FMH could bring into one another's orbit. Not separate destinations, but parts of a shared landscape.</p>
      </Reveal>
      <Reveal className="ecosystem-map">
        <svg className="ecosystem-lines" viewBox="0 0 600 380" preserveAspectRatio="none" aria-hidden="true">
          <path d="M300 190L100 55M300 190L300 55M300 190L500 55M300 190L100 190M300 190L500 190M300 190L100 325M300 190L300 325M300 190L500 325" />
          <circle cx="300" cy="190" r="3" /><circle cx="100" cy="55" r="3" /><circle cx="500" cy="55" r="3" /><circle cx="100" cy="325" r="3" /><circle cx="500" cy="325" r="3" />
        </svg>
        <div className="ecosystem-grid">
          {ecosystemNodes.map(({ name, icon: Icon, slot, center }) => (
            <div className={`ecosystem-node ${slot}${center ? ' is-center' : ''}`} key={name}>
              <span className="ecosystem-icon"><Icon size={19} strokeWidth={1.7} aria-hidden="true" /></span>
              <span>{name}</span>
            </div>
          ))}
        </div>
        <p className="map-caption"><span className="map-caption-dot" /> One idea of what could connect</p>
      </Reveal>
    </section>
  )
}

function ExperiencePreview() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-wrap experience-inner">
        <Reveal className="experience-copy">
          <Eyebrow>How I imagine the experience</Eyebrow>
          <h2 id="experience-title">A home that<br />opens <em>doors.</em></h2>
          <p>Not another feed to keep up with. A thoughtful starting point for the people, projects, and possibilities that could move your journey forward.</p>
          <span className="concept-stamp"><Sparkles size={13} aria-hidden="true" /> Concept visualization — not an existing FMH feature</span>
        </Reveal>
        <Reveal className="preview-window" delay={100}>
          <div className="preview-topbar"><span className="preview-brand">FMH<span>·</span></span><span className="preview-label">AN IMAGINED INTERFACE</span><span className="preview-avatar">Y</span></div>
          <div className="preview-content">
            <div className="preview-greeting"><span>MONDAY, 9:41 AM</span><h3>Good evening,<br /><em>Future Member.</em></h3><p>Your FMH journey, at your own pace.</p></div>
            <div className="preview-actions" aria-label="Imagined starting points"><span>Discover something new <ArrowRight size={15} /></span><span>Continue a project <ArrowRight size={15} /></span><span>Meet people <ArrowRight size={15} /></span><span>Explore opportunities <ArrowRight size={15} /></span></div>
            <div className="preview-divider"><span>A few possible next steps</span><span>01 — 04</span></div>
            <div className="concept-grid">
              {conceptCards.map(({ icon: Icon, title, note, color }, index) => (
                <article className={`concept-card concept-${color}`} key={title}>
                  <div className="concept-card-top"><Icon size={17} strokeWidth={1.7} aria-hidden="true" /><span>0{index + 1}</span></div>
                  <h4>{title}</h4><p>{note}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section className="journey-section section-wrap" id="journey" aria-labelledby="journey-title">
      <Reveal className="section-heading journey-heading">
        <div><Eyebrow>One person → many possibilities</Eyebrow><h2 id="journey-title">A small beginning<br />can <em>travel far.</em></h2></div>
        <p>In this vision, participation is a starting point. The real possibility is what a person discovers, learns, and makes along the way.</p>
      </Reveal>
      <Reveal className="journey-path">
        <div className="journey-line" aria-hidden="true"><span /></div>
        {journey.map((step, index) => <div className={`journey-stop${index === journey.length - 1 ? ' journey-end' : ''}`} key={step}><span className="journey-dot">{index === journey.length - 1 ? <Sparkles size={14} /> : `0${index + 1}`}</span><span className="journey-label">{step}</span></div>)}
      </Reveal>
      <div className="journey-note"><span>From showing up</span><ArrowRight size={16} aria-hidden="true" /><span>to making a difference</span></div>
    </section>
  )
}

const pillars = [
  { number: '01', title: 'Connect', text: 'Bring people with complementary interests together.', icon: UsersRound, tone: 'pillar-green' },
  { number: '02', title: 'Create', text: 'Turn ideas into projects and experiments.', icon: Lightbulb, tone: 'pillar-orange' },
  { number: '03', title: 'Grow', text: 'Help people learn through people, projects and experience.', icon: Sprout, tone: 'pillar-blue' },
  { number: '04', title: 'Impact', text: 'Create outcomes that extend beyond the platform.', icon: Orbit, tone: 'pillar-yellow' },
]

function Pillars() {
  return (
    <section className="pillars-section" id="future" aria-labelledby="pillars-title">
      <div className="section-wrap pillars-inner">
        <Reveal className="pillars-intro"><Eyebrow>My vision for the future</Eyebrow><h2 id="pillars-title">Four ideas I keep<br />coming <em>back to.</em></h2><p>Not a roadmap. A compass for the kind of community I hope FMH could become.</p></Reveal>
        <div className="pillar-grid">
          {pillars.map(({ number, title, text, icon: Icon, tone }, index) => (
            <Reveal className={`pillar-card ${tone}`} key={title} delay={index * 80}>
              <div className="pillar-card-meta"><span>{number} / 04</span><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></div>
              <h3>{title}</h3><p>{text}</p><span className="pillar-mark" aria-hidden="true">↗</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function BiggerPicture() {
  return (
    <section className="bigger-section" aria-labelledby="bigger-title">
      <div className="section-wrap bigger-inner">
        <Reveal className="bigger-heading"><Eyebrow light>The bigger picture</Eyebrow><h2 id="bigger-title">Many starting points.<br /><em>One shared momentum.</em></h2></Reveal>
        <Reveal className="big-diagram">
          <div className="diagram-origin"><span className="diagram-node fmh-node">FMH</span></div>
          <div className="diagram-connectors" aria-hidden="true"><span /><span /><span /></div>
          <div className="diagram-branches"><div className="branch-node">People</div><div className="branch-node">Ideas</div><div className="branch-node">Opportunities</div></div>
          <div className="diagram-merge" aria-hidden="true"><span /></div>
          <div className="diagram-outcomes"><div className="outcome-node">Collaboration</div><div className="outcome-arrow"><ArrowDown size={18} /></div><div className="outcome-node">Projects</div><div className="outcome-arrow"><ArrowDown size={18} /></div><div className="outcome-node outcome-impact">Impact <Sparkles size={15} /></div></div>
          <p className="diagram-footnote">A possibility, drawn from my perspective</p>
        </Reveal>
      </div>
    </section>
  )
}

function FinalVision() {
  return (
    <section className="final-section section-wrap" id="final" aria-labelledby="final-title">
      <Reveal className="final-content">
        <Eyebrow>And this is where it leads</Eyebrow>
        <h2 id="final-title">FMH, as I imagine it,<br />is <em>not just a destination.</em></h2>
        <p>It is a system that helps people discover each other, turn ideas into action, and create things that matter.</p>
        <a className="final-seal" href="#top"><span>This is my vision.</span><ArrowUpRightIcon /></a>
      </Reveal>
      <div className="final-side-note"><span>PERSONAL INTERPRETATION</span><span>01 — A FUTURE CONCEPT</span></div>
    </section>
  )
}

function ArrowUpRightIcon() {
  return <ArrowUpRight className="seal-arrow" size={19} aria-hidden="true" />
}

function Footer() {
  return <footer className="site-footer section-wrap"><a className="wordmark" href="#top">FMH<span>·</span></a><p>Concept visualization <span>·</span> Personal interpretation</p><a href="#top" className="back-top">Back to beginning <ArrowDown size={14} aria-hidden="true" /></a></footer>
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreIdea />
        <Ecosystem />
        <ExperiencePreview />
        <Journey />
        <Pillars />
        <BiggerPicture />
        <FinalVision />
      </main>
      <Footer />
    </>
  )
}

export default App
