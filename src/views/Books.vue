<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 lg6 offset-sm1 offset-md2 offset-lg3>
        <v-layout>
          <v-flex xs12 sm6>
            <v-text-field v-model="search" label="Search"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              v-model="markLevel"
              :items="level"
              attach
              small-chips
              label="Book level"
              multiple
            ></v-select>
          </v-flex>
        </v-layout>
      </v-flex>
      <app-book-item v-for="(book, i) in filteredBooks" :key="i" :book="book"></app-book-item>
    </v-layout>
  </v-container>
</template>

<script>
import BookItem from "@/components/BookItem.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search: "",
      level: ["A1", "A2", "B1", "B2", "C1", "C2"],
      markLevel: []
    };
  },
  computed: {
    ...mapGetters(["getBooks"]),
    filteredBooks() {
      let books = this.getBooks;
      if (this.search) {
        books = books.filter(
          book =>
            book.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
            book.description.toLowerCase().indexOf(this.search.toLowerCase()) >=
              0
        );
      }
      if (this.markLevel.length) {
        books = books.filter(
          b =>
            b.level.filter(lvl => this.markLevel.indexOf(lvl) >= 0).length > 0
        );
      }
      return books;
    }
  },
  components: {
    "app-book-item": BookItem
  }
};
</script>

<style>
</style>
