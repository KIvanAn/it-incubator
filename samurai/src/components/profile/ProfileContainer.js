import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUserProfile} from '../../redux/profile-reducer'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ?? 2
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


const AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let WithUrlDataProfileContainer = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataProfileContainer)