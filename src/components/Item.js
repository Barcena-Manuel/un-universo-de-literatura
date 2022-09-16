import { Link } from 'react-router-dom'
import '../App.css'
import ItemCount from './ItemCount'

// estructura de cartas
const Item = ({producto}) => {
    const {id, titulo, img, descripcion, stock} = producto;

    return (
        <>
            <div className="card cards">
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <ItemCount initial={1} stock={stock} />
                    <Link to={`/item/${id}`}><button type="button" class="btn btn-outline-info">Detalles</button></Link>
                </div>
            </div>
        </>
    )
}

export default Item;