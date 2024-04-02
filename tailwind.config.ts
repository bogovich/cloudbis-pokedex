import type { Config } from "tailwindcss";

const colors = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

const safelist = colors.flatMap(color => [`bg-${color}-100`, `text-${color}-100`]);

const config: Config = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/_components/*.{js,ts,jsx,tsx,mdx}",
    "./app/pokemon/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/pokemon/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/***/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: safelist,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        normal: { 100: "#A8A77A" },
        fire: { 100: "#EE8130" },
        water: { 100: "#6390F0" },
        electric: { 100: "#F7D02C" },
        grass: { 100: "#7AC74C" },
        ice: { 100: "#96D9D6" },
        fighting: { 100: "#C22E28" },
        poison: { 100: "#A33EA1" },
        ground: { 100: "#E2BF65" },
        flying: { 100: "#A98FF3" },
        psychic: { 100: "#F95587" },
        bug: { 100: "#A6B91A" },
        rock: { 100: "#B6A136" },
        ghost: { 100: "#735797" },
        dragon: { 100: "#6F35FC" },
        dark: { 100: "#705746" },
        steel: { 100: "#B7B7CE" },
        fairy: { 100: "#D685AD" },
      },
    },
  },
  plugins: [],
};
export default config;
