import { AppBar } from '@mui/icons-material' 
import "bootstrap/dist/css/bootstrap.css";
import  NavBar from "./components/NavBar.js";
import ItemListContainer from './components/ItemListContainer.js'

const App = () => {
  return (
    <div>
    <NavBar />
    <ItemListContainer greeting="Dentro de poco se te va abrir un universo de posibilidades!!!!"/>
    </div>
  );
}

export default App;
