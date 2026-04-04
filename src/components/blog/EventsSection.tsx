import { articles } from "@/data/blogData";
import ArticleCard from "./ArticleCard";

const EventsSection = () => {
  const featured = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <section className="scroll-fade">
      <h2 className="text-2xl font-bold text-foreground mb-6">📢 Events</h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <ArticleCard article={featured} variant="large" />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-4">
          {sideArticles.map((a) => (
            <ArticleCard key={a.id} article={a} variant="small" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
