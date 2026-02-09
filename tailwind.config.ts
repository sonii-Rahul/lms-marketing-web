import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Defined Brand Colors (Primary is modern SaaS Blue)
        'primary': 'hsl(215 100% 45%)', // Softened Blue (#0066FF equivalent, but in HSL)
        'secondary': 'hsl(0 0% 98%)', // Off-White Background
        'accent': 'hsl(215 100% 75%)', // Lighter Blue for highlights
        'text-primary': 'hsl(215 10% 20%)', // Dark Text (near black)
        'text-secondary': 'hsl(215 10% 45%)', // Gray Text (subtitles)
        'border': 'hsl(215 10% 90%)', // Light Border for separation
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      boxShadow: {
        // Apple-style shadow (Soft, subtle elevation)
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.06)',
      },
      // Responsive breakpoints based on common device sizes
      screens: {
        'mobile-sm': '360px',
        'mobile-lg': '640px', // sm
        'tablet': '1024px', // lg
        'laptop': '1440px', // xl
        'desktop-lg': '1920px', // 2xl
        '4k': '2560px', // custom wide
      }
    },
  },
  plugins: [],
}
export default config