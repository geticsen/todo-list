import React from 'react'
import './todo.css';
import '../../App.css'
import { CloseCircleOutlined } from "@ant-design/icons"
import { MOCK_TODOS_API } from '../../url'
import axios from "axios"
import { Tag, Space, Divider } from "antd"


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
    axios.put(MOCK_TODOS_API + "/" + id, {
      id: id,
      status: status
    })
      .then(function (reponse) {
        console.log(reponse)
      })
    this.setState({ status: status });
    this.props.changeStatus(this.props.index);
  }

  handlerSpanClick = () => {
    var id = this.props.todo.id
    axios.delete(MOCK_TODOS_API + "/" + id)
      .then(function (reponse) {
        console.log(reponse)
      })
    this.props.deleteTodo(this.props.index)
  }

  render() {
    var className = this.props.todo.status ? "DONE" : "UPDONE"
    return (
      <div>
        <Space>
          <span onClick={this.handlerDivClick} className={className}>{this.props.todo.content}</span>
          <span onClick={this.handlerSpanClick} className="x"> <CloseCircleOutlined color={"green"} /> </span>
        </Space>
      </div>
    )
  }
}
export default Todo;