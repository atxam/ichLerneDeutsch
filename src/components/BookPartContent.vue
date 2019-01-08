<template>
  <v-card class="mb-3">
    <v-card-title>
      <div>
        <h4 class="display-1">{{part.bookTitle}}</h4>
        <h5 class="headline">{{part.partTitle}}</h5>
      </div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-responsive>
        <v-layout>
          <v-flex xs12 sm10 offset-sm1>
            <v-img
              aspect-ratio="1.5"
              src="http://sm.pcmag.com/t/pcmag_in/photo/default/youtube-logo_rrpq.640.jpg"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-responsive>
      <v-slider v-model="fontSize" :label="`Size (${fontSize})`" step="1" min="14" max="30"></v-slider>
      <v-tabs class="mt-3" centered color="cyan" dark icons-and-text>
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab key="tab1">Text with tips
          <v-icon>message</v-icon>
        </v-tab>
        <v-tab key="tab2">Parallel
          <v-icon>view_column</v-icon>
        </v-tab>
        <v-tab-item key="tab1">
          <v-card flat>
            <v-card-text>
              <div v-for="(paragraph, i) in part.paragraphs" :key="i">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  v-for="(sentence, j) in paragraph.sentences"
                  :key="j"
                  :style="styleObj"
                >
                  {{sentence.origText}}
                  <v-icon
                    @click="toggle(i + '' + j)"
                    onselectstart="return false"
                    :size="fontSize"
                    class="pointer pr-1"
                  >visibility</v-icon>
                  <span :ref="`${i}${j}`" hidden class="green darken-1">
                    <span class="white--text">{{sentence.transText}}</span>
                  </span>
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item key="tab2">
          <v-layout>
            <v-flex xs12 sm6 class="mt-3">
              <div v-for="(paragraph, x) in part.paragraphs" :key="x">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  v-for="(sentence, y) in paragraph.sentences"
                  :key="y"
                  :style="styleObj"
                >{{sentence.origText}}</span>
              </div>
            </v-flex>
            <v-flex xs12 sm6 class="mt-3">
              <div v-for="(paragraph, x) in part.paragraphs" :key="x">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  v-for="(sentence, y) in paragraph.sentences"
                  :key="y"
                  :style="styleObj"
                >{{sentence.transText}}</span>
              </div>
            </v-flex>
          </v-layout>
        </v-tab-item>
      </v-tabs>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["part"],
  data() {
    return {
      fontSize: 17
    };
  },
  computed: {
    styleObj() {
      return {
        "font-size": this.fontSize + "px"
      };
    }
  },
  methods: {
    toggle(ref) {
      let elem = this.$refs[ref][0];
      elem.hidden = !elem.hidden;
    }
  }
};
</script>

<style>
</style>
