import Posts from './posts/Posts'
import classes from './Profile.module.css'

const Profile = () => {
	return (
		<div className={classes.content}>
			<div>
				<img src="https://images.unsplash.com/photo-1634325232058-e7b8f80cc20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
			</div>
			<div>
				<img src="https://pbs.twimg.com/media/E83TZzNWYAEFE9C.jpg" />
				<div>description</div>
			</div>
			<Posts />
		</div>
	)
}

export default Profile
