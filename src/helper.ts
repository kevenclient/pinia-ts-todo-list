import TodoListInterface from './types/TodoListInterface';
import Status from './enums/Status';

const helper = {
  filter: (todos: TodoListInterface, status: Status): TodoListInterface => {
    const filtered = {} as TodoListInterface;
    for (const id in todos) {
      if (todos[id].status === status) {
        filtered[id] = todos[id];
      }
    }
    return filtered;
  },
};

export default helper;
