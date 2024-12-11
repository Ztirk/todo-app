import './assets/main.css';
import { createApp } from 'vue';
// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// @ts-ignore
import App from '@/App.vue';
const vuetify = createVuetify({
    components,
    directives,
});
const app = createApp(App);
app.use(vuetify).mount('#app');