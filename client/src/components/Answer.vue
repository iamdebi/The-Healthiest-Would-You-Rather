<template lang="html">
  <div class="answer-main">
    <div class="animated animatedFadeInUp fadeInUp">
      <div class="answer-heading">
        <h1>{{this.questions[currentQuestion].responseText}}</h1>
      </div>
      <div class="answer-middle">
      <div id='chart_div'></div>
      <div class="answer-stats">
        <div class="answer-stats-1">
         <p style="text-transform:lowercase">{{percentage1}}% of people ({{this.questions[currentQuestion].totalResponses1}})  chose to eat {{this.questions[currentQuestion].option1}}</p>
        </div>
       <div class="answer-stats-2">
         <p style="text-transform:lowercase">{{percentage2}}% of people ({{this.questions[currentQuestion].totalResponses2}}) chose to eat {{this.questions[currentQuestion].option2}}</p>
       </div>
     </div>
    </div>
     <div class="next-button"
        <button type="button" class="next-btn" v-on:click="handleNextClick">Next</button>
     </div>
    </div>
  </div>
</template>

<script>
import QuizServices from "../services/QuizServices.js";
import GoogleChart from "../services/GoogleChart.js";
import { eventBus } from "../main.js";
import { GChart } from 'vue-google-charts';

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
    GoogleChart
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

#chart_div {
  float:left;
  width:40%;
  height:700px;
}


/*.next-button {
  clear:left;
  float:right
}*/


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
</style>
