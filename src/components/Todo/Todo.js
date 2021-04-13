import React from "react";
import "./Todo.css";

const Todo = ({ text, todos, setTodos, id, todo }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(todos);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""} `}>{text}</li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
