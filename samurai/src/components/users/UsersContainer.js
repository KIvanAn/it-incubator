import {connect} from 'react-redux'
import {followUser, requestUsers, unfollowUser} from '../../redux/users-reducer'
import React from 'react'
import Users from './Users'
import Preloader from '../common/preloader/Preloader'
import {compose} from 'redux'
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onClickPagination = (page) => {
        this.props.requestUsers(page, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onClickPagination={this.onClickPagination}
                    users={this.props.users}
                    follow={this.props.followUser}
                    unfollow={this.props.unfollowUser}
                    isFollowing={this.props.isFollowing}
                />
            </>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowing: state.usersPage.isFollowing,
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        followUser,
        unfollowUser,
        requestUsers,
    }),
)(UsersContainer)
