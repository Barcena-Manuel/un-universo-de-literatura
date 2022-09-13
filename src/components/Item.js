import '../App.css'
import ItemCount from './ItemCount'

// estructura de cartas
const Item = ({producto}) => {
    const {titulo, img, descripcion} = producto;

    return (
        <>
            <div className="card cards">
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <ItemCount initial={1} stock={5} />
                    <button type="button" class="btn btn-outline-info">Info</button>
                    
                </div>
            </div>
        </>
    )
}

export default Item;