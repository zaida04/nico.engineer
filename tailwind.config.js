/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#0f1117",
            },
            fontFamily: {
                cascadia: ["CascadiaCode", "sans-serif"],
            },
        },
    },
    plugins: [],
};
