<template lang="html">
  <li>
    {{ question.totalResponses1 }} people chose {{ question.option1 }} and {{ question.totalResponses2 }} chose {{ question.option2 }}. You chose option {{responses[counter]}}
  </li>
</template>

<script>

export default {
  name:"response-list-item",
  props: ["question", "responses", "counter"],
}
</script>

<style lang="css" scoped>
</style>
