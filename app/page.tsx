import { Section } from "./components/ui/Section";
import { Button } from "./components/ui/Button";
import { MoveRight, CheckCircle2 } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <Section className="py-24 md:py-32 lg:py-48 relative overflow-hidden bg-noise">
                {/* Subtle Graphic: Floating Star */}
                <div className="absolute top-20 right-10 md:right-32 text-brand-secondary opacity-20 animate-spin-slow pointer-events-none">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                </div>

                <div className="max-w-4xl relative z-10">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-text-primary mb-8 leading-[1.05] animate-fade-in-up relative">
                        From Zero to One — Taking Ideas to Building Traction
                        {/* Subtle Graphic: Underline Squiggle */}
                        <svg className="absolute -bottom-6 left-0 w-64 h-6 text-brand-primary opacity-60 hidden md:block" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00026 6.99996C32.1287 3.29237 63.858 1.48704 95.5398 2.02984C128.463 2.59389 160.85 4.30448 193.078 7.08007" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </h1>
                    <p className="text-2xl md:text-3xl text-text-secondary mb-12 leading-relaxed max-w-2xl font-light animate-fade-in-up delay-100">
                        We help early-stage startups in any field validate ideas, define the right solution, and build MVPs that distill a dream into reality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center animate-fade-in-up delay-200">
                        <Button href="https://calendly.com/khanratanmoy33/30min" size="lg" className="text-lg px-8 py-5">
                            Book a Zero→One Strategy Call
                        </Button>
                        <span className="text-base text-text-secondary mt-2 sm:mt-0 px-2 font-medium">
                            For idea-stage and seed-stage startups
                        </span>
                    </div>
                </div>
            </Section>

            {/* Who We Work With */}
            <Section background="gray" className="relative overflow-hidden">
                {/* Subtle Graphic: Abstract Curve Pattern */}
                <svg className="absolute top-0 right-0 w-[600px] h-[600px] text-text-secondary/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="50" />
                </svg>

                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 tracking-tight animate-fade-in-up relative z-10">Who We Work With</h2>
                <div className="relative z-10 max-w-4xl space-y-6">
                    <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                        We work with idea-stage and seed-stage startups to bring their dream to market.
                    </p>
                    <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                        We have worked in event production, fintech, entertainment, podcasts, deep tech, AI, and non-profits.
                    </p>
                    <p className="text-text-secondary text-sm italic border-l-2 border-brand-primary/30 pl-4 py-1">
                        If you already have product-market fit and a large internal team, we may not be the right fit.
                    </p>
                </div>
            </Section>

            {/* Execution Model */}
            <Section>
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight animate-fade-in-up">Our Zero → One Execution Model</h2>
                    <p className="text-text-secondary text-2xl max-w-3xl animate-fade-in-up delay-100">A disciplined process to go from napkin sketch to production.</p>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-text-secondary/20 before:to-transparent">
                        {[
                            { title: "Competitor & Market Research", desc: "We analyze competitors, substitutes, and adjacent solutions to identify real gaps." },
                            { title: "Product–Market Fit Validation", desc: "We validate the problem, the user, and the willingness to adopt." },
                            { title: "Feature List Finalisation", desc: "We cut noise and define a lean, validation-focused feature set." },
                            { title: "Design Partner Alignment", desc: "UX direction that supports decision-making, not decoration." },
                            { title: "Development & Launch", desc: "Native mobile apps, web apps, and scalable systems built for production." },
                            { title: "Marketing & Distribution Strategy", desc: "We guide you in marketing and distribution strategy, then pinpoint market response for iteration." },
                        ].map((step, i) => (
                            <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-fade-in-up delay-${(i + 2) * 100}`}>

                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-text-secondary/20 bg-background-primary group-hover:border-brand-primary group-hover:text-brand-primary text-text-secondary/60 font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors shadow-sm">
                                0{i + 1}
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-background-primary border border-text-secondary/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </Section>

            {/* What We Build */}
            <Section background="gray">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">What We Build</h2>
                        <p className="text-xl md:text-2xl text-text-secondary mb-8">
                            Whether it’s a soft launch, a native app, a web app, or a scalable system in production — we build what moves the needle.
                        </p>
                    </div>
                    <div className="grid gap-3">
                        {[
                            "Lean MVPs designed for validation",
                            "Native mobile apps (iOS & Android)",
                            "Web apps, dashboards, and landing pages",
                            "Scalable backend systems built for production",
                            "Build, launch, and refine with real market feedback",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3 bg-background-primary px-5 py-3 rounded-lg border border-text-secondary/20 shadow-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                                <span className="font-medium text-text-primary">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Why Us */}
            <Section>
                <h2 className="text-3xl font-serif font-bold mb-12 tracking-tight">Why Founders Work With Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        "Product partners, not vendors",
                        "One team from strategy to launch",
                        "Weekly delivery and clear communication",
                        "No agency noise, no unnecessary complexity"
                    ].map((item, i) => (
                        <div key={i} className="bg-background-secondary p-6 rounded-xl border border-text-secondary/10 h-full flex flex-col">
                            <CheckCircle2 className="w-8 h-8 text-brand-primary mb-4" />
                            <p className="font-bold text-text-primary text-lg leading-snug">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <p className="inline-block bg-text-primary text-white px-4 py-1 rounded-md text-sm font-medium">We focus on outcomes, not billable hours.</p>
                </div>
            </Section>

            {/* How We Work */}
            <Section background="gray">
                <h2 className="text-3xl font-serif font-bold mb-12 tracking-tight text-center">How We Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[
                        { step: "1", title: "Intro Call" },
                        { step: "2", title: "Zero→One Plan" },
                        { step: "3", title: "Build, Launch & Refine" }
                    ].map((item, i) => (
                        <div key={i} className="text-center relative">
                            <div className="text-6xl font-black text-text-secondary/10 mb-4 font-sans">{item.step}</div>
                            <h3 className="text-xl font-bold text-text-primary relative -top-8">{item.title}</h3>
                            {i !== 2 && <MoveRight className="hidden md:block absolute top-8 -right-4 text-text-secondary/20 w-8 h-8" />}
                        </div>
                    ))}
                </div>
                <p className="text-center text-text-secondary mt-4">Engagements can be MVP-focused or long-term partnerships.</p>
            </Section>

            {/* Final CTA */}
            <Section>
                <div className="bg-text-primary text-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Building a product?</h2>
                        <Button href="https://calendly.com/khanratanmoy33/30min" variant="primary" size="lg" className="bg-background-primary text-text-primary hover:bg-white hover:text-text-primary border-none">
                            Book a Zero→One Strategy Call
                        </Button>
                        <p className="mt-6 text-sm text-text-secondary/60">Limited onboarding each month.</p>
                    </div>

                    {/* Abstract decoration */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[100px]"></div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
