import React from 'react'
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    changeStatus = () => {
        this.setState({editMode: true,})
    }

    setStatus = () => {
        this.setState({editMode: false,})
    }

    render() {
        return (
            <div className={classes.status}>
                {
                    this.state.editMode
                        ? <div><input autoFocus={true} onBlur={this.setStatus} value={this.props.status}/></div>
                        : <div><span onDoubleClick={this.changeStatus}>{this.props.status}</span></div>
                }
            </div>
        )
    }
}

export default ProfileStatus
