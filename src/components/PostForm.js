import React from "react";
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

import {
    createPost,
    showAlert
} from "../redux/actions";

import {Alert} from "./Alert";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title, body} = this.state

        if (!title.trim()) {
            return this.props.showAlert('Название товара не может быть пустым')
        }

        const newPost = {
            title, body, id: Date.now().toString()
        }

        this.props.createPost(newPost)

        this.setState({title: '', body: ''})
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (
            <Form
                onSubmit={this.submitHandler} >
                {this.props.alert && <Alert text={this.props.alert}/>}
                <Form.Group>
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите название товара"
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание товара</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите описание товара"
                        id="body"
                        name="body"
                        value={this.state.body}
                        onChange={this.changeInputHandler}
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
                <Button
                    classname="mt-5 "
                    variant="success"
                    type="submit"
                >
                    Добавить
                </Button>
            </Form>
        );
    }
}

const mapDispatchToProps = {
    createPost,
    showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)