import classes from './Dialogs.module.css'
import DialogsItem from './dialogsitem/DialogsItem'
import Message from './message/Message'
import React from 'react'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/state'

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map((dialog, i) => <DialogsItem id={dialog.id} name={dialog.name}
                                                                                key={i}/>)
    const messagesElements = props.state.messages.map((message, i) => <Message id={message.id} message={message.message}
                                                                               key={i}/>)

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let updateNewMessageText = (e) => {
        props.dispatch(updateNewMessageTextActionCreator(e.target.value))
    }

    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsItems}>
                {dialogsElements}
            </ul>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={updateNewMessageText} placeholder="Enter your message"
                                  value={props.state.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
