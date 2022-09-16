import '../App.css'
import ItemCount from './ItemCount'

const ItemDetail = ({productos}) => {

    return (
        <section>
            {
                    <div className="info letras">
                        <img src={productos.img} alt="..." className="img"></img>
                        <div className="sinopsis">
                            <h2 className="titulo">{productos.titulo}</h2>
                            <h4>Autor: {productos.autor}</h4>
                            <h5>Genero: {productos.genero}</h5>
                            <h6>Sinopsis:</h6>
                            <p>{productos.sinopsis}</p>
                            <h5>Precio: {productos.precio}</h5>
                            <h6>Stock del producto: {productos.stock}</h6>
                            <ItemCount initial={1} stock={5} />
                        </div>
                    </div>
                
            }
        </section>
    )
}

export default ItemDetail;