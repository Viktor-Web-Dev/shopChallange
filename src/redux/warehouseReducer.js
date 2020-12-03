import {
    ALL_WAREHOUSES,
    CREATE_WAREHOUSE,
    DELETE_WAREHOUSE,
    EDIT_WAREHOUSE,
} from "./types";

export const initialState = localStorage.getItem('warehouse') ? JSON.parse(localStorage.getItem('warehouse')) : []


export const warehouseReducer = (state = initialState, action) => {
        switch (action.type) {
            case ALL_WAREHOUSES:
                return action.payload
            case CREATE_WAREHOUSE:
                return state.concat(action.payload)
            case DELETE_WAREHOUSE:
                return state.filter(warehouse => warehouse.id !== action.payload.id)
            case EDIT_WAREHOUSE:
                return state.map(
                    warehouse => warehouse.id === action.payload.id
                        ? {...warehouse, ...action.payload}
                        : warehouse
                )
            default:
                return state
        }
}
