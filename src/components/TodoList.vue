<template>
  <ul class="list-group shadow">
    <TodoItem v-for="(item, id) in todos"
      :key="id" :item="item"/>
  </ul>
  <button v-if="completed" type="button"
    class="btn btn-link shadow-none my-3" data-bs-toggle="collapse"
    href="#collapseClosedTodos" aria-expanded="false">
    {{ completed }} Completed items
  </button>
  <ul class="list-group shadow collapse"
    id="collapseClosedTodos">
    <TodoItem v-for="(item, id) in closed"
      :key="id" :item="item"/>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from './TodoItem.vue';
import { mapState } from 'pinia';
import store from './../store';
import { TODOS, CLOSED } from './../store/getters';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
  },
  computed: {
    ...mapState(store, {
      todos: TODOS, closed: CLOSED,
    }),
    completed(): number {
      return Object.keys(this.closed).length;
    },
  },
});
</script>
