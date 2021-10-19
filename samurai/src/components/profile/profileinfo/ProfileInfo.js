import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1634325232058-e7b8f80cc20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="banner"/>
            </div>
            <div>
                <img src="https://pbs.twimg.com/media/E83TZzNWYAEFE9C.jpg" alt="subbaner"/>
                <div className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorem laudantium maxime placeat
                    quasi quis rerum unde! Doloremque, incidunt nemo.
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
