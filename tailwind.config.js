/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        yfk: {
          primary: "#61BD68",
          secondary: "#0A0D12",
          accent: "#37cdbe",
          neutral: "#000",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
