import Preloader from '../../common/preloader/Preloader'
import userNoPhoto from '../../../assets/images/nophoto-user-image.png'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : userNoPhoto} alt={'avatar'}/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo
