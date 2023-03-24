import React from 'react'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const handleOnAdd = (quantity) => {

        console.log(`Compraste ${quantity} unidades`)
    }


    return (


        <div className='grid grid-col p-3 md:grid-cols-2  w-[90%] h-[full] bg-white gap-3 rounded-xl shadow-md overflow-visible py-4 container mx-auto '>
            <div className='flex justify-center items-center'>
                <img src={img} alt={name} />
            </div>
            <div className='hidden'><p><span className='hidden'></span>{id}</p></div>
            <div className='flex flex-col justify-center gap-6 h-full '>
                <h1 className='font-medium text-3xl'>{name}</h1>
                <p><span className='font-medium'>Categoria:</span> {category}</p>
                <p><span className='font-medium'>Descripción:</span> {description}</p>
                <p><span className='font-medium'> Stock:</span> {stock}</p>
                <p><span className='font-medium'> Precio:</span> ${price}</p>
                <div className='flex justify-center md:justify-end md:mr-4'>
                    <ItemCount onAdd={handleOnAdd} stock={stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail