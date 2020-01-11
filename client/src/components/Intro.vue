<template lang="html">
  <div class="">
    <h1>Title!</h1>
    <button type="button" v-on:click="handleStartButtonClick()">Start</button>
  </div>
</template>



<script>
import {eventBus} from "../main.js"
export default {
  name:"intro",
  methods: {
    handleStartButtonClick() {
      eventBus.$emit("next-question")
    }
  }
}
</script>

<style lang="css" scoped>
</style>
