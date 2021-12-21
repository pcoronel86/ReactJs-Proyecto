import React from "react";
import './NavBar.css'
import { useState, useEffect } from 'react'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'
import { getCategories } from '../../products'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(categories=>{
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
              <div className=" position-absolute end-0">
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
