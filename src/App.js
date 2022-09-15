import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import  NavBar from "./components/NavBar.js";
/* import ItemListContainer from "./components/ItemListContainer.js"; */
import ItemDetailContainer from './components/ItemDetailContainer.js'

const App = () => {
  return (
    <div>
    <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
