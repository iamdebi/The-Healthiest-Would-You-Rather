<template lang="html">
  <div id="">
    <ul>
      <response-list-item v-for="(question, index) in this.questions" :question="question" :responses="responses" :counter="index"/>
    </ul>
    <button type="button" name="share" v-on:click="displayShare = !displayShare" v-if="!displayShare">Share</button>
    <transition name="fade">
    <share-button v-if="displayShare" />
  </transition>
  </div>

</template>

<script>
import ResponseListItem from "./ResponseListItem.vue"
import ShareButton from "./shareButton.vue"
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
  }
}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
