import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store, history } from './redux/store'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope'
import faEdit from '@fortawesome/fontawesome-free-regular/faEdit'
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart'
import { faMapMarkerAlt, faFlag, faCheck, faCalendar, faClock } from '@fortawesome/fontawesome-free-solid'

import PublicRoutes from './router';
import 'antd/dist/antd.css'
import './App.css'

fontawesome.library.add(brands, faEdit, faEnvelope, faHeart, faCheck, faFlag, faMapMarkerAlt)

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
