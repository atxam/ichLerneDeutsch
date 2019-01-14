<template>
  <v-app>
    <app-header></app-header>

    <v-content>
      <!-- <v-progress-linear v-if="loading" class="mt-0" :indeterminate="true"></v-progress-linear> -->
      <router-view></router-view>
    </v-content>
    <app-snackbar></app-snackbar>
    <app-footer></app-footer>
  </v-app>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Snackbar from "@/components/Snackbar.vue";
export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-snackbar": Snackbar
  }
};
</script>

<style>
.test {
  border: 2px solid red;
}
.test2 {
  border: 2px solid rgb(29, 13, 240);
}
.test3 {
  border: 2px solid rgb(20, 143, 20);
}
</style>
