import React, {useState} from 'react';
import { Button, Card, Icon } from 'semantic-ui-react'


const ItemCount = ({stock}) => {

  const [contador, setContador] = useState(0);
  const minusClick = () => {
    if(contador>0){
      setContador(contador - 1)
    }
  }
 
  const plusClick = () => {
    //No quiero que supere las 10 unidades
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
        </Card.Content>
      </Card>
    )
}

export default ItemCount
