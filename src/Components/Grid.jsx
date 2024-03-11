function Grid({children, classname}) {
  return (
    <div className={`grid-container ${classname}`}>
        {children}
    </div>
  )
}

export default Grid