import Vue from 'vue'
import Vuex from 'vuex'
import { advancedModule } from './modules/advancedModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    advancedModule
  }
})
