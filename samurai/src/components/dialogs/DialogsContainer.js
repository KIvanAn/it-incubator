import React from 'react'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    let state = props.store.getState()
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (<Dialogs dialogsPage={state.dialogsPage} newMessageText={state.dialogsPage.newMessageText}
                     sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}/>)
}

export default DialogsContainer
