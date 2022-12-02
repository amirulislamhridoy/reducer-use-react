import React, { useContext } from 'react';
import { COUNT_REDUCER } from '../../App';
import Child from '../Child/Child';

const Parent = (props) => {
    // const count = props.count
    const {count} = useContext(COUNT_REDUCER)
    return (
        <div>
            <h3>Parent {count}</h3>
            <Child count={count} setCount={props.setCount}></Child>
        </div>
    );
};

export default Parent;