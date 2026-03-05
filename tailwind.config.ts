import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // por si usas app router sin src
    ],
    theme: {
        extend: {
            colors: {
                apd: {
                    dark: '#04233A',      // Fondo principal/header/footer
                    dark2: '#153656',    // Cards, secciones, hover
                    accent: '#06599B',   // Botones, links, detalles
                    light: '#7FA0BD',    // Fondos suaves, detalles
                    gray: '#637C88',     // Texto secundario, iconos, bordes
                    bglogo: '#EEEEEE',   // Fondo general claro
                },
            },
        },
    },
    plugins: [],
}

export default config