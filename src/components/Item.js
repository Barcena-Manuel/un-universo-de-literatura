import { Link } from 'react-router-dom'
import '../App.css'

// estructura de cartas
const Item = ({producto}) => {
    const {id, titulo, img, descripcion} = producto;

    return (
        <>
            <div className="card cards">
                <img src={img} className="card-img-top imagen__card" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <Link to={`/item/${id}`}><button type="button" class="btn btn-outline-info">Detalles</button></Link>
                </div>
            </div>
        </>
    )
}

export default Item;