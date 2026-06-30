import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "The Book", href: "/#book" },
  { label: "Engineering", href: "/tech" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) {
      setIsOpen(false); // Close menu for normal page links
      return;
    }

    e.preventDefault();
    const id = href.slice(2);
    setIsOpen(false); // Close menu when anchor is clicked
    
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="font-serif italic text-base text-foreground hover:opacity-70 transition-opacity"
        >
          Jeremiah Lillion
        </Link>

        {/* Desktop Menu (Hidden on mobile, flex on medium screens and up) */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
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

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-foreground p-1" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background shadow-lg absolute w-full left-0">
          <ul className="flex flex-col py-4 px-6 gap-4">
            {links.map((link) => {
              const isActive = 
                (link.href.startsWith("/#") && location.pathname === "/" && location.hash === link.href.slice(1)) ||
                (location.pathname === link.href);

              return (
                <li key={link.label}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchor(e, link.href)}
                      className={`block text-sm transition-colors ${
                        isActive ? "text-foreground font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-sm transition-colors ${
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
        </div>
      )}
    </header>
  );
}