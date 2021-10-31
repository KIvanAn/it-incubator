import classes from './Dialogs.module.css'
import DialogsItem from './dialogsitem/DialogsItem'
import Message from './message/Message'
import React from 'react'

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map((dialog, i) => <DialogsItem id={dialog.id} name={dialog.name}
                                                                                      key={i}/>)
    const messagesElements = props.dialogsPage.messages.map((message, i) => <Message id={message.id}
                                                                                     message={message.message}
                                                                                     key={i}/>)

    let sendMessage = () => {
        props.sendMessage()
    }

    let updateNewMessageText = (e) => {
        props.updateNewMessageText(e.target.value)
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
                                  value={props.newMessageText}></textarea>
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
