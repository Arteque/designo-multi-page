
function Button({href, title, classname, target, children}) {

  return (
    <a href={href} 
    title={title} 
    className={classname} 
    target={target}
    >{children}</a>
  )
}


Button.defaultProps = {
    classname:"btn-call",
    target: '_self',
    href:"#",
}


export default Button