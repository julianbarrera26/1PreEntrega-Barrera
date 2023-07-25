export const Item = ({ 
    img,
    category,
    title,
    precio
  }) => {
    return (
      <div className="item">
        <div className="item_img">
          <img src={img} />
        </div>
        <div className="item_detalles">
          <div className="item_info">
            <span className="item_category">{category}</span>
            <span className="item_title">{title}</span>
          </div>
          <span className="item_precio">${precio}</span>
        </div>
      </div>
    );
  };