import React, { useContext } from 'react';
import { COUNT_REDUCER } from '../../App';

const Child = () => {
// const Child = ({count, setCount}) => {
    const {count, setCount} = useContext(COUNT_REDUCER)
    return (
        <div>
            <h4>Child {count}</h4>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default Child;