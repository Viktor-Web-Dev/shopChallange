import React from "react";
import {connect, useDispatch} from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Trash } from "react-bootstrap-icons";

import { deleteWarehouse } from "../../redux/actions";

const Warehouses = (props) => {

    const dispatch = useDispatch()

    if (!props.warehouse.length) {
        return <p className="text-center">Складов пока нет</p>
    }
    return (
        <Table responsive>
            <thead>
            <tr>
                <th>Название склада</th>
                <th>Описание склада</th>
                <th>Продукт</th>
                <th>Количество</th>
                <th>Действие</th>
            </tr>
            </thead>
            {props.warehouse.map((warehouse, index) => (
                <tbody>
                <tr>
                    <td key={index}>{warehouse.title}</td>
                    <td key={index}>{warehouse.body}</td>
                    <td >{warehouse.posts.map((posts, index) => (
                        <tr key={index}>{posts.title}</tr>
                    ))}
                    </td>
                    <td>{warehouse.posts.map((posts, index) => (
                        <tr key={index}>{posts.value}</tr>
                    ))}
                    </td>
                    <td>
                        <div className="d-flex justify-content-lg-start align-items-center">
                            <Button
                                variant="outline-warning"
                                onClick={() => dispatch(deleteWarehouse(warehouse.id))}
                                className="mr-2"
                            >
                                <Trash color="red"/>
                            </Button>
                        </div>
                    </td>
                </tr>
                </tbody>
            ))}
        </Table>

    )
}

const mapStateToProps = state => ({
    post: state.postsReducer,
    warehouse: state.warehouseReducer,
})

export default connect(mapStateToProps, null)(Warehouses)