import './index.css';
import reportWebVitals from './reportWebVitals'
import store from './redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'

let renderDom = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderDom()

store.subscribe(() => renderDom())

reportWebVitals();
