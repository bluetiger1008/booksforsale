import React from 'react';
import {Route} from 'react-router';
import {Switch, HashRouter} from 'react-router-dom';

import Homepage from './components/Homepage/homepage';

const PublicRoutes = () => {
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path={'/'} component={Homepage}/>
                </Switch>
            </div>
        </HashRouter>
    )
};

export default PublicRoutes