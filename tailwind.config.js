/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open sans", "sans-serif"],
      },
      colors: {
        primary: "#0163FF",
        "primary-dark": "#1C0C73",
        "primary-dark-2": "#1d4ed8",
        "primary-light": "#dbeafe ",
        tertiary: "#909095",
        tertiary: "#909095",
        "tertiary-light": "#F0F0F0",

        // Trials
        "circle-tertiary": "#F0F0F0",
        "toggler-icon": "#9ca3af ",
        "forest-green": "#218326",
        "forest-green-light": "#37AC3D",
        "forest-green-dark": "#1F7823",
        "text-green": "#0F3911",
        "gray-light": "#E0E0E0",
        "gray-solid": "#909095",
        "sky-blue": "#2E7AF3",
        "button-blue": "#377AE4",
        "button-gray": "#E0E0E0",
        "warm-cream": "#FFF5D3",
        "icon-gray": "#909095",
        accent: "#C92222",
        gray_border: "#909095",
        "error-alert": "#ea580c",
      },
    },
    variant: {
      extent: {
        margin: ["first", "last"],
        display: ["first", "last"],
      },
    },
  },
  plugins: [],
};
