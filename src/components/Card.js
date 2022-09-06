import ItemCount from './ItemCount'

const Card = (props) => {
    return (
        <>
        <section>
            <div className="card cards">
                <img src={props.thumbnail} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <ItemCount />
                    <button className="btn btn-primary">Añadir al Carrito</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Card;