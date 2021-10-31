import React from 'react'
import {addPostActionCreator, updateNewPostValueActionCreator} from '../../../redux/profile-reducer'
import Posts from './Posts'

const PostsContainer = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let updateNewPostValue = (value) => {
        props.store.dispatch(updateNewPostValueActionCreator(value))
    }

    return (<Posts posts={state.profilePage.posts} newPostValue={state.profilePage.newPostValue}
                  updateNewPostValue={updateNewPostValue} addPost={addPost}/>)
}

export default PostsContainer
