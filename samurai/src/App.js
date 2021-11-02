import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import News from './components/news/News'
import Music from './components/music/Music'
import Settings from './components/settings/Settings'
import DialogsContainer from './components/dialogs/DialogsContainer'
import UsersContainer from './components/users/UsersContainer'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" component={UsersContainer}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
