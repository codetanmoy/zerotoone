import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-background-primary border-t border-text-secondary/10 py-16">
            <div className="mx-auto max-w-6xl px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-4 text-2xl font-serif font-bold text-text-primary hover:text-brand-primary transition-colors">
                            Zero To One
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                            Building mobility products that ship. Helping founders go from idea to product-market fit.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-text-secondary/60">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="text-text-secondary hover:text-brand-primary">Home</Link></li>
                            <li><Link href="/services" className="text-text-secondary hover:text-brand-primary">Services</Link></li>
                            <li><Link href="/about" className="text-text-secondary hover:text-brand-primary">About</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-text-secondary/60">Connect</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="https://calendly.com/khanratanmoy33/30min" className="text-text-secondary hover:text-brand-primary">Book Strategy Call</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-text-secondary/10 text-xs text-text-secondary flex justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} Zero to One. All rights reserved.</p>
                    <p>Designed in Sweden.</p>
                </div>
            </div>
        </footer>
    );
}
