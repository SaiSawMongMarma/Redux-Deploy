//this actually should be .js file since it won,t contain any jsx.
//reducer is just a function it get,s two property.

const INITIAL_STATE = {
    currentUser: null
}

//if reducer can,t find state then back to INITIAL_STATE
//first reducer.
const userReducer = (state = INITIAL_STATE, action) => {
    // we can use if else statement here as well

    switch (action.type) {
        case 'SET_CURRENT_USER':
        return{
           ...state,
           currentUser: action.payload 
        }

        default:
            return state;
    }
}

export default userReducer;