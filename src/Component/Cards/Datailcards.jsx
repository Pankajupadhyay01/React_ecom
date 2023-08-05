import React from 'react'
import { useParams } from 'react-router-dom'

const Datailcards = () => {
  const id = useParams().data
  return (
    <div>
      {id}
    </div>
  )
}

export default Datailcards