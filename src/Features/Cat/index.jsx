import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom'


import mainCat from './Components/mainCat';

import editCat from './Components/editCat';
import addCat from './Components/addCat';

import NotFound from './../../Components/NotFound/index'

export default function Cat(props) {

    const match = useRouteMatch();
    console.log('/cat');
    return (
        <div>
            <Switch>
                <Route exact path={match.url} component={mainCat} />
                <Route exact path={`${match.url}/add`} component={addCat} />
                <Route exact path={`${match.url}/:catId`} component={editCat} />

                <Route path={'*'} component={NotFound} />
            </Switch>
        </div>
    );
}

