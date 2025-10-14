/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          50: 'rgb(var(--color-primary-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900-rgb) / <alpha-value>)',
        },
        // Secondary colors
        secondary: {
          50: 'rgb(var(--color-secondary-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-secondary-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-secondary-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-secondary-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-secondary-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-secondary-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-secondary-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-secondary-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-secondary-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-secondary-900-rgb) / <alpha-value>)',
        },
        // Accent colors
        accent: {
          50: 'rgb(var(--color-accent-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-accent-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-accent-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-accent-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-accent-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-accent-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-accent-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-accent-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-accent-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-accent-900-rgb) / <alpha-value>)',
        },
        // Warning colors
        warning: {
          50: 'rgb(var(--color-warning-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-warning-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-warning-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-warning-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-warning-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-warning-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-warning-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-warning-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-warning-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-warning-900-rgb) / <alpha-value>)',
        },
        // Semantic colors
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-secondary': 'var(--color-surface-secondary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        border: 'var(--color-border)',
        'border-light': 'var(--color-border-light)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-background': 'var(--gradient-background)',
        'gradient-hero': 'var(--gradient-hero)',
      },
    },
  },
  plugins: [],
};
