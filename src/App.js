import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import  NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";



const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/Item/:id" element={<ItemDetailContainer />}/>
        <Route path="/Cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
