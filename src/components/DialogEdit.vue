<template>
<div>
  <q-btn
    label="Bottom"
    icon="keyboard_arrow_down"
    color="primary"
    @click="open('bottom')"
  />
  <q-dialog v-model="dialog" position="bottom">
    <q-card style="width: 350px">

      <q-card-section class="row items-center no-wrap">
        <div>
          <div class="text-weight-bold">The Walker</div>
          <div class="text-grey">Fitz & The Tantrums</div>
        </div>

        <q-space />

        <q-btn flat round icon="fast_rewind" />
        <q-btn flat round icon="pause" />
        <q-btn flat round icon="fast_forward" />
      </q-card-section>
    </q-card>
  </q-dialog>  
  </div>
</template>

<script>
export default {
  name:'DialogEdit',
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    open() {
      this.dialog = true
    }
  }
}
</script>