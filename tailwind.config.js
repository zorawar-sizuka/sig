/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'blue': {
            50: '#f2f4fa',
            100: '#e1e6f3',
            200: '#cacfdf',
            300: '#94a1c5',
            400: '#697aa6',
            500: '#4c5c8e',
            600: '#3a4877',
            700: '#2a355a',
            800: '#1a2857', // Original dark blue
            900: '#121c3d',
            950: '#0a0f21',
          },
          'red': {
            50: '#fef2f2',
            100: '#fde5e5',
            200: '#fac2c3',
            300: '#f69596',
            400: '#f05a5d',
            500: '#ec2124', // Original red
            600: '#da1518',
            700: '#b71012',
            800: '#971214',
            900: '#7e1416',
            950: '#440507',
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
