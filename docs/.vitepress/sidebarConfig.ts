// 侧边栏配置
const sidebarConfig = {
  '/': [
    {
      text: '面试宝典',
      collapsed: false, // 侧边栏是否收起
      items: [
        { text: 'HTML+CSS', link: '/interview/html_css' },
        { text: 'JavaScript', link: '/interview/javascript' },
        { text: 'Vue', link: '/interview/vue' },
        { text: 'React', link: '/interview/react' },
        { text: 'Http', link: '/interview/http' },
        // { text: '性能优化', link: '/interview/performance' },
        { text: '工程化', link: '/interview/engineering' },
        { text: '手写', link: '/interview/byhand' },
        { text: '每日一练', link: '/interview/practice_daily' }
      ]
    },
    {
      text: '排序算法',
      collapsed: true, // 侧边栏是否收起
      items: [
        { text: '⭐冒泡排序', link: '/algorithm/sort/bubble' },
        { text: '选择排序', link: '/algorithm/sort/selection' },
        { text: '插入排序', link: '/algorithm/sort/insertion' },
        { text: '归并排序', link: '/algorithm/sort/merge' },
        { text: '⭐快速排序', link: '/algorithm/sort/quick' },
        { text: '希尔排序', link: '/algorithm/sort/shellsort' },
        { text: '堆排序', link: '/algorithm/sort/heap' },
        { text: '基数排序', link: '/algorithm/sort/radix' },
        { text: '排序算法总结', link: '/algorithm/sort/sort' }
      ]
    },
    {
      text: '数据结构',
      collapsed: true, // 侧边栏是否收起
      items: [
        { text: '数组', link: '/algorithm/data-structure/array' },
        { text: '树', link: '/algorithm/data-structure/tree' }
      ]
    }
  ],
  '/blog/': [
    {
      text: '博客分享',
      collapsed: true, // 侧边栏是否收起
      items: [{ text: 'Flex布局', link: '/blog/flex' }]
    }
  ]
}

export default sidebarConfig
