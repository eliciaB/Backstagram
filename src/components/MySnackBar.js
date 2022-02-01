import React from 'react';
import { Snackbar, IconButton, Button } from '@material-ui/core'

const MySnackBar = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        setOpen(false);
    };

    React.useEffect(()=> {
        if (props.message !=="passmessage") {
            setOpen(true)
        }
    }, [props.message])

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                x
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={props.message}
                action={action}
            />
        </div>
    );

};

export default MySnackBar;
