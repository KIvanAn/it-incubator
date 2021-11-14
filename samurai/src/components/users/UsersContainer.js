import {connect} from 'react-redux'
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    unfollow, toggleIsFollowing
} from '../../redux/users-reducer'
import React from 'react'
import Users from './Users'
import Preloader from '../common/preloader/Preloader'
import {usersAPI} from '../../api/api'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.getUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onClickPagination = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.getUsers(data.items)
        })
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
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleIsFollowing={this.props.toggleIsFollowing}
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
    getUsers,
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowing,
})(UsersContainer)
