<template>
  <v-container>
    <SignIn />
    <TrelloBoard msg="Welcome to Your Vue.js App" />
  </v-container>
</template>

<script>
// @ is an alias to /src
import TrelloBoard from '@/components/TrelloBoard.vue';
import SignIn from '@/components/SignIn.vue';

export default {
  name: 'Home',
  components: {
    TrelloBoard,
    SignIn
  }
};
</script>
