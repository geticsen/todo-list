import TodoList from '../components/TodoList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
}
const TodoListContainer = connect(mapStateToProps)(TodoList);

export default TodoListContainer;
