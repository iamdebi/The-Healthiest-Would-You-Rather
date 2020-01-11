<template lang="html">
  <div id="summary">
    <table>
      <tr>
        <th>Option 1</th>
        <th>Number of people</th>
        <th>Option 2</th>
        <th>Number of people</th>
      </tr>
      <response-list-item v-for="(question, index) in questions" :question="question"/>
    </table>
    <!-- <button type="button" name="share">Share</button> -->
  </div>

</template>

<script>
import eventBus from "../main.js"
import ResponseListItem from "./ResponseListItem.vue"
export default {
  name: "summary",
  props : [questions],
  mounted() {

  },
  components: {
    "response-list-item": ResponseListItem
  }
}
</script>

<style lang="css" scoped>
</style>
