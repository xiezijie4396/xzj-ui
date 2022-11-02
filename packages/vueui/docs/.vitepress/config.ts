const sidebar = [
  { text: '快速开始', link: '/', items: [] },
  {
    text: '组件',
    items: [
      { text: 'Button', link: '/components/Button/' },
      { text: 'Icon', link: '/components/Icon/' },
    ]
  },
]

export default {
  title: 'xiezijieUI',
  description: 'xiezijieUIforVue',
  base: '/',
  themeConfig: {
    sidebar
  }
}