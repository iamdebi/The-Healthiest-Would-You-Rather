<template lang="html">
  <div class="question-main">
    <div class="animated animatedFadeInUp fadeInUp">
      <div class="animated animatedFadeInUp fadeInUp">
        <div class="question-heading">
          <h1>Make a healthy choice</h1>
        </div>
      </div>
      <div class="question-container animated animatedFadeInUp fadeInUp">
        <div class="option1">
          <div class="option1-image">
            <img :src="this.questions[currentQuestion].url1" v-on:click="handleClick1"/>
          </div>
          <div class="option1-text">
            <h3 class="option-text">{{this.questions[currentQuestion].option1}}</h3>
          </div>
        </div>
        <div class="option2">
          <div class="option2-image">
            <img :src="this.questions[currentQuestion].url2" v-on:click="handleClick2"/>
          </div>
          <div class="option2-text">
            <h3 class="option-text">{{this.questions[currentQuestion].option2}}</h3>
          </div>
        </div>
      </div>
    </div>
    <div style="clear:both;" />
    <div class="pagination">
      <pagination-dots :number="this.currentQuestion" :questions="this.questions" />
    </div>
  </div>
</template>

<script>
import QuizServices from "../services/QuizServices.js";
import { eventBus } from "../main.js";
import PaginationDots from "./PaginationDots.vue";

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
  },
  components: {
    "pagination-dots": PaginationDots
  }
};
</script>

<style lang="css" scoped>

.question-main {
    width: 1310px;
    padding:20px;
    height:100vh;
    margin: 0 auto;
    background-image: linear-gradient(to right, rgba(29,100,240,.70), rgba(26,213,253,0.70));
  }

  .question-heading h1 {
      font-family: Baloo Bhai;
      font-size: 72px;
      color: #ffffff;
      line-height: 89px;
      text-align: center;
  }

img {
  width: 400px;
  height: 400px;
  box-shadow: 0px 0px 38px rgba(0,0,0,0.24);
  border-radius:400px;
  border: 10px solid #6c74dd;
}
img:hover {
  border: 10px solid #86fc6f;
}

.option1 {
  float:left;
    padding-left: 195px;
}

.option2 {
  float:right;
    padding-right: 195px;
}

.option-text {
font-family: Baloo Bhai;
font-size: 48px;
color: #f0f086;
text-align: center;
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

.pagination{
  display:flex;
  justify-content:center;
  align-items: flex-end;
}

</style>
