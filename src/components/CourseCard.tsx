import { Link } from "react-router-dom";

interface CourseCardProps {
  image: string;
  category: string;
  title: string;
}

const toSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const CourseCard = ({ image, category, title }: CourseCardProps) => {
  return (
    <Link
      to={`/course/${toSlug(title)}`}
      className="rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-pointer block"
    >
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {category}
        </span>
        <h3 className="text-base font-semibold text-foreground mt-1 leading-snug">{title}</h3>
      </div>
    </Link>
  );
};

export default CourseCard;
