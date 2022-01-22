import React from "react";
import "./styles.css";
import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from '../../sevices/firebase/firebase'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)
    getProducts('category', '==', categoryId).then(products=>{
      setProducts(products)
    }).catch(error =>{
      console.log(error)
    }).finally(()=>{
      setLoading(false)
    })
    return () => {
      setProducts([]);
    };
  }, [categoryId]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
