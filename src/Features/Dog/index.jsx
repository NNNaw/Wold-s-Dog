

import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import MainDog from './pages/Main/MainDog';

import EditDog from './pages/AddEdit/EditDog'
import AddDog from './pages/AddEdit/AddDog'

import NotFound from './../../Components/NotFound/index'
import Vote from './pages/Vote/Vote';
import Favourite from './pages/Favourite/Favourite';


function Dogs(props) {

    const match = useRouteMatch();

    return (

        <Switch>
            <Route exact path={match.url} component={MainDog} />
            <Route exact path={`${match.url}/add`} component={AddDog} />

            <Route exact path={`${match.url}/votes`} component={Vote} />
            <Route exact path={`${match.url}/favourites`} component={Favourite} />

            <Route exact path={`${match.url}/edit/:dogId`} component={EditDog} />
            
            <Route path={'*'} component={NotFound} />
        </Switch>

    );
}

export default Dogs;