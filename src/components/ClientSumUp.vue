<template>
  <div class="row q-col-gutter-sm">
    <div class="col-12">
      <q-toolbar>
      <q-toolbar-title>
        <strong>Total de l'encours : 146 000 euros</strong>
      </q-toolbar-title>
      <q-space />
      <q-btn
        :icon="layout ? 'close' : 'add' "
        flat
        round
        dense
        float-right
        @click="toggleInfo"
      />
    </q-toolbar>
      <q-card flat bordered style="width:100%" v-if="layout" key="layout-encours">
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <!-- <div class="text-overline">Overline</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Total de l'encours</div> -->
            <q-range
              :min="0"
              :max="50"
            />
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      layout:false
    }
  },
  methods: {
    toggleInfo() {
      this.layout = !this.layout
    }
  },  
}
</script>