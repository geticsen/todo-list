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
    this.setState({status: 'DONE' ? 'UNDONE' : 'DONE'});
    this.props.changeStatus(this.props.index);
  }

  handlerSpanClick = () => {
    var id = "134"
    axios.delete("https://5e9ec500fb467500166c4658.mockapi.io/todos/"+id)
    .then(function(reponse){
      console.log(reponse)
    })
    this.props.deleteTodo(this.props.index)
  }

  render() {
    return (      
      <div>
        <span onClick={this.handlerDivClick} className={this.props.todo.status}>{this.props.todo.text}</span>
        <span onClick={this.handlerSpanClick} className="x">x</span>
      </div>
    )
  }
}
export default Todo;