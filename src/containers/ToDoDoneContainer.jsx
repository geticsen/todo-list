import TodoDone from '../components/TodoDone'
import { connect } from 'react-redux'
import {deleteTodo} from '../actions'
const mapStateToProps = (state) => {
  return {
    todoList: state.todoList.filter((key,inedex)=>{
        return key.status=="DONE";
    })
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (index) => {
      dispatch(deleteTodo(index))
    }
  }
}
const TodoDoneContainer = connect(mapStateToProps,mapDispatchToProps)(TodoDone);

export default TodoDoneContainer;
