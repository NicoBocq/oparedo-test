import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import billings from '@/db/billings'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('billings');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('billings', serializedState);
  } catch (err) {
    console.error(`Something went wrong: ${err}`);
  }
}

export default new Vuex.Store({
  strict: true,
  state: {
    client:'',
    billings: loadState() || billings,
    filter:'',
    selectedBilling:'',
  },
  mutations: {
    addFilter( state, payload ){
      state.filter = payload
    },
    addBilling( state, payload ){
      state.billings.push(payload)
      saveState(state.billings)
    },
    addSelectedBilling( state, payload ){
      state.selectedBilling = payload
    }
  },
  actions: {
    updateFilter({commit}, payload){
      commit('addFilter', payload)
    },
    updateBillings({commit}, payload){
      commit('addBilling', payload)
    },
    updateSelectedBilling({commit}, payload){
      commit('addSelectedBilling', payload)
    },
  },
  getters: {
    selectedBilling: state => state.selectedBilling,
    filter: state => state.filter,
    billingsFiltered: state => {
      if (state.filter !== '') {
        return state.billings.filter(billing => billing.type === state.filter)
      } else {
        return state.billings
      }
    },
    // filteredData: state => {
    //   return state.bilings.filter(billing => billing.name.includes(this.search.toLowerCase()))
    // }
  },
});
