import * as actionTypes from './actionTypes';


const createTodo = (todo)=>{
    return{
        type:actionTypes.CREATE_TODO,
        todo:todo
    }
}

export default createTodo;