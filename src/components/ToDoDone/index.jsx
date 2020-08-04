import React from 'react'
import { Link } from 'react-router-dom';
import TodoListContainer from '../../containers/TodoListContainer';
class ToDoDone extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            filter:true
        }
    }
    render() {
        return (
            <div>
                <Link to="/">首页</Link>
                <Link to="/done">done</Link>
                <TodoListContainer filter={this.state.filter} />
            </div>
        )
    }
}
export default ToDoDone;