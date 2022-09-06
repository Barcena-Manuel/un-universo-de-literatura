import { useState } from 'react';

const ItemCount = () => {
    
    const [rate, setRate] = useState(1);

    const cliclksMas = () => {
        setRate (rate +1);
    }

    const cliclksMenos = () => {
        setRate (rate -1);
    }

    return (
        <>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary" onClick={cliclksMas}>+</button> {rate}
            <button type="button" class="btn btn-primary">1</button>
            <button type="button" class="btn btn-primary" onClick={cliclksMenos}>-</button> {rate}
        </div>
        </>
    )
}

export default ItemCount;