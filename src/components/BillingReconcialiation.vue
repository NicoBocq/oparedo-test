<template>
  <div>
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
          <q-btn
            label="Oui, sélectionnez des mouvements"
            color="primary"
            @click="initConcialiation"
          />
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
            @click="saveConcialiation"
            :disabled="concialitionCalc !== 0"
          />
          <q-btn
            flat
            label="Annuler la sélection"
            color="light"
            @click="closeConcialiation"
          />
          <q-space />
          <div class="solde">
            <div class="label">Total solde :</div>
            <div class="text-h4" :class="soldeColor" dark>{{ concialitionCalc }}</div>
            <div class="cur">EUR</div>
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

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
    }
  },
  computed: {
    soldeColor() {
      if (this.concialitionCalc !== 0) {
        return 'text-negative'
      } else {
        return 'text-positive'
      }
    },
    concialitionCalc(){
      const credit = this.selected.reduce((acc, x) => acc + x.credit,0)
      const debit = this.selected.reduce((acc, x) => acc + x.debit,0)
      
      return credit - debit
    },
  },
  methods: {
    initConcialiation() {
      this.dialogPrompt = false
      this.dialogReconciliation = true
      this.selected.push(this.$store.state.selectedBilling)
    },
    saveConcialiation(){
      const updateSelected = this.selected.map(item => ({
        ...item,
        lettering: "20.AAAAV",
        recovery: "Soldée"
      }))
      console.log(updateSelected)
      this.closeConcialiation()
      this.showNotif()
      // this.$store.dispatch('updateBillings', updateSelected )
    },
    close() {
      this.dialogPrompt = false
      this.$store.dispatch('updateSelectedBilling', '' )
    },
    closeConcialiation(){
      this.dialogReconciliation = false
      this.$emit('update:selected', [])
      this.$store.dispatch('updateSelectedBilling', '' )
    },
    showNotif() {
      this.$q.notify({
        position: 'top',
        message: 'Mouvements reconciliés',
        color: 'positive',
        timeout: 1500,
      })
    },
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