import { createStore } from 'redux';

// Action generator-- the function that return action object
const incermentCount =({incrementBy = 1}={}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decermentCount =({decrementBy = 1}={}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount =({ count }) => ({
    type: 'SET',
    count
});

const resetCount =() => ({
    type: 'RESET'
});

// reducer

const countReducer = (state={ count:0 }, action)=>{
    switch (action.type){
        case 'INCREMENT':
        return{
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy
        };
        case 'SET':
        return{
            count: action.count 
        };
        case 'RESET':
        return{
            count: 0
        };
        default:
        return state;
    }
}


const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

// store.dispatch({
//     type:'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incermentCount({incrementBy:20}));
store.dispatch(decermentCount({decrementBy:10}));

store.dispatch(decermentCount({decrementBy:0}));
store.dispatch(decermentCount({decrementBy:50}));

store.dispatch(resetCount());

store.dispatch(setCount({count : 110}));
