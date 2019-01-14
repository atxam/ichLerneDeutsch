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
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error">Youtube</v-btn>
                  <v-btn color="success">Add</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-card>
        <!-- BOOK PARTS -->
        <v-card v-for="(part, i) in book.parts" :key="i" class="mt-3">
          <v-card-actions>
            <h5 class="headline">{{part.title}}</h5>
            <v-spacer></v-spacer>
            <v-btn
              :to="{name: 'bookPart', params: {bookId: book.id, partId: part.id}}"
              color="success"
            >open</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
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
    ...mapGetters(["getBookById"]),
    book() {
      return this.getBookById(this.bookId);
    }
  },
  methods: {}
};
</script>

<style>
</style>
