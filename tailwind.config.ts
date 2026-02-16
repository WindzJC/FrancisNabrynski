import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#060408',
        panel: '#130d13',
        accent: '#8f3147',
        'accent-soft': '#b66f7e',
        gold: '#d5bb8b',
        'rose-mist': '#e6c4bf'
      },
      boxShadow: {
        luxe: '0 20px 80px rgba(0,0,0,0.45)'
      }
    }
  },
  plugins: []
};

export default config;
