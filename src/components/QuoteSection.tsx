const QuoteSection = () => {
  return (
    <section id="tentang" className="pt-12 py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - Quote */}
          <div className="scroll-fade-left">
            <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground font-medium mb-8">
              "Pendidikan adalah kunci untuk membuka pintu kesempatan. Kami percaya setiap
              orang berhak mendapatkan akses pendidikan berkualitas tinggi."
            </blockquote>
            <div>
              <p className="font-semibold text-foreground">Raffasya Javas Niscala W</p>
              <p className="text-sm text-muted-foreground">Founder & CEO, TitikTolak</p>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="scroll-fade-right">
            <div className="rounded-xl shadow-md overflow-hidden max-w-sm ml-auto">
              <img
                src="https://img.sanishtech.com/u/cf90f20667e279f4a77a4b0002f3880d.jpg"
                alt="Raffasya Javas Niscala W - Founder & CEO, TitikTolak"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
