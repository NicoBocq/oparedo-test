<template>
  <div class="q-gutter-md">
    <q-input v-model="search" label="Rechercher par montant ou lettrage"></q-input>
    <q-select
      v-model="multiple"
      multiple
      :options="options"
      label="Type"
      style="width: 250px"
      use-chips
      stack-label
    />

    <q-select
      v-model="model"
      :options="options"
      label="Recouvrement"
    />
    <q-btn @click="setFilter('Paiement')" label="Go"></q-btn>
    
    <q-btn-dropdown
      split
      label="Lettrage"
      @click="setFilter('Paiement')"
    >
      <q-list>
        <q-item clickable v-close-popup @click="setFilter('Paiement')">
          <q-item-section>
            <q-item-label>Paiement</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="setFilter">
          <q-item-section>
            <q-item-label>Vacation</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn-dropdown color="primary" label="Mouvements">
          <q-list>
            <q-item clickable v-close-popup @click="setFilter">
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
        <q-btn @click="clear" label="Clear"></q-btn>
  </div>
</template>

<script>

export default {
  data() {
    return {
      multiple: null,
      model: null,
      options: [
        'Paiement', 'Zob'
      ],
      search:'',
    }
  },
  methods: {
    setFilter(filter) {
      // this.$store.dispatch('updateFilter', filter );
      this.$store.commit('addFilter', filter)
    },
    clear() {
      this.$store.commit('addFilter', '')
    }
  },
  watch: {
    search(val) {
      console.log(val)
    }
  },
  
}
</script>