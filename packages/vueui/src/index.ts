import "tailwindcss/tailwind.css";
import { App } from "vue";
import { Button as XzjButton } from "./components/Button/index";
import { Icon as XzjIcon } from "./components/Icon/index";

export { XzjButton, XzjIcon };

export default {
  install(app: App) {
    app.component("xzj-button", XzjButton);
    app.component("xzj-icon", XzjIcon);
  },
};
