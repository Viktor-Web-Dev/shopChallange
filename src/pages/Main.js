import React, {useState} from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Posts from "../components/Posts";
import ModalWindow from "../components/Modal";

const Main = () => {
    const [key, setKey] = useState('home');

    return (
        <div className="container">
            <div>
                <ModalWindow />
            </div>

            <Tabs
                defaultActiveKey="first"
                transition={false}
                id="controlled-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="first" title="Склад 1">
                    <Posts />
                </Tab>
                <Tab eventKey="second" title="Склад 2">
                    <Posts />
                </Tab>
                <Tab eventKey="third" title="Общий склад">
                    <Posts />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Main;