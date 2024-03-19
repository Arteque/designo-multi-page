import { Link } from "react-router-dom"

function Button({href, title, classname, target, children}) {

  return (
    <Link to={href} 
    title={title} 
    className={classname} 
    target={target}
    >{children}</Link>
  )
}


Button.defaultProps = {
    classname:"btn-call",
    target: '_self',
    href:"#",
}


export default Button