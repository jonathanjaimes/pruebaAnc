import React from 'react'
interface CardProps {
    id:number,
    name: string
}

const Card: React.FC<CardProps> = ( { id , name}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{id}</p>

    </div>
  )
}

export default Card