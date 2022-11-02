import DefaultTheme from 'vitepress/theme'
import XiezijieUI from '../../../src/index'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(XiezijieUI)
  },
}