import type { Config } from '@vue/theme'

export const sidebarConfig: Config['sidebar'] = {
  '/blog': [
    {
      text: '2023年7月',
      items: [{ text: 'test', link: 'blog/2023/07/22.test' }]
    }
  ],
  '/algs/data-structure/': [
    {
      text: '线段树',
      items: [
        { text: '线段树', link: '/algs/data-structure/segment-tree/' }
      ]
    }
  ],
  '/algs/algorithm/': [
    {
      text: '排序',
      items: []
    },
    {
      text: '二分',
      items: []
    }
  ],
  '/algs/leetcode/': [
    {
      text: '解题技巧',
      items: []
    },
    {
      text: '周赛',
      items: []
    }
  ]
}
