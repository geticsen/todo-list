import React from 'react'
import axios from "axios"
import { MOCK_TODOS_API } from '../../url'
import { Button, Space,Input } from 'antd'
import {CheckOutlined} from '@ant-design/icons'
class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  onSubmit = () => {
    var text = this.state.text
    var that = this.props;
    axios.post(MOCK_TODOS_API, {
      content: text,
      status: false
    }).then(function (reponse) {
      that.addTodo(reponse.data);
      console.log(reponse)
    })
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className={"todoForm"}>
        <div>
          <Space>
            <Input type="text" className={"inputTodo"} onChange={this.handleChange} placeholder={"写下你想做的事...."} style={{width:700}} value={this.state.text} />
            <Button type="primary" className={"inputSubmit"} onClick={this.onSubmit}><CheckOutlined  color={"green"}/>提交</Button>
          </Space>

        </div>
      </div>
    )
  }
}
export default TodoForm;