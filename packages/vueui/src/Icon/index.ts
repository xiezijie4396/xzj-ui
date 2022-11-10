import Icon from "./Icon.vue";
import { App } from 'vue'

// 导出Button组件
export { Icon }

export default {
  install(app: App) {
    app.component(Icon.name, Icon)
  }
};
