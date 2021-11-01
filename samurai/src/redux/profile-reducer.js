const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE'

let initialState = {
    posts: [
        {id: 1, title: 'Post 1', likesCount: 20},
        {id: 2, title: 'Post 2', likesCount: 309},
        {id: 3, title: 'Post 3', likesCount: 204},
        {id: 4, title: 'Post 4', likesCount: 2000},
    ],
    newPostValue: 'it-kamasutra',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let id = state.posts[state.posts.length - 1].id
            let newPost = {
                id: id + 1,
                title: state.newPostValue,
                likesCount: 0,
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostValue = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_VALUE: {
            let stateCopy = {...state}
            stateCopy.newPostValue = action.value
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostValueActionCreator = (newPost) => {
    return {
        type: UPDATE_NEW_POST_VALUE,
        value: newPost,
    }
}

export default profileReducer
