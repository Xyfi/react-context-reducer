const reducer = ( state, action ) => {
    switch( action.type ) {
        case "add":
            return [
                ...state,
                action.payload
            ];
        case "remove":
            return state.filter( item => {
                return item.id !== action.payload.id;
            } );
        default:
            return state;
    }
}

export default reducer;