const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let id = state.messages[state.messages.length - 1].id
            let newMessage = {
                id: id + 1,
                message: action.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer
