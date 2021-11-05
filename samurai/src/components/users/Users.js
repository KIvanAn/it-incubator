import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import userNoPhoto from '../../assets/images/nophoto-user-image.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.getUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onClickPagination = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.getUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={classes.pagination}>
                    {
                        pages.map(page => <span
                            className={this.props.currentPage === page ? classes.selectedPage : undefined}
                            onClick={(e) => this.onClickPagination(page)}
                            key={page}>{page}</span>)
                    }
                </div>
                {this.props.users.map(user => {
                    return (
                        <div key={user.id} className={classes.user}>
                            <div>
                                <div className={classes.avatar}>
                                    <img src={user.photos.small != null ? user.photos.small : userNoPhoto}
                                         alt="avatar"/>
                                </div>
                                <div>
                                    {
                                        !user.followed ?
                                            <button onClick={() => this.props.follow(user.id)}>Follow</button> :
                                            <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                    }
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </div>
                                <div>
                                    {/*<div>{user.location.country}</div>*/}
                                    {/*<div>{user.location.city}</div>*/}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users
