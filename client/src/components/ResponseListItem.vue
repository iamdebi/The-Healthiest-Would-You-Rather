<template lang="html">
  <div id="">
    <tr class="response-item">
      <td>{{ question.option1 }}</td>
      <td>{{ question.totalResponses1 }}</td>
      <td>{{ question.option2 }}</td>
      <td>{{ question.totalResponses2 }}</td>
    </tr>
  </div>

</template>

<script>

export default {
  name:"response-list-item",
  props: ["question"],

}
</script>

<style lang="css" scoped>
</style>
