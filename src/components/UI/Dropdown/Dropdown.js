import React from 'react'
import classes from './Dropdown.module.css'

const Dropdown = (props) => {
    return (
        <React.Fragment>
            <div className={classes.dropdown}>
                <button className={classes.dropbtn}>Dropdown</button>
                <div className={classes.dropdownContent}>
                    {props.titles.map(title => ( 
                        <a href="#">{title}</a>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dropdown