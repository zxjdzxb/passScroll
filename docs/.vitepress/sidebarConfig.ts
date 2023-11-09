// 侧边栏配置
const sidebarConfig = [
  {
    text: 'Markdown示例',
    collapsed: true, // 侧边栏是否收起
    items: [
      { text: 'Markdown示例', link: '/vite/markdown-examples' },
      { text: '运行 API 示例', link: '/vite/api-examples' }
    ]
  },
  {
    text: '排序算法',
    collapsed: false, // 侧边栏是否收起
    items: [
      { text: '冒泡排序', link: '/algorithm/sort/bubble' },
      { text: '选择排序', link: '/algorithm/sort/selection' },
      { text: '插入排序', link: '/algorithm/sort/insertion' },
      { text: '归并排序', link: '/algorithm/sort/merge' },
      { text: '快速排序', link: '/algorithm/sort/quick' },
      { text: '希尔排序', link: '/algorithm/sort/shellsort' },
      { text: '堆排序', link: '/algorithm/sort/heap' },
      { text: '基数排序', link: '/algorithm/sort/radix' },
      { text: '排序算法总结', link: '/algorithm/sort/sort' }
    ]
  },
  {
    text: '数据结构',
    collapsed: true, // 侧边栏是否收起
    items: [{ text: '树', link: '/algorithm/tree' }]
  }
]

export default sidebarConfig
