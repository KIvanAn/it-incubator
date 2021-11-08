import preloader from '../../../assets/images/preloader.gif'
import React from 'react'
import classes from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img src={preloader} alt='preloader'/>
        </div>
    )
}

export default Preloader