import { useState, useEffect } from 'react'
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'
import {db} from '../../sevices/firebase/firebase'
import { getDocs, collection } from 'firebase/firestore';




const NavBar = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getDocs(collection(db, 'categories')).then((querySnapshot) => {
      const categories = querySnapshot.docs.map(doc=>{
        return {id:doc.id, ...doc.data()}
      })
      setCategories(categories)
    })
  }, [])
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div>
                <Link to={'/'}><h3>CompuNor</h3></Link>
              </div>
              <div className="Categories">
                {categories.map(cat => <Link key={cat.id} className='Option' to={`/category/${cat.id}`}>{cat.description}</Link>)}
              </div>
              <div className="position-absolute end-0">
                <Link to = "/cart"><CartWidget/></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
