import "./ListDisplay.css";
import { useListContext } from "./ListContext"
import { useCallback } from "react";

const ListDisplay = () => {
    const { list, removeFromList } = useListContext();

    const onClick = useCallback( ( event ) => {
        removeFromList( event.target.dataset.id )
    }, [ removeFromList ] );

    return (
        <ul>
            { list.map( item => {
                return <li key={ item.id }>
                    { item.text } 
                    { " " } 
                    <button data-id={ item.id } onClick={ onClick }>x</button>
                </li>
            } ) }
        </ul>
    )
}

export default ListDisplay;
