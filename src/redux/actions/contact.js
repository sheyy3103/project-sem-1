export const send = (contact) => {
    return {
        type: "SEND",
        playload: contact
    }
}