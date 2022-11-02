const createSafeList = () => {
  // Button组件所用列表
  const createBtnStyle = () => {
    const colors = ['black', 'white', 'blue', 'green', 'gray', 'yellow', 'red']
    const arr = []
    colors.map(e => {
      arr.push(
        `text-${e}`,
        `border-${e}-400`,
        `bg-${e}-400`,
        `hover:bg-opacity-80`,
        `text-${e}-400`,
        `border-${e}-400`,
        `bg-${e}-400`,
        `bg-opacity-20`,
        `hover:bg-opacity-100`,
        `hover:text-${e}`
      )
    })
    return arr
  }
  return [
    ...createBtnStyle()
  ]
}

module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/handleStyle.ts'
    ],
    safelist: createSafeList(),
  },
  theme: {
    fontSize: {
      sm: ['12px', '16px'],
      base: ['14px', '20px'],
      lg: ['16px', '24px'],
      xl: ['20px', '28px'],
    },
    extend: {
    },
  },
  corePlugins: {
    preflight: false, // 禁用预设样式（原因：影响Vitepress样式）
  },
  plugins: [],
}
