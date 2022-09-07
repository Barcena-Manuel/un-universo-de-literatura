import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import  NavBar from "./components/NavBar.js";
import ItemList from "./components/ItemList.js";

const App = () => {
  return (
    <div>
    <NavBar />
      <ItemList />
    </div>
  );
}

export default App;
