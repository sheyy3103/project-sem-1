export const saveUser = (user) => {
    return {
        type: "SAVE_USER",
        playload: user
    }
}

export const getUser = () => {
    return {
        type: "GET_USER"
    }
}