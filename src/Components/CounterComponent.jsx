import React, { useState } from 'react';

const CounterComponent = () => {
    const [count, setCount] = useState(0);

const handleIncrement = () => {
    setCount(count +1);
}

return(
<div>
<h2>Countet</h2>
<p>Current count: {count}</p>
<button onClick={handleIncrement}>Increment</button>
</div>
)
};

export default CounterComponent;
