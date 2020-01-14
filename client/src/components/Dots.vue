<template lang="html">
  <li v-bind:id="[isActive ? 'active' : 'notActive']"></li>
</template>

<script>
export default {
  name:"dots",
  props: ["number", "counter"],
  computed: {
    isActive: function(){
      if (this.number == this.counter) {
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
</style>
