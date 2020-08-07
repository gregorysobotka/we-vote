<template>
  <v-form>

      <v-row>
        <v-col cols="12" xs="12" sm="12" md="10" lg="8" xl="8">
          <v-text-field label="api key" v-model="providedAPIKey"></v-text-field>
          
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="2">
          <v-btn large color="primary">Save</v-btn>
          <v-btn large color="error">Error</v-btn>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          {{ apiKey }} - {{ providedAPIKey }}
        </v-col>
      </v-row>

  </v-form>
</template>

<script>
export default {
  name: 'SignIn',
  props: {},
  computed: {
    apiKey: function() {
      return this.$store.getters.apiKey;
    }
  },
  methods: {
    saveAPIKey() {
      console.log(this.providedAPIKey);
      this.$store.commit('saveAPIKey', this.providedAPIKey);
      console.log(this.$store.getters.apiKey);
    }
  },
  data: function() {
    return {
      providedAPIKey: ''
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
