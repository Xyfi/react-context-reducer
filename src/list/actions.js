import guid from "../utils/guid";

export const addToList = ( text ) => {
    return {
        type: "add",
        payload: {
            id: guid(),
            text
        },
    }
}

export const removeFromList = ( id ) => {
    return {
        type: "remove",
        payload: {
            id,
        }
    }
}
