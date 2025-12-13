import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CalendlyWidget } from "./components/CalendlyWidget";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const fraunces = Fraunces({
    subsets: ["latin"],
    variable: "--font-fraunces",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Zero to One | Mobility Product Consultancy",
    description: "We help early-stage mobility startups validate ideas, define the right product, and build production-ready mobile and web applications.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased bg-background-primary text-text-primary selection:bg-brand-primary/20`}>
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
