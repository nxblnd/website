// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
    integrations: [icon(), compressor()],
    experimental: {
        fonts: [
            {
                provider: fontProviders.fontsource(),
                name: "Alegreya",
                cssVariable: "--font-serif",
                fallbacks: ["Palatino", "Cambria", "serif"],
                subsets: ["latin", "cyrillic", "greek"],
            },
            {
                provider: fontProviders.fontsource(),
                name: "Alegreya Sans",
                cssVariable: "--font-sans-serif",
                fallbacks: ["Verdana", "Geneva", "sans-serif"],
                subsets: ["latin", "cyrillic", "greek"],
            },
            {
                provider: fontProviders.fontsource(),
                name: "JetBrains Mono",
                cssVariable: "--font-monospace",
                fallbacks: ["Consolas", "monospace"],
                subsets: ["latin", "cyrillic", "greek"],
            },
        ],
    },
    vite: {
        build: {
            minify: "esbuild",
        },
    },
});
