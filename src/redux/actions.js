import {
    CREATE_POST,
    FETCH_POSTS,
    HIDE_ALERT,
    HIDE_LOADER,
    SHOW_ALERT,
    SHOW_LOADER,
    DELETE_POSTS,
    EDIT_POSTS,
    ALL_POSTS,
    CREATE_WAREHOUSE,
    ALL_WAREHOUSES,
    DELETE_WAREHOUSE,
    EDIT_WAREHOUSE,
    REQUEST_POSTS
} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function allPosts(post) {
    return {
        type: ALL_POSTS,
        payload: post
    }
}

export function deletePost(id) {
    return {
        type: DELETE_POSTS,
        payload: {id}
    }
}

export function editPost(editPost) {
    return {
        type: EDIT_POSTS,
        payload: editPost
    }
}

export function createWarehouse(warehouse) {
    return {
        type: CREATE_WAREHOUSE,
        payload: warehouse
    }
}

export function allWarehouses(warehouse) {
    return {
        type: ALL_WAREHOUSES,
        payload: warehouse
    }
}

export function deleteWarehouse(id) {
    return {
        type: DELETE_WAREHOUSE,
        payload: { id }
    }
}

export function editWarehouse(editWarehouse) {
    return {
        type: EDIT_WAREHOUSE,
        payload: editWarehouse
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
