import { useNavigate } from "react-router-dom";
import "./Item.css";

export const Item = ({ 
    img,
    categoria,
    title,
    id,
    precio
  }) => {
    const navigate = useNavigate();
    return (
      <div className="item" onClick={()=> navigate(`/item/${id}`)}>
        <div className="item_img">
          <img src={img} />
        </div>
        <div className="item_detalles">
          <div className="item_info">
          <span className="item_title">{title}</span>
          </div>
          <span className="item_precio">${precio}</span>
        </div>
      </div>
    );
  };