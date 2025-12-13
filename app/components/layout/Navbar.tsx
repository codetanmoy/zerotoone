import Link from 'next/link';
import { Button } from '../ui/Button';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background-primary/80 backdrop-blur-md border-b border-text-secondary/10">
            <div className="mx-auto max-w-6xl px-6 md:px-12 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-text-primary hover:text-brand-primary transition-colors">
                    Zero To One
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/services" className="text-sm font-medium text-text-primary/80 hover:text-brand-primary transition-colors">
                        Services
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-text-primary/80 hover:text-brand-primary transition-colors">
                        About
                    </Link>
                    <Button href="https://calendly.com/khanratanmoy33/30min" variant="primary" size="sm">
                        Book a Strategy Call
                    </Button>
                </div>

                {/* Mobile menu placeholer - minimalist approach for now */}
                <div className="md:hidden">
                    <Button href="https://calendly.com/khanratanmoy33/30min" variant="primary" size="sm">
                        Book Call
                    </Button>
                </div>
            </div>
        </nav>
    );
}
