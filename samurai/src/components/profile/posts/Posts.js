import React from 'react'
import Post from './post/Post'
import classes from './Posts.module.css'

const Posts = (props) => {
    const postsElements = props.posts.map((post) => <Post id={post.id} title={post.title}
                                                             likesCount={post.likesCount}
                                                             key={post.id}/>)
    let addPost = () => {
        props.addPost()
    }

    let updateNewPostValue = (e) => {
        props.updateNewPostValue(e.target.value)
    }

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={updateNewPostValue} value={props.newPostValue}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.allPosts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts
