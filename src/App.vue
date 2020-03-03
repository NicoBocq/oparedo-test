<template>
  <q-layout view="lHh Lpr lFf">
    <Header />
    <!-- <Drawer /> -->
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>

import Header from './components/Header.vue';
// import Drawer from './components/Drawer.vue';

export default {
  name: 'Layout',
  components: {
    Header,
    // Drawer,
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>

<style>
</style>
