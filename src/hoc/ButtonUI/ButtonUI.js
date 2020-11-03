import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function IconLabelButtons(props) {
    const classes = useStyles();

    return (
        <Button
            variant={props.variant}
            color={props.color}
            className={classes.button}
            endIcon={props.icon}
            onClick={props.onClickHandler}
            size={props.size}

        >
            {props.children}
        </Button>
    );
}