'use client';

import Script from 'next/script';

declare global {
    interface Window {
        Calendly?: {
            initBadgeWidget: (options: {
                url: string;
                text: string;
                color: string;
                textColor: string;
                branding: boolean;
            }) => void;
        };
    }
}

export function CalendlyWidget() {
    return (
        <>
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
                onLoad={() => {
                    window.Calendly?.initBadgeWidget({
                        url: 'https://calendly.com/adamdavidjones/30min',
                        text: 'Schedule time with me',
                        color: '#bc6c25',
                        textColor: '#ffffff',
                        branding: true
                    });
                }}
            />
        </>
    );
}
