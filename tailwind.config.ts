import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                apd: {
                    ink: '#06121F',      // Fondo más profundo (hero, footer)
                    dark: '#04233A',     // Azul marino de marca
                    dark2: '#153656',    // Cards oscuras, hover
                    accent: '#06599B',   // Azul de marca (botones sobre claro)
                    primary: '#2F86C9',  // Acentos de texto/íconos
                    sky: '#5BB3F0',      // Acento brillante sobre fondos oscuros
                    light: '#7FA0BD',    // Detalles suaves
                    gray: '#637C88',     // Texto secundario
                    mist: '#A9BCCD',     // Texto secundario sobre oscuro
                    bglogo: '#EEEEEE',   // Gris claro de marca
                    paper: '#F6F7F8',    // Fondo claro de secciones
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['var(--font-display)', 'var(--font-inter)', 'ui-sans-serif', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

export default config
