import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header/Header';
import List from './components/list/List';
import Add from './components/add/Add';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <BrowserRouter>
            <div>

                <Header></Header>

                <Switch>
                    <Route path="/" component={List} exact />
                    <Route path="/ajout" component={Add} exact />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);