import { useEffect, useState } from "react"
import {PropTypes, defaultProps} from 'prop-types'
function Grid({children, grid, gridFlex }) {


  const [classname, setClassname] = useState("")
  let gridType = "grid-container"

  useEffect(() => {
    if(grid){gridType = "grid-container"}
    else if(gridFlex){gridType = "grid-flex"}
    
    setClassname(gridType)

  }, [gridFlex, grid])


  return (
    <div className={classname}
      grid={grid}
      gridFlex={gridFlex}
    >
        {children}
    </div>
  )
}

Grid.defaultProps = {
  grid: false,
  gridFlex: false
}

Grid.propTypes = {
  grid : PropTypes.bool,
  gridFlex: PropTypes.bool
}

export default Grid