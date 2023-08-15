import { useEffect, useState } from "react";
import { getProducts } from "../libreria/productos";
import { ItemListConteiner } from "../components/ItemListConteiner/ItemListConteiner";
import Loader from "react-js-loader";

export const Home = () => {
    const [products, setProducts] = useState([]);
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