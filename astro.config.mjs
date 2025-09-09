// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';
import alpinejs from '@astrojs/alpinejs';
import compressor from 'astro-compressor';
import autoprefixer from 'autoprefixer';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [icon(), alpinejs(), compressor()],
    experimental: {
        fonts: [
            {
                provider: fontProviders.fontsource(),
                name: 'Alegreya',
                cssVariable: '--font-serif',
                fallbacks: ['Palatino', 'Cambria', 'serif'],
            },
            {
                provider: fontProviders.fontsource(),
                name: 'Alegreya Sans',
                cssVariable: '--font-sans-serif',
                fallbacks: ['Verdana', 'Geneva', 'sans-serif'],
            },
            {
                provider: fontProviders.fontsource(),
                name: 'JetBrains Mono',
                cssVariable: '--font-monospace',
                fallbacks: ['Consolas', 'monospace'],
            },
        ],
    },
    vite: {
        build: {
            minify: 'esbuild',
        },
        css: {
            postcss: {
                plugins: [
                    autoprefixer({}),
                ],
            },
        },
    },
});
