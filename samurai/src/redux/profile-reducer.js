const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let id = state.posts[state.posts.length - 1].id
            let newPost = {
                id: id + 1,
                title: state.newPostValue,
                likesCount: 0,
            }
            state.newPostValue = ''
            state.posts.push(newPost)
            return state
        case UPDATE_NEW_POST_VALUE:
            state.newPostValue = action.value
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostValueActionCreator = (newPost) => {
    return {
        type: UPDATE_NEW_POST_VALUE,
        value: newPost.current.value,
    }
}

export default profileReducer
