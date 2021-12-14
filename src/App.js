//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import NavBar from './components/Nav-Bs/NavBar';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NotFound } from 'http-errors';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:paramId' element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
