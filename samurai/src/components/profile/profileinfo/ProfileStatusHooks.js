import React, {useEffect, useState} from 'react'
import classes from './ProfileStatus.module.css'

const ProfileStatusHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    function onInputStatus() {
        setEditMode(true)
    }

    function onChangeStatus (e) {
        setStatus(e.target.value)
    }
    function updateStatus() {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    return (
        <div className={classes.status}>
            {/*{*/}
            {/*    this.state.editMode*/}
            {/*        ? <div><input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.setStatus}*/}
            {/*                      value={this.state.status}/></div>*/}
            {/*        : <div><span onDoubleClick={this.onInputStatus}>{this.props.status || 'No status'}</span></div>*/}
            {/*}*/}
            {
                editMode
                    ? <div><input
                        onChange={onChangeStatus}
                        autoFocus={true} onBlur={updateStatus}
                        value={status}/></div>
                    : <div><span onDoubleClick={onInputStatus}>{props.status || 'No status'}</span></div>
            }
        </div>
    )

}

export default ProfileStatusHooks
