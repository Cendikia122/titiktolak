const accessItems = [
  { num: "01", title: "Masuk ke Circle Eksklusif TEMPA", desc: "Bergabung dengan komunitas eksklusif para educator dan innovator." },
  { num: "02", title: "Dibimbing Langsung oleh Ahli", desc: "Mentoring langsung dari praktisi berpengalaman di bidang edukasi." },
  { num: "03", title: "Manfaatkan Tools Eksklusif", desc: "Akses ke tools dan resources eksklusif untuk pengembangan platform." },
  { num: "04", title: "Menjadi Bagian dari Inner Circle", desc: "Networking dengan para pemimpin industri pendidikan." },
  { num: "05", title: "Life-Time Membership TTG Community", desc: "Keanggotaan seumur hidup dengan akses ke semua update dan konten baru." },
  { num: "06", title: "Dibimbing Sampai Peluncuran Modul", desc: "Pendampingan penuh hingga modul pembelajaran Anda siap diluncurkan." },
];

const AccessSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 scroll-fade">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Gain Exclusive Access to the Titik Tolak
          </h2>
          <p className="text-muted-foreground text-base">Shaping Impact at Scale.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {accessItems.map((item) => (
            <div
              key={item.num}
              className="bg-secondary/40 text-secondary-foreground rounded-xl p-6 hover:scale-[1.02] transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-4">{item.num}</span>
              <h3 className="text-base md:text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
