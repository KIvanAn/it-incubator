import classes from './Post.module.css'

const Post = (props) => {
	return (
		<div className={classes.item}>
			<img src="https://narcosis-css.ru/800/600/https/www.vippng.com/png/detail/136-1363194_avatar-png-neytiri-png.png" className={classes.avatar} />
			<a href="#">
				{props.title}
			</a>
			<div>Like <span>{props.likesCount}</span></div>
		</div>
	)
}

export default Post