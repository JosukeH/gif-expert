import { useState } from "react"
import AddCategory from "./AddCategory"
import GifGrid from "./GifGrid"

const GifExpert = () => {
  const [categorias, setCategorias] = useState([])
  
  return (
    <>
      <h2>GifExpert App</h2>
      <AddCategory setCategorias={setCategorias}/>
      <hr/>
     
      {
      categorias.map( categoria => {
        return <GifGrid categoria={categoria} key={categoria}/>
      })
      }
  
    </>
  )
}

export default GifExpert
