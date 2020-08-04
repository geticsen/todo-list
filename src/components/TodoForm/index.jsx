import React from 'react'
import axios from "axios"
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
    this.props.addTodo(this.state.text);
    axios.post("https://5e9ec500fb467500166c4658.mockapi.io/todos",{
      content:text,
      status:true
    }).then(function(reponse){
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