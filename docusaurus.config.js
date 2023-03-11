// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// const math = require("remark-math");
// const katex = require("rehype-katex");
const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SUITABLE',
  tagline: 'Dinosaurs are cool',
  url: 'https://october-x.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'october-x', // Usually your GitHub org/user name.
  projectName: 'october-x.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      // @type {import('@docusaurus/preset-classic').Options}
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // remarkPlugins: [math],
          // rehypePlugins: [katex],
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      metadata: [
        {
          name: "keywords",
          content:
            "frontend, react, javascript, css, react, vue, typescript, docusaurus, blog, personal blog, personal website,html",
        },
      ],
      // 开启 algolia
      algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        appId: "8YE83IQFLA",

        // Public API key: it is safe to commit it
        apiKey: "f18c0cede6821d8f7eada1c93b1d9239",

        indexName: "october-x",

      },
      navbar: {
        title: 'SUITABLE',
        hideOnScroll: true,
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: "doc",
            label: "Study",
            position: "left",
            docId: 'Interview/index'
          },
          {
            type: "dropdown",
            label: "Skill",
            position: "left",
            items: [
              {
                label: "HTML",
                to: "docs/html",
              },
              {
                label: "CSS",
                to: "docs/css",
              },
              {
                label: "JavaScript",
                to: "docs/js",
              },
              {
                label: "Vue",
                to: "docs/vue",
              },
              {
                label: "Vue3",
                to: "docs/vue3",
              },
              {
                label: "TypeSript",
                to: "docs/ts",
              },
              {
                label: "React",
                to: "docs/react"
              },
              {
                label: "NodeJS",
                to: "docs/nodejs",
              },
              {
                label: "WebPack",
                to: "docs/webpack",
              },
            ]
          },
          { to: '/blog', label: 'Blog', position: 'left' },

          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },

        ],
      },

      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
