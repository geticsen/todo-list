import React from 'react'
import TodoContainer from '../../containers/TodoContainer'
import axios from "axios"
class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    var todoList = [];
    var that = this.props;
    axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos")
    .then(function(reponse){
      todoList= reponse.data
      that.initTodoList(todoList)
      console.log(reponse.data);
    })
    this.props.initTodoList(todoList)
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