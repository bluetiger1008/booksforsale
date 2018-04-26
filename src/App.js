import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store, history } from './redux/store'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope'
import faEdit from '@fortawesome/fontawesome-free-regular/faEdit'
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'
import faFlag from '@fortawesome/fontawesome-free-solid/faFlag'

import PublicRoutes from './router';
import 'antd/dist/antd.css'
import './App.css'

fontawesome.library.add(brands, faCheckSquare, faCoffee, faEdit, faEnvelope, faHeart, faCheck, faFlag)

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Provider store={store}>
	        <PublicRoutes history={history} />
	      </Provider>
      </div>
    );
  }
}

export default App;
