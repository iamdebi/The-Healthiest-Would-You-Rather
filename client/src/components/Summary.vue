<template lang="html">
  <div class="summary-main">
    <div class="summary-heading">
      <h1>Your choices!</h1>
    </div>
    <div class="summary-list-container">
      <summary-list-item v-for="(question, index) in this.questions" :question="question" :responses="responses" :counter="index"/>
    </div>
    <div class="share-text">
      <p>Share your results...</p>
    </div>
    <div class="sum-btn">
      <share-button />
      <button class="btn" type="button" id="screenshot" v-on:click="handleScreenshot()">Screenshot</button>
    </div>
  </div>
</template>

<script>
import ShareButton from "./ShareButton.vue"
import SummaryListItem from "./SummaryListItem.vue"
import QuizServices from "../services/QuizServices.js"
import CanvasFunction from "../services/CanvasFunction.js";
export default {
  name: "summary-list",
  data() {
    return {
      displayShare: false
    }
  },
  props : ["questions", "responses"],
  components: {
    "share-button": ShareButton,
    "summary-list-item": SummaryListItem,
    CanvasFunction
  },
  mounted() {
    QuizServices.postUser({responses: this.responses});
  },
  methods:{
    handleScreenshot() {
      CanvasFunction.takeScreenshot()
    }
  }
}
</script>

<style lang="css" scoped>

  h1 {
    color: #fff;
    font-family: Baloo Bhai;
    font-size: 45px;
    text-align: center;
  }

  .summary-heading {
    margin-bottom:50px;
  }

  .sum-btn{
    margin-top:40px;
    display: flex;
    justify-content: center;
  }

  .share-text {
    font-family:Baloo Bhai;
    font-size: 36px;
    color:white;
    text-align: center;
  }

  .summary-main {
    width: 1310px;
    padding:60px 30px 30px 30px;
    height:100vh;
    margin: 0 auto;
    background-image: linear-gradient(to right, rgba(13,212,26,.62), rgba(134,252,111,0.62));
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .summary-list-container{
    column-count: 2;
  }

  .btn{
    border-radius: 15px;
    background-color: #e1151a;
    color: #fff;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    padding: 7px;
    margin: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    display: inline-block;
  }

  .btn:hover{
    background-color: #a8151a;
  }
</style>
