import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState('');
    return (
        <div className='container App my-4 bg-white' style={{width:'30vw',height:'30vh'}}>
            <h1 className='mt-4'>{count} </h1>
            <div>
            <button className='btn btn-primary mx-3' onClick={() => { setCount(count - parseInt(num)) }} disabled={!num}>decrease</button>

            <input type="number" style={{ width: '4vw',backgroundColor:'#8888' }} value={num} onChange={(e) => { setNum(e.target.value) }} />

            <button className='btn btn-primary mx-3' onClick={() => { setCount(count + parseInt(num)) }} disabled={!num}>increase</button>
            </div>
            <button className='btn btn-primary' onClick={()=>{setCount(0);setNum('')}}>reset</button>
        </div>
    )
}
