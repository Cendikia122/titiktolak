import { Link } from "react-router-dom";
import { articles, categories, getArticlesByCategory, toCategoryParam } from "@/data/blogData";
import ArticleCard from "./ArticleCard";
import { Mail } from "lucide-react";

interface SidebarProps {
  tocItems?: { id: string; text: string }[];
}

const Sidebar = ({ tocItems }: SidebarProps) => {
  const popular = articles.slice(0, 5);
  const latest = [...articles].sort((a, b) => b.id - a.id).slice(0, 5);

  const handleTocClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const element = document.getElementById(id);
    if (!element) return;

    const navbarOffset = 96;
    const top = element.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <aside className="space-y-6">
      {/* Daftar Isi */}
      {tocItems && tocItems.length > 0 && (
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
          <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
            📋 Daftar Isi
          </h3>
          <ul className="space-y-1.5">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleTocClick(item.id)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1 pl-3 border-l-2 border-border hover:border-primary"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Kategori */}
      <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
        <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          📂 Kategori
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => {
            const count = getArticlesByCategory(cat).length;
            const icons: Record<string, string> = {
              "Digital Marketing": "📈",
              "Artificial Intelligence": "🤖",
              "Web Development": "💻",
              "Programming": "⌨️",
              "Tutorial": "📚",
            };
            return (
              <li key={cat}>
                <Link
                  to={`/blog?cat=${toCategoryParam(cat)}`}
                  className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5"
                >
                  <span className="flex items-center gap-2">
                    <span>{icons[cat] || "📄"}</span> {cat}
                  </span>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium">{count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Popular Post */}
      <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
        <h3 className="text-base font-bold text-foreground mb-4">🔥 Popular Post</h3>
        <div className="space-y-4">
          {popular.map((a, i) => (
            <div key={a.id} className="flex gap-3 group">
              <span className="text-2xl font-bold text-accent/60 leading-none flex-shrink-0 w-6">{i + 1}</span>
              <Link to={`/blog/${a.slug}`} className="min-w-0">
                <h4 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                  {a.title}
                </h4>
                <span className="text-xs text-muted-foreground mt-1 block">{a.date}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Artikel Terbaru */}
      <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
        <h3 className="text-base font-bold text-foreground mb-4">🕐 Artikel Terbaru</h3>
        <div className="space-y-4">
          {latest.map((a) => (
            <ArticleCard key={a.id} article={a} variant="horizontal" />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-foreground rounded-xl p-5 text-primary-foreground shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Mail size={16} className="text-primary-foreground" />
          </div>
        </div>
        <h3 className="text-base font-bold mb-1">Newsletter TitikTolak</h3>
        <p className="text-xs opacity-80 mb-4">
          Dapatkan artikel terbaru langsung di inbox kamu setiap minggu.
        </p>
        <input
          type="email"
          placeholder="Email kamu..."
          className="w-full px-3 py-2 rounded-lg text-sm bg-white/10 border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-primary-foreground mb-3"
        />
        <button className="w-full bg-destructive hover:bg-destructive/90 text-white text-sm font-semibold py-2 rounded-lg transition-colors">
          Berlangganan
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
