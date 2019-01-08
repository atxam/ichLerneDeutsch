<template>
  <v-flex xs12 sm10 md8 lg6 offset-sm1 offset-md2 offset-lg3>
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
            <v-card-text class="pa-1">Rating: {{book.level.join('/')}}, {{book.parts.length}} parts</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error">Youtube</v-btn>
              <v-btn :to="{name: 'book', params: {bookId: book.id}}" color="success">Open</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["book"]
};
</script>

<style>
</style>
