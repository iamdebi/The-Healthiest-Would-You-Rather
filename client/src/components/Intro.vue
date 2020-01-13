<template lang="html">
  <div class="intro-main">
    <div class="intro-heading">
       <h1>The Healthiest <br>Would you rather Quiz!</h1>
    </div>
    <div class="intro-subhead">
       <p>Helping you make better food choices</p>
    </div>
    <div class="start-button-container">
      <button type="button" v-on:click="handleStartButtonClick()">Start</button>
    </div>
    <div class="intro-people-counter">
       <p>{{this.number}} people have taken this quiz</p>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name:"intro",
  methods: {
    handleStartButtonClick() {
      eventBus.$emit("next-question")
    }
  },
  props: ["number"]
}
</script>

<style lang="css">

@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai');


.intro-main {
  width: 900px;
  padding:20px;
  height:100vh;
  margin: 0 auto;
  background-image: linear-gradient(90deg, #0dd41a 0%, #86fc6f 100% );
}

.intro-heading {
  margin-top: 120px;
}

.intro-heading h1 {

    font-family: Baloo Bhai;
    font-size: 72px;
    color: #ffffff;
    line-height: 89px;
    text-align: center;
}

.intro-subhead {
    margin-top:0;
}

.intro-subhead p {
    font-family: Baloo Bhai;
    font-size: 48px;
    color: #e2ff05;
    text-align: center;
}

p {
  font-family: Open Sans;
}

</style>
