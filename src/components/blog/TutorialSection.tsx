import { articles } from "@/data/blogData";
import ArticleCard from "./ArticleCard";

const TutorialSection = () => {
  const tutorials = articles.filter(a => a.category === "Web Development" || a.category === "Programming").slice(0, 3);

  return (
    <section className="scroll-fade">
      <h2 className="text-2xl font-bold text-foreground mb-6">📚 Tutorial</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((a) => (
          <ArticleCard key={a.id} article={a} variant="medium" />
        ))}
      </div>
    </section>
  );
};

export default TutorialSection;
