<template lang="html">
 <div id="app">
     <div class="QA" v-if="currentQuestion < 7">
  
  <div class="question" v-if="show">
    <p>Q{{currentQuestion + 1}}</p>
    <img src="./assets/logo.png" v-on:click="show = !show"/>
    <img src="./assets/logo.png" v-on:click="show = !show"/>
    </div>
    <div class="answer" v-else>
    <p >Answer</p>
    <button v-on:click="currentQuestion +=1, show = !show">
    Next!
  </button>
    </div>
    
</div>
 <div class="summary" v-else>
<p>Summary of User data</p>
</div>



</div>

</template>

<script>
import QuizServices from "./services/QuizServices.js";

export default {
  name: "app",

  data() {
    return {
      questions: [],
      users: [],
      show: true,
      currentQuestion: 0
    };
  },

  mounted() {
    QuizServices.getQuestions().then(questions => (this.questions = questions));
    QuizServices.getUsers().then(users => (this.users = users));
  }
};
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
