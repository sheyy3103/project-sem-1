export const addToCart = (data, quantity = 1) => {
    return {
        type: "ADD_TO_CART",
        playload: {
            data,
            quantity
        }
    }
}
export const updateCart = (data,quantity) => {
    return {
        type: "UPDATE_CART",
        playload: data
    }
}
export const removeFromCart = (data) => {
    return {
        type: "REMOVE_FROM_CART",
        playload: data
    }
}