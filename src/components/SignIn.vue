<template>
  <v-form>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="10" lg="8" xl="8">
        <v-text-field label="api key" v-model="providedAPIKey"></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="2">
        <div class="my-2">
          <v-btn large color="primary" v-on:click="saveAPIKey">Save</v-btn>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="3"> </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'SignIn',
  props: {},
  methods: {
    saveAPIKey() {
      this.$store.commit('saveAPIKey', this.providedAPIKey);
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
