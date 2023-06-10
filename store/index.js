import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      baskets: []
    },
   mutations: {
      setBaskets (state, baskets) {
        state.baskets = baskets
      }
    },
    actions: {
        async getBaskets ({ commit }) {
          const products = await axios.get('https://fruit-atlas.ru/admin/wp-json/wp/v2/baskets?_embed&per_page=100')
          commit('setBaskets', products.data)
        }
    }
  })
}
export default createStore