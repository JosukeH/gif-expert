import GridItem from './GridItem'
import useFetchGifs from '../hooks/useFetchGifs'

const GifGrid = ({categoria}) => {

  const {loading,data} = useFetchGifs(categoria)

  return (
    <>
    <h2>{categoria}</h2>

    {loading && <p>Cargando</p>  }

    <div className='card-grid '>
      {data.map(gif => <GridItem key={gif.id} {...gif} />)}
    </div>

    </>
  )
}

export default GifGrid
