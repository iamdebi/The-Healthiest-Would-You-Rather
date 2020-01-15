<template lang="html">
  <div class="summary-list-item">

    <div class="option1-image">
      <img :src="this.question.url1" v-bind:class="[chosen ? 'chosen' : 'not-chosen']"/>
    </div>

    <div class="option1-text">
      <p class="sum-percent">{{this.percentage1}}%</p><br><p class="option-people">{{this.question.totalResponses1}} people</p>
    </div>
      <div class="option2-text">
        <p class="sum-percent">{{this.percentage2}}%</p><br><p class="option-people">{{this.question.totalResponses2}} people</p>
      </div>

    <div class="option2-image">
      <img :src="this.question.url2" v-bind:class="[chosen ? 'not-chosen' : 'chosen']"/>
    </div>

  </div>
</template>

<script>

export default {
  name:"summary-list-item",
  props: ["question", "responses", "counter"],
  computed: {
    percentage1: function (){
     let percentage = this.question.totalResponses1 / (this.question.totalResponses2 + this.question.totalResponses1)*100
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
  }
}
</script>

<style lang="css" scoped>
  img {
    width: 150px;
    height: 150px;
    box-shadow: 0px 0px 38px rgba(0,0,0,0.24);
    border-radius:400px;
    border: 10px solid #6c74dd;
    margin-right: 10px;
    background:#001e544c;
  }

  .summary-list-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 20px;
  }

  .chosen{
    border: 8px solid rgba(13,212,26,.62);
  }

  .not-chosen{
    border: 8px solid #6c74dd;
  }

  .option1-text, .option2-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .sum-percent, .option2-percent p{
    color: #fff;
    font-family: Baloo Bhai;
    font-size: 48px;
    margin:0;
    line-height: 0.4;
  }

  .option-people {
    color: #fff;
    font-family: Open Sans;
    font-size: 16px;
    margin:0;
  }


</style>
