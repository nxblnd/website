// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [icon()],
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
});
