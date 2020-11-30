import React, {useState} from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Posts from "../components/Posts";

const Main = ({history, post}) => {

    const [key, setKey] = useState('home');

    return (
        <div className="container">
            <Tabs
                defaultActiveKey="third"
                transition={false}
                id="controlled-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="first" title="Склад 1">
                    <Posts history={history} post={post}/>
                </Tab>
                <Tab eventKey="second" title="Склад 2">
                    <Posts history={history} post={post} />
                </Tab>
                <Tab eventKey="third" title="Общий склад">
                    <Posts history={history} post={post}/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Main;