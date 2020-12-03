import React from "react";

import Posts from "../components/posts/Posts";

const Home = (props) => {

    return (
        <div className="container pt-3">
            <Posts props={props}/>
        </div>
    )
}

export default Home;