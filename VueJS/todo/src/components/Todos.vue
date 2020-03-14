<template>
  <div id="todos">
    <div v-for="(todo, index) in todos" :key="index">
      <h3>{{todo.title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "todos",
  props: ["todos"]
};
</script>

<style lang="scss" scoped>
</style>