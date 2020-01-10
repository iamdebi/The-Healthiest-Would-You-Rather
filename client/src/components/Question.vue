<template lang="html">
  <div class="question" v-if="show">
    <h1>{{questions[currentQuestion].option1}}</h1>
    <img :src="'questions[currentQuestion].url1}}'" />
  </div>
</template>

<script>
import QuizServices from "../services/QuizServices.js";
import { eventBus } from "../main.js";

export default {
  name: "question",

  data() {
    return {
      questions: []
    };
  },

  props: ["show", "currentQuestion"],

  mounted() {
    QuizServices.getQuestions().then(questions => (this.questions = questions));
  },

  methods: {
    increaseCurrentQuestion() {
      currentQuestion += 1;
    }
  }
};
</script>

<style lang="css" scoped>
</style>