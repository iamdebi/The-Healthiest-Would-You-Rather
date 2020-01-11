<template lang="html">
  <div id="app">
    <div class="QA" v-if="this.currentQuestion < 7">
      <div class="question" v-if="this.show == true">
        <question :currentQuestion="this.currentQuestion"/>
      </div>
      <div class="answer" v-if="this.show == false">
        <p >Answer</p>
        <button v-on:click="nextQuestion()">Next!</button>
      </div>
    </div>
    <div class="summary" v-if="this.currentQuestion == 7">
      <summary :questions="this.questions"/>
    </div>
  </div>

</template>

<script>
import Answer from "./components/Answer.vue";
import {eventBus} from "./main.js";
import QuizServices from "./services/QuizServices.js";
import Question from "./components/Question.vue";
import Summary from "./components/Summary.vue";


export default {
  name: "app",

  data() {
    return {
      users: [],
      show: true,
      currentQuestion: 0
    };
  },

  mounted() {
    QuizServices.getUsers()
    .then(users => (this.users = users));

    eventBus.$on("change-display", display => {
      this.nextDisplay()
    });

  },

  components: {
    "question": Question,
    "summary": Summary
  },

  methods: {
    nextQuestion() {
      this.currentQuestion += 1
      this.nextDisplay()
    },
    nextDisplay() {
      this.show = !this.show
    }
  },


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
