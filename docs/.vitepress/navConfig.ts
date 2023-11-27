// 导航配置
const navConfig = [
  { text: '主页', link: '/' },
  {
    text: 'Markdown示例',
    link: '/vite/markdown-examples'
  },
  {
    text: '面试宝典',
    items: [
      { text: 'HTML+CSS', link: '/interview/html_css' },
      { text: 'JavaScript', link: '/interview/javascript' },
      { text: 'Vue', link: '/interview/vue' },
      { text: 'React', link: '/interview/react' },
      { text: 'Http', link: '/interview/http' },
      {text:'工程化',link:'/interview/engineering'}
    ]
  },

  {
    text: '排序算法',
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
  }
]

export default navConfig
