import './App.css'
import Navbar from './components/navbar/Navbar'
import News from './components/news/News'
import Music from './components/music/Music'
import Settings from './components/settings/Settings'
import DialogsContainer from './components/dialogs/DialogsContainer'
import ProfileContainer from './components/profile/ProfileContainer'
import UsersContainer from './components/users/UsersContainer'
import HeaderContainer from './components/header/HeaderContainer'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/login/Login'

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" component={UsersContainer}/>
                    <Route path="/login" component={Login}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
