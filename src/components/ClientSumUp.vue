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
      <q-card
        flat
        style="width:100%"
        v-if="layout"
        key="layout-encours"
      >
        <q-card-section>
          Encours non-échu
          <q-linear-progress size="30px" :value="progress1" color="green" class="q-mt-sm">
          <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="green" label="24 302" />
          </div>
          </q-linear-progress>
        </q-card-section>
        <q-card-section>
          Encours échu
          <q-linear-progress size="30px" :value="progress2" color="red" class="q-mt-sm">
            <div class="absolute-full flex flex-center">
              <q-badge color="white" text-color="red" label="118 861" />
            </div>
          </q-linear-progress>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      layout:false,
      progress1:0.2,
      progress2:0.8,
    }
  },
  methods: {
    toggleInfo() {
      this.layout = !this.layout
    }
  },  
}
</script>