<template lang="html">
  <div class="intro-main">
    <div class="screen-button">
      <button type="button" name="button" v-on:click="summary">Summary</button>
      <!-- TBD -->
      <button v-on:click="openFullscreen()" v-if="this.fullscreen == false">
        <img src="/img/full-screen.png"/>
      </button>
      <button v-on:click="closeFullscreen()" v-if="this.fullscreen">
        <img src="/img/reduce-screen.png"/>
      </button>
    </div>
    <div class="intro-heading">
       <h1>The Healthiest <br>Would You Rather Quiz!</h1>
    </div>
    <div class="intro-subhead">
       <p>Helping you make better food choices</p>
    </div>
    <div id="container" class="start-button-container">
      <button class="btn" type="button" v-on:click="handleStartButtonClick()">
        <span class="circle">
          <span class="icon arrow"></span>
      </span>
      <span id="start" class="button-text">Start</span></button>
    </div>

    <div class="intro-people-counter">
       <p>Join the {{this.number}} people that have taken this quiz</p>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
export default {
  name:"intro",
  data() {
    return {
      fullscreen: false
    }
  },
  methods: {
    handleStartButtonClick() {
      eventBus.$emit("next-question");
    },
    summary() {
      eventBus.$emit("summary");
    }, //TBD
    openFullscreen() {
      this.fullscreen = !this.fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
        document.documentElement.msRequestFullscreen();
      }
    },
    closeFullscreen() {
      this.fullscreen = !this.fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  },
  props: ["number", "currentQuestion"]
}
</script>

<style lang="css">

@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');


.intro-main {
  width: 1310px;
  padding:60px 30px 30px 30px;
  height:100vh;
  margin: 0 auto;
  background-image: linear-gradient(to right, rgba(13,212,26,.62), rgba(134,252,111,0.62));
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

.start-button-container {
  display: flex;
  justify-content: center;
}

.intro-people-counter {
  font-family: Open Sans;
  font-size: 32px;
  color: #e2ff05;
  text-align: center;
}

.screen-button{
  display: flex;
  flex-direction: row-reverse
}

</style>
