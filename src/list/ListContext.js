import { createContext, useContext, useReducer, useMemo } from "react";
import reducer from "./reducer";
import * as listActions from "./actions";
import bindActionCreators from "../utils/bindActionCreators";

const ListContext = createContext();

const ListContextProvider = ( { children } ) => {
    const [ list, dispatch ] = useReducer( reducer, [] );
    const actions = useMemo(
        () => {
            return bindActionCreators( listActions, dispatch )
        },
        []
    );

    return (
        <ListContext.Provider value={ { list, ...actions } }>
            { children }
        </ListContext.Provider>
    )
}

const useListContext = () => {
    return useContext( ListContext );
}

export {
    ListContextProvider,
    useListContext
};
