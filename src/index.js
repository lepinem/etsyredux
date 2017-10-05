import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './styles/index.css';
import App from './containers/App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';


const application = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(application, document.getElementById('root'));
registerServiceWorker();
