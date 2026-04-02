import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="card-item" onClick={showDetail}>
      <div className="card-img-box">
        {(item?.new || item?.choice) && (
          <div className="card-badge-wrap">
            {item?.new && <span className="card-badge">NEW</span>}
            {item?.choice && <span className="card-badge subtle">BEST</span>}
          </div>
        )}
        <img className="card-img" src={item?.img} alt={item?.title} />
      </div>
      <div className="card-info">
        <p className="card-title">{item?.title}</p>
        <div className="card-meta">
          <span className="card-price">
            {item?.price?.toLocaleString?.() ?? item?.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
