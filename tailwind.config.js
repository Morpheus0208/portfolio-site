// tailwind.config.js
import forms from '@tailwindcss/forms';
import lineClamp from '@tailwindcss/line-clamp';
import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAFAF7',
          100: '#F5F5F0',
          500: '#10B981',
          600: '#059669',
          900: '#1F2937',
        },
      },
      container: { center: true, padding: '1rem', screens: { '2xl': '1100px' } },
      boxShadow: { soft: '0 8px 24px rgba(0,0,0,.25)' },
    },
  },
  plugins: [typography, forms, lineClamp],
};
