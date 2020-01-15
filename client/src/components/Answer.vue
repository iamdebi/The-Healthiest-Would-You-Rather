<template lang="html">
  <div class="answer-main">
    <div class="answer-container">
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
          <div v-bind:class="[chosen ? 'chosen-text' : 'not-chosen-text']">
            <p id="chose-text">You Chose This!</p>
          </div>
          <div class="answer-stats-1" v-bind:id="[chosen ? 'chosen-stats' : 'not-chosen-stats']">
            <div class="big-percentage-1">{{percentage1}}%
            </div>
            <div class="stats-text-1">chose {{this.questions[currentQuestion].option1}} <br><span class="stats-people">({{this.questions[currentQuestion].totalResponses1}} people)</span>
            </div>
          </div>
          <div v-bind:class="[chosen ? 'not-chosen-text' : 'chosen-text']">
            <p id="chose-text">You Chose This!</p>
          </div>
          <div class="answer-stats-2" v-bind:id="[chosen ? 'not-chosen-stats' : 'chosen-stats']">
            <div class="big-percentage-2">{{percentage2}}%
            </div>
            <div class="stats-text-2">chose {{this.questions[currentQuestion].option2}} <br><span class="stats-people">({{this.questions[currentQuestion].totalResponses2}} people)</span>
            </div>
          </div>
        </div>
        </div>
        <div style="clear:both;" />
        <div class="button-container">
          <button class="btn" type="button" v-on:click="handleNextClick">
            <span class="circle">
              <span class="icon arrow"></span>
            </span>
            <span id="next-text" class="button-text">Next</span>
          </button>
        </div>
      </div>
    <div style="clear:both;" />
      <div class="pagination">
        <pagination-dots :number="this.currentQuestion" :questions="this.questions" />
      </div>
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
     return percentage.toFixed(1)
    },

    percentage2: function (){
    return (100 - this.percentage1).toFixed(1)
    },

    chosen: function (){
      if (this.responses[this.responses.length-1] == 1) {
          return true
        }
        else {
          return false
        }
    },
    colour: function (){
      if (this.responses[this.currentQuestion] == 1) {
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
    if (this.colour) {
      GoogleChart.drawChart(this.questions[this.currentQuestion], "#c6cafb", "#86fc6f")
    }
    else {
      GoogleChart.drawChart(this.questions[this.currentQuestion], "#86fc6f", "#c6cafb")
    }

  }
};
</script>

<style lang="css" >

  .answer-main {
    width: 1310px;
    height:100vh;
    margin: 0 auto;
    background-image: linear-gradient(to right, rgba(197,68,251,.70), rgba(89,86,215,0.70));
  }

  .answer-container {
    padding:60px 30px 0px 30px;
  }

  .answer-heading {
    margin: 0 50px 0 50px;
    display: flex;
    padding: 0;
  }

  .answer-heading-text {
        padding: 15px 40px 0 40px;
  }

  .answer-heading h1 {
    font-family: Baloo Bhai;
        font-size: 48px;
        color: #e2ff05;
        line-height: 55px;
        text-align: center;
        padding: 15px;
        margin: 0;
  }

  .answer-middle {
    margin: 40px 0 0 0;
  }

  .answer-stats{
    padding-top: 90px;
    float:left;
    width:50%;
  }

  .answer-stats-1 {
    width:100%;
    margin-bottom: 60px;
  }

  .big-percentage-1 {
    font-family: Baloo Bhai;
    text-align: right;
    font-size:70px;
    text-transform:lowercase;
    position: relative;
    top: -20px;
    float:left;
    margin-right:20px;
  }

  #chart_div {
    float:left;
    width:37.5%;
    height:400px;
    margin-right:40px;
  }

  #chosen-stats{
    color: #86fc6f;
  }

  #not-chosen-stats{
   color: #c6cafb;
  }

  .stats-text-1{
    font-family: Baloo Bhai;
    font-size: 28px;
    padding: 12px 0 0 10px;
    line-height: 24px;
    text-align: left;
    text-transform: lowercase;
  }

  .stats-people {
    font-family:Open Sans;
    font-size:20px;
  }

  .answer-stats-2 {
    width:100%;
    margin-bottom: 30px;
  }

  .big-percentage-2 {
    font-family: Baloo Bhai;
    text-align: right;
    font-size:70px;
    text-transform:lowercase;
    position: relative;
    top: -20px;
    float:left;
    margin-right:20px;
  }

  .stats-text-2{
    font-family: Baloo Bhai;
    font-size: 28px;
    padding: 12px 0 0 10px;
    line-height: 24px;
    text-align: left;
    text-transform: lowercase;
  }

  .button-container{
  }

  .img-small {
    width:150px;
    height:150px;
    border-radius: 150px;
    background:#001e544c;
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
    float:right;
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
    border: 8px solid #86fc6f;
  }
  .not-chosen{
    border: 8px solid #c6cafb;
  }

  .chosen-text p {
    font-family :Permanent Marker;
    color:#86fc6f;
    font-size: 32px;
    margin: 0;
  }

  .not-chosen-text p{
    display:none;
  }



</style>
