<template>
  <v-container v-if="part" grid-list-md>
    <v-layout class="mt-2" wrap>
      <v-flex xs12 sm10 lg8 xl6 offset-sm1 offset-lg2 offset-xl3>
        <!-- BOOK PART CONTENT -->
        <app-book-part-content :part="part"></app-book-part-content>
        <!-- BOOK PART WORDS -->
        <v-data-iterator hide-actions :items="part.words" content-tag="v-layout" row wrap>
          <v-flex class slot="item" slot-scope="props" xs12 sm6 md4 lg3>
            <v-card>
              <v-list two-line dense>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title class="body-2">{{props.item.origWord}}</v-list-tile-title>
                    <v-list-tile-sub-title>
                      <span class="body-1">{{props.item.transWord}}</span>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-avatar>
                    <v-btn class="success" icon>
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-list-tile-avatar>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-data-iterator>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import BookPartContent from "@/components/BookPartContent.vue";
export default {
  props: ["bookId", "partId"],
  data() {
    return {
      part: null
    };
  },
  computed: {
    ...mapGetters([])
  },
  methods: {},
  components: {
    "app-book-part-content": BookPartContent
  },
  created() {
    this.$store
      .dispatch("fetchBookPartById", {
        bookId: this.bookId,
        partId: this.partId
      })
      .then(part => {
        this.part = part;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style>
</style>
