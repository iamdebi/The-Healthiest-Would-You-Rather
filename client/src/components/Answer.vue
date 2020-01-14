<template lang="html">
  <div class="answer-main">
    <div class="animated animatedFadeInUp fadeInUp">
      <div class="answer-heading">
        <div class="img-left">
          <img class="img-small" :src="this.questions[currentQuestion].url1" v-bind:class="[chosen ? 'chosen' : 'not-chosen']"/>
        </div>
        <div class="answer-heading-text">
          <h1>{{this.questions[currentQuestion].responseText}}</h1>
        </div>
      <div class="img-right">
        <img class="img-small" :src="this.questions[currentQuestion].url2" v-bind:class="[chosen ? 'not-chosen' : 'chosen']"/>
      </div>
    </div>
      <div class="answer-middle">
        <div id='chart_div'>
        </div>
        <div class="answer-stats">
          <div class="answer-stats-1">
            <div class="big-percentage-1">{{percentage1}}%
            </div>
            <div class="stats-text-1">chose {{this.questions[currentQuestion].option1}} <br><span class="stats-people">({{this.questions[currentQuestion].totalResponses1}} people)</span>
            </div>
          </div>
          <div class="answer-stats-2">
            <div class="big-percentage-2">{{percentage2}}%
            </div>
            <div class="stats-text-2">chose {{this.questions[currentQuestion].option2}} <br><span class="stats-people">({{this.questions[currentQuestion].totalResponses2}} people)</span>
            </div>
          </div>
        </div>
        <div class="button-container">
          <button class="btn" type="button" v-on:click="handleNextClick">
            <span class="circle">
              <span class="icon arrow"></span>
            </span>
            <span id="next-text" class="button-text">Next</span>
          </button>
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
import GoogleChart from "../services/GoogleChart.js";
import { eventBus } from "../main.js";
// import { GChart } from 'vue-google-charts';
import PaginationDots from "./PaginationDots.vue";

export default {
  name: "answer",
  props: ["currentQuestion", "questions", "responses"],

  methods: {
    handleNextClick() {
      eventBus.$emit("next-question")
    }
  },
  computed: {
    percentage1: function (){
     let percentage = this.questions[this.currentQuestion].totalResponses1 / (this.questions[this.currentQuestion].totalResponses2 +this.questions[this.currentQuestion].totalResponses1)*100
     return percentage.toFixed(0)
    },
    percentage2: function (){
    return (100 - this.percentage1).toFixed(0)
    },
    chosen: function (){
      if (this.responses[this.counter] == 1) {
        return true
      }
      else {
        return false
      }
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
    padding:100px 20px 20px 20px;
    height:100vh;
    margin: 0 auto;
    background-image: linear-gradient(to right, rgba(197,68,251,.70), rgba(89,86,215,0.70));
  }

  .answer-heading {
    display: flex;
    padding: 0 60px;
  }

  .answer-heading-text {
        padding: 15px 40px 0 40px;
  }

  .answer-heading h1 {
    font-family: Baloo Bhai;
    font-size: 36px;
    color: #e2ff05;
    line-height: 42px;
    text-align: center;
  }

  .answer-middle {
   display:flex;
  }

  .answer-stats{
    padding-top: 125px;
    margin-right: 100px;
  }

  .answer-stats-1 {
    display:flex;
  }

  .big-percentage-1 {
    font-family: Baloo Bhai;
    text-align: right;
    font-size:70px;
    color: #99e394;
    text-transform:lowercase;
  }

  .stats-text-1{
    font-family: Baloo Bhai;
    font-size: 28px;
    padding: 28px 0 0 10px;
    color: #99e394;
    line-height: 24px;
    text-align: left;
  }

  .stats-people {
    font-family:Open Sans;
    font-size:20px;
  }

  .answer-stats-2 {
    display:flex;
  }

  .big-percentage-2 {
    font-family: Baloo Bhai;
    text-align: right;
    font-size:70px;
    color: #e2ff05;
    text-transform:lowercase;
  }

  .stats-text-2{
    font-family: Baloo Bhai;
    font-size: 28px;
    padding: 28px 0 0 10px;
    color: #e2ff05;
    line-height: 24px;
    text-align: left;
  }

  .button-container{
    display: flex;
    justify-content: flex-end;
    margin-top: 150px;
  }

  #chart_div {
    float:left;
    width:37.5%;
    height:400px;
  }

  .img-small {
    width:150px;
    height:150px;
    border-radius: 150px;
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

  #next-text{
    position: relative;
    top: -40px;
    left: 30%;
  }

  button.btn .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 7px;
    left: 65px;
    right: 0;
    bottom: 0;
    padding: 0.7rem 0;
    margin: 0 0 0 rem;
    color: #e2ff05;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
    font-family: Baloo Bhai;
    font-size:24px
  }

  button:hover .circle {
    width: 130%;
  }

  button:hover .circle .icon.arrow {
    background: #5956d7;
    -webkit-transform: translate(0.75rem, 0);
            transform: translate(0.75rem, 0);
  }

  button:hover .button-text {
    color: #5956d7;
    font-family: Baloo Bhai;
  }

  .chosen{
    border: 8px solid rgba(13,212,26,.62);
  }
  .not-chosen{
    border: 8px solid #6c74dd;
  }


</style>
