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
import { mapActions } from 'pinia';
import store from './../store';
import { ADD_TODO } from './../store/actions';
import Status from './../enums/Status';

export default defineComponent({
  name: 'TodoForm',
  data: () => ({
    description: '',
  }),
  methods: {
    ...mapActions(store, {
      create: ADD_TODO,
    }),
    handleOnSubmit(): void {
      if (this.description === '') {
        return;
      }

      this.create({
        description: this.description,
        status: Status.OPEN,
      });

      this.description = '';
    },
  },
});
</script>
