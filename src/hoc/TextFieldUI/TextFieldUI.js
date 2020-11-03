import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const BasicTextFields = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off" ref={ref}>
      <TextField id="outlined-basic" label={props.label} variant="outlined" value={props.value} onChange={props.onChangeHandler} />
    </form>
  );
})

export default BasicTextFields