import React, { useState } from 'react'

export default function Addtodo(prop) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("t&Dnot defined");
    }
    else {
      prop.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }

  return (
    <div className='container my-3'>
      <h3 className='text-center'>ADD-TODOS</h3>
      <form action="" onSubmit={submit}>
        <div className="mb-3 row">
          <label htmlFor="tittle" className="col-sm-2 col-form-label">Add Tittle</label>
          <div className="col-sm-10">
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="tittle" />

          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
          </div>
        </div>
        <button className='btn-sm btn-success'>Add item</button>
      </form>
    </div>
  )
}
