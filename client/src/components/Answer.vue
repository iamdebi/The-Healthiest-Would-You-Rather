<template lang="html">
  <div class="answer-main">
    <div class="animated animatedFadeInUp fadeInUp">
      <div class="answer-heading">
        <h1>{{this.questions[currentQuestion].responseText}}</h1>
      </div>
      <div class="answer-middle">
        <div id='chart_div'>
        </div>
        <div class="answer-stats">
          <div class="answer-stats-1">
            <p style="text-transform:lowercase">{{percentage1}}% of people ({{this.questions[currentQuestion].totalResponses1}})  chose to eat {{this.questions[currentQuestion].option1}}</p>
          </div>
          <div class="answer-stats-2">
            <p style="text-transform:lowercase">{{percentage2}}% of people ({{this.questions[currentQuestion].totalResponses2}}) chose to eat {{this.questions[currentQuestion].option2}}</p>
          </div>
        </div>
      </div>
      <div id="container">
        <button class="btn" type="button" v-on:click="handleNextClick">
          <span class="circle">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Next</span>
        </button>
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
import GoogleChart from "../services/GoogleChart.js";
import { eventBus } from "../main.js";
import { GChart } from 'vue-google-charts';
import PaginationDots from "./PaginationDots.vue";

export default {
  name: "answer",
  props: ["currentQuestion", "questions"],

  methods: {
    handleNextClick() {
      eventBus.$emit("next-question")
    }
  },
  computed: {
    percentage1: function (){
     let percentage = this.questions[this.currentQuestion].totalResponses1 / (this.questions[this.currentQuestion].totalResponses2 +this.questions[this.currentQuestion].totalResponses1)*100
     return percentage.toFixed(1)
    },
    percentage2: function (){
    return (100 - this.percentage1).toFixed(1)
    }
  },
  components: {
    GoogleChart,
    "pagination-dots": PaginationDots
  },
  mounted() {
    GoogleChart.drawChart(this.percentage1)
  }
};
</script>

<style lang="css">

.answer-main {
    width: 1310px;
    padding:20px;
    height:100vh;
    margin: 0 auto;
    background-image: linear-gradient(to right, rgba(197,68,251,.70), rgba(89,86,215,0.70));
  }

  .answer-heading h1 {
      font-family: Baloo Bhai;
      font-size: 36px;
      color: #e2ff05;
      line-height: 42px;
      text-align: center;
  }

  .answer-middle {
    width:100%;
    height:300px
  }

  .answer-stats{
    float:left;
    width:40%;
    padding:30px;
  }

  .answer-stats-1 p {
    font-family: Baloo Bhai;
    font-size: 36px;
    color: #99e394;
    line-height: 42px;
    text-align: left;
  }

  .answer-stats-2 p {
    font-family: Baloo Bhai;
    font-size: 36px;
    color: #e2ff05;
    line-height: 42px;
    text-align: left;
  }

#chart_div {
  float:left;
  width:40%;
  height:700px;
}

/* answer fade in transition */

@keyframes fadeInUp {
    from {
        transform: translate3d(0,0,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

@-webkit-keyframes fadeInUp {
    from {
        transform: translate3d(0,0,0)
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

/* next button transition */

* {
  box-sizing: border-box;
}

button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}

button.btn {
  width: 8rem;
  height: auto;
}

button.btn .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #e2ff05;
  border-radius: 1.625rem;
}

button.btn .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}

button.btn .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

button.btn .circle .icon.arrow::before {
  position: absolute;
  content: '';
  top: -0.30rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #5956d7;
  border-right: 0.125rem solid #5956d7;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

button.btn .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 12px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 2.5rem;
  color: #e2ff05;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  font-family: Baloo Bhai;
}

button:hover .circle {
  width: 100%;
}

button:hover .circle .icon.arrow {
  background: #5956d7;
  -webkit-transform: translate(0.5rem, 0);
          transform: translate(0.5rem, 0);
}

button:hover .button-text {
  color: #5956d7;
  font-family: Baloo Bhai;
}


</style>
