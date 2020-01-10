<template lang="html">
<div id="app">
    <p>app page</p>
 </div>

</template>

<script>
import QuizServices from "./services/QuizServices.js";

export default {
  name: "app",

  data() {
    return {
      questions: []
    };
  },

  mounted() {
    QuizServices.getQuestions().then(questions => (this.questions = questions));
  }
};
</script>

<style lang="css" scoped>
</style>
