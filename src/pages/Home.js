import React from "react";
import Postss from "../components/posts/Postss";

const Home = (props) => {

    return (
        <div className="container pt-3">
            <Postss props={props}/>
        </div>
    )
}

export default Home;