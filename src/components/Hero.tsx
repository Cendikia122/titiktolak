const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left */}
          <div className="fade-in">
            <span className="inline-block bg-accent/40 text-accent-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
              Platform Pendidikan Modern
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground mb-6">
              TitikTolak – Mulai Perjalanan Belajarmu
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
              Platform pembelajaran modern yang dirancang untuk membantu kamu mencapai potensi
              terbaikmu. Akses ribuan materi berkualitas tinggi dari para ahli terkemuka.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-md text-sm font-medium hover:opacity-90 transition"
              >
                Mulai Sekarang
              </a>
              <a
                href="#"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { value: "10K+", label: "Pelajar Aktif" },
                { value: "500+", label: "Materi Kelas" },
                { value: "98%", label: "Kepuasan" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl md:text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="fade-in-delay-2">
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=500&fit=crop"
                alt="Siswa belajar dengan laptop"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
