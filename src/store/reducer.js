

const initialState={
    age:28
}

const reducer=(state=initialState,action)=>{

    const newState={...state}

    switch(action.type){
        case 'AGE_UP':
            newState.age++;
            break;
        case 'AGE_DOWN':
            newState.age--;
            break;

        default:
    }
    return newState
}


export default reducer;