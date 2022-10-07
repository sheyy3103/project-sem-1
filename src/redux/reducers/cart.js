
const getLocalCart = JSON.parse(localStorage.getItem('cart') || "[]");

const initCart = {
    cartItems: getLocalCart,
    cartNumber: getLocalCart.length,
}

const cartReducer = (state = initCart, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let item = {
                id: action.playload.data.id,
                name: action.playload.data.name,
                category: action.playload.data.category,
                price: action.playload.data.price,
                img: action.playload.data.img,
                quantity: parseInt(action.playload.quantity),
                total : + action.playload.data.price * parseInt(action.playload.quantity),
            }
            let checkExist = false;
            state.cartItems.map((item, key) => {
                if (item.id === action.playload.data.id) {
                    state.cartItems[key].quantity+= parseInt(action.playload.quantity);
                    checkExist = true;
                }
            })
            if (!checkExist) {
                state.cartItems.push(item);
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
                return {
                    ...state,
                    cartItems: state.cartItems,
                    cartNumber: state.cartNumber + 1,
                }
            } else {
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
                return {
                    ...state,
                    cartItems: state.cartItems,
                }
            }

        case "UPDATE_CART":
            state.cartItems.map((item, key) => {
                if (item.id === action.playload.id) {
                    state.cartItems[key].quantity = parseInt(action.playload.quantity);
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cartItems))

            return {
                ...state,
                cartItems: state.cartItems,
            }
        case "REMOVE_FROM_CART":
            state.cartItems.map((item, key) => {
                if (item.id === action.playload.id) {
                    state.cartItems.splice(key, 1);
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
            return {
                ...state,
                cartItems: state.cartItems,
                cartNumber: state.cartNumber - 1,
            }
        default:
            return state
    }
}
export default cartReducer;