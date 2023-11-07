import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: 'June_Solstice',
    description: '个人学习笔记',
    lastUpdated: true,
    themeConfig: {
        logo: '/logo.awebp',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'Markdown示例',
                items: [
                    { text: 'Markdown示例', link: '/vite/markdown-examples' },
                    { text: '运行 API 示例', link: '/vite/api-examples' }
                ]
            }
        ],
        search: {
            provider: 'local'
        },
        sidebar: [
            {
                text: 'Markdown示例',
                collapsed: true, // 侧边栏是否收起
                items: [
                    { text: 'Markdown示例', link: '/vite/markdown-examples' },
                    { text: '运行 API 示例', link: '/vite/api-examples' }
                ]
            }
        ],
        docFooter: { prev: '上一篇', next: '下一篇' },
        // footer: {
        //     message: 'Released under the MIT License.',
        //     copyright: 'Copyright © 2022-present zxjdzxb'
        // },
        socialLinks: [{ icon: 'github', link: 'https://github.com/zxjdzxb' }]
    }
})
