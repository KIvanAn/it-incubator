import classes from './Users.module.css'
import userNoPhoto from '../../assets/images/nophoto-user-image.png'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {usersAPI} from '../../api/api'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={classes.pagination}>
                {
                    pages.map(page => <span
                        className={props.currentPage === page ? classes.selectedPage : undefined}
                        onClick={(e) => props.onClickPagination(page)}
                        key={page}>{page}</span>)
                }
            </div>
            {props.users.map(user => {
                return (
                    <div key={user.id} className={classes.user}>
                        <div>
                            <div className={classes.avatar}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small != null ? user.photos.small : userNoPhoto}
                                         alt="avatar"/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    !user.followed ?
                                        <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                                            props.toggleIsFollowing(true, user.id)

                                            usersAPI.follow(user.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(user.id)
                                                }

                                                props.toggleIsFollowing(false, user.id)
                                            })
                                        }}>Follow</button> :
                                        <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                                            props.toggleIsFollowing(true, user.id)

                                            usersAPI.unfollow(user.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(user.id)
                                                }

                                                props.toggleIsFollowing(false, user.id)
                                            })
                                        }}>Unfollow</button>
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users
