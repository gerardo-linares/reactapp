import React from 'react'

const ItemListContainer = ({greeting})=> {
  return (
    <section className='container mx-auto my-[100px] '>

    <h1 className='text-primary text-center text-6xl font-bold'>{greeting}</h1>

    </section>
  )
}

export default ItemListContainer