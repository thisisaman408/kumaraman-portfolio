import { ArrowUpRight } from "lucide-react";
import { socials } from "./data";
import BrandMark from "./BrandMark";

const links = [
  ["Work", "#work"],
  ["Client work", "#clients"],
  ["About", "#about"],
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="nav-shell">
        <a className="wordmark" href="#top" aria-label="Aman Kumar, home">
          <BrandMark />
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a className="nav-contact" href={socials.email}>Say hello <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </nav>
    </header>
  );
}
