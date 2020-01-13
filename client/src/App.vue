<template lang="html">

  <div  v-on:load="openFullscreen()" id="app">
    <div class="intro" v-if="this.currentQuestion == -1">
      <intro />
      <button type="button" name="button" v-on:click="summary">Summary</button>
      <button v-on:click="openFullscreen();">Open Fullscreen</button>
<button v-on:click="closeFullscreen();">Close Fullscreen</button>
    </div>

    <div class="QA" v-if="this.currentQuestion >= 0 && this.currentQuestion < this.questions.length">
      <div class="question" v-if="this.show == true">
        <question :currentQuestion="this.currentQuestion" :questions="this.questions"/>
      </div>
      <div class="answer" v-if="this.show == false">
        <answer :questions="questions" :currentQuestion="this.currentQuestion"/>
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
    },
    summary() {
      this.currentQuestion = 7
    },

    openFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
    document.documentElement.msRequestFullscreen();
  }
},

  closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
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
