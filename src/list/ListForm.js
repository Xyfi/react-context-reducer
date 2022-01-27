import './ListForm.css';
import { useListContext } from "./ListContext";
import { useState, useCallback, useRef } from "react";

const ListForm = () => {
    const { addToList } = useListContext();
    const [ value, setValue ] = useState( "" );
    const inputRef = useRef();

    const onChange = useCallback( ( event ) => {
        setValue( event.target.value );
    }, [ setValue ] );

    const onSubmit = useCallback( ( event ) => {
        event.preventDefault();
        inputRef.current.focus();
        if ( value === "" ) {
            return;
        }
        addToList( value );
        setValue( "" );
    }, [ addToList, value ] );

    return (
        <form onSubmit={ onSubmit }>
            <label for="list-input">Add an item</label>
            <input type="text" id="list-input" ref={ inputRef } value={ value } onChange={ onChange }/>
            <input type="submit"/>
        </form>
    );
}

export default ListForm;
