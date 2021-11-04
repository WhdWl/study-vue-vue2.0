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
           , name: 'Main'
           , component: Main
       }
       , {
           path: "/contentTypeA"
           , name: 'ContentTypeA'
           , component: ContentTypeA
       }
       , {
           path: "/contentTypeB"
           , name: 'ContentTypeB'
           , component: ContentTypeB
       }
       , {
           path: "/contentTypeC"
           , name: 'ContentTypeC'
           , component: ContentTypeC
       }
   ]
});