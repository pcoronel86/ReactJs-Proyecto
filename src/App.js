//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import NavBar from './components/Nav-Bs/NavBar';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:paramId' element={<ItemDetailContainer />} />
            <Route path='cart' element={<Cart/>}/>  
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
