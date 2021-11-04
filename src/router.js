import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./views/Main.vue";
import ContentTypeA from "./views/ContentTypeA";
import ContentTypeB from "./views/ContentTypeB";
import ContentTypeC from "./views/ContentTypeC";

Vue.use(VueRouter);

export default new VueRouter({
   mode: "history",
   routes: [
       {
           path: "/"
           , component: Main
       }
       , {
           path: "/contentTypeA"
           , component: ContentTypeA
       }
       , {
           path: "/contentTypeB"
           , component: ContentTypeB
       }
       , {
           path: "/contentTypeC"
           , component: ContentTypeC
       }
   ]
});