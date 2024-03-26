import { useEffect, useState } from "react"
import Info from "./Info"

function Input({info, inputTag, inputName, inputType, inputValue, placeholder,required, checkInput, ...props}) {


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