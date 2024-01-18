/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1/5': '20%',  // 画面の高さの20%に相当するスペース
      },
    },
  },
  plugins: [],
}