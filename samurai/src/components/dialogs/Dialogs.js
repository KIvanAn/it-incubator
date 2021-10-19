import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    const link = `/dialogs/${props.id}`
    return (
        <li className={classes.dialog + ' ' + classes.active}>
            <NavLink to={link}>{props.name}</NavLink>
        </li>
    )
}

const Message = (props) => {
    return (
        <div id={props.id} className={classes.message}>
            {props.message}
        </div>
    )
}

const dialogs = [
    {id: 1, name: 'Jhon'},
    {id: 2, name: 'Huan'},
    {id: 3, name: 'Bob'},
]

const messages = [
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
]

const dialogsElements = dialogs.map((dialog, i) => <DialogsItem id={dialog.id} name={dialog.name} key={i}/>)
const messagesElements = messages.map((message, i) => <Message id={message.id} message={message.message} key={i}/>)

const Dialogs = () => {
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
