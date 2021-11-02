import classes from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.getUsers([{
            id: 1,
            photoUrl: 'https://dailystars.net/wp-content/uploads/2019/01/Ivan-Urgant.jpg',
            followed: true,
            fullName: 'Ivan',
            status: 'I am a programmer',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: 2,
                photoUrl: 'https://fb.ru/misc/i/gallery/47188/2154160.jpg',
                followed: false,
                fullName: 'Sveta',
                status: 'I am a doctor',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: 'https://yt3.ggpht.com/ytc/AAUvwnj6wSuUKUHWPHOAs9OXx2e4MLQxa5tV_7FeDNtR=s900-c-k-c0x00ffffff-no-rj',
                followed: true,
                fullName: 'Arsen',
                status: 'I am a fighter',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: 'https://pbs.twimg.com/media/Edy5ySKXkAEnqRY.jpg',
                followed: true,
                fullName: 'Victoria',
                status: 'I am a teacher',
                location: {city: 'New-york', country: 'USA'}
            },
            {
                id: 5,
                photoUrl: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/0482ae84409495.Y3JvcCw4NjIsNjc1LDE2OCww.jpg',
                followed: false,
                fullName: 'Jhon',
                status: 'I am a footballer',
                location: {city: 'Los-Angeles', country: 'USA'}
            },])
    }
    return (
        <div>
            {props.users.map(user => {
                return (
                    <div key={user.id} className={classes.user}>
                        <div>
                            <div className={classes.avatar}>
                                <img src={user.photoUrl} alt="avatar"/>
                            </div>
                            <div>
                                {
                                    !user.followed ?
                                        <button onClick={() => props.follow(user.id)}>Follow</button> :
                                        <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </div>
                            <div>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users
