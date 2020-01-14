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
        <button class="next-btn" type="button" v-on:click="handleNextClick">
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

<style lang="css" scoped>

.answer-main {
    width: 1310px;
    padding:20px;
    height:100vh;
    margin: 0 auto;
    background-image: linear-gradient(90deg, #1d64f0 0%, #1ad5fd 100%);
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

  .pagination{
    display:flex;
    justify-content:center;
    align-items: flex-end;
  }

#chart_div {
  float:left;
  width:40%;
  height:700px;
}

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

* {
  box-sizing: border-box;
}
*::before, *::after {
  box-sizing: border-box;
}

body {
  font-family: Open Sans;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  background: #f3f8fa;
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

button.next-btn {
  width: 8rem;
  height: auto;
}

button.next-btn .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #e2ff05;
  border-radius: 1.625rem;
}

button.next-btn .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}

button.next-btn .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

button.next-btn .circle .icon.arrow::before {
  position: absolute;
  content: '';
  top: -0.25rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #1C67F0;
  border-right: 0.125rem solid #1C67F0;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
button.next-btn .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #fff;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}
button:hover .circle {
  width: 100%;
}
button:hover .circle .icon.arrow {
  background: #1C67F0;
  -webkit-transform: translate(0.5rem, 0);
          transform: translate(0.5rem, 0);
}
button:hover .button-text {
  color: #1C67F0;
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  #container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }
}

</style>
