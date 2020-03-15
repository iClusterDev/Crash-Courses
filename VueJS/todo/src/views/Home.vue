<template>
  <div id="home">
    <Form @add-todo="addTodo"></Form>
    <Todos :todos="todos" @delete-todo="deleteTodo"></Todos>
  </div>
</template>

<script>
import axios from "axios";
import Form from "../components/Form";
import Todos from "../components/Todos";

export default {
  name: "Home",
  data() {
    return {
      todos: []
    };
  },
  components: { Todos, Form },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(() => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios
        .post("https://jsonplaceholder.typicode.com/todos", { title, completed })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;

  &:hover {
    background: #666;
  }
}
</style>
