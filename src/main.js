import "./styles/style.css";
import "./styles/customStyles.scss";
import "./utils/validations";

import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import router from "./router";
import emitter from "./utils/bus/emiter";

const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.provide("emitter", emitter);
app.mount("#app");
