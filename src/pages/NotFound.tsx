import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Compass, Home, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="not-found-scene relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="not-found-grid absolute inset-0 opacity-40" />
      <div className="not-found-orb not-found-orb-a" />
      <div className="not-found-orb not-found-orb-b" />
      <div className="not-found-orb not-found-orb-c" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Jalur ini belum tersedia
            </span>

            <div className="mt-8 space-y-6">
              <div className="not-found-code flex items-center gap-2 text-[5rem] font-black leading-none tracking-[-0.08em] text-foreground sm:text-[7rem] lg:text-[9rem]">
                <span>4</span>
                <span className="not-found-zero">0</span>
                <span>4</span>
              </div>

              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Halaman yang kamu cari
                  <span className="block text-sky-600">terdampar di dimensi lain.</span>
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Rute <span className="rounded bg-card px-2 py-1 font-medium text-foreground">{location.pathname}</span> tidak
                  ditemukan. Tenang, kita arahkan balik ke tempat yang lebih berguna dan lebih menarik.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-7 shadow-lg shadow-primary/20">
                <Link to="/">
                  <Home />
                  Kembali ke Home
                </Link>
              </Button>

              <Button asChild size="lg" variant="secondary" className="rounded-full px-7">
                <Link to="/blog">
                  <Compass />
                  Jelajah Blog
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-card"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali ke halaman sebelumnya
              </button>
              <span className="inline-flex items-center rounded-full bg-secondary/60 px-4 py-2 text-secondary-foreground">
                Error code: TT-404
              </span>
            </div>
          </section>

          <aside className="fade-in-delay-2">
            <div className="not-found-panel relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/65 p-6 shadow-2xl shadow-sky-100 backdrop-blur-xl sm:p-8">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-70" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">Navigation Rescue</p>
                  <h2 className="mt-2 text-2xl font-semibold">Portal Pemulihan</h2>
                </div>
                <div className="not-found-radar flex h-14 w-14 items-center justify-center rounded-full bg-secondary/70">
                  <div className="h-3 w-3 rounded-full bg-sky-600" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  ["Home", "Balik ke beranda utama dan lanjut eksplor program."],
                  ["Blog", "Temukan artikel, insight, dan materi ringan."],
                  ["Course", "Cek ulang slug course jika kamu membuka link langsung."],
                ].map(([title, description], index) => (
                  <div
                    key={title}
                    className="not-found-card rounded-[1.5rem] border border-border/60 bg-background/70 p-4"
                    style={{ animationDelay: `${index * 160}ms` }}
                  >
                    <p className="text-sm font-semibold text-foreground">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-primary px-5 py-4 text-primary-foreground">
                <p className="text-sm text-primary-foreground/75">Path terakhir</p>
                <p className="mt-2 truncate text-lg font-semibold">{location.pathname}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
