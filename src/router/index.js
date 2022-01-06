import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import HomeGlobal from "@/views/HomeGlobal";
import HomeTag from "@/views/HomeTag";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          name: "home",
          component: HomeGlobal,
        },
        {
          path: "tag/:tag",
          name: "home-tag",
          component: HomeTag,
        },
      ],
    },
  ],
  mode: "history",
});
