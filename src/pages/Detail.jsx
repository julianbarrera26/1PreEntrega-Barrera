import { useEffect, useState } from "react"
import { ItemCount } from "../components/ItemCount/ItemCount";
import { Alert } from "react-bootstrap";
import { getProduct } from "../libreria/productos";

export const Detail = () => {
    const[product, setProduct] = useState({});
    useEffect(()=>{
        getProduct()
        .then(res => {
            setProduct(res)
        })

        },[]);
    return (
        <div className="container">
            <div className="detail">
                <div className="detail_img">
                    <img src="{product.img}" alt="" />

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
                    <ItemCount stock={5} onAdd={() => Alert("Comprados")}/>              

                    
                </div>

            </div>
        </div>
        );
};