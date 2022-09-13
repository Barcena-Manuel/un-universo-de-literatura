import '../App.css'
import Item from './Item'

const ItemList = ({productos}) => {

    return (
        <section className="card__aling">
        {
            productos.map(producto => <Item producto={producto} key={producto.id}/>)
        }
        </section>
    )
}

export default ItemList;