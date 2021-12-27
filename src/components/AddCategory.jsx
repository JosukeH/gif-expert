import { useState } from "react"

const AddCategory = ({setCategorias}) => {
  
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(inputValue.trim().length > 2){
      setCategorias(cats => [ inputValue,...cats])
      setInputValue('')
    }
  }

  return (
    
    <form onSubmit={handleSubmit} >
      <p>Agregar categoria</p>
      <input type="text" className="" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <input type="submit" value='Agregar' />
    </form>
  )
}

export default AddCategory
