import React from 'react'
import {Route} from 'react-router'
import {Switch, Router} from 'react-router-dom'

import Homepage from './components/Homepage/homepage'
import RegisterAccount from './components/RegisterAccount/registerAccount'
import BookSales from './components/BookSales/bookSales'
import Login from './components/Auth/login'
import Signup from './components/Auth/signup'

const PublicRoutes = ({ history }) => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path={'/'} component={Homepage}/>
                    <Route path={'/login'} component={Login} />
                    <Route path={'/signup'} component={Signup} />
                    <Route path={'/registerAccount'} component={RegisterAccount} />
                    <Route path={'/bookSales'} component={BookSales} />
                </Switch>
            </div>
        </Router>
    )
};

export default PublicRoutes