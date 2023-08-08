import './bootstrap';
import {createApp} from 'vue'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import routes from './routes';
import App from '../components/App.vue';

const vueRouter = createRouter({
    history: createWebHashHistory(), //Adds # in routes to differentiate between client & server side routing.
    routes: routes,
})

const app = createApp(App);
app.use(vueRouter);
app.mount("#app");
