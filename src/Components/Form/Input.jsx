import { useEffect, useState } from "react"
import Info from "./Info"

function Input({inputTag, inputName, inputType, inputValue, placeholder,required,  ...props}) {

const [value, setValue] = useState("")
const [info, setInfo] = useState(false)


const checkInput = (event) => {

    setValue(event.target.value)

    if(value.length == 0) {
        setInfo(true)
    }else{
        setInfo(false)
    }
}

  return (
    <div className={inputName}>
        { info && ( <Info /> ) }
        
        {inputTag == "input" ? (
            <input type={inputType} name={inputName.toLowerCase()} placeholder={placeholder} onChange={(e) => checkInput(e)} value={inputValue} required={required}/>
        ):( 
            <textarea name={inputName.toLowerCase()} placeholder={placeholder} onChange={(e) => checkInput(e)} value={inputValue}>

            </textarea>
        )}

    </div>
  )
}

export default Input