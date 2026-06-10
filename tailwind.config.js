/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './features/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0B',
        surface: '#141416',
        'surface-elevated': '#1C1C1F',
        border: '#2A2A2E',
        foreground: '#FAFAFA',
        muted: '#A1A1AA',
        accent: '#F97316',
        'accent-foreground': '#0A0A0B',
        success: '#22C55E',
        danger: '#EF4444',
      },
    },
  },
  plugins: [],
};
