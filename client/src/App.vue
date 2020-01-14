<template lang="html">

  <div class="app" id="app">
    <div class="intro" v-if="this.currentQuestion == -1">
      <intro :number="this.users.length + 149" :currentQuestion="this.currentQuestion" />
    </div>

    <div class="QA" v-if="this.currentQuestion >= 0 && this.currentQuestion < this.questions.length">
      <div class="question" v-if="this.show == true">
        <question :currentQuestion="this.currentQuestion" :questions="this.questions"/>
      </div>
      <div class="answer" v-if="this.show == false">
        <answer :questions="this.questions" :currentQuestion="this.currentQuestion" :responses="this.responses"/>
      </div>
    </div>

    <div class="summary" v-if="this.currentQuestion == 6">
      <summary-list :questions="this.questions" :responses="this.responses"/>
    </div>

  </div>

</template>

<script>

import {eventBus} from "./main.js";
import QuizServices from "./services/QuizServices.js";
import Question from "./components/Question.vue";
import Summary from "./components/Summary.vue";
import Answer from "./components/Answer.vue";
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

    eventBus.$on("selected-option", response => {
      this.responses.push(response)
      this.nextDisplay();
    });

    eventBus.$on("next-question", question => {
      this.nextQuestion();
    });

    eventBus.$on("summary", summary => {
      this.currentQuestion = 6
    });

},

  components: {
    "question": Question,
    "summary-list": Summary,
    "answer": Answer,
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
  }
};
</script>

<style lang="css">
  #app {
    background-image: url("/img/food-background-blur.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  h1, h3, p {
    text-shadow: 0px 0px 39px rgba(0,0,0,0.5);
  }

  button{
    padding:12px;
    border-radius: 10px;
  }
</style>
