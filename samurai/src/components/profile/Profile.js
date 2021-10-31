import ProfileInfo from "./profileinfo/ProfileInfo"
import PostsContainer from "./posts/PostsContainer";
// import classes from './Profile.module.css'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsContainer store={props.store}/>
        </div>
    )
}

export default Profile
