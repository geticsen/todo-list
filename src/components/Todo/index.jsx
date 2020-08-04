import React from 'react'
import './todo.css';
import axios from "axios"
class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: props.todo.status
    }
  }

  handlerDivClick = () => {
    var id = this.props.todo.id
    var status = !this.state.status
    axios.put("https://5e9ec500fb467500166c4658.mockapi.io/todos/"+id,{
      id:id,
      status:status
    })
    .then(function(reponse){
      console.log(reponse)
    })
    this.setState({status: status});
    this.props.changeStatus(this.props.index);
  }

  handlerSpanClick = () => {
    var id = this.props.todo.id
    axios.delete("https://5e9ec500fb467500166c4658.mockapi.io/todos/"+id)
    .then(function(reponse){
      console.log(reponse)
    })
    this.props.deleteTodo(this.props.index)
  }

  render() {
    var className = this.props.todo.status?"DONE":"UPDONE"
    return (      
      <div>
        <span onClick={this.handlerDivClick} className={className}>{this.props.todo.content}</span>
        <span onClick={this.handlerSpanClick} className="x">x</span>
      </div>
    )
  }
}
export default Todo;