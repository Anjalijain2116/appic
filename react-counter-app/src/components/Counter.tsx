import React, { FunctionComponent, useState, useEffect } from 'react';
import { CounterProps } from '../types';

const MAX_COUNT = 10;
const MIN_COUNT = 0;

const Counter: FunctionComponent<CounterProps> = ({ initialCount = 0 }) => {
    const [count, setCount] = useState<number>(initialCount);

    useEffect(() => {
        if (count > MAX_COUNT) {
            setCount(MAX_COUNT);
        } else if (count < MIN_COUNT) {
            setCount(MIN_COUNT);
        }
    }, [count]);

    const increment = () => {
        if (count < MAX_COUNT) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > MIN_COUNT) {
            setCount(count - 1);
        }
    };

    const reset = () => {
        setCount(initialCount);
    };

    return (
        <div>
            <h2>Counter</h2>
            <p>Current Count: {count}</p>
            <button onClick={increment} disabled={count >= MAX_COUNT}>Increment</button>
            <button onClick={decrement} disabled={count <= MIN_COUNT}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;