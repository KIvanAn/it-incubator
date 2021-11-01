import {addPostActionCreator, updateNewPostValueActionCreator} from '../../../redux/profile-reducer'
import Posts from './Posts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostValue: state.profilePage.newPostValue,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostValue: (value) => dispatch(updateNewPostValueActionCreator(value)),
        addPost: () => dispatch(addPostActionCreator()),
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
