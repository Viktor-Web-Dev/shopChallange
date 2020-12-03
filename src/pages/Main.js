import React from "react";

import Warehouses from "../components/warehouses/Warehouses";
import {connect} from "react-redux";

const Main = () => (
    <div className="container pt-3">
        <Warehouses/>
    </div>
)

export default Main;