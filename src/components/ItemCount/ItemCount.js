
import { useState } from 'react'
import Button from '../Button/Button'
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className='grid grid-cols-1 gap-1 '>
            <div className='flex justify-center items-center gap-1'>
                <Button  callback={decrement} label={<VscChromeMinimize/>}/>
                <span className='bg-primary text-white px-5 ' >{count}</span>
                <Button  callback={increment} label={<VscAdd/>}/>
            </div>
            <div className='flex justify-center items-center'>
                <Button callback={()=>onAdd(count)} label={'Agregar al carrito'}/>
            </div>
        </div>
    )
//REVISAR SINTAXIS EN COMPONENTE BUTTON CALLBACK AGREGAR AL CARRITO
}
export default ItemCount


