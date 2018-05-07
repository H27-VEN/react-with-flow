export default function product(state = {}, action) {
    let newState;
    switch(action.type) {

        case 'FETCH_PRODUCTS_SUCCESS':
            newState = {...state, data: action.payload};
        break
    
        case 'FETCH_PRODUCTS_ERROR' :
            newState = {...state, data: action.payload};
        break;

        default:
            newState = {...state, data: ''};
        break;
    }
    return newState;
}

