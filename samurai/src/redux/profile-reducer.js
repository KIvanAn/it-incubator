import {profileAPI} from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

let initialState = {
    posts: [
        {id: 1, title: 'Post 1', likesCount: 20},
        {id: 2, title: 'Post 2', likesCount: 309},
        {id: 3, title: 'Post 3', likesCount: 204},
        {id: 4, title: 'Post 4', likesCount: 2000},
    ],
    newPostValue: 'it-kamasutra',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let id = state.posts[state.posts.length - 1].id
            let newPost = {
                id: id + 1,
                title: state.newPostValue,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostValue: ''
            }
        case UPDATE_NEW_POST_VALUE:
            return {...state, newPostValue: action.value}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
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

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export default profileReducer
