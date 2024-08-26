import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false
        }),
        db()
    ],
    vite: {
        optimizeDeps: {
            exclude: ['astro:db', 'oslo']
        }
    },
    output: 'hybrid',
    adapter: netlify()
});
