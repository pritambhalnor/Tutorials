import React from 'react'
import case1 from "./case1.svg"

export default function Case() {
  let mia = {
    maxWidth: '45vw',
    marginInline: "auto"
  }
  let mt={
    marginTop:"5vh",
    height:"55vh",
    justifyContent:"space-evenly"
  }
  let bd={
    border:"2px light black",
    margin:"3vh",
    borderRadius:"2vh"
  }
  return (
    <div>
      <div className='d-flex justify-content-center flex-column bg-light text-dark' style={mt}>
        <h1 className='text-center'>
          Case Study
        </h1>
        <p className='text-center' style={mia}>Learn why and how other developers have used the web to create amazing web experiences for their users.</p>
        <div className='d-flex justify-center' style={mia}>
        <img className='' src={case1} alt="" />
        </div>
      </div>
      <div className='d-flex justify-content-between' style={mt}>
        <div className='container' style={bd}>
          <h1>How The Economic Times passed Core Web Vitals thresholds and achieved an overall 43% better bounce rate</h1>
        </div>
        <div className='container'style={bd}>
          <h1>How Terra improved user engagement thanks to Dark Mode</h1>
        </div>
        <div className='container'style={bd}>
          <h1>How QuintoAndar increased conversion rates and pages per session by improving page performance</h1>
        </div>
      </div>
    </div>
  )
}
