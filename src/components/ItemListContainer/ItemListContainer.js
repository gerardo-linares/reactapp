import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {

    getProducts(categoryId)
      .then(products => {
        setProducts(products)
      })
      .catch(error => {
        console.log(error)
      })

  }, [categoryId])

  return (
    <section className='container mx-auto my-[100px] '>
      <h1 className='text-primary text-center text-6xl font-bold'>{greeting}</h1>
      <ItemList products={products}/>
    </section>
  )
}

export default ItemListContainer