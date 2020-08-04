import React from 'react'
import TodoContainer from '../../containers/TodoContainer'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    var filterTodoList = this.props.todoList
    //this.props.filterTodo(this.props.filter)
  }
  render() {
    var todoList = this.props.filter?this.props.doneTodoList:this.props.todoList;
    return (
      <div>
        {
          todoList.map((todo, index) => {
            return <TodoContainer todo={todo} key={index} index={index} deleteTodo={this.props.deleteTodo}/>
          })
        }
      </div>
    )
  }
}
export default TodoList;