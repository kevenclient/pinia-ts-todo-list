import { defineStore } from 'pinia';
import TodoListInterface from './../types/TodoListInterface';
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './actions';
import { TODOS, CLOSED } from './getters';
import TodoItemInterface from './../types/TodoItemInterface';
import { v4 as uuidv4 } from 'uuid';
import Status from './../enums/Status';

export default defineStore('todo', {
  state: () => ({
    todos: {} as TodoListInterface,
  }),
  actions: {
    [CREATE_TODO](todo: TodoItemInterface): void {
      this.todos[uuidv4()] = todo;
    },
    [UPDATE_TODO](id: string, status: Status): void {
      this.todos[id].status = status;
    },
    [DELETE_TODO](id: string): void {
      delete this.todos[id];
    },
  },
  getters: {
    [TODOS](state): Array<TodoItemInterface> {
      const todos = [] as Array<TodoItemInterface>;
      for (const id in state.todos) {
        if (state.todos[id].status === Status.CLOSED) {
          continue;
        }
        const todo = {...state.todos[id], id};
        todos.push(todo);
      }
      return todos;
    },
    [CLOSED](state): Array<TodoItemInterface> {
      const todos = [] as Array<TodoItemInterface>;
      for (const id in state.todos) {
        if (state.todos[id].status === Status.OPEN) {
          continue;
        }
        const todo = {...state.todos[id], id};
        todos.push(todo);
      }
      return todos;
    },
  },
});
