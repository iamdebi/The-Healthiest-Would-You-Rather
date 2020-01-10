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
      questions: [],
      users: []
    };
  },

  mounted() {
    QuizServices.getQuestions().then(questions => (this.questions = questions));
    QuizServices.getUsers().then(users => (this.users = users));
  }
};
</script>

<style lang="css" scoped>
</style>
