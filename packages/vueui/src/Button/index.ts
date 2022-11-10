import Button from "./Button.vue";
import { App } from 'vue'

// 导出Button组件
export { Button }

export default {
  install(app: App) {
    app.component(Button.name, Button)
  }
};
