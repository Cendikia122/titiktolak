import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Produk", href: "/#produk" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "/#kontak" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center font-bold text-sm text-foreground">
            TT
          </div>
          <span className="text-lg font-semibold text-foreground">TitikTolak</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.href === "/blog"
              ? location.pathname.startsWith("/blog")
              : link.href === "/"
                ? location.pathname === "/"
                : false;
            return (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;