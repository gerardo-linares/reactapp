import React from 'react'
import { Link } from 'react-router-dom'



const Item = ({id, name, img, price,}) => {
    return (
        <div className='flex flex-col justify-between items-center w-[90%] h-[300px] bg-white gap-3 rounded-xl shadow-md overflow-auto py-4 container mx-auto '>
            <h1 className='font-medium'>{name}</h1>
            <img src={img} alt={name} className="max-h-[120px]"/>
            <p className='text-gray-600'> Precio: ${price}</p>
            <div className='flex justify-center gap-1 items-center'>
            <Link to ={`/item/${id}`}  className='bg-primary text-white rounded-xl px-3 py-1 hover:opacity-75'>Ver Detalle </Link>
            </div>
        </div>
    )
}

export default Item