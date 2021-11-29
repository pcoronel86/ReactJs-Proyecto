//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import NavBar from './components/Nav-Bs/NavBar';
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <div className="App">
  
      <NavBar/>
      <ItemListContainer/>
      
    </div>
  );
}

export default App;
