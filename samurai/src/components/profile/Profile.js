import Posts from './posts/Posts'
import ProfileInfo from "./profileinfo/ProfileInfo"
// import classes from './Profile.module.css'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.state.posts} newPostValue={props.state.newPostValue}
                   updateNewPostValue={props.updateNewPostValue} addPost={props.addPost}/>
        </div>
    )
}

export default Profile
