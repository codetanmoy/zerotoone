'use client';

import Script from 'next/script';

export function CalendlyWidget() {
    return (
        <>
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
                onLoad={() => {
                    // @ts-ignore
                    if (window.Calendly) {
                        // @ts-ignore
                        window.Calendly.initBadgeWidget({
                            url: 'https://calendly.com/khanratanmoy33/30min',
                            text: 'Schedule time with me',
                            color: '#bc6c25',
                            textColor: '#ffffff',
                            branding: true
                        });
                    }
                }}
            />
        </>
    );
}
