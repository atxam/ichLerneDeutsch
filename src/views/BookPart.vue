<template>
  <v-container v-if="part" grid-list-lg>
    <v-layout class="mt-2" wrap>
      <v-flex xs12 sm10 lg8 xl6 offset-sm1 offset-lg2 offset-xl3>
        <!-- FINISHED INFO -->
        <v-card v-if="finishedDate" class="mb-2">
          <v-flex>
            <v-layout wrap>
              <v-flex xs12 sm4>
                <v-responsive>
                  <v-img
                    width="200px"
                    src="https://pngimage.net/wp-content/uploads/2018/06/mission-complete-png-3.png"
                    aspect-ratio="1.1"
                  ></v-img>
                </v-responsive>
              </v-flex>
              <v-flex xs12 sm7>
                <v-card-title class="pa-1">
                  <div>
                    <h5 class="headline">{{part.bookTitle}}</h5>
                    <span class="subheading">{{part.partTitle}}</span>
                  </div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-title class="pl-1 pt-2 pb-0">
                  <div
                    class="subheading"
                  >I finished reading this part: {{finishedDate | formattedDate}}</div>
                </v-card-title>
                <v-card-title class="pa-1">My rating:
                  <v-rating
                    readonly
                    class="ml-1"
                    :value="savedRating"
                    background-color="orange accent-4"
                    color="orange "
                    dense
                    hover
                    size="23"
                  ></v-rating>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-card>
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
        <!--BOOK PART FINISH -->
        <div v-if="!finishedDate" class="text-xs-center pt-3">
          <v-dialog v-model="dialog" max-width="450px">
            <v-btn slot="activator" color="success" dark>Finish</v-btn>
            <v-card class="mx-auto elevation-20">
              <v-layout justify-space-between>
                <v-flex xs8>
                  <v-card-title primary-title>
                    <div class="pb-3">
                      <div class="subheading font-weight-medium">{{part.bookTitle}}</div>
                      <div>{{part.partTitle}}</div>
                    </div>Rate this part:
                    <v-rating
                      class="ml-2"
                      v-model="rating"
                      background-color="orange accent-4"
                      color="orange "
                      dense
                      half-increments
                      hover
                      size="23"
                    ></v-rating>
                  </v-card-title>
                </v-flex>
                <v-img
                  class="shrink ma-2"
                  contain
                  height="125px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/2000px-Approve_icon.svg.png"
                  style="flex-basis: 125px"
                ></v-img>
              </v-layout>
              <v-divider></v-divider>
              <v-card-actions class="grey lighten-2 pa-3">
                <v-spacer></v-spacer>
                <v-btn @click="finish" color="success">Finish</v-btn>
                <v-btn @click="dialog = false">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
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
      part: null,
      rating: 0,
      dialog: false
    };
  },
  computed: {
    ...mapGetters(["getUserData"]),
    finishedDate() {
      if (
        !this.$store.getters.getUserData.books[this.bookId].parts[this.partId]
      )
        return false;
      return this.$store.getters.getUserData.books[this.bookId].parts[
        this.partId
      ].finishedDate;
    },
    savedRating() {
      if (
        !this.$store.getters.getUserData.books[this.bookId].parts[this.partId]
      )
        return false;
      return this.$store.getters.getUserData.books[this.bookId].parts[
        this.partId
      ].rating;
    }
  },
  methods: {
    finish() {
      this.dialog = false;
      this.$store.dispatch("finishedUserDataBookPart", {
        bookId: this.bookId,
        partId: this.partId,
        rating: this.rating
      });
    }
  },
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
      .then(() => {
        this.$store
          .dispatch("updateUserDataBookPart", {
            bookId: this.bookId,
            partId: this.partId
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }
};
</script>

<style>
</style>
