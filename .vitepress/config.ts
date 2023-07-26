import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CHNLIN',
  description: 'A VitePress Site',
  outDir: './dist',
  srcDir: './docs',
  lastUpdated: true,
  titleTemplate: ':title - CHNLIN',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config`
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      {
        text: '数据结构与算法',
        activeMatch: '/algs/',
        items: [
          { text: '数据结构', link: '/algs/data-structure/' },
          { text: '算法', link: '/algs/algorithm/' },
          { text: 'Leetcode', link: '/algs/leetcode/' },
        ]
      }
    ],
    sidebar: {
      '/blog': [
        {
          text: '2023年7月',
          collapsed: true,
          items: [
            { text: 'test', link: 'blog/2023/07/22.test' },
          ]
        }
      ],
      '/algs/data-structure/': [
        {
          text: '线段树', link: '/algs/data-structure/segment-tree/'
        }
      ],
      '/algs/algorithm/': [
        {
          text: '排序'
        },
        {
          text: '二分'
        }
      ],
      '/algs/leetcode/': [
        {
          text: '解题技巧'
        },
        {
          text: '周赛'
        }
      ]
    },
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/linyang4' }],
    footer: {
      message:
        '<a href="https://beian.miit.gov.cn" target="_blank">皖ICP备19011213号-1</a>',
      copyright: "Copyright © 2019-present",
    },
  },
  markdown: {
    // theme: 'material-theme-palenight',
    lineNumbers: true
  },
  // rewrites: {
  //   'blog/2023/07/22.test.md': 'blog/2023-07-22-test.md'
  // }
})
