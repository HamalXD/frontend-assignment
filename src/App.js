import './App.css';
import Navigation from './components/Navigation/navigation';
import Products from './components/Products/products';
import APIcall from "./DataCall/callAPI"

function App() {
  return (
    <>
    <Navigation/>
    {/* <Products/> */}
    <APIcall/>
    </>
  );
}

export default App;
