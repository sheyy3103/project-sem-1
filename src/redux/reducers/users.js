const initState = {
    user: JSON.parse(localStorage.getItem("user"))
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "SAVE_USER":
            let data = action.playload;
            localStorage.setItem("user", JSON.stringify(data));
            state.user = { ...data };
            return {
                ...state,
                user: data
            }
        case "GET_USER":
            let u = state.user
            return u
        default:
            return state;
    }
}

export default userReducer;