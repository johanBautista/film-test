import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { FontAwesomeIcon } from "./plugins/fontawesome";
import "./assets/styles/_base.scss";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
