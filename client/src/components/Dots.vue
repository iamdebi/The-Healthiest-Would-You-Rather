<template lang="html">
  <li v-bind:id="[isActive ? 'active' : this.counter]"></li>
</template>

<script>
export default {
  name: "dots",
  props: ["number", "counter"],
  computed: {
    isActive: function() {
      if (this.number == this.counter) {
        return true;
      } else if (this.number == -1 && this.counter == 0) {
        return true;
      } else if (this.number == 7 && this.counter == 6) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="css" scoped>
</style>
