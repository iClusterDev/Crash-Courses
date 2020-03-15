<template>
  <div id="todo" :class="{ completed: todo.completed }">
    <p>
      <input type="checkbox" @change="markComplete" />
      <span>{{ todo.title }}</span>
      <button class="del" @click="$emit('delete', todo.id)"><span>X</span></button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style lang="scss" scoped>
#todo {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.del {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff0000;
  color: #fff;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}

.completed {
  text-decoration: line-through;
}
</style>
