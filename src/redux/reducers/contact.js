const initState = {
    contact: JSON.parse(localStorage.getItem("contact"))
}

const contactReducer = (state = initState,action) => {
    switch (action.type) {
        case "SEND":
            let data = action.playload;
            localStorage.setItem("contact", JSON.stringify(data));
            state.contact = { ...data };
            return {
                ...state,
                contact: data
            }
        default:
            return state;
    }
}
export default contactReducer;
