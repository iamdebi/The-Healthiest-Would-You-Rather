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
    <div class="option1">
      <img :src="this.questions[currentQuestion].url1" v-on:click="handleClick1"/>
      <h3 class="option-text">{{this.questions[currentQuestion].option1}}</h3>
    </div>
    <div class="option2">
      <img :src="this.questions[currentQuestion].url2" v-on:click="handleClick2"/>
      <h3 class="option-text">{{this.questions[currentQuestion].option2}}</h3>
    </div>
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
      this.questions[currentQuestion].totalResponses1 += 1;
      QuizServices.updateQuestionResponses(this.questions[currentQuestion]);
      eventBus.$emit("change-display", 1)
    },
    handleClick2() {
      this.questions[currentQuestion].totalResponses2 += 1;
      QuizServices.updateQuestionResponses(this.questions[currentQuestion]);
      eventBus.$emit("change-display", 2)
    },
  }
};
</script>

<style lang="css" scoped>

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
</style>
