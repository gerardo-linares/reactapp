import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncMock'



const ItemDetailContainer = () => {
  const [product, setProduct] = useState()

  const { itemId } = useParams()


  useEffect(() => {
      getProductById(itemId).then(response => {
          setProduct(response)
      }).catch(error => {
          console.log(error)
      })
  }, [itemId])


  return (
    <section className='container mx-auto my-[100px] '>
      <h1 className='text-primary text-center text-6xl font-bold'></h1>
      <ItemDetail {...product}/>
    </section>
  )
}

export default ItemDetailContainer