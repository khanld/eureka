import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

export default function HalfRating(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{ alignItems: "center" }}>
            <p style={{ marginBottom: "0px", color: "gray" }}>{props.content}</p>
            { props.children}
        </div >
    );
}