import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BlogNavbar from "@/components/blog/BlogNavbar";
import Footer from "@/components/Footer";
import EventsSection from "@/components/blog/EventsSection";
import TutorialSection from "@/components/blog/TutorialSection";
import CategorySection from "@/components/blog/CategorySection";
import Sidebar from "@/components/blog/Sidebar";
import ArticleCard from "@/components/blog/ArticleCard";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { searchArticles, articles, getArticlesByCategory, getCategoryByParam } from "@/data/blogData";
import { Search, X } from "lucide-react";

const BlogHome = () => {
  const scrollRef = useScrollAnimation();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const activeCategoryParam = searchParams.get("cat");
  const activeCategory = activeCategoryParam ? getCategoryByParam(activeCategoryParam) : undefined;
  const searchResults = searchQuery.length >= 2 ? searchArticles(searchQuery) : [];
  const categoryResults = activeCategory ? getArticlesByCategory(activeCategory) : [];

  return (
    <div className="min-h-screen bg-background" ref={scrollRef}>
      <BlogNavbar />

      {/* Blog Hero / Search Banner */}
      <div className="bg-gradient-to-br from-secondary via-secondary/60 to-accent/30 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Blog TitikTolak
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-xl mx-auto">
            Temukan insight terbaru seputar teknologi, programming, AI, dan digital marketing.
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearching(e.target.value.length >= 2);
              }}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-border bg-card shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(""); setIsSearching(false); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {isSearching ? (
          <div>
            <h2 className="text-lg font-bold text-foreground mb-6">
              Hasil pencarian untuk "<span className="text-primary">{searchQuery}</span>" ({searchResults.length} artikel)
            </h2>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((a) => (
                  <ArticleCard key={a.id} article={a} variant="medium" />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Tidak ada artikel ditemukan. Coba kata kunci lain.</p>
              </div>
            )}
          </div>
        ) : activeCategory ? (
          <div>
            <h2 className="text-lg font-bold text-foreground mb-6">
              Kategori: <span className="text-primary">{activeCategory}</span> ({categoryResults.length} artikel)
            </h2>
            {categoryResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {categoryResults.map((article) => (
                  <ArticleCard key={article.id} article={article} variant="medium" />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Belum ada artikel untuk kategori ini.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-14">
              <EventsSection />
              <TutorialSection />
              <CategorySection />
            </div>
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-[80px]">
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogHome;
