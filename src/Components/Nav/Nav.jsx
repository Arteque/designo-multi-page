import { useState } from "react";
import Menu from "./Menu";
const items = [
    {
        label: 'Our Company',
        key:'ourcompany',
        header:true,
        footer:true,
    },
    {
        label:'Location',
        key:'location',
        header:true,
        footer:true,
    },
    {
        label: 'Contact',
        key: 'contact',
        header:true,
        footer:true,
    },
    
]

function Nav({classname}){

    
    const [current, setCurrent] = useState('home')

    const onClick = (e) => {
        setCurrent(e)
    }

    return <nav className={classname}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </nav>
}

export default Nav