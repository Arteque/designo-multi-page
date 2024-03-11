import { useState } from "react";
import Menu from "./Menu";
const items = [
    {
        label: 'Our Company',
        key:'ourcompany'
    },
    {
        label:'Location',
        key:'location'
    },
    {
        label: 'Contact',
        key: 'contact'
    }
]

function Nav(){

    
    const [current, setCurrent] = useState('home')

    const onClick = (e) => {
        setCurrent(e)
    }
    
    return <nav>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </nav>
}

export default Nav