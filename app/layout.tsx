import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CalendlyWidget } from "./components/CalendlyWidget";

export const metadata: Metadata = {
    title: "Zero to One | Product Consultancy",
    description: "We help early-stage startups validate ideas, define the right solution, and build MVPs that distill a dream into reality.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-sans antialiased bg-background-primary text-text-primary selection:bg-brand-primary/20">
                <Navbar />
                <main className="min-h-screen pt-20">
                    {children}
                </main>
                <Footer />
                <CalendlyWidget />
            </body>
        </html>
    );
}
