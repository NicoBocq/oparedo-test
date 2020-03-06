<template>
  <div>
    {{ selected }}
    <q-dialog v-model="dialogPrompt" persistent>
        <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center">
          <div class="text-h6">
            Souhaitez-vous réconcilier des mouvements ?
          </div> 
          <q-space />
          <q-btn
            icon="close"
            flat
            round
            dense
            @click="close"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Non, merci" color="light" @click="close" />
          <q-btn label="Oui, sélectionnez des mouvements" color="primary" @click="startConcialiation" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="dialogReconciliation"
      persistent
      seamless
      position="bottom" 
      full-width
    >
      <q-card style="width:100%">
        <q-card-actions>
          <q-btn
            label="Réconcilier les mouvements sélectionnés"
            color="primary"
            @click="startConcialiation"
          />
          <q-btn flat label="Annuler la sélection" color="light" @click="closeConcialiation" />
          <q-space />
          <div class="solde">
            <div class="label">Total solde :</div>
            <div class="text-h4" :class="soldeColor" dark>200</div>
            <div class="cur">EUR</div>
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

// import mapGetters from 'vuex'

export default {
  props: {
    selected: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dialogPrompt: true,
      dialogReconciliation:false,
      solde:0,
      selectedBilling: ''
    }
  },
  computed: {
    soldeColor() {
      if (this.solde === 0) {
        return 'bg-positive'
      } else {
        return 'bg-negative'
      }
    },
    // ...mapGetters([
    //   'selectedBilling'
    // ]),
  },
  methods: {
    startConcialiation(){
      this.dialogPrompt = false
      this.dialogReconciliation = true

    },
    close() {
      this.dialogPrompt = false
      this.$store.dispatch('updateSelectedBilling', '' )
    },
    closeConcialiation(){
      this.dialogReconciliation = false

    }
  },
}
</script>

<style lang="scss">
  .solde {
    display: flex;
    align-items: center;

    .label {
      margin-right:0.5rem;
      font-weight: 700;
    }
    .cur {
       margin-left:0.5rem;
    }
  }
  .q-dialog__inner--bottom {
    padding: 0 !important;
  }
</style>