<template>
  <v-app>
    <menuNavigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import menuNavigation from '@/layout/menuNavigation';

export default {
  name: 'App',

  components: {
    menuNavigation
  },

  data: () => ({
    //
  })
};
</script>
