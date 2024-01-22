/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1/5": "20%", // 画面の高さの20%に相当するスペース
      },
      colors: {
        deepOrange: '#FF5722', // これがMUIのdeepOrange[500]に相当
      },
    },
  },
  plugins: [],
};
