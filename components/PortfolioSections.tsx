import Image from "next/image";
import { ArrowUpRight, CodeXml, ExternalLink } from "lucide-react";
import { clientProjects, featuredProjects, secondaryProjects, skillGroups, socials } from "./data";

function SectionHeading({ index, eyebrow, title, intro, id }: { index: string; eyebrow: string; title: string; intro?: string; id?: string }) {
  return (
    <div className="section-heading">
      <div className="section-number">{index} <span>—</span> {eyebrow}</div>
      <div className="section-heading-line">
        <h2 id={id}>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  );
}

function ProjectActions({ github, live }: { github?: string; live?: string }) {
  return (
    <div className="project-actions">
      {live && <a href={live} target="_blank" rel="noreferrer"><span>Visit project</span><ExternalLink size={15} aria-hidden="true" /></a>}
      {github && <a href={github} target="_blank" rel="noreferrer"><span>Source code</span><CodeXml size={15} aria-hidden="true" /></a>}
    </div>
  );
}

function ProjectArtwork({ tile, secondary = false }: { tile: number; secondary?: boolean }) {
  const artwork = secondary
    ? ["ai-shell", "mirofish", "scraper", "invoice"][tile]
    : ["resyl", "renatus", "echo", "tower", "shoehub", "saloni", "fit-saket"][tile];
  return (
    <span
      className={`artwork-stamp${secondary ? " artwork-stamp-secondary" : ""}`}
      aria-hidden="true"
    ><Image src={`/${secondary ? "secondary-thumbnails" : "project-thumbnails"}/${artwork}.jpg`} alt="" fill sizes={secondary ? "54px" : "58px"} /></span>
  );
}

export function Highlights() {
  return (
    <section className="highlights" aria-label="Professional highlights">
      <div className="highlights-inner wrap">
        <div><span className="highlight-mark">01</span><span>Founder, Resyl</span></div>
        <div><span className="highlight-mark">02</span><span>AI products & agent workflows</span></div>
        <div><span className="highlight-mark">03</span><span>Mathematics & Computing, NSUT</span></div>
        <div><span className="highlight-mark">04</span><span>Independent client delivery</span></div>
      </div>
    </section>
  );
}

export function FeaturedWork() {
  const [resyl, ...projects] = featuredProjects;
  return (
    <section className="section wrap" id="work" aria-labelledby="work-title">
      <SectionHeading id="work-title" index="01" eyebrow="Selected engineering" title="Products built to solve real problems." intro="A small selection of founder-led products and systems work." />
      <article className="project-feature">
        <div className="feature-visual">
          <Image src={resyl.image} alt={resyl.imageAlt} fill sizes="(max-width: 900px) 100vw, 58vw" className="project-image" />
          <ProjectArtwork tile={0} />
          <span className="visual-label">Resyl · Product experience</span>
        </div>
        <div className="feature-copy">
          <div className="project-category"><span className="category-line" />{resyl.category}</div>
          <h3>{resyl.name}<sup>01</sup></h3>
          <p>{resyl.description}</p>
          <div className="role-line"><span>Role</span>{resyl.role}</div>
          <ul className="detail-list">{resyl.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          <ProjectActions github={resyl.github} live={resyl.live} />
          <div className="project-note">{resyl.note}</div>
        </div>
      </article>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={`project-card project-card-${project.name.toLowerCase()}`} key={project.name}>
            <div className="project-visual">
              {project.name === "ECHO" ? (
                <>
                  <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" className="project-image illustration-image" />
                  <span className="visual-label">Illustrative cover · no product interface capture available</span>
                </>
              ) : (
                <>
                  <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" className="project-image" />
                  <ProjectArtwork tile={index + 1} />
                  <span className="visual-label">{project.note}</span>
                </>
              )}
            </div>
            <div className="project-copy">
              <div className="project-category"><span className="category-line" />{project.category}</div>
              <h3>{project.name}<sup>0{index + 2}</sup></h3>
              <p>{project.description}</p>
              <div className="role-line"><span>Role</span>{project.role}</div>
              <ul className="detail-list">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              <ProjectActions github={project.github} live={project.live} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ClientWork() {
  return (
    <section className="section section-paper" id="clients" aria-labelledby="clients-title">
      <div className="wrap">
        <SectionHeading id="clients-title" index="02" eyebrow="Client work" title="Built for businesses, built to ship." intro="Selected websites for independent businesses. Each preview uses a real project capture." />
        <div className="client-grid">
          {clientProjects.map((project, index) => (
            <article className="client-card" key={project.name}>
              <div className="client-visual">
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" className="client-image" />
                <ProjectArtwork tile={index + 4} />
                <span className="client-count">0{index + 1}</span>
              </div>
              <div className="client-copy">
                <div className="client-category">{project.category}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ProjectActions github={project.github} live={project.live} />
              </div>
            </article>
          ))}
        </div>
        <a className="more-link" href="https://github.com/thisisaman408?tab=repositories" target="_blank" rel="noreferrer">
          Explore more client builds on GitHub <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function MoreWork() {
  return (
    <section className="section wrap" id="more-work">
      <SectionHeading index="03" eyebrow="Other engineering" title="More work, in brief." intro="A few other systems and tools, kept concise so the main case studies can breathe." />
      <div className="secondary-list">
        {secondaryProjects.map((project, index) => (
          <article className="secondary-row" key={project.name}>
            <span className="secondary-index">0{index + 1}</span>
            <ProjectArtwork tile={project.imageTile} secondary />
            <div className="secondary-title"><h3>{project.name}</h3><span>{project.domain}</span></div>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><CodeXml size={17} /><span>Code</span><ArrowUpRight size={14} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TechnicalFocus() {
  return (
    <section className="section section-ink" id="focus">
      <div className="wrap">
        <SectionHeading index="04" eyebrow="Technical focus" title="A practical toolkit." intro="Tools and foundations reflected in the projects above." />
        <div className="skill-list">
          {skillGroups.map((group, index) => (
            <div className="skill-row" key={group.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutContact() {
  return (
    <>
      <section className="section about-section wrap" id="about">
        <div className="about-label"><span className="section-number">05 — About</span><h2>Product thinking.<br />Hands-on engineering.</h2></div>
        <div className="about-copy">
          <p>I’m Aman, a founder and full-stack engineer working at the intersection of AI product development and reliable systems. At Resyl, I’m building a personal AI memory product around a simple idea: captured context should be easy to find when it matters.</p>
          <p>My work spans product decisions, interface design, backend architecture, and agent workflows. I studied Mathematics & Computing at Netaji Subhas University of Technology (NSUT) and enjoy taking products from an unclear problem to a working release.</p>
          <div className="about-links"><a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a><a href={socials.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a></div>
        </div>
      </section>
      <footer className="contact-section" id="contact">
        <div className="wrap contact-inner">
          <div className="section-number">06 — Contact</div>
          <h2>Have a good problem<br />to work on?</h2>
          <p>I’m open to thoughtful conversations about AI products, engineering roles, and collaborations.</p>
          <a className="button button-light" href={socials.email}>Email Aman <ArrowUpRight size={16} aria-hidden="true" /></a>
          <div className="footer-bottom"><a className="wordmark footer-wordmark" href="#top">AK<span>.</span></a><span>© {new Date().getFullYear()} Aman Kumar</span><div><a href={socials.linkedin}>LinkedIn</a><a href={socials.github}>GitHub</a><a href={socials.email}>Email</a></div></div>
        </div>
      </footer>
    </>
  );
}
