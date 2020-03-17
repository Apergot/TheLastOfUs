import React, {useState} from 'react';

const CountFunctional = () => {
    const [count, setCount] = useState(0);

    function handleInput(event) {
        setCount(event.target.value);
    }

    return (
        <>
            <div>Counter value: {count}</div>
            <input onChange={handleInput}></input>
        </>
    );
};

export default CountFunctional;