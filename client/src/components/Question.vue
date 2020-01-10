<template lang="html">
  <div>
    <h1>{{questions[currentQuestion].option1}}</h1>
  </div>
</template>

<script>
import QuizServices from "../services/QuizServices.js";

export default {
  name: "question",
  data() {
    return {
      questions: [],
      currentQuestion: 0
    };
  },
  mounted() {
    QuizServices.getQuestions().then(questions => (this.questions = questions));
  }
};
</script>

<style lang="css" scoped>
</style>