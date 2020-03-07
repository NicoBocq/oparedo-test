<template>
  <div>
    <q-toolbar>
      <q-toolbar-title>
        Information
      </q-toolbar-title>
      <q-space />
      <q-btn
        :icon="isOpen ? 'close' : 'add' "
        flat
        round
        dense
        float-right
        @click="toggleInfo()"
      />
    </q-toolbar>
    <div 
      class="row q-col-gutter-sm q-mb-md"
      v-if="isOpen"
      key="infoLayout"
    >
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
  <q-separator v-if="!isOpen" />
 </div>
</template>

<script>

import mapGetters from 'vuex'

export default {
  name:'UserCard',
  data() {
    return {
      isOpen: false,
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
    toggleInfo() {
      this.isOpen = !this.isOpen
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