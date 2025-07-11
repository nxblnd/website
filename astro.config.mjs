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
                cssVariable: '--font-alegreya',
            },
            {
                provider: fontProviders.fontsource(),
                name: 'Alegreya Sans',
                cssVariable: '--font-alegreya-sans',
            },
            {
                provider: fontProviders.fontsource(),
                name: 'JetBrains Mono',
                cssVariable: '--font-jetbrains-mono',
            },
        ],
    },
});
