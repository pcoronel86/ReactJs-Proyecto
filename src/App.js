import  React,{ useEffect, useContext } from "react";
import './App.css';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import NavBar from './components/Nav-Bs/NavBar';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import CartContextProvider from './Context/CartContext';
import UserContext from './Context/userContext'

function App() {
  
  const {login} = useContext(UserContext)

  useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem('user')
    console.log(loggedUserJSON)
    if(loggedUserJSON){
      const objUser = JSON.parse(loggedUserJSON)
      login(objUser)
    }
  },[])


  return (
    <div className="App">
      
      <CartContextProvider>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/detail/:paramId' element={<ItemDetailContainer />} />
            <Route path='cart' element={<Cart/>}/>
            <Route path='login' element={<Login/>}/>
          </Routes>
        </Router>
      </CartContextProvider>
      
      </div>
  );
}

export default App;
