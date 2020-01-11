<template lang="html">
    <li>
      {{ question.totalResponses1 }} people chose {{ question.option1 }} and {{ question.totalResponses2 }} chose {{ question.option2 }}.
    </li>

</template>

<script>

export default {
  name:"response-list-item",
  props: ["question"],

}
</script>

<style lang="css" scoped>
</style>
