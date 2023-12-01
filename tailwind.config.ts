import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "texture":"url(https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          "todoBgImage":"url(https://img.freepik.com/free-photo/online-survey-3d-render-laptop-form-with-ticks_107791-15911.jpg?w=1380&t=st=1700564608~exp=1700565208~hmac=fb4b59aabed77698364b78c030beee07ac5abc5170065d07b8f4554d17ce8fbb)",
          "bgGrid":"url(/ooorganize.svg)"
      },
    },
  },
  plugins: [],
}
export default config
