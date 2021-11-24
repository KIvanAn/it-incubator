import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://w7.pngwing.com/pngs/458/250/png-transparent-drawing-s-logo-animation-symbol.png"
                 alt="logo"/>
            <div className={classes.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                    <NavLink to={`/login`}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header
