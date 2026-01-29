// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   darkMode: "class", // Manual toggle using 'dark' class
// //   content: [
// //     "./app/**/*.{js,ts,jsx,tsx}",
// //     "./components/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // };
// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   darkMode: "class", // manual toggle via 'dark' class

// //   content: [
// //     "./app/**/*.{js,ts,jsx,tsx}",
// //     "./pages/**/*.{js,ts,jsx,tsx}",
// //     "./components/**/*.{js,ts,jsx,tsx}",
// //   ],

// //   theme: {
// //     extend: {
// //       colors: {
// //         background: "var(--background)",
// //         foreground: "var(--foreground)",

// //         card: "var(--card)",
// //         cardForeground: "var(--card-foreground)",

// //         border: "var(--border)",
// //         muted: "var(--muted)",
// //       },

// //       transitionProperty: {
// //         colors: "background-color, border-color, color, fill, stroke",
// //       },
// //     },
// //   },

// //   plugins: [
// //     require("@tailwindcss/forms"),       // inputs clean ho jate hain
// //     require("@tailwindcss/typography"),  // text / content pages
// //   ],
// // };
// tailwind.config.js
module.exports = {
  darkMode: 'class', // important
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: { extend: {} },
  plugins: [],
};
