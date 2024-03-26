import { useState } from "react"
import Input from "./Input"

function Form() {

    


 const formInputs = [
    {
      id:"0",
      tag:"input",
      name: "name",
      type:"text",
      required: true,
      placeholder:"Name",
    },
    {
      id:"1",
      tag:"input",
      name: "mail",
      type:"mail",
      required: true,
      placeholder:"Email Address",
    },
    {
      id:"2",
      tag:"input",
      name: "phone",
      type:"tel",
      required: true,
      placeholder:"Phone",
    },
    {
      id:"3",
      tag:"textarea",
      name: "message",
      type:"text",
      required: true,
      placeholder:"Your Message",
    },
 ]
 const [info, setInfo] = useState(false)

 const checkInput = (event) => {
   let inputLength = event.target.value    
   console.log(inputLength)
   inputLength == "" ? setInfo(true) : setInfo(false)
}


 const handleSubmit = (e) => {
    e.preventDefault()

    

 }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        {
            formInputs.map((input) => {
            return <Input 
            info={info}
            key={input.id} 
            inputTag={input.tag} 
            inputName={input.name} 
            inputType={input.type} 
            placeholder={input.placeholder} 
            required={input.required}
            checkInput={(e) => checkInput}
            />
            })
        }
        <div className="call-container">
            <button type="submit" className="btn-call --on-dark radius">Submit</button>
        </div> 
    </form>
  )
}

export default Form