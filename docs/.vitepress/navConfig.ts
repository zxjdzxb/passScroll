// 导航配置
const navConfig = [
  { text: '主页', link: '/' },
  {
    text: 'Markdown示例',
    link: '/vite/markdown-examples'
  },
  {
    text: '排序算法',
    items: [
      { text: '冒泡排序', link: '/algorithm/sort/bubble' },
      { text: '选择排序', link: '/algorithm/sort/selection' },
      { text: '插入排序', link: '/algorithm/sort/insertion' },
      { text: '归并排序', link: '/algorithm/sort/merge' },
      { text: '快速排序', link: '/algorithm/sort/quick' },
      { text: '希尔排序', link: '/algorithm/sort/shell' },
      { text: '桶排序', link: '/algorithm/sort/bucket' },
      { text: '堆排序', link: '/algorithm/sort/heap' },
      { text: '计数排序', link: '/algorithm/sort/counting' },
      { text: '基数排序', link: '/algorithm/sort/radix' }
    ]
  }
]

export default navConfig
