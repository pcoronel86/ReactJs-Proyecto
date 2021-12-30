import React from "react";
import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../sevices/firebase/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { paramId } = useParams();

  useEffect(() => {
    setLoading(true);
    getDoc(doc(db, "items", paramId))
      .then((querySnapshot) => {
        const product = { id: querySnapshot.id, ...querySnapshot.data() };
        setProduct(product);
      })
      .catch((error) => {
        console.log("Error searching item", error);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      setProduct([]);
    };
  }, [paramId]);

  return (
    <div>
      <div className="itemDetailContainer">
        {loading ? <h1>LOADING</h1> : <ItemDetail product={product} />}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
