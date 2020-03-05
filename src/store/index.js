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
    addPopUp:false,
    filter:'',
  },
  mutations: {
    addFilter( state, payload ){
      state.filter = payload
    },
    addBilling( state, payload ){
      state.billings.push(payload)
      saveState(state.billings)
    },
  },
  actions: {
    /* eslint-disable */
    updateFilter({commit}, payload){
      commit('addFilter', payload)
    },
    updateBillings({commit}, payload){
      commit('addBilling', payload)
    },
  },
  getters: {
    billings: state => state.billings,
    filter: state => state.filter,
    billingsFiltered: state => {
      if (state.filter !== '') {
        return state.billings.filter(billing => billing.type === state.filter)
      } else {
        return state.billings
      }
    }
  },
});
