import React from "react";

//Import Components
import Todo from "./Todo";


const TodoList = ({ todos, setTodos }) => {
  if (todos.length > 0) {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo todo={todo}  id={todo.id} text={todo.text} todos={todos} setTodos={setTodos}/>
          ))}
        </ul>
      </div>
    );
  }else{
      return (
      <div className="todo-container">
      <ul className="todo-list">
      </ul>
    </div>
  );
  }
};

export default TodoList;
