const ProductSection = () => {
  return (
    <section id="produk" className="py-24 pb-12 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - Image */}
          <div className="scroll-fade-left">
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=450&fit=crop"
                alt="Dashboard platform TitikTolak"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="scroll-fade-right">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Platform Pembelajaran yang Dirancang untuk Kesuksesanmu
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              TitikTolak menyediakan pengalaman belajar yang interaktif dan terstruktur.
              Dengan kurikulum yang dirancang oleh para ahli, kamu bisa belajar kapan saja
              dan di mana saja. Platform kami dilengkapi dengan dashboard analitik untuk
              memantau progres belajarmu secara real-time.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Pelajari Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
