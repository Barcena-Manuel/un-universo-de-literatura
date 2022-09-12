import ItemCount from './ItemCount'

// estructura de cartas
const Item = ({producto}) => {
    const boton = () => {
        alert("No hay stock")
    }

    const {titulo, img, descripcion} = producto;

    return (
        <>
        <section>
            <div className="card cards">
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <ItemCount />
                    <button type="button" class="btn btn-outline-info">Info</button>
                    <button id="carrito" className="btn btn-primary" onClick={() => boton()}>Añadir al Carrito</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Item;