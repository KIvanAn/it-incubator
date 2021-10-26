const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, title: 'Post 1', likesCount: 20},
                {id: 2, title: 'Post 2', likesCount: 309},
                {id: 3, title: 'Post 3', likesCount: 204},
                {id: 4, title: 'Post 4', likesCount: 2000},
            ],
            newPostValue: 'it-kamasutra',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Jhon'},
                {id: 2, name: 'Huan'},
                {id: 3, name: 'Bob'},
            ],
            messages: [
                {
                    id: 1,
                    message: 'Jhon Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                },
                {
                    id: 2,
                    message: 'Huan Lorem Ipsum is simply dummy text of.',
                },
                {
                    id: 3,
                    message: 'Bob Lorem Ipsum is simply dummy text of the printing and typesetting.',
                },
            ],
        },
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscrube(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let id = this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id
            let newPost = {
                id: id + 1,
                title: this._state.profilePage.newPostValue,
                likesCount: 0,
            }

            this._state.profilePage.newPostValue = ''
            this._state.profilePage.posts.push(newPost)

            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_VALUE) {
            this._state.profilePage.newPostValue = action.value
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostValueActionCreator = (newPost) => {
    return {
        type: UPDATE_NEW_POST_VALUE,
        value: newPost.current.value,
    }
}

export default store