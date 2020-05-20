import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)



export default new Vuex.Store({

   state: {
      products: []
  },
  getters: {
    PRODUCTS: state => {
      return state.products;
    },
  },

  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.products = payload;
    },
  },
  actions: {


  },
  modules: {
  }
})
