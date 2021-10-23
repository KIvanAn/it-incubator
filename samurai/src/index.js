import './index.css';
import reportWebVitals from './reportWebVitals'
import state, {subscrube} from './redux/state'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {addPost, updateNewPostValue} from './redux/state'

let renderDom = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostValue={updateNewPostValue} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderDom(state)

subscrube(renderDom)

reportWebVitals();
