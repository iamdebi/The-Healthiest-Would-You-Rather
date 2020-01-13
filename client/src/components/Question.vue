<template lang="html">
  <div class="question">
    <div class="title">
      <h1>Question: {{currentQuestion+1}} </h1>
    </div>
    <div class="would-you-rather">
      <h2>Would you rather eat...?</h2>
    </div>
    <div class="or">
      <p class="or-text">OR</p>
    </div>
    <transition name="slide-fade">
      <div class="option1">
        <img :src="this.questions[currentQuestion].url1" v-on:click="handleClick1"/>
        <h3 class="option-text">{{this.questions[currentQuestion].option1}}</h3>
      </div>
      <div class="option2">
        <img :src="this.questions[currentQuestion].url2" v-on:click="handleClick2"/>
        <h3 class="option-text">{{this.questions[currentQuestion].option2}}</h3>
      </div>
    </transition>
  </div>
</template>

<script>
import QuizServices from "../services/QuizServices.js";
import { eventBus } from "../main.js";

export default {
  name: "question",
  props: ["currentQuestion", "questions"],

  data() {
    return {
    };
  },

  methods: {
    handleClick1() {
      this.questions[this.currentQuestion].totalResponses1 += 1;
      QuizServices.updateQuestionResponses(this.questions[this.currentQuestion]);
      eventBus.$emit("selected-option", 1)
    },
    handleClick2() {
      this.questions[this.currentQuestion].totalResponses2 += 1;
      QuizServices.updateQuestionResponses(this.questions[this.currentQuestion]);
      eventBus.$emit("selected-option", 2)
    },
  }
};
</script>

<style lang="css" >

.question {
  max-width:700px;
}

img {
  width:300px;
  height:300px;
  border-radius: 50%;
}

.option1 {
  float:left;
}

.option2 {
  float:right;
}

.option-text {
  align-content: center;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
