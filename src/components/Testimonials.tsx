import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "TitikTolak benar-benar mengubah cara saya belajar. Materi yang terstruktur dan mudah dipahami.",
    name: "Ahmad Rizky",
    role: "Mahasiswa Teknik",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Platform terbaik untuk belajar mandiri. Saya bisa belajar kapan saja dengan kecepatan sendiri.",
    name: "Dina Safitri",
    role: "Profesional Muda",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Kualitas materi sangat baik dan selalu up-to-date. Sangat direkomendasikan!",
    name: "Budi Santoso",
    role: "Guru SMA",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Mentoring 1-on-1 sangat membantu saya memahami konsep yang sulit. Terima kasih TitikTolak!",
    name: "Siti Nurhaliza",
    role: "Data Analyst",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Kurikulum yang terstruktur membuat proses belajar jadi lebih efisien dan menyenangkan.",
    name: "Reza Firmansyah",
    role: "Software Developer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Sertifikat dari TitikTolak sangat dihargai oleh perusahaan tempat saya bekerja.",
    name: "Linda Permata",
    role: "HR Manager",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
    rating: 5,
  },
];

const VISIBLE = 3;

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const totalPages = Math.ceil(testimonials.length / VISIBLE);
  const visible = testimonials.slice(page * VISIBLE, page * VISIBLE + VISIBLE);

  const goNext = () => {
    if (page < totalPages - 1) {
      setDirection("right");
      setPage(page + 1);
    }
  };

  const goPrev = () => {
    if (page > 0) {
      setDirection("left");
      setPage(page - 1);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 scroll-fade">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-0">Apa Kata Mereka?</h2>
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              disabled={page === totalPages - 1}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          key={page}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {visible.map((t, i) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl p-6 shadow-sm testimonial-slide-enter"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > page ? "right" : "left"); setPage(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === page ? "bg-primary w-6" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
