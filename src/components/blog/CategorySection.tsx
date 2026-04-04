import { getArticlesByCategory, categories } from "@/data/blogData";
import ArticleCard from "./ArticleCard";

const CategorySection = () => {
  return (
    <div className="space-y-12">
      {categories.map((cat) => {
        const catArticles = getArticlesByCategory(cat);
        if (catArticles.length === 0) return null;
        const main = catArticles[0];
        const side = catArticles.slice(1, 3);

        return (
          <section key={cat} className="scroll-fade">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {cat === "Digital Marketing" && "📈"}{" "}
              {cat === "Artificial Intelligence" && "🤖"}{" "}
              {cat === "Web Development" && "🌐"}{" "}
              {cat === "Programming" && "💻"}{" "}
              {cat}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3">
                <ArticleCard article={main} variant="large" />
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 gap-4">
                {side.map((a) => (
                  <ArticleCard key={a.id} article={a} variant="medium" />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default CategorySection;
