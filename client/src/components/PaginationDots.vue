<template lang="html">
  <div class="pagination">
    <ul>
      <li></li>
      <li></li>
      <li id="is-active"></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>



<script>

import eventBus from "../main.js"

export default {
  name:"pagination-dots",
  props: ["number"]
}
</script>

<style lang="css" scoped>
.pagination{
  padding: 30px 0;
}

.pagination ul{
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.pagination li{
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 100%;
  background-color: #6C74DD;
}

#is-active{
  content: "";
  width: 12px;
  height: 12px;
  margin-top: 5px;
  border-radius: 100%;
  background-color: #2ecc71;
}
</style>
