import React from "react";
import Table from "react-bootstrap/Table";
import {connect, useDispatch} from "react-redux";
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import Button from "react-bootstrap/Button";

import {deletePost, editWarehouse} from "../../redux/actions";


const Posts = (props) => {

    const dispatch = useDispatch()

    if (!props.post.length) {
        return <p className="text-center">Товаров пока нет</p>
    }

    const removePost = () => {
        dispatch(deletePost(props.post.id))
        props.warehouse.map(warehouse => {
            return dispatch(editWarehouse({
                ...warehouse,
                posts: warehouse.posts.filter(el => el.id !== props.post.id)
            }))
        })
    }

    return (
        <Table responsive>
            <thead>
            <tr>
                <th>Название товара</th>
                <th>Описание товара</th>
                <th>Склад</th>
                <th>Количество</th>
                <th>Действие</th>
            </tr>
            </thead>
            {props.post.map((posts, index) => (
                <tbody>
                <tr>
                    <td>{posts.title}</td>
                    <td>{posts.body}</td>
                    <td>{props.warehouse.map(warehouse => warehouse.posts.map(product => product.id === posts.id && (
                        <tr key={index}>{warehouse.title}</tr>
                    )))}
                    </td>
                    <td>{props.warehouse.map(warehouse => warehouse.posts.map(product => product.id === posts.id && (
                        <tr key={index}>{product.value}</tr>
                    )))}
                    </td>
                    <td>
                        <div className="d-flex justify-content-lg-start align-items-center">
                            <Button
                                variant="outline-warning"
                                onClick={() => dispatch(deletePost(posts.id))}
                                className="mr-2"
                            >
                                <Trash color="red"/>
                            </Button>
                            <Button
                                variant="outline-primary"
                                className="mr-2"
                                onClick={() => props.props.history.push(`/edit/${posts.id}`)}
                            >
                                <PencilSquare color="blue"/>
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
    alert: state.appReducer,
    post: state.postsReducer,
    warehouse: state.warehouseReducer,
})

export default connect(mapStateToProps, null)(Posts)