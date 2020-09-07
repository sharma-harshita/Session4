import * as actionTypes from '../actions/actionTypes'


const todoList = ( state = [], action )=>{
    switch (action.type) {
        case actionTypes.CREATE_TODO:
            return[
                ...state,
                {
                    name:action.todo
                }
            ]
        default:
            return state;
    }
}

export default todoList