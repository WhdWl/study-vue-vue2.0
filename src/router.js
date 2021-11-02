import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(VueRouter);

export default new VueRouter({
   mode: "history",
   routes: [
       {
           path: "/",
           component: Home
       },
       {
           path: "/home",
           component: Home
       },
       {
           path: "/about",
           component: About
       }
   ]
});