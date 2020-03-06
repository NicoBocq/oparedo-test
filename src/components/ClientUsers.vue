<template>
  <div class="row">
  <q-card class="my-card" bordered style="width:50%">
    <q-card-section>
     
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ client.name }}
        </div>
        <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
          <q-icon name="place" />
          250 ft
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        Activité
      </div>
      <div class="text-caption text-grey">
        Small plates, salads & sandwiches in an intimate setting.
      </div>
    </q-card-section>
  </q-card>
  <q-card class="my-card" bordered style="width:25%">
    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ clients[0].name }}
        </div>
        <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
          <q-icon name="place" />
          250 ft
        </div>
      </div>
    </q-card-section>
  </q-card>    
  </div>
</template>

<script>

import mapGetters from 'vuex'

export default {
  name:'UserCard',
  data() {
    return {
      client: this.clients[0]
    }
  },
  computed: {
    ...mapGetters[(
      'clients'
    )]
  },
}
</script>