export const ADD_TODO = "ADD_TODO";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const DELETE_TODO = "DELETE_TODO"
export const FILTER_CONDITION = "FILTER_CONDITION"
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function changeStatus(index) {
  return {
    type: CHANGE_STATUS,
    index
  }
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    index
  }
}
export function filterTodo(condition){
  return {
    type:FILTER_CONDITION,
    filter:condition
  }
}