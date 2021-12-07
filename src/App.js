//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import NavBar from './components/Nav-Bs/NavBar';
import 'semantic-ui-css/semantic.min.css'
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  return (
    <div className="App">
  
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
