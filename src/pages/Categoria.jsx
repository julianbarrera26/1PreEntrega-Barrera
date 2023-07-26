import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../libreria/productos";
import { ItemListConteiner } from "../components/ItemListConteiner/ItemListConteiner";

export const Categoria = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setProducts([]);
        setIsLoading(true);
        getProducts(id).then ((res )=> {
                setIsLoading(false);
                setProducts (res)}
                )
        
    
}, [id]); 

return (
    <div>
    <div>
        <h5>{isLoading ? "Cargando" : "Cargado"} </h5>
        <ItemListConteiner products={products}/>
    </div>
    </div>
);
}