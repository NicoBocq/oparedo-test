<template>
  <div>
    <q-dialog v-model="alert" persistent>
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center">
          <div class="text-h6">Saisir le montant</div> 
          <q-space />
          <q-btn
            icon="close"
            flat
            round
            dense
            @click="reset"
          />
        </q-card-section>
        <q-card-section class="row items-center">
          <q-btn-toggle
            v-model="toggleType"
            toggle-color="primary"
            :options="[
              {label: 'Crédit', value: 'credit'},
              {label: 'Débit', value: 'debit'},
            ]"
          ></q-btn-toggle>
            <template v-if="this.toggleType === 'credit'">
              <q-input
                label="Montant"
                v-model.number="newBilling.credit"
                type="number"
                class="q-ml-md"
                :rules="[val => !!val || 'Champ obligatoire']"
              ></q-input>
            </template>

            <template v-if="this.toggleType === 'debit'">
              <q-input
                label="Montant"
                v-model.number="newBilling.debit"
                type="number"
                class="q-ml-md"
                :rules="[val => !!val || 'Champ obligatoire']"
              ></q-input>
            </template>
        </q-card-section>
        <q-card-section class="row items-center">
          <q-file
            label="Pièce jointe"
            style="width:200px;"
          >
            <template v-slot:before>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </q-card-section>
        <q-card-section class="row items-center">
          <q-input
            label="Type de paiement"
            v-model="newBilling.typePaiement"
          ></q-input>
        </q-card-section>
        <q-card-section class="row items-center">
          <q-input
            v-model="newBilling.createdAt"
            type="date"
          >
            <template v-slot:before>
              <q-icon name="event" />
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Annuler" color="light" @click="reset" />
          <q-btn label="Ajouter le paiement" color="primary" @click="saveBilling" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

export default {
  name:"AddBilling",
  props: {
    alert: Boolean
  },
  data() {
    return {
      toggleType:'',
      newBilling:{
        credit:'',
        debit:'',
        createdAt:''
      },
      defaultBilling:{
        credit:'',
        debit:'',
        createdAt:''
      }
    }
  },
  methods: {
    saveBilling() {
      this.newBilling.id = Math.random().toString(36).substr(2, 9)
      this.$store.dispatch('updateBillings', this.newBilling)
      this.$store.dispatch('updateSelectedBilling', this.newBilling )
      this.showNotif()
      this.reset()
    },
    reset() {
      this.newBilling = Object.assign({}, this.defaultBilling)
      this.$emit('update:alert', false)
      this.toggleType = ''
    },
    showNotif() {
      this.$q.notify({
        position: 'top',
        message: 'Mouvement ajouté',
        color: 'positive',
        timeout: 1500,
      })
    },
  },
  
}
</script>