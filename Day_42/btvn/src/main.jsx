import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/index.js'
import {Provider} from 'react-redux';

// Render ứng dụng
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);