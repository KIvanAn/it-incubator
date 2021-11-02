import {connect} from 'react-redux'
import Users from './Users'
import {followAC, getUsersAC, unfollowAC} from '../../redux/users-reducer'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (users) => dispatch(getUsersAC(users)),
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
