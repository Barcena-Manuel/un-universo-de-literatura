import { Link } from 'react-router-dom'
import { MenuItem } from '@mui/material';
import '../App.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
    <header>
        <nav className="navbar navbar-expand-lg header">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand letras__header" href="#"><img className="img__logo" src="https://st.depositphotos.com/3258967/4342/v/600/depositphotos_43424921-stock-illustration-man-reading-a-book.jpg" alt="..."></img>Universo de Literatura</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/category/1" className="nav-link letras__header" href="#">Ficcion</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/2" className="nav-link letras__header" href="#">No Ficcion</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/3" className="nav-link letras__header" href="#">Juveniles</Link>
                    </li>
                </ul>
                <Link to="/cart" className='carrito'><MenuItem><CartWidget /></MenuItem></Link>
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