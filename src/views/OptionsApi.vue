<script>
export default {
  data() {
    return {
      newTodoName: "",
      todos: [
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
      ],
      swearWords: ["fart", "asshole", "cunt"],
    };
  },
  computed: {
    todosCount() {
      return this.todos.length;
    },
  },
  watch: {
    newTodoName(value) {
      if (this.swearWords.includes(value.toLowerCase())) {
        this.newTodoName = "";
        alert("You must never say " + value + "!!!");
      }
    },
  },

  methods: {
    addTodo() {
      if (this.newTodoName == "") return;
      let newTodo = {
        id: Date.now(),
        name: this.newTodoName,
      };
      this.todos.push(newTodo);
      this.newTodoName = "";
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
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
