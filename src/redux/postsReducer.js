import {
    CREATE_POST,
    DELETE_POSTS,
    EDIT_POSTS,
    FETCH_POSTS
} from "./types";

const initialState = {
    posts: [
        {
            id: 1,
            title: 'Товар 1',
            body: 'Этот товар предназначен для повседневного использования'
        },
        {
            id: 2,
            title: 'Товар 2',
            body: 'Этот товар предназначен для повседневного использования'
        },
        {
            id: 3,
            title: 'Товар 3',
            body: 'Этот товар предназначен для повседневного использования'
        },
    ],
    fetchedPosts: []
}

const newInitialState = JSON.stringify(initialState)
localStorage.setItem('myObj',newInitialState );
const returnObj = JSON.parse (localStorage.getItem ("myObj"));

export const postsReducer = (state = returnObj, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat([action.payload])}
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}
        case DELETE_POSTS:
            return {...state, posts: state.posts.filter(post => post.id !== action.payload.id)}
        case EDIT_POSTS:
            return {
                ...state, posts: state.posts.map(
                    post => post.id === action.payload.id
                        ? {...post, ...action.payload}
                        : post
                )
            }

        default:
            return state
    }
}