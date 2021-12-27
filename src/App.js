import './App.css';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import NavBar from './components/Nav-Bs/NavBar';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext';


function App() {
  
  return (
    <CartContextProvider>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/detail/:paramId' element={<ItemDetailContainer />} />
            <Route path='cart' element={<Cart/>}/>  
          </Routes>
        </Router>
    </CartContextProvider>
    
  );
}

export default App;
