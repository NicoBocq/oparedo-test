<template>
  <div class="q-my-md q-gutter-sm full-width row justify-evenly items-center ">
    <q-input 
      label="Rechercher par montant ou lettrage"
      style="width:350px"
      v-model="search"
      class="q-mr-md"
    >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    <q-btn-dropdown
      label="Type"
      split
      @click="setFilter()"
      class="q-mr-md"
    >
      <q-list>
        <q-item
          clickable
          v-close-popup
          v-for="(type, index) in types"
          @click="setFilter(type)"
          :key="'select'+index"
        >
          <q-item-section>
            <q-item-label>{{ type }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn
      icon="close"
      flat
      round
      dense
      @click="clear"
    />  
    <q-space />
    <q-btn-dropdown color="primary" label="Mouvements">
      <q-list>
        <q-item clickable v-close-popup @click="alert=!alert">
          <q-item-section>
            <q-item-label>Saisir un paiement</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Saisir une opération diverse</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Saisir un impayé</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
        
    <AddBilling :alert.sync="alert" />
  </div>
</template>

<script>

import AddBilling from '@/components/AddBilling'

export default {
  components:{
    AddBilling
  },
  data() {
    return {
      multiple: null,
      model: null,
      alert:false,
      search:'',
      types:['Paiement', 'Facture']
    }
  },
  methods: {
    setFilter(filter) {
      this.$store.dispatch('updateFilter', filter )
    },
    setSearch(search) {
      this.$store.dispatch('updateSearch', search )
    },
    clear() {
      this.$store.dispatch('updateFilter', '')
      this.$store.dispatch('updateSearch', '')
      this.search = ''
    }
  },
  watch: {
    search(val) {
      this.setSearch(val)
    }
  },
  
}
</script>