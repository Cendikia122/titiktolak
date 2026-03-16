import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import CourseCard from "./CourseCard";

const allCourses = [
  { category: "Economics", title: "An Overview of Economic Systems", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop" },
  { category: "History", title: "Early Human Evolution and Migration", image: "https://images.unsplash.com/photo-1461360370896-922624d12ebb?w=400&h=300&fit=crop" },
  { category: "Sociology", title: "What is Sociology?", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop" },
  { category: "Biology", title: "Disruptions in the Immune System", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop" },
  { category: "Psychology", title: "Introduction to Psychology", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" },
  { category: "Astronomy", title: "Fundamentals of Astronomy", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=300&fit=crop" },
  { category: "Chemistry", title: "Basic Chemistry Concepts", image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop" },
  { category: "Computer Science", title: "Computer Science Fundamentals", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop" },
];

const categories = ["All", "Computer Science", "Biology", "Economics", "History", "Sociology", "Psychology", "Astronomy", "Chemistry"];

const Courses = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? allCourses : allCourses.filter((c) => c.category === active);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 scroll-fade">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Jelajahi Materi Pembelajaran</h2>
          <p className="text-muted-foreground text-base">
            Pilih kategori yang sesuai dengan minat dan tujuan belajarmu
          </p>
        </div>

        <CategoryFilter categories={categories} active={active} onSelect={setActive} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {filtered.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
