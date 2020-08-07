<template>
  <v-container>
    <SignIn v-if="!apiKey" />
    <TrelloBoard v-if="apiKey" />
    {{ apiKey }}
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
  },
  computed: {
    apiKey: function() {
      return this.$store.getters.savedAPIKey;
    }
  }
};
</script>
