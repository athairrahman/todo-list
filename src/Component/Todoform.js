import React, { useState } from 'react';

export default function Todoform(props) {

    const [input, setInput] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addTodo(input)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className='todo-input'
                placeholder='Add schedule is today' 
            />

            <button
                className='todo-button'
                type='submit'>
                Submit
            </button>
        </form>
    ) 
}