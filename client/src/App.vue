<template lang="html">
 <div id="app">
     <!-- <div class="QA" v-if="currentQuestion < questions.length"> -->
  
  <div class="question" v-if="show">
    <question />
    <img src="./assets/logo.png" v-on:click="show = !show"/>
    <img src="./assets/logo.png" v-on:click="show = !show"/>
    </div>
    <div class="answer" v-else>
    <p >Answer</p>
    <!-- <button v-on:click="currentQuestion +=1, show = !show"> -->
    <!-- Next!
  </button> -->
    <!-- </div> -->
    
</div>
 <div class="summary" v-else>
<p>Summary of User data</p>
</div>



</div>

</template>

<script>
import QuizServices from "./services/QuizServices.js";
import Question from "./components/Question.vue";

export default {
  name: "app",

  data() {
    return {
      users: [],
      show: true
    };
  },

  mounted() {
    QuizServices.getUsers().then(users => (this.users = users));
  },

  components: {
    question: Question
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
