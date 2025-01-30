import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'

import { navConfig, sidebarConfig } from './configurations'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: 'CHNLIN',
  description: 'A VitePress Site',
  outDir: './dist',
  srcDir: './docs',
  lastUpdated: true,
  titleTemplate: ':title - CHNLIN',
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: navConfig,
    sidebar: sidebarConfig,
    socialLinks: [{ icon: 'github', link: 'https://github.com/linyang4' }],
    footer: {
      message:
        '<a href="https://beian.miit.gov.cn" target="_blank">皖ICP备19011213号-1</a>',
      copyright: 'Copyright © 2019-present'
    }
  },
  markdown: {
    // theme: 'material-theme-palenight',
    lineNumbers: true
  }
  // rewrites: {
  //   'blog/2023/07/22.test.md': 'blog/2023-07-22-test.md'
  // }
})
