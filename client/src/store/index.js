import Vue from "vue";
import Vuex from "vuex";

import content from "./content";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      content
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  if (process.env.DEV && module.hot) {
    module.hot.accept(["./content"], () => {
      const newShowcase = require("./content").default;
      Store.hotUpdate({ modules: { content: newContent } });
    });
  }

  return Store;
}
