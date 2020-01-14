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


/*image pop */



img:hover {
  animation: img-animation 1000ms linear both;
  border:0;
  cursor: pointer;
}

@keyframes img-animation {
  0% { transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  3.4% { transform: matrix3d(0.932, 0, 0, 0, 0, 0.941, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  4.7% { transform: matrix3d(0.945, 0, 0, 0, 0, 0.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  6.81% { transform: matrix3d(0.966, 0, 0, 0, 0, 0.989, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  9.41% { transform: matrix3d(0.988, 0, 0, 0, 0, 1.017, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  10.21% { transform: matrix3d(0.994, 0, 0, 0, 0, 1.023, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  13.61% { transform: matrix3d(1.012, 0, 0, 0, 0, 1.033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  14.11% { transform: matrix3d(1.014, 0, 0, 0, 0, 1.033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  17.52% { transform: matrix3d(1.021, 0, 0, 0, 0, 1.024, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  18.72% { transform: matrix3d(1.021, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  21.32% { transform: matrix3d(1.02, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  24.32% { transform: matrix3d(1.015, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  25.23% { transform: matrix3d(1.013, 0, 0, 0, 0, 0.994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  29.03% { transform: matrix3d(1.006, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  29.93% { transform: matrix3d(1.005, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  35.54% { transform: matrix3d(0.998, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  36.74% { transform: matrix3d(0.997, 0, 0, 0, 0, 0.998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  41.04% { transform: matrix3d(0.996, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  44.44% { transform: matrix3d(0.997, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  52.15% { transform: matrix3d(0.999, 0, 0, 0, 0, 1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  59.86% { transform: matrix3d(1.001, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  63.26% { transform: matrix3d(1.001, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  75.28% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  85.49% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  90.69% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
}



</style>
