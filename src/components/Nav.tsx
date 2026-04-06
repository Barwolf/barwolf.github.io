import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#work" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/resume" },
];

export function Nav() {
  const location = useLocation();

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="text-sm font-semibold tracking-wide text-foreground">
          Portfolio
        </Link>
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className={`text-sm transition-colors hover:text-foreground ${
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
