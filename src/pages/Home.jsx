import { useEffect, useState } from "react";
import { getProducts } from "../libreria/productos";
import { ItemListConteiner } from "../components/ItemListConteiner/ItemListConteiner";

export const Home = () => {
    const [product, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then (res => {
                setIsLoading(false);
                setProducts (res)}
                )
        
    
}, []); 

return (
    <div>
        <h5>{isLoading ? "Cargando" : "Cargado"} </h5>
        <ItemListConteiner products={products}/>
    </div>
)
};  