const INICIAL_STATE = {
    data: []
}

export default function(state = INICIAL_STATE, action) {

    switch(action.type) {
        case 'GET_PRODUCTS':
            return { 
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}