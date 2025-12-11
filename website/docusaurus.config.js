// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '北卡生活指南',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mlouielu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/UNC-Guide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mlouielu', // Usually your GitHub org/user name.
  projectName: 'UNC-Guide', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['en', 'zh-TW'],
  },
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
		docsRouteBasePath: "/",
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
		  routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/mlouielu/UNC-Guide/tree/main/website',
		  showLastUpdateAuthor: true,
		  showLastUpdateTime: true,
        },
		blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
		gtag: {
		  trackingID: 'G-D40BGMZK9Q',
		  anonymizeIP: true,
		},
		googleTagManager: {
		  containerId: 'GTM-NNLJRMV5'
		}
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social_card.avif',
      navbar: {
        title: 'UNC Guide',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mySidebar',
            position: 'left',
            label: '北卡生活指南',
          },
          {
            href: 'https://github.com/mlouielu/UNC-Guide',
            label: 'GitHub',
            position: 'right',
          },
		  {
			type: 'localeDropdown',
			position: 'right',
		  },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'UNC Guide',
            items: [
              {
                label: 'Guide',
                to: '/',
              },
            ],
          },
          {
            title: 'UNC-CH Taiwanese Student Association',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/uncch_tsa/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/229646620514456',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mlouielu/UNC-Guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Louie Lu. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
