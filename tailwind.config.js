import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'main': '#4529EE',
            'primary': '#221F20',
            'white': '#fff'
        },
        fontFamily: {
            'JB': ['JetBrains Mono NL', 'sans-serif'],
            'Ml': ['Mulish', 'sans-serif']
        },
        extend: {
            colors: {
                transparent: 'transparent',
                black: colors.black,
                white: colors.white,
                emerald: colors.emerald,
                indigo: colors.indigo,
                yellow: colors.yellow,
                stone: colors.warmGray,
                sky: colors.lightBlue,
                neutral: colors.trueGray,
                gray: colors.coolGray,
                slate: colors.blueGray,
            },
        },
    },
    plugins: [],
}
