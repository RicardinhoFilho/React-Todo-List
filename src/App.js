import React,{useState} from "react";
import './App.css';

//Import Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const[inputText, setInputText] = useState("");//toda vez me mudarmos setInputText, automáticamente inputText será alterado
  const[todos, setTodos] = useState("");
  return (
    <div className="App">
      <header><h1>Dev's Todo List</h1></header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
