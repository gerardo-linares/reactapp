import React from "react";
import { useCart } from "../../context/CartContext";


const ItemCart =  ({ product }) => {

    const { removeItem } = useCart();
    return (
        
        <div className="grid grid-cols-3 gap-2 m-auto mt-4 ">
            <div className="flex justify-center items-center">
                <img src={product.img} alt={product.name} className="max-h-[150px] max-w-[150px] truncate"/>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <p className="text-xs md:text-base"><strong>{product.name}</strong></p>
                <p className="text-xs md:text-base">Unidades: <strong>{product.quantity}</strong></p>
                <p className="text-xs md:text-base">Precio un : <strong>${product.price}</strong></p>
                <p className="text-xs md:text-base">Subtotal: <strong>${product.quantity * product.price}</strong></p>
            </div>
            <div className="flex items-center justify-center">
                    <button onClick={() => removeItem(product.id)} className="bg-red-400 text-white rounded-xl px-3 py-1 hover:bg-red-600">Eliminar</button>
                </div>

        </div>
    )
}

export default ItemCart