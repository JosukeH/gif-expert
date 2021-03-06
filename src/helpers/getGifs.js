

  const getGifs = async(categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&api_key=bDz1GTPWzbumAfM3pG1c8K7Xi2htPCZw&limit=10`
    const res = await fetch(url)
    const {data} = await res.json()

    const gifs = data.map(img => {
      return{
        id: img.id,
        title: img.title,
        src: img.images?.downsized_medium.url
      }
    })

    return gifs
  }


export default getGifs