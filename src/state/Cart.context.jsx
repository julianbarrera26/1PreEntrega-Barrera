import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext ([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const ItemInCart = (id) => cart.find((product) => product.id ===id);
    
    const addProduct= (item, qty) =>{
        const element = ItemInCart (item.id);
        if (!element) 
            return setCart([...cart,{...item, qty,}, ]);

            const newCart = cart.map ((product) => 
                product.id === item.id ? {...product,qty: product.qty + qty} : product
            );
            setCart(newCart);        
    };

    const removeProduct = (id) => {
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
    };
    
    const cleanCart = () => setCart([]);
    
    
    const getCartQty = useMemo(() => cart.reduce((acc, item) => acc + item.qty, 0), [cart]);
    
    const getTotalPrice = useMemo(() => cart.reduce((acc, item) => acc + item.precio * item.qty, 0), [cart]);
    
    const value = {
        cart,
        addProduct,
        removeProduct,
        cleanCart,
        getCartQty,
        getTotalPrice,
        ItemInCart
    };

    return (<CartContext.Provider value={value} displayName= "cartContext">
        {children}
        </CartContext.Provider>
        )
}