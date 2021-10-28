const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.value
            return state
        case SEND_MESSAGE:
            let id = state.messages[state.messages.length - 1].id
            let newMessage = {
                id: id + 1,
                message: state.newMessageText,
            }
            state.newMessageText = ''
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator = (newMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        value: newMessage,
    }
}

export default dialogsReducer
