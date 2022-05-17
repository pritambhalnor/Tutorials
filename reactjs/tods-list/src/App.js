// import logo from './logo.svg';
import './App.css';
import Header from "./mycomponant/Header";
import Todos from "./mycomponant/Todos";
import Footer from "./mycomponant/Footer";
import About  from "./mycomponant/About";
import Check  from "./mycomponant/Check";

import React, { useEffect, useState } from 'react';
import Addtodo from "./mycomponant/Addtodo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am ondelete", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e) => {
      return e !== todo;

    }))

  }


  const addTodo = (title, desc) => {
    console.log("i am adding to this", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodos = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, mytodos]);
    console.log(mytodos);
    // localStorage.setItem("todos", JSON.stringify(todos));


  }
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
// }, [todos])
//   // 
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
  // 
  return (
    <>
    <Router>
      <Header title="MY TODOS LIST" />
      <Switch>
         <Route exact path="/" render={()=>{
           return(
             <>
             <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
             </>
           )

          }} >
          
          </Route>
          
          <Route path="/about">
            <About />
          </Route>
          <Route path="/check">
            <Check />
          </Route>
      </Switch>
  

      
      <Footer />
      </Router>
    </>
  );
}

export default App;
