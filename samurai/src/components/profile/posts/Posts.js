import React from 'react'
import Post from './post/Post'
import classes from './Posts.module.css'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, minLengthCreator, requiredField} from '../../../utils/validators'
import {TextArea} from '../../common/formControls/FormControls'

const Posts = (props) => {
    const postsElements = props.posts.map((post) => <Post id={post.id} title={post.title}
                                                             likesCount={post.likesCount}
                                                             key={post.id}/>)
    let addNewPost = (values) => {
        props.addPost(values.newPost)
    }

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={classes.allPosts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)
const minLength2 = minLengthCreator(2)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Post message'} component={TextArea} name={'newPost'} validate={[requiredField, maxLength10, minLength2]}/>
            </div>
            <button>Add post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm)

export default Posts
