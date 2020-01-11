<template lang="html">
  <div class="answer-frame">
    <h1>ResponseText: {{this.questions[currentQuestion].responseText}}</h1>
    <p>Answer data component here</p>
    <button type="button" class="next-btn" v-on:click="handleNextClick">Next</button>
  </div>
</template>

<script>
import QuizServices from "../services/QuizServices.js";
import { eventBus } from "../main.js";

export default {
  name: "answer",
  props: ["currentQuestion", "questions"],

  data() {
    return {
    };
  },
  methods: {
    handleNextClick() {
      eventBus.$emit("next-question")
    }
  }
};
</script>

<style lang="css" scoped>
</style>
