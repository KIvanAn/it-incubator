import classes from './Dialogs.module.css'
import DialogsItem from './dialogsitem/DialogsItem'
import Message from './message/Message'
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, minLengthCreator, requiredField} from '../../utils/validators'
import {TextArea} from '../common/formControls/FormControls'

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map((dialog) => <DialogsItem id={dialog.id} name={dialog.name}
                                                                                   key={dialog.id}/>)
    const messagesElements = props.dialogsPage.messages.map((message) => <Message id={message.id}
                                                                                  message={message.message}
                                                                                  key={message.id}/>)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }

    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsItems}>
                {dialogsElements}
            </ul>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength30 = maxLengthCreator(30)
const minLength2 = minLengthCreator(2)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={'newMessageText'} validate={[requiredField, maxLength30, minLength2]} placeholder={'Enter your message'} />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs
