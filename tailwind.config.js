/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#e0f7fa',
          200: '#b2ebf2',
          300: '#80deea',
          400: '#4dd0e1',
          500: '#26c6da',
          600: '#00bcd4',
          700: '#00acc1',
          800: '#009688',
          900: '#00897b',
          950: '#00695c',
        },
        secondary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#fc7a7a', // Adjusted shade
          500: '#f85656', // Adjusted shade
          600: '#ef4444',
          700: '#dc2626',
          800: '#b91c1c',
          900: '#991b1b',
          950: '#670808',
        },
        accent: {
          50: '#f0f2ff',
          100: '#e0e7ff',
          200: '#c3bfff',
          300: '#a594ff',
          400: '#8669ff',
          500: '#6b46e1',
          600: '#633bff',
          700: '#5530f5',
          800: '#4c28f0',
          900: '#3b07e0',
          950: '#240191',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
