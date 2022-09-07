import { useState } from 'react';

const ItemCount = () => {

    const [rate, setRate] = useState(1);

    const cliclksMas = () => {
        if(rate < 5){
            setRate (rate +1);
        }else{
            console.log("no hay stock");
        }
    }

    const cliclksMenos = () => {
        if(rate > 1){
            setRate (rate -1);
        }else{
            console.log("no se puede");
        }
    }

    return (
        <>
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary" onClick={cliclksMas}>+</button>
            <button type="button" className="btn btn-primary">{rate}</button>
            <button type="button" className="btn btn-primary" onClick={cliclksMenos}>-</button>
        </div>
        </>
    )
}

export default ItemCount;