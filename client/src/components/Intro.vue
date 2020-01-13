<template lang="html">
  <div class="intro-main">
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

<style lang="css">

.intro-main {
  width: 900px;
  padding:20px;
  height:100vh;
  margin: 0 auto;
  background-image: linear-gradient(90deg, #0dd41a 0%, #86fc6f 100% );
}

</style>
