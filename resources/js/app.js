// import './bootstrap';
import { createApp, h } from 'vue'
import { i18n } from './i18n/i18n'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import {InertiaProgress} from "@inertiajs/progress";
import MainLayout from "@/Layouts/MainLayout.vue"
import {ZiggyVue} from 'ziggy'
import '../css/app.css'
import env from './env';

import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.xxx = 'xxx';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: env.MIX_PUSHER_APP_KEY,
    cluster: env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: true
});

InertiaProgress.init({
    delay : 0,
    color : '#0031F4',
    includeCSS: true,
    showSpinner: true,
})

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue')

        const page = await pages[`./Pages/${name}.vue`]()
        page.default.layout = page.default.layout || MainLayout

        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n)
            .use(ZiggyVue)
            .mount(el)
    },
})
