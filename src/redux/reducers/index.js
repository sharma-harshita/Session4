import {combineReducers} from 'redux';
import todoList from './todoReducers';


export default combineReducers({
    todos: todoList
})

