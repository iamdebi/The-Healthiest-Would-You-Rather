<template lang="html">
  <div id="app">
    <div class="intro" v-if="this.currentQuestion == -1">
      <intro />
    </div>

    <div class="QA" v-if="this.currentQuestion >= 0 && this.currentQuestion < this.questions.length">
      <div class="question" v-if="this.show == true">
        <question :currentQuestion="this.currentQuestion" :questions="this.questions"/>
      </div>
      <div class="answer" v-if="this.show == false">
        <answer-frame :questions="questions" :currentQuestion="this.currentQuestion"/>
      </div>
    </div>
    <div class="summary" v-if="this.currentQuestion == 7">
      <summary-list :questions="this.questions" :responses="this.responses"/>
    </div>
  </div>

</template>

<script>

import {eventBus} from "./main.js";
import QuizServices from "./services/QuizServices.js";
import Question from "./components/Question.vue";
import Summary from "./components/Summary.vue";
import AnswerFrame from "./components/AnswerFrame.vue";
import Intro from "./components/Intro.vue";

export default {
  name: "app",

  data() {
    return {
      users: [],
      questions:[],
      show: false,
      currentQuestion: -1,
      responses:[]
    };
  },

  mounted() {
    QuizServices.getQuestions()
      .then(questions => (this.questions = questions));

    QuizServices.getUsers()
      .then(users => (this.users = users));

    eventBus.$on("change-display", response => {
      this.responses.push(response)
      this.nextDisplay();
    });

    eventBus.$on("next-question", question => {
      this.nextQuestion();
    });

  },

  components: {
    "question": Question,
    "summary-list": Summary,
    "answer-frame": AnswerFrame,
    "intro": Intro
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
