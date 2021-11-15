import {connect} from 'react-redux'
import {followUser, unfollowUser, getUsers} from '../../redux/users-reducer'
import React from 'react'
import Users from './Users'
import Preloader from '../common/preloader/Preloader'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onClickPagination = (page) => {
        this.props.getUsers(page, this.props.pageSize)
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

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
    }
}

export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    getUsers,
})(UsersContainer)
