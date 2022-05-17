import React from 'react'
import img1 from "./home.svg"
import img2 from "./d.jpeg"
import img3  from "./d2.jpeg"



export default function Home() {
  let mw={
    marginInline:"auto",
    width:"10%"
  }
  let bk1={
    height:"105vh",
    backgroundImage:`url(${img3})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"40% 40%"
  }
    let mwd={
      marginLeft:"33vh",
    maxWidth:"40vw",
    marginInline:"auto"
  }
  return (
    <div>
      <div className='container'>
      <h6 className='my-4'>About Web.dev</h6>
     <div className='d-flex justify-content-between'>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      </div>
    </div>
    <div className=' my-4' >
    <span className='' style={mw}>
      <h2>Let's build the future of the web, together</h2>
      <p>Take advantage of the latest modern technologies to build amazing web experiences for everyone.</p>
      <button className='btn btn-primary'>Learn More</button>
    </span>
    <span style={mwd}>
      <div style={bk1}></div>
     </span>
    </div>
    </div>
    
    
  );
}
