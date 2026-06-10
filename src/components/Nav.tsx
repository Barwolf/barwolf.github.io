import { Link, useLocation, useNavigate } from "react-router-dom";

// Updated to reflect your new page structure
const links = [
  { label: "The Book", href: "/#book" },
  { label: "Tech", href: "/tech" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a standard page link (like /tech or /resume), let React Router handle it normally
    if (!href.startsWith("/#")) return;

    // If it's an anchor link (like /#book or /#contact), handle the scroll
    e.preventDefault();
    const id = href.slice(2);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Changed from "Portfolio" to your name for a stronger personal brand */}
        <Link to="/" className="text-sm font-bold tracking-wide text-foreground uppercase">
          Jeremiah Lillion
        </Link>
        <ul className="flex items-center gap-8">
          {links.map((link) => {
            // Determine if the current link is active
            const isActive = 
              (link.href.startsWith("/#") && location.pathname === "/" && location.hash === link.href.slice(1)) ||
              (location.pathname === link.href);

            return (
              <li key={link.label}>
                {link.href.startsWith("/#") ? (
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchor(e, link.href)}
                    className={`text-sm transition-colors hover:text-foreground ${
                      isActive ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm transition-colors hover:text-foreground ${
                      isActive ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}