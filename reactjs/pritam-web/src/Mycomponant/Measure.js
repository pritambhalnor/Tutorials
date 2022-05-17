import React from 'react'
import {
    Link
} from "react-router-dom";
export default function Measure() {
    let mt={
    marginTop:"8vh"
    }
    let mst={
        maxWidth:"50vw",
        marginInline:"auto"
    }
    return (
        <div className=''>
            <div className="container mt-6" style={mt}>
                <h1 className='text-center'>Measure Page Quality</h1>
                <p className='text-center Px-3' style={mst}>Test your pages in a lab environment powered by PageSpeed Insights. Then get tips and recommendations to improve your user experience. For field performance, see the <Link>PageSpeed Insights</Link>  tool.</p>
            </div>
        </div>
    )
}
