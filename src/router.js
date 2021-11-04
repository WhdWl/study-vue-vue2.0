import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./views/Main.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(VueRouter);

export default new VueRouter({
   mode: "history",
   routes: [
       {
           path: "/",
           component: Main
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