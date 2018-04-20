import React from 'react'
import {Route} from 'react-router'
import {Switch, HashRouter} from 'react-router-dom'

import Homepage from './components/Homepage/homepage'
import RegisterAccount from './components/RegisterAccount/registerAccount'
import Login from './components/Auth/login'
import Signup from './components/Auth/signup'

const PublicRoutes = () => {
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path={'/'} component={Homepage}/>
                    <Route path={'/login'} component={Login} />
                    <Route path={'/signup'} component={Signup} />
                    <Route path={'/registerAccount'} component={RegisterAccount}/>
                </Switch>
            </div>
        </HashRouter>
    )
};

export default PublicRoutes