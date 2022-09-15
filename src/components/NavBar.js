import { MenuItem } from '@mui/material';
import '../App.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
    <header>
        <nav className="navbar navbar-expand-lg header">
            <div className="container-fluid">
                <a className="navbar-brand letras" href="#">Un universo de literatura</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link letras" href="#">Ficcion</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link letras" href="#">No Ficcion</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link letras" href="#">Juveniles</a>
                    </li>
                </ul>
                <MenuItem><CartWidget /></MenuItem>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input> 
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                </div>
            </div>
        </nav>
    </header>
    )
};

export default NavBar;