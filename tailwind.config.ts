
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': '#FFFFFF',
        'secondary-background': '#F7F7F7',
        'primary-text': '#1E1E1E',
        'secondary-text': '#555555',
        'accent': '#005F73',
        'border': '#EAEAEA',
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)', 'sans-serif'],
      },
      spacing: {
        'section-y': '96px',
        'component': '32px',
        'grid-gutter': '24px'
      },
      fontSize: {
        'h1': ['48px', { fontWeight: '700', letterSpacing: '-1.5px' }],
        'h2': ['36px', { fontWeight: '700', letterSpacing: '-1px' }],
        'h3': ['24px', { fontWeight: '600' }],
        'body': ['16px', { fontWeight: '400' }],
        'lead': ['20px', { fontWeight: '400' }],
        'button': ['16px', { fontWeight: '500' }],
        'nav-link': ['16px', { fontWeight: '400' }],
      },
      maxWidth: {
        'grid': '1200px',
      }
    },
  },
  plugins: [],
}
export default config
