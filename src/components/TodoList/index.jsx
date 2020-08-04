import React from 'react'
import TodoContainer from '../../containers/TodoContainer'
import axios from "axios"
class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos")
    .then(function(reponse){
      console.log(reponse.data);
    })
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