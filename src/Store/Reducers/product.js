const INICIAL_STATE = {
    data: []
}

export default function (state = INICIAL_STATE, action) {

    switch(action.type){
        case 'SET_SELECTED_PRODUCT':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
