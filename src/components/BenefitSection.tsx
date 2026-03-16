import { Briefcase, Lightbulb, LayoutGrid, PenTool, Package, Megaphone } from "lucide-react";

const items = [
    { icon: Briefcase, title: "Business Strategy", desc: "Pelajari strategi bisnis yang efektif untuk mengembangkan platform edukasi Anda." },
    { icon: Lightbulb, title: "Solution Formulation", desc: "Formulasikan solusi pembelajaran yang tepat sasaran dan inovatif." },
    { icon: LayoutGrid, title: "Framework & Module Design", desc: "Rancang framework dan modul pembelajaran yang terstruktur dan efektif." },
    { icon: PenTool, title: "Intervention Design", desc: "Desain intervensi pembelajaran yang dapat meningkatkan hasil belajar." },
    { icon: Package, title: "Packaging and Delivery", desc: "Kemas dan sampaikan materi pembelajaran dengan cara yang menarik." },
    { icon: Megaphone, title: "Marketing and Client Acquisition", desc: "Strategi marketing dan akuisisi klien untuk platform edukasi Anda." },
];

const BenefitSection = () => {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4 scroll-fade">
                    What You Will Learn and Practice in Titik Tolak
                </h2>
                <p className="text-muted-foreground text-center mb-12 scroll-fade">
                    Program komprehensif untuk membangun keahlian konsultansi profesional
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                                <item.icon size={20} className="text-foreground" />
                            </div>
                            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitSection;
