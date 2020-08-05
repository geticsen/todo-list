import React from 'react'
import TodoContainer from '../../containers/TodoContainer'
import { MOCK_TODOS_API } from '../../url'
import axios from "axios"
import { Card,Badge } from 'antd';
class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var todoList = [];
    var that = this.props;
    axios.get(MOCK_TODOS_API)
      .then(function (reponse) {
        todoList = reponse.data
        that.initTodoList(todoList)
        console.log(reponse.data);
      })
    this.props.initTodoList(todoList)
  }
  render() {
    var todoList = this.props.filter ? this.props.doneTodoList : this.props.todoList;
    var title = this.props.filter ? "UnDone" : "ToDo List"
    return (
      <Badge count={todoList.length}>
        <Card title={title} style={{ textAlign: "right" }}  style={{ width: 800 }}>
          {
            todoList.map((todo, index) => {
              return <TodoContainer todo={todo} key={index} index={index} deleteTodo={this.props.deleteTodo} />
            })
          }
        </Card>
      </Badge>
    )
  }
}
export default TodoList;