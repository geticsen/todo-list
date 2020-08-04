import { ADD_TODO, CHANGE_STATUS,DELETE_TODO ,FILTER_CONDITION,INIT_TODO_LIST} from '../actions';

const addTodo = (todoList = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...todoList, { text: action.text, status: "UNDONE" }];
    }
    case CHANGE_STATUS: {
      const newTodoList = [...todoList];
      newTodoList[action.index].status = !newTodoList[action.index].status;
      return newTodoList;
    }
    case DELETE_TODO:{
      const newTodoList =todoList.filter((todo, index)=>{
        return index !== action.index
      })
      return newTodoList;
    }
    case INIT_TODO_LIST:{
      return action.todoList
    }
    case FILTER_CONDITION:{
      var newTodoList = todoList;
      if(action.filter){
        newTodoList = todoList.filter((todo, index)=>{
          return todo.status
        })
      }
      return newTodoList;
    }
    default: {
      return todoList;
    }
  }
}

export default addTodo;