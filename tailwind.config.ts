import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sprinkle-bg': 'url(/sprinkle-bg.jpeg)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#fef08a',
       
          'secondary': '#ffedd5',  

          'accent': '#fecdd3',
                  
          'neutral': '#f3f4f6',
                  
          'base-100': '#fee2e2',
                  
          'info': '#f0abfc',
                  
          'success': '#f9a8d4',
                  
          'warning': '#d8b4fe',
                  
          'error': '#a78bfa',
        },
      },
    ],
  },
};
export default config;
