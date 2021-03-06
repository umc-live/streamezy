import React from 'react';
import history from '../history';
import {Router, Route, Switch} from 'react-router-dom'
import {StreamList, StreamCreate, StreamEdit, StreamDelete, StreamShow} from './streams';
import Header from './Header';
import './assets/css/App.css';
export default () =>{
    return (
            <Router history={history}>
                <>
                    <Header/>
                    <div className='App'>
                        <Switch>
                            <Route path='/' exact component={StreamList}/>
                            <Route path='/stream/new' exact component={StreamCreate}/>
                            <Route path='/stream/edit/:id' exact component={StreamEdit}/>
                            <Route path='/stream/delete/:id' exact component={StreamDelete}/>
                            <Route path='/stream/:id' exact component={StreamShow}/>
                        </Switch>
                    </div>
                </> 
            </Router>
    )
}