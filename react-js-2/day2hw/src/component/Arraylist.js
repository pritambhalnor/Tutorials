import React, { useState } from 'react'
import { data } from '../Data'
import Additems from './Additems';

export default function Arraylist() {
    const [list, setList] = useState(data);
    const [show, setShow] = useState(false)
    const [msg, setMsg] = useState('')

    const removeItem = (id) => {
        let newlist = list.filter((item) => item.id !== id);
        setList(newlist);
    }

    const addtolist = (id, name) => {
        // console.log(list.length);

        const mylist = {
            id: id,
            name: name
        }
        setList([...list, mylist]);
        setShow(false);
        setMsg('');
        a = [];
    }
    let a = [];
    const checkid = (id, name) => {
        const newlist = list.find((item) => item.id === id)
        console.log(newlist);
        if (newlist == null) {
            addtolist(id, name);
        }
        else {
            setMsg(`ID ${id}, already taken`);
        }
    }


    return (
        <div className='container mt-4 border rounded shadow-lg p-3 bg-white ' style={{ width: '40vw' }}>
            {list.map((data) => {
                const { id, name } = data;
                return (
                    <div key={id} className='row  border py-3'>

                        <span className='col-lg-4 col-sm-3 col-3 '>{id} </span>
                        <span className='col-lg-4 col-sm-3 col-3 text-capitalize'>{name} </span>
                        <button className='col-lg-2 col-sm-3 col-3 btn btn-primary text-capitalize' onClick={() => removeItem(id)}>remove</button>
                    </div>
                )
            })}

            <button className='btn btn-danger text-capitalize' style={{ margin: '3vh 18vh' }} onClick={() => setList([])}>clear</button>

            <button className='btn btn-outline-success mx-2 text-capitalize' onClick={() => { setShow(true) }}>add</button>

            {show && <Additems checkid={checkid} msg={msg} />}
        </div>
    )
}
