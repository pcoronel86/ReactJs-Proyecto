import React, {useState} from 'react';
import { Button, Card, Icon } from 'semantic-ui-react'


const ItemCount = ({onConfirm, stock}) => {

  const [contador, setContador] = useState(1);
  
  const minusClick = () => {
    if(contador>1){
      setContador(contador - 1)
    }
  }
 
  const plusClick = () => {
    if (contador < stock) {
        setContador(contador + 1);
  }
 
}

    return (
      <Card>
        <Card.Content>
          <h2>{contador}</h2>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button onClick={plusClick}><Icon name='plus'/></Button>
            <Button onClick={minusClick}><Icon name='minus'/></Button>
          </div>
          <button className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal" data-target="#comprarModal"
            onClick={() => onConfirm(contador)}>Agregar al Carrito</button>
        </Card.Content>
      </Card>
    )
}

export default ItemCount
