import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const [buy, setBuy] = useState(false);
  const [qty, setQty] = useState(0);

  const addToCart = (qty) => {
    setBuy(true);
    setQty(qty);
  };
  const handlePurchase = () => {
    addItem(product, qty);
  };

  return (
    <div className="itemDetail">
      <img
        className="imgitem"
        src={product.pictureURL}
        alt={product.pictureURL}
      />
      <h5 className="itemTitel">{product.title}</h5>
      <div className="itemCompra">
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <p>Cantidad Disponibles: {product.stock}</p>
        <div className="itemCount">
          {!buy ? (
            <ItemCount
              initial={1}
              stock={product?.stock}
              onAdd={(qty) => addToCart(qty)}
            />
          ) : (
            <Link
              to="/cart"
              className="btn btn-success ml-auto comprarButton"
              type="button"
              data-toggle="modal"
              data-target="#comprarModal"
              onClick={handlePurchase}
            >
              {" "}
              Ir al Carrito{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
