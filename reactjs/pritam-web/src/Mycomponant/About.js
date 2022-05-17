import React from 'react'
import img4 from "./about.png"


export default function About() {
  let mil={
    marginInline:"auto",
    maxWidth:"50vw"
  }
  let bk={
    height:'55vh',
    backgroundRepeat:"no-repeat",
    backgroundImage:`url(${img4})`
  }
  let p={
    maxHeight:"55vh",
    maxWidth:"15vw",
  }
  return (
    <div>
      <div>
      <h2 className='text-center'>Building a better web, together</h2>
      <p style={mil}>Google believes in an open, accessible, private, and secure web. We want to help developers take advantage of the latest modern technologies to build amazing user experiences for everyone.</p>
      </div>
      <div>
        <h6 className='text-center'>Google’s contributions</h6>
      </div>
      
      <div style={bk}>
       <p style={p}> s </p>
      </div>
      
    </div>
  );
}
