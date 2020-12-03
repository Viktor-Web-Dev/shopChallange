import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from "react-redux";

import Home from './pages/Home';
import NavbarShop from './components/Navbar';
import Main from "./pages/Main";
import PostForm from "./components/PostForm";

import 'bootstrap/dist/css/bootstrap.min.css';
import SetLocalStorage from "./helpers/localStorage";


function App(props) {

    useEffect(() => {
        const initialStateWarehouses = [{
            title: 'Склад 1',
            body: 'Склад продукции',
            id: 1,
            posts: [
                {
                    id: 1,
                    title: 'Водка белочка',
                    body: 'Водка',
                    value: 5
                }, {
                    id: 2,
                    title: 'Джин WhiteLace',
                    body: 'Джин',
                    value: 10
                }
            ]
        }, {
            title: 'Склад 2',
            body: 'Склад алкогольной продукции',
            id: 2,
            posts: [
                {
                    id: 1,
                    title: 'Водка белочка',
                    body: 'Водка',
                    value: 10
                }, {
                    id: 2,
                    title: 'Джин WhiteLace',
                    body: 'Джин',
                    value: 20
                }, {
                    id: 3,
                    title: 'Коньяк старейшина',
                    body: 'Коньяк',
                    value: 6
                },
            ]
        }, {
            title: 'Общий склад',
            body: 'Склад смешенной продукции',
            id: 3,
            posts: [
                {
                    id: 4,
                    title: 'Чипсы Lays',
                    body: 'Чипсы',
                    value: 14
                }, {
                    id: 3,
                    title: 'Коньяк старейшина',
                    body: 'Коньяк',
                    value: 3
                }, {
                    id: 1,
                    title: 'Водка белочка',
                    body: 'Водка',
                    value: 30
                },
            ]
        }]

        const initialStatePosts = [{
            title: 'Водка белочка',
            body: 'Водка',
            id: 1
        }, {
            title: 'Джин WhiteLace',
            body: 'Джин',
            id: 2
        }, {
            title: 'Коньяк старейшина',
            body: 'Коньяк',
            id: 3
        }, {
            title: 'Чипсы Lays',
            body: 'Чипсы',
            id: 4
        }]
        if(!localStorage.getItem('warehouse') || JSON.parse(localStorage.getItem('warehouse')).length < 1){
            localStorage.setItem('warehouse', JSON.stringify(initialStateWarehouses))
            props.setWarehouses(initialStateWarehouses)
        }
        if(!localStorage.getItem('post') || JSON.parse(localStorage.getItem('post')).length < 1){
            localStorage.setItem('post', JSON.stringify(initialStatePosts))
            props.setPosts(initialStatePosts)
        }
    }, [])

    return (
        <BrowserRouter>
            <NavbarShop/>
            <SetLocalStorage/>
            <div className="container pt-4">
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/main'} exact component={Main}/>
                    <Route path={'/create'} exact component={PostForm}/>
                    <Route path={'/edit/:id'} exact component={PostForm}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        setWarehouses: (payload) => {
            dispatch({type: 'ALL_WAREHOUSES', payload})
        },
        setPosts: (payload) => {
            dispatch({type: 'ALL_POSTS', payload})
        }
    }
}

export default connect(null, mapDispatchToProps)(App);