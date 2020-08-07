<template>
  <div class="Results">
    <p>Ex</p>
  </div>
</template>

<script>
export default {
  name: 'Results',
  components: {},
  methods: {
    trelloStatus() {
      console.log('running');
    }
  },
  data: function() {
    return {
      trelloResults: []
    };
  }
};
</script>
