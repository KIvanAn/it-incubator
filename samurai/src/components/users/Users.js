import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import userNoPhoto from '../../assets/images/nophoto-user-image.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.getUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
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
