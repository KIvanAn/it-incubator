import Post from './post/Post'
import classes from './Posts.module.css'

const Posts = (props) => {
    const postsElements = props.posts.map((post, i) => <Post id={post.id} title={post.title}
                                                             likesCount={post.likesCount}
                                                             key={i}/>)

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={classes.allPosts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts
