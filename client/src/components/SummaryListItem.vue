<template lang="html">
  <div class="summary-list">
    <div>
      <img :src="this.question.url1" v-bind:class="[isActive ? 'active' : 'inactive']"/>
    </div>

    <div class="option1text">
      <p>{{this.percentage1}}%
      <p>{{this.question.totalResponses1}} people</p>
    </div>

    <div class="option2text">
      <p>{{this.percentage2}}%</p>
      <p>{{this.question.totalResponses2}} people</p>
    </div>

    <div>
      <img :src="this.question.url2" v-bind:class="[isActive ? 'inactive' : 'active']"/>
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
    },
    isActive: function (){
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
  width: 100px;
  height: 100px;
  box-shadow: 0px 0px 38px rgba(0,0,0,0.24);
  border-radius:400px;
  border: 10px solid #6c74dd;
  margin-right: 10px;
}
.summary-list{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.active{
  border: 10px solid rgba(13,212,26,.62);
}
.inactive{
  border: 10px solid #6c74dd;
}


</style>
