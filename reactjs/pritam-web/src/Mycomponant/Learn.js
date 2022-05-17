import React from 'react'

export default function Learn() {
  let mla={
    marginInline:"auto",
    maxWidth:"50vw"
  }
  let mt={
    marginTop:"8vh"
  }
  return (
    <div>
      <div className="container" style={mt}>
      <h2 className='font-weight-bold text-center'>Learn</h2>
      <p className='font-weight-light text-center text-wrap' style={mla}>'''Explore our structured learning paths to discover everything you need to know about building for the modern web.'''</p>
    </div>
    <div><h3 className='font-weight-bold'>COURSES</h3></div>
    </div>
  
  );
}
