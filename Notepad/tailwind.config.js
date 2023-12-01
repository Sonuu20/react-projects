/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '176': '176px',
      },
      maxWidth: {
        '90': '90%',
      },
      gridTemplateColumns: {
        'custom': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      padding: {
        'custom': '5px 10px 5px 10px',
      },
      backgroundImage: {
        'custom' : "url('https://i.pinimg.com/originals/a8/a2/99/a8a29968c94e5215eca1ae438e06b8c3.jpg')",
      },
    },
  },
  plugins: [],
}

