<template>
  <div>
    
    <br>
    {{ selected }}
  </div>
</template>

<script>

// import mapGetters from 'vuex'

export default {
  props: {
    selected: Array
  },
  // computed: {
  //   ...mapGetters([
  //     'selectedBilling'
  //   ])
  // },
}
</script>