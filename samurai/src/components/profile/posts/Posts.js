import Post from './post/Post'
import classes from './Posts.module.css'

const Posts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<buuton>Add post</buuton>
			</div>
			<div>
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	)
}

export default Posts
