function Header({children, classname}) {
  return (
    <header className={classname}>
        {children}
    </header>
  )
}

export default Header