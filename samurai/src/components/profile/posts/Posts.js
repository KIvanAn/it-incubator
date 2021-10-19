import Post from './post/Post'
import classes from './Posts.module.css'

const postsData = [
    {id: 1, title: 'Post 1', likesCount: 20},
    {id: 2, title: 'Post 2', likesCount: 309},
    {id: 3, title: 'Post 3', likesCount: 204},
    {id: 4, title: 'Post 4', likesCount: 2000},
]

const Posts = () => {
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
                {postsData.map((el, i) => <Post id={el.id} title={el.title} likesCount={el.likesCount} key={i}/>)}
            </div>
        </div>
    )
}

export default Posts
