import { Link } from "react-router-dom"

function Menu({onClick, selectedKeys, mode, items}) {

  return (
    <ul className={`menu ${mode}`}>
        {
            items.map(item => {
                return (
                    <li 
                    key={item.key}
                    className={selectedKeys.includes(item.key) ? 'selected':''}
                    onClick={() => onClick(item.key)}
                >
                    <Link to={item.key} >{item.label}</Link>
                </li>
                )
            })
        }
    </ul>
  )
}

export default Menu