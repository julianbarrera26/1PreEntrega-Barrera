import { useState } from 'react';

export const ItemCount = ({stock, onAdd}) => {
    const [count,setCount] = useState(1);
    
    const handleSum = () => {
        if ( stock > count) setCount (count + 1)
    }
    const handleSub = () => {
        if(count > 1)setCount(count - 1)
    }
    return(
        <div className='item-count'>
        <div className='item-count_buttons'>
        <button onClick={()=> handleSub()}>-</button>
        <span>{count}</span>
        <button onClick={()=> handleSum()}>+</button>
        </div>
        <button className='item-count_add' disabled={!stock} onClick={()=> onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};