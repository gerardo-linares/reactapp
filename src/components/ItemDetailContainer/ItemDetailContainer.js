import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/firebase/firestore/products'


const ItemDetailContainer = () => {
  const [product, setProduct] = useState()

  const { itemId } = useParams()

  useEffect(() => {

    getProductById(itemId)
      .then(product => {
        setProduct(product)
      })
      .catch(error => {
        console.log(error)
      })

  }, [itemId])
  return (
    <section className='container mx-auto my-[100px] '>
      <h1 className='text-primary text-center text-6xl font-bold'>Detalle</h1>
      <ItemDetail {...product} />
    </section>
  )
}

export default ItemDetailContainer