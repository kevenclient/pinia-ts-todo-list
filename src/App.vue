<template>
  <div class="container my-3 mt-md-4 mb-md-5">
    <header class="display-1 text-center mb-4">
      To-Do List
    </header>
    <TodoForm/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoForm from './components/TodoForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    TodoForm,
  },
});
</script>
