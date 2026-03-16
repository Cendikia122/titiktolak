interface CategoryFilterProps {
  categories: string[];
  active: string;
  onSelect: (cat: string) => void;
}

const CategoryFilter = ({ categories, active, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
            active === cat
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-muted-foreground border-border hover:bg-muted"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
