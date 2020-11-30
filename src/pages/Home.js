import React from "react";
import Posts from "../components/Posts";

const Home = ({history, post}) => {

    return (
        <div className="container pt-3">
            <Posts history={history} post={post}/>
        </div>
    )
}

export default Home;