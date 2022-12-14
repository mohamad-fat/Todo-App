import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  //Here I can write javascript code and function
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <div>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} type="submit" className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      </div>
      <div className="select" onClick={statusHandler}>
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;
