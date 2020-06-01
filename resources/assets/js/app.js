
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.axios = require('axios');

window.Vue = require('vue');


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; //引入element－ui所需的css样式资源文件

Vue.use(ElementUI);

import router from './routes.js';
import store from './store';

new Vue({
    router,
    store
}).$mount('#app');