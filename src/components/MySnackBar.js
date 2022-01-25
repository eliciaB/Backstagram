import React from 'react';
import { Snackbar, IconButton, Button } from '@material-ui/core'

const MySnackBar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
        </Button>
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
        <Button onClick={handleClick}>Open simple snackbar</Button>
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Note archived"
            action={action}
        />
        </div>
    );

};

export default MySnackBar;
