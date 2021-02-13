/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import {store} from "./components/store/store";
import  axios from 'axios';


let token = localStorage.getItem('token');
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;


import Vue2Editor from 'vue2-editor';
Vue.use(Vue2Editor);

//sweet alert
import Swal from "sweetalert2";
window.Swal=Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.Toast=Toast;


import {routes} from './routes';

import User from './Helpers/User';
window.User=User;

const router=new VueRouter({
    routes,
    mode:'history'
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('panel-menu', require('./components/panel/PanelMenu.vue').default);
Vue.component('front-menu', require('./components/front/Menu.vue').default);
Vue.component('front-footer', require('./components/front/Footer.vue').default);

Vue.component('drpzone', require('./components/panel/drp.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store
});
