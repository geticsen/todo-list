import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import {deleteTodo,filterTodo} from '../actions'
const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
    doneTodoList:state.todoList.filter((todo, index)=>{
      return todo.status == 'DONE'
    })
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (index) => {
      dispatch(deleteTodo(index))
    },
    filterTodo:(condition)=>{
      dispatch(filterTodo(condition))
    }
  }
}
const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default TodoListContainer;
