import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import  NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";

const App = () => {
  return (
    <div>
    <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
