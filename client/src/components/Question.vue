<template lang="html">
  <div class="question">
    <h1>This is option 1 {{this.questions[currentQuestion].option1}}</h1>
    <img :src="this.questions[currentQuestion].url1" />
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
      questions: []
    };
  },

  mounted() {
    QuizServices.getQuestions()
    .then(questions => (this.questions = questions));
  }
};
</script>

<style lang="css" scoped>
</style>
