import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart} = useCart()
    
    const handleOnAdd = (quantity) => {

        const productToAdd = {
            id, name, price, quantity, img
        }
        addItem(productToAdd)

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
                <div className='flex justify-center md:justify-end md:mr-4'>{
                isInCart(id) ? (
                    <div className='flex flex-col gap-1'>
                        <Link to='/cart' className='bg-secondary text-white rounded-xl px-3 py-1 hover:opacity-75 shadow-md'>Ir al Carrito</Link>
                        <Link to='/' className='bg-primary text-white rounded-xl px-3 py-1 hover:opacity-75 shadow-md text-center'>Seguir</Link>
                        </div>
                    ) : (
                    <ItemCount onAdd={handleOnAdd} stock={stock} />)}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail