import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NavbarShop from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./pages/Main";

function App() {

    return (
        <BrowserRouter>
            <NavbarShop/>
            <div className="container pt-4">
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/main'} exact component={Main}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;