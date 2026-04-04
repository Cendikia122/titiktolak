import { useParams, Link } from "react-router-dom";
import { getArticleBySlug, articles, authors } from "@/data/blogData";
import BlogNavbar from "@/components/blog/BlogNavbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/blog/Sidebar";
import ArticleCard from "@/components/blog/ArticleCard";
import { Calendar, User, ArrowLeft, Clock, Share2, Bookmark } from "lucide-react";
import { useMemo } from "react";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");
  const authorInfo = article ? authors[article.author] : null;

  const tocItems = useMemo(() => {
    if (!article) return [];
    const regex = /<h2\s+id="([^"]+)"[^>]*>([^<]+)<\/h2>/g;
    const items: { id: string; text: string }[] = [];
    let match;
    while ((match = regex.exec(article.content)) !== null) {
      items.push({ id: match[1], text: match[2] });
    }
    return items;
  }, [article]);

  const related = useMemo(() => {
    if (!article) return [];
    return articles
      .filter((a) => a.category === article.category && a.id !== article.id)
      .slice(0, 3);
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <BlogNavbar />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Artikel tidak ditemukan</h1>
          <Link to="/blog" className="text-primary mt-4 inline-block hover:underline">
            ← Kembali ke Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={16} /> Kembali ke Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Article Content */}
          <article className="lg:col-span-2">
            <span className="inline-block text-xs font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full">
              {article.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-4 leading-tight">
              {article.title}
            </h1>

            {/* Author + Meta row */}
            <div className="flex flex-wrap items-center gap-4 mt-5">
              {authorInfo && (
                <div className="flex items-center gap-2">
                  <img src={authorInfo.avatar} alt={authorInfo.name} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <span className="text-sm font-semibold text-foreground block leading-tight">{authorInfo.name}</span>
                    <span className="text-xs text-muted-foreground">{authorInfo.role}</span>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar size={13} /> {article.date}</span>
                <span className="flex items-center gap-1"><Clock size={13} /> {article.readTime}</span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" title="Share">
                  <Share2 size={16} />
                </button>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" title="Bookmark">
                  <Bookmark size={16} />
                </button>
              </div>
            </div>

            {/* Banner */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-56 sm:h-72 lg:h-80 object-cover rounded-xl mt-6"
            />

            {/* Article body */}
            <div
              className="prose prose-slate max-w-none mt-8
                prose-h2:text-xl prose-h2:font-bold prose-h2:text-foreground prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-li:text-muted-foreground
                prose-ul:pl-5 prose-ul:list-disc prose-ul:mb-4
                prose-strong:text-foreground
                prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:text-foreground"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            {authorInfo && (
              <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                <p className="text-xs text-muted-foreground mb-2">Ditulis oleh</p>
                <div className="flex items-start gap-4">
                  <img
                    src={authorInfo.avatar}
                    alt={authorInfo.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-foreground">{authorInfo.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{authorInfo.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{authorInfo.bio}</p>
                    <div className="flex gap-3 mt-3">
                      {authorInfo.social.x && (
                        <a href={authorInfo.social.x} className="w-8 h-8 rounded-full bg-foreground text-primary-foreground flex items-center justify-center text-xs font-bold hover:opacity-80 transition-opacity">𝕏</a>
                      )}
                      {authorInfo.social.linkedin && (
                        <a href={authorInfo.social.linkedin} className="w-8 h-8 rounded-full bg-[hsl(210,80%,45%)] text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition-opacity">in</a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Related Articles */}
            {related.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="text-xl font-bold text-foreground mb-6">📰 Artikel Terkait</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {related.map((a) => (
                    <ArticleCard key={a.id} article={a} variant="medium" />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar with TOC */}
          <div className="lg:col-span-1">
            <div className="sticky top-[80px]">
              <Sidebar tocItems={tocItems} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
