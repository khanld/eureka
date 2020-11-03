import React from 'react'

const Rate = (props) => {
    let arr = [];
    for (let i = 1; i <= Math.round(props.rating); i++) arr.push(<i className="fa fa-star" aria-hidden="true"></i>)
    for (let i = Math.round(props.rating); i < 5; i++) arr.push(<i className="fa fa-star-o" aria-hidden="true"></i>)
    return (
        <div className={props.style ? props.style : "ratings--"}>
            {arr.map(star => star)}
        </div>

    )
}

export default Rate