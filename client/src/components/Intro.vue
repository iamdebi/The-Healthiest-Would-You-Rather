<template lang="html">
  <div class="app">
    <h1>Healthy Quiz</h1>
    <p>Helping you make better food choices</p>
    <button type="button" v-on:click="handleStartButtonClick()">Start</button>
    <p>{{this.number}} people have taken this quiz</p>
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
  },
  props: ["number"]
}
</script>

<style lang="css" scoped>

</style>
