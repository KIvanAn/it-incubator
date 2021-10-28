import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from "./sidebar-reducer";

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
            newMessageText: '',
        },
        sidebar: {},
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store