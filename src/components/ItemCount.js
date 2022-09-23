import { useState } from 'react';
import '../App.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [rate, setCount] = useState(0);

    const cliclksMas = () => {
        if(rate < stock){
            setCount (rate +1);
        }
    }

    const cliclksMenos = () => {
        if(rate >= initial){
            setCount (rate -1);
        }
    }

    return (
        <>
        <div className="btn-group contador" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary boton" onClick={cliclksMas}>+</button>
            <button type="button" className="btn btn-primary boton">{rate}</button>
            <button type="button" className="btn btn-primary boton" onClick={cliclksMenos}>-</button>
            
            {
                stock && rate 
                ?<button id="carrito" variant="carrito" className="btn btn-primary boton" onClick={() => onAdd(rate)}>Añadir al Carrito</button>
                :<button id="carrito" variant="carrito" className="btn btn-primary boton" disabled>Añadir al Carrito</button>
            }
        </div>
        </>
    )
}

export default ItemCount;