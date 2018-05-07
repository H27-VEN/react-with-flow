export default function user(state={loggedIn: false}, action) {
    
    let newState;
    switch(action.type) {

        case 'USER-LOGIN':
            newState = {...state, status: action.payload.status, msg: action.payload.msg, email: action.payload.email, loggedIn: true};
        break;

        case 'USER-REGISTER':
            newState = { ...state, status: action.payload.status, msg: action.payload.msg };
        break;

        case 'USER-PROFILE':
            newState = { ...state,  data: action.payload };
        
        default:
            newState = {...state};
        break;
    
    }
    return newState;
};