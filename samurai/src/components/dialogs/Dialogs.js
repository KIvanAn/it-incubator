import classes from './Dialogs.module.css'
import DialogsItem from './dialogsitem/DialogsItem'
import Message from './message/Message'
import React from 'react'
import {Redirect} from 'react-router-dom'

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map((dialog) => <DialogsItem id={dialog.id} name={dialog.name}
                                                                                      key={dialog.id}/>)
    const messagesElements = props.dialogsPage.messages.map((message) => <Message id={message.id}
                                                                                     message={message.message}
                                                                                     key={message.id}/>)

    let sendMessage = () => {
        props.sendMessage()
    }

    let updateNewMessageText = (e) => {
        props.updateNewMessageText(e.target.value)
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'} />
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
                                  value={props.dialogsPage.newMessageText}></textarea>
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
