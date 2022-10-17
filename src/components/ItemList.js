import '../App.css'
import Item from './Item'

const ItemList = ({productos}) => {

    return (
        <section>
            <h2 className="lista__titulo">Los mejores cuentos y novelas a solo un click</h2>
            <div className="card__aling">
                {
            productos.length ?
            productos.map(producto => <Item producto={producto} id={producto.id} stock={producto.stock} key={producto.id}/>)
            :<div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        }
            </div>
        </section>
    )
}

export default ItemList;