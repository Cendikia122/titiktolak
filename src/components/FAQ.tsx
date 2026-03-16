import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Apa itu TitikTolak?",
    a: "TitikTolak adalah platform pendidikan modern yang menyediakan materi pembelajaran berkualitas tinggi dari berbagai bidang ilmu. Kami menghubungkan pelajar dengan para ahli untuk pengalaman belajar terbaik.",
  },
  {
    q: "Bagaimana cara mendaftar?",
    a: "Kamu bisa mendaftar dengan mudah melalui tombol 'Mulai Sekarang' di halaman utama. Cukup isi data diri dan email, lalu kamu bisa langsung mulai belajar.",
  },
  {
    q: "Apakah ada biaya?",
    a: "TitikTolak menawarkan akses gratis untuk materi dasar. Untuk materi premium dan fitur eksklusif, kami menyediakan paket berlangganan yang terjangkau.",
  },
  {
    q: "Apakah materi bisa diakses secara offline?",
    a: "Ya, beberapa materi dapat diunduh untuk akses offline melalui aplikasi mobile kami.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12 fade-in">
          Pertanyaan yang Sering Ditanyakan
        </h2>

        <Accordion type="single" collapsible className="space-y-4 scroll-fade">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl bg-card px-5 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
