import Post from './post/Post'
import classes from './Posts.module.css'

const Posts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div>
				<Post title="Post 1" likesCount="20" />
				<Post title="Post 2" likesCount="40" />
				<Post title="Post 3" likesCount="100" />
				<Post title="Post 4" likesCount="12" />
			</div>
		</div>
	)
}

export default Posts
