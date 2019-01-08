<template>
  <!-- FOOTER -->
  <v-footer class="pa-3" app>
    {{this.$vuetify.breakpoint.name}}
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
</style>
