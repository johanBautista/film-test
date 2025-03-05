import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/global.scss";
import { FontAwesomeIcon } from "./plugins/fontawesome";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
