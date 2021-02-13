import Vue from "vue"
import Vuex from "vuex";
import article from "./modules/panel/article";
import settings from "./modules/panel/settings";
import auth from "./modules/auth";
import webIndex from "./modules/web/index";
Vue.use(Vuex);
export const store=new Vuex.Store({

    modules:{
        article,
        settings,
        auth,
        webIndex
    },

});
