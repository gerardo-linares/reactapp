import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {
    const { cart, totalPrice} = useCart();

    if (cart.length ===0 ){
        return (
            <div  className="flex flex-col justify-center items-center container gap-3 bg-white  rounded-xl shadow-md m-auto mt-10 p-10 ">
                <div >
                    <p>No hay productos en el carrito</p>

                </div>
                <div>
                    <Link to='/' className="bg-primary text-white rounded-xl px-3 py-1 mb-5 hover:opacity-75">Hacer Compras</Link>
                </div>
            </div>
        );
    }
    return (
        <div className="container  bg-white  rounded-xl shadow-md m-auto p-3 md:p-7">
            {cart.map(product => <ItemCart key={product.id} product={product} />)}
            <p className="flex justify-center text-2xl m-10 font-bold">Total: ${totalPrice()}</p>
            <div >
                <Link to='/checkout' className="bg-secondary text-white rounded-xl px-3 py-1 hover:opacity-75 flex justify-center text-center w-[50%] m-auto">Realizar Pago</Link>
            </div>
        </div>
        )
    
}

export default Cart