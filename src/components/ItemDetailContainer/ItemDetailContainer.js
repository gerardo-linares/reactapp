import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'



const ItemDetailContainer = () => {
  const [product, setProduct] = useState()

  const { itemId } = useParams()
  useEffect(() => {

    const productRef = doc(db, 'products', itemId)

    getDoc(productRef)
      .then(snapshot => {
        const data = snapshot.data()
        const productsAdapted = { id: snapshot.id, ...data }
        setProduct(productsAdapted)
      })
  }, [itemId])


  return (
    <section className='container mx-auto my-[100px] '>
      <h1 className='text-primary text-center text-6xl font-bold'>Detalle</h1>
      <ItemDetail {...product}/>
    </section>
  )
}

export default ItemDetailContainer