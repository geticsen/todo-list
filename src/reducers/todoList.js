import { ADD_TODO } from '../actions';

const addTodo = (todoList = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...todoList, action.text];
    }
    default: {
      return todoList;
    }
  }
}

export default addTodo;