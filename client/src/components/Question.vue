<template lang="html">
  <div class="question">
    <h1>This is option 1 {{this.questions[currentQuestion].option1}}</h1>
    <img :src="this.questions[currentQuestion].url1" v-on:click="handleClick"/>
    <img :src="this.questions[currentQuestion].url2" v-on:click="handleClick"/>
    <button v-on:click="handleClick">Click</button>
    <button v-on:click="handleClick">Click2</button>
  </div>
</template>

<script>
import QuizServices from "../services/QuizServices.js";
import { eventBus } from "../main.js";

export default {
  name: "question",
  props: ["currentQuestion"],

  data() {
    return {
    };
  },

  methods: {
    handleClick() {
      eventBus.$emit("change-display")
    }
  }
};
</script>

<style lang="css" scoped>
</style>
