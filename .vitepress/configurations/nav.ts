import type { Config } from '@vue/theme'

export const navConfig: Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  {
    text: '数据结构与算法',
    activeMatch: '/algs/',
    items: [
      { text: '数据结构', link: '/algs/data-structure/' },
      { text: '算法', link: '/algs/algorithm/' },
      { text: 'Leetcode', link: '/algs/leetcode/' }
    ]
  }
]
