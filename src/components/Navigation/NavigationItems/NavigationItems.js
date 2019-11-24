import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

const NavigationItems = (props) => {
    let styles = [classes.NavigationItems]
    return (
        <ul className={styles.join(' ')}>
            <NavigationItem href='/' exact>Home</NavigationItem>
            <NavigationItem href='/jobs' exact>Jobs</NavigationItem>
            <NavigationItem href='/guide' exact>Guide</NavigationItem>
            <NavigationItem href='/courses' exact>Course</NavigationItem>
            <NavigationItem href='/playground' exact>Playground</NavigationItem>
            <NavigationItem href='/marketplace' exact>MarketPlace</NavigationItem>
        </ul>
    )
}

export default NavigationItems