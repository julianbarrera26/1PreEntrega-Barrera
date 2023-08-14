import { useEffect, useState } from "react"
import { ItemCount } from "../components/ItemCount/ItemCount";
import { Alert } from "react-bootstrap";
import { getProduct } from "../libreria/productos";
import { useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";
import { Item } from "../components/Item/Item";

export const Detail = () => {
    const {id} = useParams();
    const[product, setProduct] = useState({})
    const {addProduct} = useCartContext();
    useEffect(()=>{
        getProduct(+id).then((res) => {
            setProduct(res)
        });

        },[]);

        const handleAdd = (qty) => {
            addProduct(product, qty);
        };
        if(!Object.keys(product).length) return;
    
        return (
        <div className="container">
            <div className="detail">
                <div className="detail_img">
                    <img src={product.img} />

                </div>
                <div className="detail_info">
                    <span className="detail_info-title">{product.title}</span>
                    <p className="detail_info-descripcion">{product.descripcion} </p>
                    <span className="detail_info-precio">
                            ${(product.precio || 0 ).toLocaleString ("es-AR", {
                                minimumFractioDigits:2,
                                maximumFractionDigits:2,
                            })}
                    </span>
                    <span className="detail_info-stock">¡ quedan {product.stock}!</span>
                    <ItemCount stock={product.stock} onAdd={handleAdd} />              

                    
                </div>

            </div>
        </div>
        );
};