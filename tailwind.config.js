/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // ### Primary
                VeryDarkMagenta: 'hsl(300, 43%, 22%)',
                SoftPink: 'hsl(333, 80%, 67%)',
                // ### Neutral
                DarkGrayishMagenta: 'hsl(303, 10%, 53%)',
                LightGrayishMagenta: 'hsl(300, 24%, 96%)',
                White: 'hsl(0, 0%, 100%)',
            },
            fontFamily: {
                spartan: ["League Spartan", 'sans-serif']
            },
            backgroundImage: {
                'bottom-desktop': "url(./assets/images/bg-pattern-bottom-desktop.svg)",
                'bottom-mobile':  "url(./assets/images/bg-pattern-bottom-mobile.svg)",
                'top-desktop': "url(./assets/images/bg-pattern-top-desktop.svg",
                'top-mobile': "url(./assets/images/bg-pattern-top-mobile.svg"
            }
        },
    },
    plugins: [],
}

