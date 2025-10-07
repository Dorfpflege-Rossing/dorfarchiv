import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Digitales Dorfarchiv Rössing',
  tagline: 'Geschichte und Geschichten aus Rössing bewahren',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    experimental_faster: true,
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://dorfarchiv-roessing.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Dorfpflege-Rossing',
  projectName: 'dorfarchiv',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'unterlagen',
          routeBasePath: 'unterlagen',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Dorfpflege-Rossing/dorfarchiv/edit/main/',
        },
        blog: {
          path: 'berichte',
          routeBasePath: 'berichte',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Dorfpflege-Rossing/dorfarchiv/edit/main/',
          blogTitle: 'Berichte',
          blogDescription: 'Berichte und Geschichten aus Rössing',
          blogSidebarTitle: 'Alle Berichte',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Dorfarchiv Rössing',
      logo: {
        alt: 'Dorfarchiv Rössing Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Unterlagen',
        },
        {to: '/berichte', label: 'Berichte', position: 'left'},
        {
          href: 'https://github.com/Dorfpflege-Rossing/dorfarchiv',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Archiv',
          items: [
            {
              label: 'Unterlagen',
              to: '/unterlagen/intro',
            },
            {
              label: 'Berichte',
              to: '/berichte',
            },
          ],
        },
        {
          title: 'Rechtliches',
          items: [
            {
              label: 'Impressum',
              to: '/impressum',
            },
            {
              label: 'Datenschutz',
              to: '/datenschutz',
            },
          ],
        },
        {
          title: 'Mehr',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Dorfpflege-Rossing/dorfarchiv',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Levin Keller. Erstellt mit Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
