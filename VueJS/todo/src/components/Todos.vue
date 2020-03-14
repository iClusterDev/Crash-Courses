<template>
  <div id="todos">
    <div v-for="(todo, index) in todos" :key="index">
      <todo :todo="todo" @delete="$emit('delete-todo', todo.id)"></todo>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo";

export default {
  name: "todos",
  props: ["todos"],
  components: { Todo }
};
</script>

<style lang="scss" scoped></style>
