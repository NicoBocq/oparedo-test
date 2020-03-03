<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <ClientUsers />
    <ClientSumUp />
  </div>
</template>

<script>

import ClientUsers from '@/components/ClientUsers';
import ClientSumUp from '@/components/ClientSumUp';

export default {
  name:'User',
  components: {
    ClientUsers,
    ClientSumUp
  }
}
</script>