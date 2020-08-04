import { ADD_TODO, CHANGE_STATUS } from '../actions';

const addTodo = (todoList = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...todoList, { text: action.text, status: "UNDONE" }];
    }
    case CHANGE_STATUS: {
      todoList[action.index].status = todoList[action.index].status === 'DONE' ? 'UNDONE' : 'DONE';
      console.log(todoList[action.index].status)
      return [...todoList];
    }
    default: {
      return todoList;
    }
  }
}

export default addTodo;