import React from 'react'
import LogoCart from './assets/cart.jpg'
function CartWidget() {
  return (
    <div className='flex items-center relative'>
        <img src={LogoCart} alt="img cart" className="w-[40px] h-[35px]  rounded-[50%]" />
        <span className='text-white bg-red-400 rounded-[50%] w-[18px] h-[18px]  text-center flex justify-center items-center absolute left-[30px] bottom-[15px]'>7</span>
    </div>
  )
}

export default CartWidget