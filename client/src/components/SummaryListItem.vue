<template lang="html">
  <div class="summary-list">
    <div class="option1">
      <img :src="this.question.url1"/>

    </div>

    <div class="option2">
      <img :src="this.question.url2"/>

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
     return percentage.toFixed(1)
    },
    percentage2: function (){
    return (100 - this.percentage1).toFixed(1)
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
}

</style>
