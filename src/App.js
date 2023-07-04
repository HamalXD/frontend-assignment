import './App.css';
import Navigation from './components/Navigation/navigation';
import Products from './components/Products/products';
import Recommended from './components/Recommended/recommended';
import APIcall from "./DataCall/callAPI"

function App() {
  return (
    <>
    <Navigation/>
    <Products/>
    <Recommended/>
    <APIcall/>
    </>
  );
}

export default App;
