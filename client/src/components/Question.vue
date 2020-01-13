<template lang="html">
  <div class="question">
    <div class="animated animatedFadeInUp fadeInUp">
      <div class="title">
        <h1>Question: {{currentQuestion+1}} </h1>
      </div>
    </div>
    <div class="animated animatedFadeInUp fadeInUp">
      <div class="would-you-rather">
        <h2>Would you rather eat...?</h2>
      </div>
      <div class="or">
        <p class="or-text">OR</p>
      </div>
    </div>
    <div class="question-container animated animatedFadeInUp fadeInUp">
      <div class="option1">
        <img :src="this.questions[currentQuestion].url1" v-on:click="handleClick1"/>
        <h3 class="option-text">{{this.questions[currentQuestion].option1}}</h3>
      </div>
      <div class="option2">
        <img :src="this.questions[currentQuestion].url2" v-on:click="handleClick2"/>
        <h3 class="option-text">{{this.questions[currentQuestion].option2}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import QuizServices from "../services/QuizServices.js";
import { eventBus } from "../main.js";

export default {
  name: "question",
  props: ["currentQuestion", "questions"],

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


@keyframes fadeInUp {
    from {
        transform: translate3d(0,40px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

@-webkit-keyframes fadeInUp {
    from {
        transform: translate3d(0,40px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

.animated {
    animation-duration: 3s;
    animation-fill-mode: both;
    -webkit-animation-duration: 3s;
    -webkit-animation-fill-mode: both
}

.animatedFadeInUp {
    opacity: 0
}

.fadeInUp {
    opacity: 0;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
}

</style>
