import React from "react";
import Post from './Post';
import {connect} from "react-redux";

const Posts = ({post, history, warehouse}) => {
    if (!post.length) {
        return <p className="text-center">Товаров пока нет</p>
    }
    return post.map(post => <Post post={post} key={post.id} history={history}/>)

}

const mapStateToProps = state => ({
    post: state.postsReducer,
    warehouse: state.warehouseReducer,
})

export default connect(mapStateToProps, null)(Posts)