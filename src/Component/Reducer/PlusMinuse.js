import React, { useReducer } from 'react';

const PlusMinuse = () => {
    const initialCount = 0
    function reducer(state, action){
        switch(action.type){
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT':
                return state - 1
            case 'NUM':
                return state + action.payload
            default: return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialCount)
    return (
        <div>
            <h2>Increment Decrement by reducer.</h2>
            <h2>Now Count {state}</h2>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'NUM', payload: 5})}>5 plus</button>
        </div>
    );
};

export default PlusMinuse;