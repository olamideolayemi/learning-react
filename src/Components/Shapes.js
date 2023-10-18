import "./ShapesStyles.css"

import React from 'react'

const Shapes = () => {
  return (
    <div>
        <div className="container">
          <div className="box"></div>
          <div className="box box1 "></div>
          <div className="box box2"></div>
          <div className="box box3"></div>
        </div>
        <div className="flex-warp-sample">
          <div className="sample sample-1"> 1 </div>
          <div className="sample sample-2"> 2 </div>
          <div className="sample sample-3"> 3 </div>
          <div className="sample sample-4"> 4 </div>
          <div className="sample sample-5"> 5 </div>
          <div className="sample sample-6"> 6 </div>
        </div>
    </div>
    
  )
}

export default Shapes