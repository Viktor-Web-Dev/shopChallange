import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

import {
    createPost,
    editPost,
    editWarehouse,
    showAlert
} from "../redux/actions";

import {Alert} from "./Alert";


const PostForm = (props) => {

    const {id} = useParams();

    const dispatch = useDispatch()

    const [state, setState] = useState({
        title: '',
        body: '',
        warehouse: '',
        value: 1,
        id
    })

    const submitHandler = event => {
        event.preventDefault()
        const {title, body, value, warehouse, id} = state

        if (!props.warehouse.map(el => el.posts.filter(el => el.title === title).length > 0).some(el => !!el)) {

            let findWarehouse

            if (!state.title.trim()) {
                return dispatch(showAlert('Название товара не может быть пустым'))
            }
            if (warehouse) {
                findWarehouse = props.warehouse.filter(el => el.id === Number(warehouse)).pop()
            } else {
                findWarehouse = props.warehouse.filter(el => el.title === 'Общий склад').pop()
            }
            if (props.location.pathname === "/create") {
                dispatch(createPost({
                    title,
                    body,
                    id: Date.now()
                }))
                props.history.push("/");

                dispatch(editWarehouse({
                    ...findWarehouse,
                    posts: findWarehouse.posts.concat({
                        title,
                        body,
                        id: Date.now(),
                        value: Number(value)
                    })
                }))
            } else {
                    const changePost = {
                            title,
                            body,
                            id: Number(id),
                            value: Number(value)
                    }
                    dispatch(editWarehouse(changePost));
                    props.history.push("/");
                }
        }
    }

    const changeInputHandler = (val, key) => {
        setState({
            ...state,
            [key]: val
        })
    }

    return (
        <Form>
            {alert && <Alert text={alert}/>}
            <h1 className="h3 mb-3 font-weight-normal">
                {props.location.pathname === "/create" ? "Добавить товар" : "Редактировать товар"}
            </h1>
            <Form.Group>
                <Form.Label>Имя</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введите название товара"
                    id="title"
                    name="title"
                    value={state.title}
                    onChange={(e) => changeInputHandler(e.target.value, "title")}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Описание товара</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введите описание товара"
                    id="body"
                    name="body"
                    value={state.body}
                    onChange={(e) => changeInputHandler(e.target.value, "body")}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Количество товара</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Введите количество товара"
                    id="value"
                    name="value"
                    value={state.value}
                    onChange={(e) => changeInputHandler(e.target.value, "value")}
                    min={1}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>В какой склад сохранить?</Form.Label>
                <Form.Control
                    as="select"
                    placeholder="Выберите название склада"
                    onChange={(e) => changeInputHandler(e.target.value, "warehouse")}
                >
                    <option key={0} selected/>
                    {props.warehouse.length > 0 && props.warehouse.filter(warehouse => warehouse.title !== 'Общий склад').map((warehouse, index) => (
                        <option
                            value={warehouse.id}
                            key={index + 1}
                        >
                            {warehouse.title} ( {warehouse.body} )
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <div>
                <Button
                    className="mt-1 mr-1"
                    variant="success"
                    type="submit"
                    onClick={submitHandler}
                >
                    {props.location.pathname === "/create" ? "Добавить" : "Сохранить"}
                </Button>
                <Button
                    className="mt-1 mr-1"
                    variant="primary"
                    type="submit"
                    onClick={() => props.history.push('/')}
                >
                    Назад
                </Button>
            </div>
        </Form>
    );
}

const mapStateToProps = state => ({
    post: state.postsReducer,
    warehouse: state.warehouseReducer,
})


export default connect(mapStateToProps, null)(PostForm)
