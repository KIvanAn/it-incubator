import {connect} from 'react-redux'
import {followAC, getUsersAC, unfollowAC} from '../../redux/users-reducer'
import Users from './Users'

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
