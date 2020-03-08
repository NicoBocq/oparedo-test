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
    billings: loadState() || billings,
    filter:'',
    search:'',
    selectedBilling:'',
  },
  mutations: {
    SET_FILTER( state, payload ){
      state.filter = payload
    },
    SET_SEARCH( state, payload ){
      state.search = payload
    },
    ADD_BILLING( state, payload ){
      state.billings.push(payload)
      saveState(state.billings)
    },
    SELECTED_BILLING( state, payload ){
      state.selectedBilling = payload
    },
    UPDATE_CONCILIATIONS( state, payload ){
      payload.forEach(billing => {
        const findBilling = state.billings.find(x => x.id === billing.id )
        const index = state.billings.indexOf(findBilling)
        Object.assign(state.billings[index], billing)
      })
      saveState(state.billings)
    },
  },
  actions: {
    updateFilter({commit}, payload){
      commit('SET_FILTER', payload)
    },
    updateSearch({commit}, payload){
      commit('SET_SEARCH', payload)
    },
    updateBillings({commit}, payload){
      commit('ADD_BILLING', payload)
    },
    updateSelectedBilling({commit}, payload){
      commit('SELECTED_BILLING', payload)
    },
    updateConciliationsBillings({commit}, payload){
      commit('UPDATE_CONCILIATIONS', payload)
    },
  },
  getters: {
    selectedBilling: state => state.selectedBilling,
    billingsFiltered: state => {
      if (state.filter) {
        return state.billings.filter(billing => billing.type === state.filter)
      } else if (state.search) {
        console.log(state.search)
        return state.billings.filter(billing => {
          billing.credit == state.search || billing.debit == state.search 
          || billing.lettering == state.search
        })
      } else {
        return state.billings
      }
    },
  },
});
