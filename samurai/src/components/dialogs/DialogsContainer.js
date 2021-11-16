import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text)),
        sendMessage: () => dispatch(sendMessageActionCreator()),
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer
