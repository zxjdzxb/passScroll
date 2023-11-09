import { defineConfig } from 'vitepress'
// 导入导航配置和侧边栏配置
import navConfig from './navConfig'
import sidebarConfig from './sidebarConfig'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'June_Solstice',
  description: '个人学习笔记',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.awebp',
    outlineTitle: '大纲',
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    nav: navConfig,
    search: {
      provider: 'local'
    },
    sidebar: sidebarConfig,
    lastUpdated: {
      text: '最近更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    // footer: {
    //     message: 'Released under the MIT License.',
    //     copyright: 'Copyright © 2022-present zxjdzxb'
    // },
    socialLinks: [{ icon: 'github', link: 'https://github.com/zxjdzxb' }]
  }
})
