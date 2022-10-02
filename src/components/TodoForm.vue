<template>
  <div class="card rounded-0 shadow mx-auto">
    <div class="card-body">
      <form @submit.prevent="handleOnSubmit">
        <div class="form-floating">
          <input type="text" class="form-control border-0 shadow-none"
            id="todo" placeholder="What needs to be done?" v-model="description">
          <label for="todo">What needs to be done?</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItemInterface from './../types/TodoItemInterface';
import Status from './../enums/Status';
import { mapActions } from 'pinia';
import stores from './../stores';
import {ADD_TODO} from './../stores/actions';

export default defineComponent({
  name: 'TodoForm',
  data: () => ({
    description: '',
  }),
  methods: {
    ...mapActions(stores, {
      create: ADD_TODO,
    }),
    handleOnSubmit(): void {
      if (this.description === '') {
        return;
      }
      const todo: TodoItemInterface = {
        description: this.description, status: Status.OPEN,
      };
      this.create(todo);
      this.description = '';
    },
  },
});
</script>
