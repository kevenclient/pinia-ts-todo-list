<template>
  <div class="container my-3 mt-md-4 mb-md-5">
    <header class="display-1 text-center mb-4">
      To-Do List
    </header>
    <TodoForm/>
    <TodoList/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

export default defineComponent({
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
});
</script>
