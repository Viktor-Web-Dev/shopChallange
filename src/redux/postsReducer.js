import {
    ALL_POSTS,
    CREATE_POST,
    DELETE_POSTS,
    EDIT_POSTS,
    FETCH_POSTS
} from "./types";

export const initialState = localStorage.getItem('post') ? JSON.parse(localStorage.getItem('post')) : []


export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_POSTS:
            return action.payload
        case CREATE_POST:
            return state.concat(action.payload)
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}
        case DELETE_POSTS:
            return state.filter(post => post.id !== action.payload.id)
        case EDIT_POSTS:
            return state.map(
                    post => post.id === action.payload.id
                        ? {...post, ...action.payload}
                        : post
                )
        default:
            return state
    }
}