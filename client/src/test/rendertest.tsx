import React from 'react'

type Props = {}

const Rendertest = ({todo}) => {
    console.log(todo)
  return (
    <div>{todo.id}</div>
  )
}

export default Rendertest