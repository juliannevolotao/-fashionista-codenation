const INICIAL_STATE = {
    cartItems: []
}

export default function (state = INICIAL_STATE, action) {

    switch(action.type) {
        case 'SET_ITEM_CART':
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
            }
        case 'GET_CART_ITEMS':
            return {
                ...state,
                cartItems: state.cartItems
            }
        default:
            return state;
    }
}