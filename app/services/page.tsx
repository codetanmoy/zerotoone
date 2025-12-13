import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { Check } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Competitor & Market Research",
            items: ["Direct and indirect competitors", "Corporate alternatives", "EU and Nordic market dynamics"],
            outcome: "Clear positioning and opportunity mapping."
        },
        {
            title: "Product–Market Fit Validation",
            items: ["Ideal customer profile (ICP)", "Core problem and job-to-be-done", "Validation metrics"],
            outcome: "Confidence in what to build — and what not to."
        },
        {
            title: "Feature List Finalisation",
            items: ["Lean MVP scope", "Prioritised feature list", "Technical feasibility checks"],
            outcome: "A roadmap that supports validation, not assumptions."
        },
        {
            title: "Design Partner Alignment",
            items: ["Usability-first UX", "Decision-driven interfaces", "Clear user flows"],
            outcome: "A product that users understand instantly."
        },
        {
            title: "Development & Launch",
            items: ["Native iOS & Android apps", "Web apps and dashboards", "Scalable backend systems"],
            outcome: "Production-ready software, not prototypes."
        },
        {
            title: "Lead Generation & Early Growth",
            items: ["Early customer discovery", "Partner outreach systems", "Lead pipeline setup"],
            outcome: "Momentum after launch."
        }
    ];

    return (
        <div className="flex flex-col">
            <Section className="pb-10 pt-32 relative overflow-hidden bg-noise">
                {/* Subtle Graphic: Small Star */}
                <div className="absolute top-20 right-20 text-brand-primary/20 animate-spin-slow pointer-events-none hidden md:block">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                </div>

                <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-text-primary mb-8 max-w-5xl animate-fade-in-up relative z-10">
                    Zero to One Product Services for Mobility Startups
                    {/* Subtle Graphic: Underline Squiggle */}
                    <svg className="absolute -bottom-4 right-20 w-48 h-4 text-brand-secondary opacity-60 hidden lg:block" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.00026 6.99996C32.1287 3.29237 63.858 1.48704 95.5398 2.02984C128.463 2.59389 160.85 4.30448 193.078 7.08007" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </h1>
                <p className="text-2xl md:text-3xl text-text-secondary max-w-3xl leading-relaxed animate-fade-in-up delay-100 relative z-10 w-full">
                    Our services are designed for early-stage mobility startups that need clarity, speed, and execution.
                </p>
            </Section>

            <div className="flex flex-col">
                {services.map((service, index) => (
                    <Section key={index} className={`py-20 border-b border-text-secondary/10 last:border-0 relative overflow-hidden animate-fade-in-up delay-${(index % 4 + 1) * 100}`}>
                        {/* Subtle Background Pattern for Odd items */}
                        {index % 2 === 1 && (
                            <svg className="absolute top-1/2 right-0 w-[500px] h-[500px] text-text-secondary/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
                                <circle cx="50" cy="50" r="50" />
                            </svg>
                        )}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                            <div className="lg:col-span-5">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary sticky top-24">{service.title}</h2>
                            </div>

                            <div className="lg:col-span-1 border-l border-text-secondary/10 hidden lg:block"></div>

                            <div className="lg:col-span-6 space-y-8">
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">We Analyze & Create</h3>
                                    <ul className="space-y-3">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-text-primary mt-2 shrink-0"></div>
                                                <span className="text-lg text-text-primary">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 flex items-start gap-4">
                                    <div className="bg-brand-primary rounded-full p-1 mt-0.5 shrink-0">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-brand-primary text-sm uppercase tracking-wide block mb-1">Outcome</span>
                                        <p className="text-text-primary font-medium text-lg">{service.outcome}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                ))}
            </div>

            <Section background="gray">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to execute?</h2>
                    <Button href="https://calendly.com/khanratanmoy33/30min" size="lg">
                        Book a Zero→One Strategy Call
                    </Button>
                </div>
            </Section>
        </div >
    );
}
