import classes from './Dialogs.module.css'
import DialogsItem from './dialogsitem/DialogsItem'
import Message from './message/Message'

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map((dialog, i) => <DialogsItem id={dialog.id} name={dialog.name} key={i}/>)
    const messagesElements = props.state.messages.map((message, i) => <Message id={message.id} message={message.message}
                                                                         key={i}/>)

    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsItems}>
                {dialogsElements}
            </ul>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs
