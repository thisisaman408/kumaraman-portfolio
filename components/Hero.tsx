import Image from "next/image";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, CodeXml } from "lucide-react";
import { socials } from "./data";

export default function Hero() {
  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> AI Product Engineer <span className="eyebrow-divider">·</span> Founder <span className="eyebrow-divider">·</span> Full-Stack Systems Builder</div>
        <h1 id="hero-title">I build AI products <span>and the systems behind them.</span></h1>
        <p className="hero-intro">
          I’m Aman Kumar, founder of Resyl. I work across AI applications, agentic workflows, backend systems, and full-stack products—turning difficult problems into software people can use.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore selected work <ArrowDown size={16} aria-hidden="true" /></a>
          <a className="text-link" href={socials.github} target="_blank" rel="noreferrer">GitHub <CodeXml size={16} aria-hidden="true" /></a>
          <a className="text-link" href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <BriefcaseBusiness size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-image-wrap">
        <Image
          className="portrait"
          src="/formal2.png"
          alt="Aman Kumar"
          width={1103}
          height={1426}
          priority
          sizes="(max-width: 700px) 74px, 90px"
        />
        <div className="hero-caption">
          <span className="hero-caption-kicker">Building Resyl</span>
          <span className="hero-caption-name">Personal AI memory, made useful.</span>
          <a href="https://resyl.app" target="_blank" rel="noreferrer" aria-label="Visit Resyl"><ArrowUpRight size={18} /></a>
        </div>
        <div className="hero-art-frame">
          <Image
            src="/screenshots/resyl.jpg"
            alt="Resyl website introducing the personal AI memory product"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            className="hero-product-image"
          />
        </div>
      </div>
    </section>
  );
}
