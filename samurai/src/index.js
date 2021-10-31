import './index.css';
import reportWebVitals from './reportWebVitals'
import store from './redux/redux-store'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let renderDom = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderDom(store.getState())

store.subscribe(() => renderDom(store.getState()))

reportWebVitals();
