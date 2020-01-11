<template lang="html">
  <div class="question">
    <div class="title">
      <h1>Question: {{currentQuestion+1}} </h1>
    </div>
    <div class="option1">
      <h3>{{this.questions[currentQuestion].option1}}</h3>
      <img :src="this.questions[currentQuestion].url1" v-on:click="handleClick"/>
    </div>
    <div class="option2">
      <h3>{{this.questions[currentQuestion].option2}}</h3>
      <img :src="this.questions[currentQuestion].url2" v-on:click="handleClick"/>
    </div>
  </div>
</template>

<script>
import QuizServices from "../services/QuizServices.js";
import { eventBus } from "../main.js";

export default {
  name: "question",
  props: ["currentQuestion", "questions"],

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
