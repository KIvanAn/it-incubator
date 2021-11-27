import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import News from './components/news/News'
import Music from './components/music/Music'
import Settings from './components/settings/Settings'
import DialogsContainer from './components/dialogs/DialogsContainer'
import ProfileContainer from './components/profile/ProfileContainer'
import UsersContainer from './components/users/UsersContainer'
import HeaderContainer from './components/header/HeaderContainer'
import {Route, withRouter} from 'react-router-dom'
import Login from './components/login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/preloader/Preloader'

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
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
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp,}),
)(App)
