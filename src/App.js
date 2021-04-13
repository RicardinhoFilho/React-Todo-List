import React, { useState, useEffect } from "react";
import "./App.css";

//Import Components
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

function App() {

  //RUN ONCE when the app start
  useEffect(()=>{
    getLocalTodos();
  },[]);
  
  //State Stuff
  const [inputText, setInputText] = useState(""); //toda vez me mudarmos setInputText, automáticamente inputText será alterado
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };


  //Use Effect
  //Toda a vez que ocorrer uma mudança neste caso em "todos"(no caso quando adicionarmos e excluirmos um todo, e em status, quando alterarmos o valor para uncompleted, completed e all ), executaremos a função filterHandler, responsável por filtrar todos os "todos" baseados em seu status!
  const saveLocalTodos = ()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = ()=>{
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }



  
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status])


  
  return (
    <div className="App">
      <header>
        <h1>Dev's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} status={status} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
