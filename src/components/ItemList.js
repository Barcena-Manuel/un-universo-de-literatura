import '../App.css'
import Item from './Item'

const ItemList = ({productos}) => {

    return (
        <section className="card__aling">
        {
            productos.map(producto => <Item producto={producto} id={producto.id} stock={producto.stock} key={producto.id}/>)
        }
        </section>
    )
}

export default ItemList;