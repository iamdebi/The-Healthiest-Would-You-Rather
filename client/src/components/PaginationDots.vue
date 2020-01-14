<template lang="html">
  <div class="pagination">
    <ul>
      <dots v-for="(question, index) in this.questions" :number="number" :counter="index" />
    </ul>
  </div>
</template>

<script>

import eventBus from "../main.js"
import Dots from "./Dots.vue"

export default {
  name:"pagination-dots",
  props: ["number", "questions"],
  components: {
    "dots": Dots
  }
}
</script>

<style lang="css" scoped>

  .pagination {
    margin:40px;
  }

  .pagination ul{
    margin: 0 auto;
    padding: 0;
    list-style-type: none;
    bottom: 0px;
    left: 43%;
    text-align: center;
  }

  li{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 13px;
    border-radius: 100%;
    background-color: #6C74DD;
  }

  #active{
    content: "";
    position:relative;
    top:4px;
    width: 30px;
    height: 30px;
    margin-top: 7px;
    border-radius: 100%;
    background-color: #86fc6f;
  }
</style>
