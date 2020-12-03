import {
    CREATE_POST,
    HIDE_ALERT,
    SHOW_ALERT,
    DELETE_POSTS,
    EDIT_POSTS,
    DELETE_WAREHOUSE,
    EDIT_WAREHOUSE,
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
        payload: {id}
    }
}

export function editPost(editPost) {
    return {
        type: EDIT_POSTS,
        payload: editPost
    }
}

export function deleteWarehouse(id) {
    return {
        type: DELETE_WAREHOUSE,
        payload: id
    }
}

export function editWarehouse(editWarehouse) {
    return {
        type: EDIT_WAREHOUSE,
        payload: editWarehouse
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
