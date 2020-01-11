<template lang="html">
  <div id="">
    <ul>
      <response-list-item v-for="(question, index) in this.questions" :question="question"/>
    </ul>
    <!-- <button type="button" name="share">Share</button> -->
  </div>

</template>

<script>
import eventBus from "../main.js"
import ResponseListItem from "./ResponseListItem.vue"
export default {
  name: "summary-list",
  props : ["questions"],
  mounted() {

  },
  components: {
    "response-list-item": ResponseListItem
  }
}
</script>

<style lang="css" scoped>
</style>
