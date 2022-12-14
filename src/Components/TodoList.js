import React from 'react'
//Import Components
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
