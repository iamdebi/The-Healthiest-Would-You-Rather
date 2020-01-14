<template lang="html">
  <div class="summary-main">
    <ul>
      <response-list-item v-for="(question, index) in this.questions" :question="question" :responses="responses" :counter="index"/>
    </ul>
    <button type="button" name="share" v-on:click="handleScreenshot(); displayShare = !displayShare " v-if="!displayShare">Share</button>
    <transition name="fade">
      <share-button v-if="displayShare" v-on:click="handleScreenshot" />
    </transition>
    <!-- <button type="button" v-on:click="handleScreenshot">Screenshot</button> -->
  </div>
</template>

<script>
import ResponseListItem from "./ResponseListItem.vue"
import ShareButton from "./ShareButton.vue"
import CanvasFunction from "../services/CanvasFunction.js"
export default {
  name: "summary-list",

  data() {
    return {
      displayShare: false
    }
  },

  props : ["questions", "responses"],

  components: {
    "response-list-item": ResponseListItem,
    "share-button": ShareButton,
    "canvas-function": CanvasFunction
  },

  methods: {
    handleScreenshot() {
      CanvasFunction.takeScreenshot()
    }
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
</style>
