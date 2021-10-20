import {NavLink} from "react-router-dom";
import classes from './DialogsItem.module.css'

const DialogsItem = (props) => {
    const link = `/dialogs/${props.id}`
    return (
        <li className={classes.dialog + ' ' + classes.active}>
            <NavLink to={link}>{props.name}</NavLink>
        </li>
    )
}

export default DialogsItem
