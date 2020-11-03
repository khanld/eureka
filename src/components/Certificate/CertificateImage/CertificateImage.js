import React from 'react'

import classes from './CertificateImage.module.css'

const Certificate = (props) => {
    return (
        <div className={classes.Certificate} >
            <div>
                <img src={props.poster} alt="" style={{ maxWidth: "100%", height: "380px" }} />
            </div>

        </div>
    )
}

export default Certificate