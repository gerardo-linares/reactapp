import React from 'react'
import LogoCart from './assets/cart.jpg'
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

  const { totalQuantity } = useCart()
  if (totalQuantity === 0)
    return <Link to="/cart" className='flex items-center relative'>
      <img src={LogoCart} alt="img cart" className="w-[40px] h-[35px]  rounded-[50%]" />
      </Link>

  return (
    <Link to="/cart" className='flex items-center relative'>
      <img src={LogoCart} alt="img cart" className="w-[40px] h-[35px]  rounded-[50%]" />
      <span className='text-white bg-red-400 rounded-[50%] w-[18px] h-[18px]  text-center flex justify-center items-center absolute left-[30px] bottom-[15px]'>{totalQuantity}</span>
    </Link>
  );
}

export default CartWidget