import { useState } from 'react';

const ItemCount = ({stock, initial}) => {

    const [rate, setRate] = useState(1);

    const cliclksMas = () => {
        if(rate < stock){
            setRate (rate +1);
        }else{
            console.log("no hay stock");
        }
    }

    const cliclksMenos = () => {
        if(rate > initial){
            setRate (rate -1);
        }else{
            console.log("no se puede");
        }
    }

    const onAdd = (rate) => {
        alert ("Añadiste"  + rate +  "al carrito")
    }

    return (
        <>
        <div className="btn-group contador" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary" onClick={cliclksMas}>+</button>
            <button type="button" className="btn btn-primary">{rate}</button>
            <button type="button" className="btn btn-primary" onClick={cliclksMenos}>-</button>
            <button id="carrito" className="btn btn-primary" onClick={() => onAdd(rate)}>Añadir al Carrito</button>
        </div>
        </>
    )
}

export default ItemCount;