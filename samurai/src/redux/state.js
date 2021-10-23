let renderDom = () => {
    console.log('Changed')
}

let state = {
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
}

export const addPost = () => {
    let id = state.profilePage.posts[state.profilePage.posts.length - 1].id
    let newPost = {
        id: id + 1,
        title: state.profilePage.newPostValue,
        likesCount: 0,
    }

    state.profilePage.newPostValue = ''
    state.profilePage.posts.push(newPost)

    renderDom(state)
}

export const updateNewPostValue = (value) => {
    state.profilePage.newPostValue = value

    renderDom(state)
}

export const subscrube = (observer) => {
    renderDom = observer
}

export default state