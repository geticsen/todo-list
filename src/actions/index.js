export const ADD_TODO = "ADD_TODO";
export const CHANGE_STATUS = "CHANGE_STATUS";

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