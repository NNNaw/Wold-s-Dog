

import React, { Suspense } from 'react';
// import {Router} from "react-router";

import {
  BrowserRouter as Router,
  Route, Switch, Redirect, Link
} from 'react-router-dom'


import NotFound from './Components/NotFound/index'
import Cat from './Features/Cat/index'


const Dog = React.lazy(() => import('./Features/Dog'))



function App() {
  return (

    <div className='div_app'>
     
      <Suspense fallback={<div> Loading ... </div>}>
        {/* <Router history={history}> */}

        <Router>

          <ul>
            <li> <Link to="/dogs">Dog</Link></li>
            <li> <Link to="/dogs/add">Add Dog</Link></li>
            <li> <Link to="/dogs/123">Detail Dog</Link></li>
            <li> <Link to="/cat">Cat</Link></li>

          </ul>

          <Switch>

            <Redirect exact from='/' to='/dogs' />

            <Route path='/dogs' component={Dog} />

            <Route path='/cat' component={Cat} />

            <Route path='*' component={NotFound} />

          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
