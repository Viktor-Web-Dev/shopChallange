import {
    CREATE_POST,
    FETCH_POSTS,
    HIDE_ALERT,
    HIDE_LOADER,
    REQUEST_POSTS,
    SHOW_ALERT,
    SHOW_LOADER,
    DELETE_POSTS, EDIT_POSTS
} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function deletePost(id) {
    return {
        type: DELETE_POSTS,
        payload: { id }
    }
}

export function editPost(editPost) {
    return {
        type: EDIT_POSTS,
        payload: editPost
    }
}

export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}
