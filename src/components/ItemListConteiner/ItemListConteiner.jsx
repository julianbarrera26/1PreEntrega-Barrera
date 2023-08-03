import { Item } from "../Item/Item";
import "./ItemListConteiner.css"

export const ItemListConteiner = ({products}) => (
    <div className="item-list">
      {products.map((product) => (
        <Item
        
        key={product.id}
        id={product.id}
        img={product.img}
        categoria={product.categoria}
        title={product.title}
        precio={product.precio}
          
        />
      ))}
    </div>
  );