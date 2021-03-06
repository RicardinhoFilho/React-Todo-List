import React, { Component } from 'react';
import  './Form.css'

const Form = ({inputText, setInputText,todos, setTodos, setStatus})=>{

    const inputTextHandler = (event)=>{
        //console.log(event.target.value);
        setInputText(event.target.value);
    };

    const submitTodoHandler = (event=>{
        event.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id:parseInt(Math.random()*1001)}
        ])

        setInputText("");
    })
    const statusHandler= (event)=>{
        setStatus(event.target.value);
    }
    return(

        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos"  onChange={statusHandler} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );
}


export default Form;