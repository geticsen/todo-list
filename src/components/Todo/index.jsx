import React from 'react'
import './todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: props.todo.status
    }
  }

  handlerClick = () => {
    this.setState({status: 'DONE' ? 'UNDONE' : 'DONE'});
    this.props.changeStatus(this.props.index);
  }

  render() {
    return (      
      <div onClick={this.handlerClick} className={this.props.todo.status}>{this.props.todo.text}</div>
    )
  }
}
export default Todo;