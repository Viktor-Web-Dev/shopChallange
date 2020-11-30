import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NavbarShop from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./pages/Main";
import PostForm from "./components/PostForm";

function App() {

    return (
        <BrowserRouter>
            <NavbarShop/>
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

export default App;