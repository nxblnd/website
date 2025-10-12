import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import compressor from "astro-compressor";
import sitemap from "@astrojs/sitemap";
import { remarkPlugins } from "./src/utils/remarkPlugins.ts";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://pavelegorov.xyz",
    integrations: [mdx(), icon(), sitemap(), compressor()],
    markdown: {
        remarkPlugins: [...remarkPlugins],
    },
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
                provider: "local",
                name: "Alegreya Romans",
                cssVariable: "--font-serif-roman",
                variants: [
                    {
                        weight: 400,
                        style: "normal",
                        src: ["./src/assets/generated/Alegreya-RomanNumerals.woff2"],
                    },
                ],
                fallbacks: ["Alegreya", "Palatino", "Cambria", "serif"],
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
