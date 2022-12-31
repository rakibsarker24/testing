import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducer';
import { Provider } from 'react-redux'; // j data gula bitoron korbe
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root')
);


