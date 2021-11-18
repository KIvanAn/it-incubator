import React from 'react'
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    onInputStatus = () => {
        this.setState({editMode: true,})
    }

    onChangeStatus = (e) => {
        this.setState({status: e.target.value,})
    }

    setStatus = () => {
        this.setState({editMode: false,})
        this.props.updateUserStatus(this.state.status)
    }

    render() {
        return (
            <div className={classes.status}>
                {
                    this.state.editMode
                        ? <div><input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.setStatus}
                                      value={this.state.status}/></div>
                        : <div><span onDoubleClick={this.onInputStatus}>{this.props.status || 'No status'}</span></div>
                }
            </div>
        )
    }
}

export default ProfileStatus
