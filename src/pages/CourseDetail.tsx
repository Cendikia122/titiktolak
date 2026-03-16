import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BarChart3, Star, ChevronDown, ChevronUp, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const courseData: Record<string, {
  category: string;
  title: string;
  rating: number;
  students: number;
  duration: string;
  level: string;
  description: string;
  image: string;
  objectives: string[];
  curriculum: { title: string; lessons: number; duration: string }[];
  instructor: { name: string; role: string; bio: string; avatar: string };
}> = {
  "an-overview-of-economic-systems": {
    category: "Economics",
    title: "An Overview of Economic Systems",
    rating: 4.8,
    students: 2847,
    duration: "8 minggu",
    level: "Pemula - Menengah",
    description: "Pelajari berbagai sistem ekonomi yang ada di dunia, mulai dari ekonomi pasar, ekonomi terencana, hingga ekonomi campuran. Pahami bagaimana sistem ekonomi mempengaruhi kehidupan sehari-hari dan pengambilan keputusan ekonomi.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=400&fit=crop",
    objectives: [
      "Memahami konsep dasar sistem ekonomi",
      "Menganalisis perbedaan sistem ekonomi pasar dan terencana",
      "Mengevaluasi kelebihan dan kekurangan setiap sistem",
      "Memahami peran pemerintah dalam ekonomi",
      "Mengidentifikasi sistem ekonomi di berbagai negara",
      "Menerapkan konsep ekonomi dalam kehidupan sehari-hari",
    ],
    curriculum: [
      { title: "Pengenalan Sistem Ekonomi", lessons: 4, duration: "1 minggu" },
      { title: "Sistem Ekonomi Pasar", lessons: 5, duration: "2 minggu" },
      { title: "Sistem Ekonomi Terencana", lessons: 5, duration: "2 minggu" },
      { title: "Sistem Ekonomi Campuran", lessons: 5, duration: "2 minggu" },
      { title: "Analisis dan Aplikasi", lessons: 5, duration: "1 minggu" },
    ],
    instructor: {
      name: "Dr. Sarah Johnson",
      role: "Professor of Economics",
      bio: "Professor di bidang Ekonomi dengan pengalaman lebih dari 15 tahun dalam mengajar dan penelitian sistem ekonomi global.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    },
  },
  "early-human-evolution-and-migration": {
    category: "History",
    title: "Early Human Evolution and Migration",
    rating: 4.7,
    students: 2103,
    duration: "6 minggu",
    level: "Pemula",
    description: "Telusuri perjalanan evolusi manusia dan migrasi awal yang membentuk peradaban dunia.",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12ebb?w=700&h=400&fit=crop",
    objectives: ["Memahami teori evolusi manusia", "Menganalisis pola migrasi awal", "Menghubungkan evolusi dengan peradaban modern"],
    curriculum: [
      { title: "Asal Usul Manusia", lessons: 4, duration: "2 minggu" },
      { title: "Migrasi dan Adaptasi", lessons: 5, duration: "2 minggu" },
      { title: "Peradaban Awal", lessons: 4, duration: "2 minggu" },
    ],
    instructor: { name: "Prof. Ahmad Rizky", role: "Historian", bio: "Sejarawan dengan fokus pada sejarah peradaban kuno.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
  },
  "what-is-sociology": {
    category: "Sociology",
    title: "What is Sociology?",
    rating: 4.6,
    students: 1892,
    duration: "5 minggu",
    level: "Pemula",
    description: "Pengantar sosiologi yang membahas struktur sosial, interaksi, dan dinamika masyarakat.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=400&fit=crop",
    objectives: ["Memahami konsep dasar sosiologi", "Menganalisis struktur sosial", "Memahami dinamika kelompok"],
    curriculum: [
      { title: "Pengantar Sosiologi", lessons: 4, duration: "1 minggu" },
      { title: "Struktur Sosial", lessons: 5, duration: "2 minggu" },
      { title: "Dinamika Masyarakat", lessons: 4, duration: "2 minggu" },
    ],
    instructor: { name: "Dr. Maya Putri", role: "Sosiolog", bio: "Dosen sosiologi dengan penelitian tentang dinamika sosial.", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face" },
  },
  "disruptions-in-the-immune-system": {
    category: "Biology",
    title: "Disruptions in the Immune System",
    rating: 4.9,
    students: 3201,
    duration: "7 minggu",
    level: "Menengah",
    description: "Pelajari sistem imun tubuh manusia dan gangguan yang dapat terjadi.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&h=400&fit=crop",
    objectives: ["Memahami komponen sistem imun", "Menganalisis gangguan autoimun", "Memahami respons imun"],
    curriculum: [
      { title: "Dasar Sistem Imun", lessons: 5, duration: "2 minggu" },
      { title: "Respons Imun", lessons: 5, duration: "2 minggu" },
      { title: "Gangguan Imun", lessons: 5, duration: "3 minggu" },
    ],
    instructor: { name: "Dr. Budi Santoso", role: "Immunologist", bio: "Peneliti imunologi dengan publikasi internasional.", avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face" },
  },
  "introduction-to-psychology": {
    category: "Psychology",
    title: "Introduction to Psychology",
    rating: 4.7,
    students: 4521,
    duration: "8 minggu",
    level: "Pemula",
    description: "Pengantar psikologi yang membahas perilaku dan proses mental manusia.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=400&fit=crop",
    objectives: ["Memahami dasar psikologi", "Menganalisis perilaku manusia", "Memahami proses kognitif"],
    curriculum: [
      { title: "Pengantar Psikologi", lessons: 4, duration: "2 minggu" },
      { title: "Perilaku dan Kognisi", lessons: 5, duration: "3 minggu" },
      { title: "Psikologi Terapan", lessons: 5, duration: "3 minggu" },
    ],
    instructor: { name: "Dr. Lisa Wijaya", role: "Psikolog Klinis", bio: "Psikolog klinis dengan pengalaman 10 tahun.", avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964d31f?w=100&h=100&fit=crop&crop=face" },
  },
  "fundamentals-of-astronomy": {
    category: "Astronomy",
    title: "Fundamentals of Astronomy",
    rating: 4.8,
    students: 1756,
    duration: "6 minggu",
    level: "Pemula",
    description: "Jelajahi alam semesta dan pelajari dasar-dasar astronomi.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=700&h=400&fit=crop",
    objectives: ["Memahami struktur alam semesta", "Mengenal tata surya", "Memahami bintang dan galaksi"],
    curriculum: [
      { title: "Tata Surya", lessons: 4, duration: "2 minggu" },
      { title: "Bintang dan Galaksi", lessons: 5, duration: "2 minggu" },
      { title: "Kosmologi", lessons: 4, duration: "2 minggu" },
    ],
    instructor: { name: "Prof. Rudi Hartono", role: "Astrofisikawan", bio: "Astrofisikawan dengan penelitian di observatorium nasional.", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" },
  },
  "basic-chemistry-concepts": {
    category: "Chemistry",
    title: "Basic Chemistry Concepts",
    rating: 4.5,
    students: 2340,
    duration: "7 minggu",
    level: "Pemula",
    description: "Pelajari konsep dasar kimia dari atom hingga reaksi kimia.",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=700&h=400&fit=crop",
    objectives: ["Memahami struktur atom", "Mengenal ikatan kimia", "Memahami reaksi kimia"],
    curriculum: [
      { title: "Struktur Atom", lessons: 4, duration: "2 minggu" },
      { title: "Ikatan Kimia", lessons: 5, duration: "2 minggu" },
      { title: "Reaksi Kimia", lessons: 5, duration: "3 minggu" },
    ],
    instructor: { name: "Dr. Rina Dewi", role: "Kimiawan", bio: "Dosen kimia dengan 12 tahun pengalaman mengajar.", avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face" },
  },
  "computer-science-fundamentals": {
    category: "Computer Science",
    title: "Computer Science Fundamentals",
    rating: 4.9,
    students: 5632,
    duration: "10 minggu",
    level: "Pemula - Menengah",
    description: "Pelajari dasar ilmu komputer dari algoritma hingga struktur data.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&h=400&fit=crop",
    objectives: ["Memahami algoritma dasar", "Mengenal struktur data", "Memahami pemrograman"],
    curriculum: [
      { title: "Pengantar Komputer", lessons: 4, duration: "2 minggu" },
      { title: "Algoritma", lessons: 5, duration: "3 minggu" },
      { title: "Struktur Data", lessons: 5, duration: "3 minggu" },
      { title: "Proyek Akhir", lessons: 3, duration: "2 minggu" },
    ],
    instructor: { name: "Ir. Dimas Prasetyo", role: "Software Engineer", bio: "Senior engineer dengan 15 tahun pengalaman di industri teknologi.", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face" },
  },
};

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? courseData[slug] : null;
  const [openModule, setOpenModule] = useState<number | null>(0);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Kursus tidak ditemukan</h1>
          <Link to="/" className="text-primary hover:underline">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  const totalLessons = course.curriculum.reduce((sum, m) => sum + m.lessons, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-8 pb-24">
        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-8">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <span className="inline-block bg-secondary text-foreground px-3 py-1 rounded-full text-xs font-medium mb-4">
              {course.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{course.title}</h1>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-border"}`} />
              ))}
              <span className="text-sm text-muted-foreground ml-2">{course.rating} ({course.students} siswa)</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{course.duration}</span>
              <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4" />{course.level}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">{course.description}</p>
            <div className="flex gap-3">
              <a href="#" className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
                Daftar Sekarang
              </a>
              <a href="#" className="bg-card text-foreground border border-border px-6 py-3 rounded-full text-sm font-medium hover:bg-muted transition">
                Lihat Preview
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={course.image} alt={course.title} className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-3">Yang Akan Kamu Pelajari</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto text-sm">
            Dapatkan pemahaman mendalam tentang {course.title.toLowerCase()} dengan materi yang terstruktur
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.objectives.map((obj) => (
              <div key={obj} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-16 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-2">Kurikulum Kursus</h2>
          <p className="text-muted-foreground text-center text-sm mb-8">
            {course.curriculum.length} modul • {course.duration} pembelajaran
          </p>
          <div className="space-y-3 max-w-2xl mx-auto">
            {course.curriculum.map((mod, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenModule(openModule === idx ? null : idx)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/50 transition"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-foreground text-sm font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm">{mod.title}</p>
                    <p className="text-xs text-muted-foreground">{mod.lessons} pelajaran • {mod.duration}</p>
                  </div>
                  {openModule === idx ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                </button>
                {openModule === idx && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="border-t border-border pt-4 space-y-2">
                      {[...Array(mod.lessons)].map((_, li) => (
                        <p key={li} className="text-sm text-muted-foreground pl-12">Pelajaran {li + 1}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Instructor */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Instruktur Kursus</h2>
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-6 flex items-start gap-5">
            <img src={course.instructor.avatar} alt={course.instructor.name} className="w-16 h-16 rounded-full object-cover shrink-0" />
            <div>
              <h3 className="font-bold text-foreground">{course.instructor.name}</h3>
              <p className="text-sm text-primary mb-2">{course.instructor.role}</p>
              <p className="text-sm text-muted-foreground">{course.instructor.bio}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetail;
