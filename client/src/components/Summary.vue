<template lang="html">
  <div class="summary-main">
    <div class="summary-heading">
      <h1>Your choices!</h1>
    </div>
    <div class="summary-list-container">
      <summary-list-item v-for="(question, index) in this.questions" :question="question" :responses="responses" :counter="index"/>
    </div>
      <share-button />
    <button type="button" v-on:click="handleScreenshot()">Screenshot</button>
  </div>
</template>

<script>
import ShareButton from "./ShareButton.vue"
import CanvasFunction from "../services/CanvasFunction.js"
import SummaryListItem from "./SummaryListItem.vue"
import QuizServices from "../services/QuizServices.js"
export default {
  name: "summary-list",

  data() {
    return {
      displayShare: false
    }
  },

  props : ["questions", "responses"],

  components: {
    "share-button": ShareButton,
    "canvas-function": CanvasFunction,
    "summary-list-item": SummaryListItem
  },

  methods: {
    handleScreenshot() {
      CanvasFunction.takeScreenshot()
    }
  },
  mounted() {
    QuizServices.postUser({responses: this.responses});
  }
}
</script>

<style lang="css" scoped>

  .summary-main {
    width: 1310px;
    padding:20px;
    height:100vh;
    margin: 0 auto;
    background-image: linear-gradient(to right, rgba(13,212,26,.62), rgba(134,252,111,0.62));
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .summary-list-container{
    column-count: 2;
  }
</style>
