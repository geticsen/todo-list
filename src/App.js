import React from 'react';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">首页</Link>
        <Link to="/done">done</Link>
        <TodoListContainer />
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
