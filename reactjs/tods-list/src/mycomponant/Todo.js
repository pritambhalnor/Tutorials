import React from 'react'

export default function Todo({todo,onDelete}) {
  return (
    <div>
       < h3>{todo.title}</h3>
       <p>{todo.desc}</p>
       <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>delete</button>
       </div>
  )
}
