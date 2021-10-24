import React from 'react'
import Post from './post/Post'
import classes from './Posts.module.css'
// import {updateNewPostValue} from "../../../redux/state";

const Posts = (props) => {
    const postsElements = props.posts.map((post, i) => <Post id={post.id} title={post.title}
                                                             likesCount={post.likesCount}
                                                             key={i}/>)
    let newPost = React.createRef()
    let addPost = () => {
        props.addPost()
    }

    let updateNewPostValue = () => {
        props.updateNewPostValue(newPost.current.value)
    }

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPost} onChange={updateNewPostValue} value={props.newPostValue}/>
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
