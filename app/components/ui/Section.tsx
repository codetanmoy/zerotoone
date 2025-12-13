import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: 'white' | 'gray';
}

export function Section({ children, className = '', id, background = 'white' }: SectionProps) {
    const bgColors = {
        white: 'bg-background-primary',
        gray: 'bg-background-secondary',
    };

    return (
        <section id={id} className={`w-full py-20 md:py-32 ${bgColors[background]} ${className}`}>
            <div className="mx-auto max-w-6xl px-6 md:px-12">
                {children}
            </div>
        </section>
    );
}
