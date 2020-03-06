<template>
  <div>
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