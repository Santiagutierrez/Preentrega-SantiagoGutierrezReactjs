
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductList from './components/Products/ProductList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"ROPA REVOLVER"}/>
    </div>
  );
}

export default App;
