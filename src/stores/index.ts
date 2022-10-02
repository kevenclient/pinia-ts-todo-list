import { defineStore } from 'pinia';
import TodoListInterface from './../types/TodoListInterface';
import TodoItemInterface from './../types/TodoItemInterface';
import { CREATE_TODO } from './actions';
import { v4 as uuidv4 } from 'uuid';

export default defineStore('todo', {
  state: () => ({
    todos: {} as TodoListInterface,
  }),
  actions: {
    [CREATE_TODO](todo: TodoItemInterface): void {
      this.todos[uuidv4()] = todo;
    },
  },
});
