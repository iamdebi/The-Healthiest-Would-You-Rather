<template lang="html">
  <div class="answer-frame">
    <h1>ResponseText: {{this.questions[currentQuestion].responseText}}</h1>
    <p>this many people chose option1: {{this.questions[currentQuestion].totalResponses1}}</p>
    <p>this many people chose option2: {{this.questions[currentQuestion].totalResponses2}}</p>
    <p> Percentage1: {{percentage1}}</P>
    <p> Percentage2: {{percentage2}}</P>
    <button type="button" class="next-btn" v-on:click="handleNextClick">Next</button>
  </div>
</template>

<script>
import QuizServices from "../services/QuizServices.js";
import { eventBus } from "../main.js";

export default {
  name: "answer",
  props: ["currentQuestion", "questions"],

  data() {
    return {
    };
  },
  methods: {
    handleNextClick() {
      eventBus.$emit("next-question")
  }},
  computed: {
   percentage1: function (){
     let percentage = this.questions[this.currentQuestion].totalResponses1 / (this.questions[this.currentQuestion].totalResponses2 +this.questions[this.currentQuestion].totalResponses1)*100
     //let rounded = Math.round( percentage * 10 ) / 10
     return percentage.toFixed(1)
},
  percentage2: function (){
  return 100 - this.percentage1
}


}};

</script>

<style lang="css" scoped>
</style>
