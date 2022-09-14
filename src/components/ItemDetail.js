import '../App.css'
import ItemCount from './ItemCount'

const ItemDetail = ({productos}) => {

    return (
        <section>
            {
                productos.map(producto =>
                    <div className="info">
                        <img src={producto.img} alt="..." className="img"></img>
                        <div className="sinopsis">
                            <h2 className="titulo">{producto.titulo}</h2>
                            <h4>Autor: {producto.autor}</h4>
                            <h5>Genero: {producto.genero}</h5>
                            <h6>Sinopsis:</h6>
                            <p>{producto.sinopsis}</p>
                            <h5>Precio: {producto.precio}</h5>
                            <ItemCount initial={1} stock={5} />
                        </div>
                    </div>
                )
            }
        </section>
    )
}

export default ItemDetail;