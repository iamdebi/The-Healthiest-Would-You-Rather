<template lang="html">
  <div class="answer-frame">
    <h1>{{this.questions[currentQuestion].responseText}}</h1>
    <p style="text-transform:lowercase">{{percentage1}}% of people ({{this.questions[currentQuestion].totalResponses1}})  chose to eat {{this.questions[currentQuestion].option1}}</p>
    <p style="text-transform:lowercase">{{percentage2}}% of people ({{this.questions[currentQuestion].totalResponses2}}) chose to eat {{this.questions[currentQuestion].option2}}</p>
    <button type="button" class="next-btn" v-on:click="handleNextClick">Next</button>
    <div id='chart_div'></div>
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

  data() {
    return {
      // chartData: [['Option', 'Responses'],
      // ['Option 1', this.questions[this.currentQuestion].totalResponses1], ['Option 2', this.questions[this.currentQuestion].totalResponses2]],
      // chartOptions: {
      //   title: 'Responses',
      //   width: 600,
      //   height: 480,
      //   legend: {
      //     position: 'none'
      //   }
      // }
    }
  },
  methods: {
    handleNextClick() {
      eventBus.$emit("next-question")

    }
  },
  computed: {
    percentage1: function (){
     let percentage = this.questions[this.currentQuestion].totalResponses1 / (this.questions[this.currentQuestion].totalResponses2 +this.questions[this.currentQuestion].totalResponses1)*100
     //let rounded = Math.round( percentage * 10 ) / 10
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

<style lang="css" scoped>
button{
  padding:12px;
  border-radius: 10px;
}
#chart_div{
  height: 300px;
}
</style>
