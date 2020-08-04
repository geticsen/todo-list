import React from 'react'
import axios from "axios"
import {MOCK_TODOS_API} from '../../url' 
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
    var that =  this.props;
    axios.post(MOCK_TODOS_API,{
      content:text,
      status:false
    }).then(function(reponse){
      that.addTodo(reponse.data);
      console.log(reponse)
    })
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.text} />
        <input type="submit" onClick={this.onSubmit} value="提交"/>
      </div>
    )
  }
}
export default TodoForm;