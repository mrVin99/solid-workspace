import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      color: {
        'primary': '#365658'
      }
    },
  },
  plugins: [],
  'darkMode': 'class'
};

export default config;
