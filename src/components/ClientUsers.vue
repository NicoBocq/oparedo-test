<template>
  <div 
    class="row q-col-gutter-sm"
    v-if="info"
    key="info"
  >
    <q-btn
      icon="close"
      flat
      round
      dense
      @click="switchInfo"
      class="btn-more"
    />
    <div class="col-6">
    <q-card 
      bordered
      flat
      style="width:100%"
    >
      <q-card-section>
      
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ client.name }}
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle1">
          Activité
        </div>
        <div class="text-caption text-grey q-mb-sm">
          {{ client.activite }}
        </div>
        <div class="text-subtitle1">
          Siège social
        </div>
        <div class="text-caption text-grey q-mb-sm">
          {{ client.address }}
        </div>
        <div class="text-subtitle1">
          Nombre de salariés
        </div>
        <div class="text-caption text-grey q-mb-sm">
          {{ client.salarie }}
        </div>
      </q-card-section>
    </q-card>
  </div>
  <div class="col-6">
    <q-card
      bordered
      flat
      v-for="(usr, index) in client.users.user"
      :key="'usr'+index"
      class="q-mb-sm"
    >
      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ usr.name }}
          </div>
        </div>
      </q-card-section>
    </q-card>    
  </div>
 </div>
</template>

<script>

import mapGetters from 'vuex'

export default {
  name:'UserCard',
  data() {
    return {
      info: true, 
      client: {
        id:1,
        name:"Kaliop",
        activite:"Conseil en sytèmes et logiciels informatiques",
        address:"1401 Avenue du Mondial 98, 34000 Montpellier",
        salarie:'',
        users: {
          user:
          [
            {
              name:"Dolores Dhedin",
            },
            {
              name:"Fatima Derlot"
            },
            {
              name:"Servane Louis"
            }
          ]
        },
      }
    }
  },
  methods: {
    switchInfo() {
      this.info != this.info
    }
  },
  computed: {
    ...mapGetters[(
      'clients'
    )]
  },
}
</script>

<style lang="scss" scoped>

.btn-more {
  position:absolute;
  right: 0;
  top: -1rem;
}
  
</style>