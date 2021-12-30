import React, { useState } from "react";
import { Button, Card, Icon } from "semantic-ui-react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const [out, setOut] = useState(false);

  const handleSub = () => {
    if (count === 1) {
      return;
    } else {
      setCount(count - 1);
      setOut(false);
    }
  };

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      setOut(true);
    }
  };

  return (
    <Card>
      <Card.Content>
        <h2>{count}</h2>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button onClick={handleAdd}>
            <Icon name="plus" />
          </Button>
          <Button onClick={handleSub}>
            <Icon name="minus" />
          </Button>
        </div>
        <div>{out && <span>Out of stock</span>}</div>
        <button
          className="btn btn-success ml-auto comprarButton"
          type="button"
          data-toggle="modal"
          data-target="#comprarModal"
          onClick={() => onAdd(count)}
        >
          Agregar al Carrito
        </button>
      </Card.Content>
    </Card>
  );
};

export default ItemCount;
