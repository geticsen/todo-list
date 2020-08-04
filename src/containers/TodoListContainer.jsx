import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { deleteTodo, filterTodo,initTodoList } from '../actions'
const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
    doneTodoList: state.todoList.filter((todo, index) => {
      return todo.status
    })
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (index) => {
      dispatch(deleteTodo(index))
    },
    filterTodo: (condition) => {
      dispatch(filterTodo(condition))
    },
    initTodoList: (todoList) => {
      dispatch(initTodoList(todoList))
    }
  }
}
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
