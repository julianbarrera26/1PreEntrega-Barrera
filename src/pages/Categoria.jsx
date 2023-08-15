import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../libreria/productos";
import { ItemListConteiner } from "../components/ItemListConteiner/ItemListConteiner";
import Loader from "react-js-loader";

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
    {isLoading ? (
    <Loader type="spinner-cub" bgColor={"#FFFFFF"} title={"spinner-cub"} color={'#FFFFFF'} size={100} />
    ) : (
    <div>
        <ItemListConteiner products={products}/>
    </div>
    )}
    </div>
);
};  