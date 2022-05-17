import React, { useEffect, useState } from 'react'
import validator from 'validator'
export default function Array(prop) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [emptymsg, setEmptymsg] = useState('')

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!id || !name || !name.trim) {
            setEmptymsg('plz fill the field')
        }
        else {
            prop.checkid(id, name);

            // setId('');
            // setName('');
        }
    }
    const resetmsg = () => {
        setEmptymsg('');
    }
    useEffect(() => {
        setTimeout(() => {
            resetmsg();
        }, 4000)
    }, [emptymsg])
    return (
        <div className='container text-capitalize ' style={{ marginLeft: '47vh' }}>
            <h6 className='text-danger'>{emptymsg} </h6>
            <form onSubmit={handlesubmit} >
                <div>
                    <label htmlFor='id' className='my-2'>id</label><br />
                    <input type='number' className='border rounded' value={id} onChange={(e) => { setId(parseInt(e.target.value)) }} style={{ backgroundColor: '#8888' }} />
                </div>
                <div>
                    <label htmlFor='name' className='my-2'>name</label> <br />
                    <input type='text' className='border rounded' name='name' value={name} onChange={(e) => { setName(validator.trim(e.target.value)) }} style={{ backgroundColor: '#8888' }} />
                </div>
                <button type='submit' className='btn btn-outline-success my-4 text-capitalize'>submit</button>
            </form>
            <h5 className='text-danger'>{prop.msg} </h5>
        </div>
    )
}
