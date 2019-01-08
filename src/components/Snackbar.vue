<template>
  <v-snackbar :value="error" color="red" multi-line>
    {{error}}
    <v-btn dark flat @click="clearError">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      snackbar: true
    };
  },
  computed: {
    ...mapGetters(["error"])
  },
  methods: {
    clearError() {
      this.$store.commit("clearError");
    }
  }
};
</script>

<style>
</style>
