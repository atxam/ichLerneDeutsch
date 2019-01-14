<template>
  <v-container test>
    <h1>Profile</h1>
    <p>{{getUser}}</p>
    <pre>{{getUserData}}</pre>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getUser", "getUserData"])
  }
};
</script>

<style>
</style>
