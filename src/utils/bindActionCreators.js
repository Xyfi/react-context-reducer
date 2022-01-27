// src: https://github.com/reduxjs/redux/blob/d794c56f78eccb56ba3c67971c26df8ee34dacc1/src/bindActionCreators.ts

function bindActionCreator(actionCreator, dispatch) {
    return function ( ...args ) {
        return dispatch(actionCreator.apply(this, args))
    }
}

const bindActionCreators = (actionCreators, dispatch) => {
    if (typeof actionCreators !== 'object' || actionCreators === null) {
        throw new Error(
            `bindActionCreators expected an object or a function, but instead received: '${typeof actionCreators}'. ` +
            `Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`
        )
    }

    const boundActionCreators = {};
    for (const key in actionCreators) {
        const actionCreator = actionCreators[key]
        if (typeof actionCreator === 'function') {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
        }
    }
    return boundActionCreators
}

export default bindActionCreators;
