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

const dialogItems = [
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

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsItems}>
                {dialogItems.map((el, i) => <DialogsItem id={el.id} name={el.name} key={i}/>)}
            </ul>
            <div className={classes.messages}>
                {messages.map((el, i) => <Message id={el.id} message={el.message} key={i}/>)}
            </div>
        </div>
    )
}

export default Dialogs
