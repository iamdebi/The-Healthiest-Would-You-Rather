<template lang="html">
  <div class="pagination">
    <ul>
      <dots v-for="(index) in [0, 1, 2, 3, 4, 5]" :number="number" :counter="index" />
    </ul>
  </div>
</template>

<script>

import eventBus from "../main.js"
import Dots from "./Dots.vue"

export default {
  name:"pagination-dots",
  props: ["number"],
  components: {
    "dots": Dots
  }
}
</script>

<style lang="css" scoped>

  .pagination {
    position: absolute;
    bottom: 20px;
    left: 43%;
  }

  .pagination ul{
    margin: 0 auto;
    padding: 0;
    list-style-type: none;
    text-align: center;
  }

  li{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 13px;
    border-radius: 100%;
    background-color: #c6cafb;
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
