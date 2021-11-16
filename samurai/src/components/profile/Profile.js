import ProfileInfo from './profileinfo/ProfileInfo'
import PostsContainer from './posts/PostsContainer'
import {Redirect} from 'react-router-dom'
import React from 'react'
// import classes from './Profile.module.css'

const Profile = (props) => {
    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile
