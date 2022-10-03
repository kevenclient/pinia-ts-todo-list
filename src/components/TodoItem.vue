<template>
  <li class="list-group-item fs-5 p-4 rounded-0 border-top-0 d-flex gap-3">
    <input class="form-check-input flex-shrink-0" type="checkbox" v-model="closed"/>
    <label class="form-check-label" :class="statusClass">
      {{ item?.description }}
    </label>
    <button type="button" @click="handleOnClickDelete"
      class="btn border-0 ms-auto align-self-start">
      <i class="bi bi-x-lg"/>
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TodoItemInterface from './../types/TodoItemInterface';
import Status from './../enums/Status';
import store from './../store';
import { mapActions } from 'pinia';
import { UPDATE_TODO, DELETE_TODO } from './../store/actions';

export default defineComponent({
  name: 'TodoItem',
  props: {
    item: Object as PropType<TodoItemInterface>,
  },
  computed: {
    closed: {
      get(): boolean {
        if (this.item === undefined) {
          return false;
        }
        return this.item.status === Status.CLOSED;
      },
      set(value: boolean): void {
        const status = value
          ? Status.CLOSED : Status.OPEN;
        if (typeof this.$.vnode.key === 'string') {
          this.update(this.$.vnode.key, status);
        }
      }
    },
    statusClass(): object {
      return {
        'text-decoration-line-through': this.closed,
      };
    },
  },
  methods: {
    ...mapActions(store, {
      update: UPDATE_TODO, delete: DELETE_TODO,
    }),
    handleOnClickDelete(): void {
      if (typeof this.$.vnode.key === 'string') {
        this.delete(this.$.vnode.key);
      }
    },
  },
});
</script>
