
export const setItemInCart = (item) =>{
    return {
        type: 'SET_ITEM_CART',
        payload: item
    }
}

export const getCartItems = () => {
    return {
        type: 'GET_ITEMS_CART',
    }
}