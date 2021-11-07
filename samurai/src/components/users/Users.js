import classes from './Users.module.css'
import userNoPhoto from '../../assets/images/nophoto-user-image.png'
import React from 'react'

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
                                <img src={user.photos.small != null ? user.photos.small : userNoPhoto}
                                     alt="avatar"/>
                            </div>
                            <div>
                                {
                                    !user.followed ?
                                        <button onClick={() => props.follow(user.id)}>Follow</button> :
                                        <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
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
