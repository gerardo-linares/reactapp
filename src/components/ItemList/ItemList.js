import React from 'react'
import Item from '../Item/Item'


const ItemList = ({products}) => {
    return(

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 container m-auto gap-4 justify-center items-center text-center my-[100px] transition-all transition-duration: 150ms;'>
            {products.map(product =>  <Item key={product.id} {...product}/>
            )}

        </div>



    )
}

export default ItemList