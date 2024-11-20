import { defineConfig } from "vitepress";
import { name, description } from "./meta";
import sidebar from "./sidebar";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: "../dist",
  title: name,
  description: description,
  lastUpdated: true,
  themeConfig: {
    outline: [2, 3],
    logo: "https://api.iconify.design/material-symbols:menu-book-outline.svg",
    outlineTitle: "导航栏",
    nav: [
      { text: "主页", link: "/" },
      { text: "前言", link: "/Preface/" },
      { text: "图书馆篇", link: "/Library/" },
      { text: "学习篇", link: "/Study/" },
      { text: "学生工作篇", link: "/StuWork" },
      { text: "生活篇", link: "/Life/" },
      { text: "吃喝玩乐篇", link: "/Play" },
    ],

    sidebar: sidebar,

    editLink: {
      pattern: `https://github.com/LLinVIP/live_new/tree/main/docs/:path`,
      text: "在 GitHub 上编辑此页",
    },

    socialLinks: [
      {
        // QQ
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6.048 3.323c.022.277-.13.523-.338.55c-.21.026-.397-.176-.419-.453c-.022-.277.13-.523.338-.55c.21-.026.397.176.42.453Zm2.265-.24c-.603-.146-.894.256-.936.333c-.027.048-.008.117.037.15c.045.035.092.025.119-.003c.361-.39.751-.172.829-.129l.011.007c.053.024.147.028.193-.098c.023-.063.017-.11-.006-.142c-.016-.023-.089-.08-.247-.118Z"/><path d="M11.727 6.719c0-.022.01-.375.01-.557c0-3.07-1.45-6.156-5.015-6.156c-3.564 0-5.014 3.086-5.014 6.156c0 .182.01.535.01.557l-.72 1.795a25.85 25.85 0 0 0-.534 1.508c-.68 2.187-.46 3.093-.292 3.113c.36.044 1.401-1.647 1.401-1.647c0 .979.504 2.256 1.594 3.179c-.408.126-.907.319-1.228.556c-.29.213-.253.43-.201.518c.228.386 3.92.246 4.985.126c1.065.12 4.756.26 4.984-.126c.052-.088.088-.305-.2-.518c-.322-.237-.822-.43-1.23-.557c1.09-.922 1.594-2.2 1.594-3.178c0 0 1.041 1.69 1.401 1.647c.168-.02.388-.926-.292-3.113a25.78 25.78 0 0 0-.534-1.508l-.72-1.795ZM9.773 5.53a.095.095 0 0 1-.009.096c-.109.159-1.554.943-3.033.943h-.017c-1.48 0-2.925-.784-3.034-.943a.098.098 0 0 1-.018-.055c0-.015.004-.028.01-.04c.13-.287 1.43-.606 3.042-.606h.017c1.611 0 2.912.319 3.042.605Zm-4.32-.989c-.483.022-.896-.529-.922-1.229c-.026-.7.344-1.286.828-1.308c.483-.022.896.529.922 1.23c.027.7-.344 1.286-.827 1.307Zm2.538 0c-.484-.022-.854-.607-.828-1.308c.027-.7.44-1.25.923-1.23c.483.023.853.608.827 1.309c-.026.7-.439 1.251-.922 1.23ZM2.928 8.99c.213.042.426.081.639.117v2.336s1.104.222 2.21.068V9.363c.326.018.64.026.937.023h.017c1.117.013 2.474-.136 3.786-.396c.097.622.151 1.386.097 2.284c-.146 2.45-1.6 3.99-3.846 4.012h-.091c-2.245-.023-3.7-1.562-3.846-4.011c-.054-.9 0-1.663.097-2.285Z"/></g></svg>',
        },
        link: "https://i.imgtg.com/2023/07/20/OF97k1.png",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43c0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47c-.09-.39-.14-.79-.14-1.21c-.01-3.54 3.44-6.43 7.69-6.43zM12 5.89a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92zM6.87 7.82a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92z"/><path fill="currentColor" d="M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14s2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03zm-8.34-.32a.96.96 0 1 1 .96-.96c.01.53-.43.96-.96.96zm3.85 0a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92z"/></svg>',
        },
        link: "https://i.imgtg.com/2023/07/20/OF9NmI.png",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>',
        },
        link: "https://github.com/LLinVIP/live_new",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7L4 8v10h16V8l-8 5Zm0-2l8-5H4l8 5ZM4 8V6v12V8Z"/></svg>',
        },
        link: "mailto:cumtlive@outlook.com",
      },
    ],
    footer: {
      message: "欢迎投稿 cumtlive@outlook.com",
      copyright: "Copyright © 2023-present CUMT生存手册",
    },

    search: {
      provider: "algolia",
      options: {
        appId: "R7HRHDUGXW",
        apiKey: "8f5a87e322a050e794d4d4126aadd5c7",
        indexName: "live-cumt",
      },
    },
  },
  markdown: {
    math: true,
  },
  head: [
    // ... 其他部分的配置，比如
    
    [
      'script',
      {},
      `
      window._hmt = window._hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b68233abdac26710980b9b8475c829e5";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-HMRZFH37HF'
      }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-HMRZFH37HF');"
    ]
  ],

});
