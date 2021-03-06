import ProfileInfo from './profileinfo/ProfileInfo'
import PostsContainer from './posts/PostsContainer'
import React from 'react'
// import classes from './Profile.module.css'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile
