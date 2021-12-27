import { useEffect, useState } from "react"
import getGifs from "../helpers/getGifs"

const useFetchGifs = (category) => {

  const [state, setstate] = useState({
    data:[ ],
    loading:true
  })

  useEffect( () =>{

    setTimeout(() => {

      getGifs(category)
      .then(gifs =>{
        setstate({
          data:gifs,
          loading:false
        })
      })

    },1500)
    
  }, [])

  return state

}

export default useFetchGifs