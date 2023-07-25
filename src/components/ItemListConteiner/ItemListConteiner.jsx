import { Item } from "../Item/Item";

export const ItemListConteiner = ({products}) => (
    <div className="item-list">
      {products.map((product) => (
        <Item
        key={product.id}
        img={product.img}
        category={product.category}
        title={product.title}
        precio={product.precio}
          
        />
      ))}
    </div>
  );