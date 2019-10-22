const redux =  require('redux');
const createStore = redux.createStore;


const initial_state = {
    counter:3
}

//reducer
const RootReducer = (state=initial_state,action) => {
    if(action.type==='ABC'){
       return { 
           ...state,
           counter:state.counter+1
       }
    };
      if(action.type==='DEF'){
        return { 
            ...state,
            counter:state.counter+action.value+1
        }
    }
  return state;
};

//Store
const store = createStore(RootReducer);

//console.log(store.getState());

store.dispatch({type:'ABC',value:10});
//store.dispatch({type:'DEF',value:10});
store.dispatch({type:'LKM',value:10});

console.log(store.getState());
