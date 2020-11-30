import React from "react";
import Post from './Post';
import {connect} from "react-redux";

const Posts = ({syncPosts, history}) => {
    if (!syncPosts.length) {
        return <p className="text-center">Товаров пока нет</p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id} history={history}/>)

}

const mapStateToProps = state => ({
        syncPosts: state.posts.posts,
})

export default connect(mapStateToProps, null)(Posts)