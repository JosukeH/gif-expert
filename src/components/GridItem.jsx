import React from 'react'

const GridItem = ({src,title}) => {


  return (
      <div className="card animate__animated animate__fadeInDown">
      <p>{title}</p>
      <img src={src} title={title} />
      </div>

  )
}

export default GridItem
