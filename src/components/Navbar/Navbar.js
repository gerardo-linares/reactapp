import React, { useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { RiMenu3Fill,RiCloseFill } from "react-icons/ri";
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { getCategoriesRef } from '../../services/firebase/firestore/categories';


const Navbar = () => {

const[openMenu, setOpenMenu] = useState(false)

    const [categories, setCategories] = useState([])

    useEffect(() => {

        getCategoriesRef()

            .then(categories => {
                setCategories(categories)
            })
            .catch(error => {
                console.log(error)
            })

}, [])


    return (
        <header className='bg-primary flex justify-between items-center container mx-auto mt-1 rounded-3xl px-10 shadow-xl '>
            <div className='flex justify-center items-center h-[60px]'>
                <Link to = "/#" className='text-3xl font-bold text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>unaCosa 3D</Link>
            </div>


            <nav className={openMenu ? "bg-primary absolute flex flex-col right-6 top-[50px] h-[250px] gap-10 px-8 justify-center text-end rounded-b-3xl shadow-xl "   :    " hidden md:flex md:gap-10 md:flex-row md:justify-between md:text-center md:static md:right-auto md:top-auto md:h-auto md:shadow-none " } onClick={() => setOpenMenu(false)}>

            {
                categories.map(cat => {
                    return <Link key={cat.id} to = {`/category/${cat.slug}` }className='text-white font-semibold hover:text-secondary transition-all delay-50'>{cat.label}</Link>
                })
            }

            </nav>
            <div className='flex gap-5'>
                <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><CartWidget /></button>
                <button className='text-white text-3xl md:hidden' onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? <RiCloseFill /> : <RiMenu3Fill/>} </button>
            </div>
        </header>
    )
}

export default Navbar