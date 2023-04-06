import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, query , where, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    const productsRef = categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

    getDocs(productsRef)
    .then(snapshot => {
      const productsAdapted = snapshot.docs.map(doc =>{
        const data = doc.data()
        return{id: doc.id, ...data }
      })
      setProducts(productsAdapted)

    })
    .catch(error =>{
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