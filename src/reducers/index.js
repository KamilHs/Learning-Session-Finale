import { ADD_BUTTON_PRESSED, INPUT_VALUE_CHANGE, TODO_STATUS_CHANGE } from '../actions'
import { INPUT_VALUE_CHANGE_POSTS, FETCH_POSTS_STARTS, FETCH_POSTS_ERROR, FETCH_POSTS_SUCCESS } from '../actions/posts';

import { combineReducers } from 'redux'


const AddTodo = (state = [], action) => {
    const payload = action.payload;
    switch (action.type) {
        case ADD_BUTTON_PRESSED:
            return [...state, payload];
        case TODO_STATUS_CHANGE:
            const newState = [...state];
            return newState.map((todo,i)=>{
                if(i===action.payload.index){
                    todo.done = !todo.done;
                }
                return todo;
            })
            
        default:
            return state;
    }
}

const InputChange = (state = "", action) => {
    switch (action.type) {
        case INPUT_VALUE_CHANGE:
            return action.payload.value;
        default:
            return state;
    }
}


const InputChangePosts = (state = "", action) => {
    switch (action.type) {
        case INPUT_VALUE_CHANGE_POSTS:
            return action.payload.value;
        default:
            return state;
    }
}


const initialState = { posts: [], status: "" };

function FetchingPosts(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_STARTS:
            return { ...state, status: "Loading" };
        case FETCH_POSTS_SUCCESS:
            return { ...state, status: "Success", posts: action.payload.posts };
        case FETCH_POSTS_ERROR:
            return { ...state, status: "Error" };
        default:
            return state;
    }
}



export default combineReducers({ AddTodo, InputChange, InputChangePosts, FetchingPosts });