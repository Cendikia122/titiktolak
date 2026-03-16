import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    desc: "Untuk pemula yang ingin memulai",
    price: "Rp 499K",
    period: "/bulan",
    features: ["Akses 50+ kursus dasar", "Sertifikat digital", "Forum komunitas", "Email support"],
    cta: "Pilih Basic",
    highlighted: false,
  },
  {
    name: "Pro",
    desc: "Untuk learner yang serius",
    price: "Rp 999K",
    period: "/bulan",
    features: ["Akses semua kursus premium", "Mentoring 1-on-1 bulanan", "Sertifikat profesional", "Priority support 24/7", "Akses tools eksklusif", "Networking events"],
    cta: "Pilih Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    desc: "Untuk tim dan organisasi",
    price: "Custom",
    period: "",
    features: ["Unlimited users", "Custom curriculum", "Dedicated account manager", "Advanced analytics", "API integration", "SLA guarantee"],
    cta: "Hubungi Kami",
    highlighted: false,
  },
];

const CTASection = () => {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mulai Belajar Bersama TitikTolak
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-4">
            Bergabunglah dengan ribuan pelajar yang telah memulai perjalanan mereka menuju kesuksesan
          </p>
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium">
            🔥 Terpopuler
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                plan.highlighted
                  ? "bg-card border-2 border-primary shadow-lg scale-[1.02]"
                  : "bg-card border border-border shadow-sm"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center py-3 rounded-full text-sm font-medium transition ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-muted text-foreground border border-border hover:bg-muted/80"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
