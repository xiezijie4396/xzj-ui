import "tailwindcss/tailwind.css";
// import { createApp } from 'vue'
// // 从一个单文件组件中导入根组件
// import App from './App.vue'

// const app = createApp(App)
// app.mount('#app')

import XzjButton from "./Button/Button.vue";
import XzjIcon from "./Icon/Icon.vue";

export { XzjButton, XzjIcon };

export default {
  install(app) {
    app.component("xzj-button", XzjButton);
    app.component("xzj-icon", XzjIcon);
  },
};
