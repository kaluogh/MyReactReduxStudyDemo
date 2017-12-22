import React, {Component} from 'react';
import AddTodo from './addTodo.js';
import ToDoList from './todoList.js'

import './style.css';

class ToDo extends Component{
    render(){
        return(
            <div className="todos">
                <AddTodo />
                <ToDoList />
            </div>
        )
    }
}

export default ToDo;