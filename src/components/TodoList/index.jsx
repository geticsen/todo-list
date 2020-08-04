import React from 'react'
import Todo from '../Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div>
        {
          this.props.todoList.map((key, index) => {
            return <Todo text={key} key={index} />
          })
        }
      </div>
    )
  }
}
export default TodoList;