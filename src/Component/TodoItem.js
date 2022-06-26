import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function TodoItem(props) {
    const { todo, removeTodo } = props 
        return (
            <div className='todo-row'>
                {todo.text}
                <div className='iconContainer'>
                    <AiFillCloseCircle className='icon' onClick={() => removeTodo(todo.id)}/>
                </div>
            </div>
        )
}
