import React from 'react'
import Todo from "../mycomponant/Todo";


export default function Todos(props) {
  let myStyle={
    backgroundcolor:"red",
    margin:"auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className=' my-3'>Todos-List</h3>
     {props.todos.length===0?"No Todos to display":
      props.todos.map((todo) => {
        return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })}
    </div>
  )
}
