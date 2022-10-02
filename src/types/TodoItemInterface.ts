import Status from './../enums/Status';

interface TodoItemInterface {
  id?: string;
  description: string;
  status: Status;
}

export default TodoItemInterface;
