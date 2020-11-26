import {
    CREATE_POST,
    DELETE_POSTS,
    FETCH_POSTS
} from "./types";

const initialState = {
    warehouseOne: [
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

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat([action.payload])}
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}
        case DELETE_POSTS:
            return {...state, posts: state.posts.filter(el => el.id !== action.payload.id)}
        default:
            return state
    }
}