import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ApiService from "./common/api.service";
import DateFilter from "./common/date.filter";

Vue.config.productionTip = false;
ApiService.init();

Vue.filter("date", DateFilter);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
