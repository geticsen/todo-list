import React from 'react'
import { Link } from 'react-router-dom';
import TodoListContainer from '../../containers/TodoListContainer';
class ToDoDone extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Link to="/">首页</Link>
                <Link to="/done">done</Link>
                <TodoListContainer />
            </div>
        )
    }
}
export default ToDoDone;