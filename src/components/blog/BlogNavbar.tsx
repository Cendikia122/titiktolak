import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const blogNavLinks = [
  { label: "Home", href: "/" },
  { label: "Tutorial", href: "/blog?cat=tutorial" },
  { label: "Digital Marketing", href: "/blog?cat=digital-marketing" },
  { label: "Web Development", href: "/blog?cat=web-development" },
  { label: "News & Update", href: "/blog?cat=news" },
  { label: "Journal", href: "/blog?cat=journal" },
];

const BlogNavbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-md shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[64px]">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs text-foreground">
            TT
          </div>
          <span className="text-lg font-semibold text-foreground">TitikTolak</span>
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full ml-1">Blog</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {blogNavLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </li>
        </ul>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {searchOpen && (
        <div className="hidden lg:block border-t border-border px-6 py-3 bg-card">
          <div className="max-w-7xl mx-auto">
            <input
              type="text"
              placeholder="Cari artikel..."
              className="w-full max-w-md px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              autoFocus
            />
          </div>
        </div>
      )}

      {open && (
        <div className="lg:hidden bg-card border-t border-border px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {blogNavLinks.map((link) => (
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

export default BlogNavbar;
