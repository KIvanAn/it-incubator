import classes from './Users.module.css'
import * as axios from 'axios'
import userNoPhoto from '../../assets/images/nophoto-user-image.png'

const Users = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.getUsers(response.data.items)
                })
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(user => {
                return (
                    <div key={user.id} className={classes.user}>
                        <div>
                            <div className={classes.avatar}>
                                <img src={user.photos.small != null ? user.photos.small : userNoPhoto} alt="avatar"/>
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

export default Users
