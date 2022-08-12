<script setup>
import { computed, ref, watch } from "vue";

let newTodoName = ref("");
let todos = ref([
  {
    id: 1,
    name: "One",
  },
  {
    id: 2,
    name: "Two",
  },
  {
    id: 3,
    name: "Three",
  },
]);
const swearWords = ref(["fart", "asshole", "cunt"]);
let todosCount = computed(() => {
  return todos.value.length;
});

const addTodo = () => {
  if (newTodoName.value == "") return;
  let newTodo = {
    id: Date.now(),
    name: newTodoName.value,
  };
  todos.value.push(newTodo);
  newTodoName.value = "";
};
const deleteTodo = (index) => todos.value.splice(index, 1);

watch(newTodoName, (value) => {
  if (swearWords.value.includes(value.toLowerCase())) {
    newTodoName.value = "";
    alert("You must never say " + value + "!!!");
  }
});
</script>

<template>
  <main>
    <h3>You have {{ todosCount }} Todos!</h3>
    <div>
      <input
        v-model="newTodoName"
        placeholder="Add a Todo"
        type="text"
        @keyup.enter="addTodo"
      />
    </div>
    <div>
      <ul>
        <li v-for="(todo, index) in todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(index)">X</button>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 20px auto;
  width: 200px;
}
li {
  border: 1px solid;
  display: flex;
  margin-bottom: 10px;
}
li span {
  flex-grow: 1;
}
</style>
