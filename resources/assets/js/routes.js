import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'index',
            component:Vue.component('Index',require('./pages/Index.vue'))
        }
    ]
});
