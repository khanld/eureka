import React from 'react'
import classes from './PosterInteraction.module.css'

const PosterInteraction = (props) => (
    <div className={props.title ? classes.MovieContent : classes.PosterInteraction}>
        {props.title ? <h3>{props.title}</h3> : <h5>{props.name}</h5>}
        <div className={classes.Icon}>
            <span>
                <i className={["fa", "fa-heart"].join(' ')} ></i>
                <span>{props.loved}</span>
            </span>
            <span>
                <i className="fa fa-user" aria-hidden="true"></i>
                <span>{props.watched}</span>
            </span>
            <span>
                <i className={["fa", "fa-bell-o"].join(' ')} style={{ color: "rgb(165, 108, 3)" }}></i>
            </span>
        </div>
        <p>{props.content}</p>
        {props.check ?  <div>
            <p><strong>Name: </strong> {"Phương Ly Idol"} </p>
            <p><strong>Place: </strong> {"Hội An"} </p>
            <p><strong>Upload date: </strong> {props.date}</p>
            <p><strong>Public key: </strong> {props.pubKey}</p>
        </div> : null
        }
        
    </div>
)

export default PosterInteraction