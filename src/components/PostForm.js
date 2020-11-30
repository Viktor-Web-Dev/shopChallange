import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";


import {
    createPost,
    editPost,
    showAlert
} from "../redux/actions";

import {Alert} from "./Alert";


const PostForm = ({ history, location}) => {

    const {id} = useParams();

    const dispatch = useDispatch()

    const alert = useSelector(state => state.app.alert)

    const [state, setState] = useState({
        title: '',
        body: ''
    })

    const submitHandler = event => {
        event.preventDefault()

        const {title, body} = state

        if (!state.title.trim()) {
            return dispatch(showAlert('Название товара не может быть пустым'))
        }

        if(location.pathname === "/create") {
            const newPost = {
                title, body, id: Date.now().toString()
            }
            dispatch(createPost(newPost));
            history.push("/");
        } else {
            const changePost = {
                title, body, id
            }
            dispatch(editPost(changePost));
            history.push("/");
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
                    {location.pathname === "/create" ? "Добавить товар" : "Редактировать товар "}
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
                    <Form.Label>В какой склад сохранить?</Form.Label>
                    <Form.Control
                        as="select"
                        placeholder="Выберите название склада"
                    >
                        <option>Склад 1</option>
                        <option>Склад 2</option>
                        <option>Общий склад</option>
                    </Form.Control>
                </Form.Group>
                <div>
                    <Button
                        className="mt-1 mr-1"
                        variant="success"
                        type="submit"
                        onClick={submitHandler}
                    >
                        {location.pathname === "/create" ? "Добавить" : "Сохранить"}
                    </Button>
                    <Button
                        className="mt-1 mr-1"
                        variant="primary"
                        type="submit"
                        onClick={() => history.push('/')}
                    >
                        Назад
                    </Button>
                </div>
            </Form>
        );
}

export default PostForm;