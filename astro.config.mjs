import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://reskinapp.github.io',
  integrations: [
    starlight({
      title: 'Reskin',
      logo: { src: './src/assets/logo.svg', replacesTitle: true },
      social: [
        {
          icon: 'github',
          label: 'github',
          href: 'https://github.com/reskinapp/reskinapp.github.io' 
        }
      ],
      sidebar: [
        {
          label: 'Quick Start',
          items: [
            { label: 'What is Reskin?', slug: 'guides/quick-start/about' },
            { label: 'Prerequisites', slug: 'guides/quick-start/prerequisites' },
            { label: 'Installation', slug: 'guides/quick-start/installation' },
          ],
        },
        {
          label: 'How to Use',
          items: [
            { label: 'Welcome', slug: 'guides/how-to-use/welcome' },
            { label: 'Marketplace', slug: 'guides/how-to-use/marketplace' },
            { label: 'Theme Bundler', slug: 'guides/how-to-use/theme-bundler' },
            { label: 'Theme Installer ', slug: 'guides/how-to-use/theme-installer' },
            { label: 'Configuration Files', slug: 'guides/how-to-use/configuration-files' },
            { label: 'Settings ', slug: 'guides/how-to-use/settings' }
          ],
        },
        {
          label: 'References',
          items: [
            { label: 'Translation Guide', slug: 'references/translation-guide' },
            { label: 'Known Issues', slug: 'references/known-issues' }
          ],
        },
      ],
    }),
    mdx(),
  ],
});