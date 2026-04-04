import { Link } from "react-router-dom";
import { Article } from "@/data/blogData";
import { Calendar, User } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  variant?: "large" | "medium" | "small" | "horizontal";
}

const ArticleCard = ({ article, variant = "medium" }: ArticleCardProps) => {
  if (variant === "horizontal") {
    return (
      <Link to={`/blog/${article.slug}`} className="flex gap-3 group">
        <img
          src={article.image}
          alt={article.title}
          className="w-20 h-16 rounded-lg object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <h4 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h4>
          <span className="text-xs text-muted-foreground mt-1 block">{article.date}</span>
        </div>
      </Link>
    );
  }

  if (variant === "large") {
    return (
      <Link to={`/blog/${article.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-xl shadow-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="text-xs font-semibold bg-primary/80 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <h2 className="text-xl font-bold mt-3 leading-snug group-hover:underline">
              {article.title}
            </h2>
            <p className="text-sm opacity-90 mt-2 line-clamp-2">{article.description}</p>
            <div className="flex items-center gap-4 mt-3 text-xs opacity-80">
              <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
              <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "small") {
    return (
      <Link to={`/blog/${article.slug}`} className="flex gap-3 group border-b border-border pb-3 last:border-0 last:pb-0">
        <img
          src={article.image}
          alt={article.title}
          className="w-24 h-[72px] rounded-lg object-cover flex-shrink-0"
        />
        <div className="min-w-0 flex flex-col justify-center">
          <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
            {article.title}
          </h4>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <span>{article.date}</span>
          </div>
        </div>
      </Link>
    );
  }

  // medium (default)
  return (
    <Link to={`/blog/${article.slug}`} className="group block">
      <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
        <div className="overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <span className="text-xs font-medium text-primary bg-secondary px-2 py-0.5 rounded-full">
            {article.category}
          </span>
          <h3 className="text-base font-semibold mt-2 text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
            {article.title}
          </h3>
          <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
