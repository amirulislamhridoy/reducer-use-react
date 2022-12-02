import React, { useReducer, useState } from 'react';

const Reducer = () => {
    const [check, setCheck] = useState('')
    const initialState = {
        name: '',
        password: '',
        education: "",
        gender: "",
        pcNumber: 0,
        terms: false
    }
    const reducer = (state, action) => {
        if(action.type === 'INPUT'){
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const formSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }
    return (
        <section>
            <h1>Reducer</h1>
            <form onSubmit={formSubmit}>
                <input name='name' type='text' placeholder='Name' onBlur={(e) => dispatch({type: 'INPUT', payload: {name: e.target.name, value: e.target.value}})}></input>
                <input onBlur={(e) => dispatch({type: 'INPUT', payload:{name: e.target.name, value: e.target.value}})} name='password' type='password' placeholder='*****'></input>
                <label>Education</label>
                <select onChange={(e) => dispatch({type: 'INPUT', payload:{name: e.target.name, value: e.target.value}})} name='education'>
                    <option value='SSC'>SSC</option>
                    <option value='HSC'>HSC</option>
                </select>
                <div>
                    <label>Gender</label>
                    <input onClick={(e) => dispatch({type: 'INPUT', payload:{name: e.target.name, value: e.target.value}})} type="radio" name='gender' value='male' id='male' />
                    <label htmlFor='male'>Male</label>
                    <input onClick={(e) => dispatch({type: 'INPUT', payload:{name: e.target.name, value: e.target.value}})} type='radio' name='gender' value='female' id='female' />
                    <label htmlFor='female'>Female</label>
                    <input onClick={(e) => dispatch({type: 'INPUT', payload:{name: e.target.name, value: e.target.value}})} type='radio' name='gender' value='other' id='other' />
                    <label htmlFor='other'>Other</label>
                </div>
                <div>
                    <label>Number of PC</label>
                    <button>-</button>
                    <input onChange={(e) => dispatch({type: 'INPUT', payload:{name: e.target.name, value: e.target.value}})} name='pcNumber' defaultValue={initialState.pcNumber} type='number'></input>
                    <button>+</button>
                </div>
                <input onChange={(e) => dispatch({type: 'INPUT', payload:{name: e.target.name, value: !state.terms}})} name='terms' type='checkbox'></input>
                <label>Terms and Conditions</label>
                <br />
                <input type='submit'></input>
            </form>
        </section>
    );
};

export default Reducer;