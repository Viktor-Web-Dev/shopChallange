import {useEffect} from 'react'
import {connect} from "react-redux";

const SetLocalStorage = (props) => {

    useEffect(() => {
        if(!localStorage.getItem('warehouse')){
            localStorage.setItem('warehouse', JSON.stringify(props.warehouse))
        }
    }, [props.warehouse])

    useEffect(() => {
        if(!localStorage.getItem('post')) {
            localStorage.setItem('post', JSON.stringify(props.post))
        }
    }, [props.post])
    return null
}


function mapStateToProps(state) {
    return {
        warehouse: state.warehouseReducer,
        post: state.postsReducer
    }
}

export default connect(mapStateToProps, null)(SetLocalStorage)

