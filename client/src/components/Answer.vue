<template lang="html">
  <div class="answer-frame">
    <h1>ResponseText: {{this.questions[currentQuestion].responseText}}</h1>
    <p>this many people chose option1: {{this.questions[currentQuestion].totalResponses1}}</p>
    <p>this many people chose option2: {{this.questions[currentQuestion].totalResponses2}}</p>
    <p> Percentage1: {{percentage1}}</P>
    <p> Percentage2: {{percentage2}}</P>
    <button type="button" class="next-btn" v-on:click="handleNextClick">Next</button>
    <div id="chart_div"></div>
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
  return (100 - this.percentage1).toFixed(1)
}


}};
</script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Option');
    data.addColumn('number', 'Responses');
    data.addRows([
      ['Option 1', this.questions[this.currentQuestion].totalResponses1],
      ['Option 2', this.questions[this.currentQuestion].totalResponses2]
    ]);

    // Set chart options
    var options = {
      'title':'How many people choose which option',
      'width':400,
      'height':300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
</script>


<style lang="css" scoped>
</style>
