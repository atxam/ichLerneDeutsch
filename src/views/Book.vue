<template>
  <v-container v-if="book" grid-list-lg>
    <v-layout>
      <v-flex xs12 sm10 md8 lg6 offset-sm1 offset-md2 offset-lg3>
        <!-- BOOK DETAILS -->
        <v-card>
          <v-flex>
            <v-layout wrap>
              <v-flex xs12 sm5>
                <v-responsive>
                  <v-img :src="book.imgSrc" aspect-ratio="1.4"></v-img>
                </v-responsive>
              </v-flex>
              <v-flex xs12 sm7>
                <v-card-title class="pa-1">
                  <div>
                    <h5 class="headline">{{book.title}}</h5>
                    <span class="subheading">{{book.description}}</span>
                  </div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text
                  class="pa-1"
                >Rating: {{book.level.join('/')}}, {{book.parts.length}} parts</v-card-text>
                <v-card-actions class="pb-0">
                  <v-spacer></v-spacer>
                  <v-btn color="error">Youtube</v-btn>
                  <v-btn
                    :disabled="!canAddBook"
                    :loading="loading"
                    @click="addBook"
                    color="success"
                  >Add</v-btn>
                </v-card-actions>
                <v-card-actions v-if="bookAddedDate" class="pa-0">
                  <v-spacer></v-spacer>
                  <v-icon>folder_open</v-icon>
                  <v-subheader class="pl-1">This book is added: {{bookAddedDate | formattedDate}}</v-subheader>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-card>
        <!-- BOOK PARTS -->
        <v-card v-for="(part, i) in book.parts" :key="i" class="mt-3">
          <v-list two-line>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title class>{{part.title}}</v-list-tile-title>
                <v-list-tile-sub-title
                  v-if="finishedDate(part.id)"
                >Finished date: {{finishedDate(part.id) | formattedDate}}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn
                  :disabled="!bookAddedDate"
                  :to="{name: 'bookPart', params: {bookId: book.id, partId: part.id}}"
                  class="success"
                >Open</v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <pre> {{getUserData}}</pre>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["bookId"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getBookById", "getUserData", "getUser", "loading"]),
    book() {
      return this.getBookById(this.bookId);
    },
    canAddBook() {
      return (
        !this.loading && this.getUser && !this.getUserData.books[this.bookId]
      );
    },
    bookAddedDate() {
      let book = this.getUserData.books[this.bookId];
      if (!book) return false;
      else return book.addedDate;
    }
  },
  methods: {
    addBook() {
      this.$store.dispatch("addUserDataBook", {
        userId: this.getUser,
        bookId: this.bookId
      });
    },
    finishedDate(partId) {
      if (!this.bookAddedDate) return false;

      let book = this.getUserData.books[this.bookId];
      if (book.parts[partId]) return book.parts[partId].finishedDate;
    }
  }
};
</script>

<style>
</style>
