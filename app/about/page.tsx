import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export default function About() {
    return (
        <div className="flex flex-col">
            <Section className="py-24 md:py-32 bg-noise relative overflow-hidden">
                {/* Subtle Graphic: Star */}
                <div className="absolute top-20 left-10 text-brand-secondary opacity-20 animate-spin-slow pointer-events-none">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-text-primary mb-12 animate-fade-in-up">About Us</h1>
                    <p className="text-xl md:text-3xl leading-relaxed text-text-secondary font-light animate-fade-in-up delay-100 max-w-3xl mx-auto">
                        We are a small, focused product consultancy helping early-stage startups go from zero to one.
                        <span className="block mt-6 text-text-primary font-normal">
                            Clarity. Speed. Accountability.
                        </span>
                    </p>
                </div>
            </Section>

            <Section background="gray">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Adam */}
                    <div className="flex flex-col animate-fade-in-up delay-200">
                        <div className="relative mb-8 group">
                            <div className="absolute inset-0 bg-brand-primary/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-1"></div>
                            <img
                                src="/adam.png"
                                alt="Adam - Founder & Director"
                                className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full aspect-[4/5] object-cover shadow-lg"
                            />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-text-primary mb-1">Adam</h2>
                        <p className="text-brand-primary font-medium mb-6 uppercase tracking-wider text-sm">Founder & Director</p>
                        <div className="text-text-secondary space-y-4 leading-relaxed">
                            <p>
                                A 0-to-1 business consultant and creative leader helping organizations turn early-stage ideas into scalable, human-centered products. With over a decade of experience, Adam combines storytelling, strategy, and technology to drive innovation.
                            </p>
                            <p>
                                As Founder of Zeer, he built partnerships across six time zones and led safety tech development integrating with Next Gen 112/911 systems. He mentors entrepreneurs through global programs like Stacks Accelerator and Bitcoin Frontier Fund.
                            </p>
                        </div>
                    </div>

                    {/* Tanmoy */}
                    <div className="flex flex-col animate-fade-in-up delay-300">
                        <div className="relative mb-8 group">
                            <div className="absolute inset-0 bg-brand-secondary/10 rounded-2xl transform -rotate-2 transition-transform group-hover:-rotate-1"></div>
                            <img
                                src="/tanmoy.png"
                                alt="Tanmoy - Founder & Technology Lead"
                                className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full aspect-[4/5] object-cover shadow-lg"
                            />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-text-primary mb-1">Tanmoy</h2>
                        <p className="text-brand-primary font-medium mb-6 uppercase tracking-wider text-sm">Founder & Technology Lead</p>
                        <div className="text-text-secondary space-y-4 leading-relaxed">
                            <p>
                                “Ship over perfect.” With 15+ years in the game, Tanmoy is a builder at heart. From desktop C apps to embedded systems and native iOS/Android development, he brings deep technical precision to every project.
                            </p>
                            <p>
                                Formerly CTO of ZeerSafe, he now focuses on mental wellness and productivity tech through Quantum and AppToDesign. He bridges the gap between complex engineering and user-focused MVP solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="bg-text-primary text-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to build?</h2>
                        <p className="text-lg md:text-xl text-white/80 mb-10 font-light">
                            We bring a founder’s mindset to every project. Let’s figure out the challenges you’re dealing with.
                        </p>
                        <Button href="https://calendly.com/khanratanmoy33/30min" variant="primary" size="lg" className="bg-background-primary text-text-primary hover:bg-white border-none">
                            Book a Strategy Call
                        </Button>
                    </div>
                    {/* Abstract decoration */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-secondary rounded-full blur-[80px]"></div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
