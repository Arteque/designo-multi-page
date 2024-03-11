import { useState } from "react"

function Grid({children, classname, gridType}) {


  return (
    <div className={`grid-container ${gridType == 'grid'?'grid':'-inline'}`} gridType={gridType}>
        {children}
    </div>
  )
}

export default Grid