import React from 'react'
import './Todo.css'

const Todo = ({todos, delTodo}) => {
    const todoList = todos.length ? (
        todos.map(sample => {
            return(
                <div className="sample container" key={sample.id}>
                    <span>{sample.content}</span>
                    <button className="myBtn" onClick={ () => {delTodo(sample.id)}}>x</button>
                </div>
            )
        })
    ) : (
        <p className="center">Nothing to do left!!!</p>
    )
    return(
        <div>
            {todoList}
        </div>
    )
}

export default Todo