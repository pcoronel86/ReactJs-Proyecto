import { useState, useEffect, useContext } from 'react'
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'
import { getCategories } from '../../products'
import UserContext from '../../Context/userContext'




const NavBar = () => {
  const [categories, setCategories] = useState([])
  const {user, logout} = useContext(UserContext)
  
  useEffect(() => {
    getCategories().then(categories=>{
      setCategories(categories)
    })
  }, [])

  const handleLogout=()=>{
    logout()
  }



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
              <div>
                {
                  user ?
                  <button onClick={handleLogout} className='Option'>{user}</button>
                  :<Link to='/login' className='Option'>Login</Link>
                }
                
              </div>
              <div className="">
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
